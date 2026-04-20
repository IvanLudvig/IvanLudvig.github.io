---
layout: post
title:  "Hacking Google Random Number Generator (Part 2)"
date:   2026-04-20 12:00:00 +0100
categories: tech
image: /assets/img/google-rng/two-milk.png
---

<style>
    .shield-container {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 16px;
        margin-bottom: 16px;
    }
    .float-right-image {
        float: right;
        margin: 0 0 16px 16px;
        text-align: center;
        max-width: 260px;
    }
    .float-right-image img {
        width: 100%;
    }
    @media (max-width: 600px) {
        .float-right-image {
            float: none;
            max-width: 320px;
            margin: 0 auto 16px;
        }
    }
</style>

<div class="shield-container">
    <a
        href="https://github.com/IvanLudvig/google-rng-hack"
        target="_blank"
    >
        <img
            src="https://img.shields.io/badge/GitHub-24292f.svg?logo=github&style=flat-square"
            alt="GitHub"
        >
    </a>
</div>

> Confused? See [Part 1](/tech/google-random).

Remember that [time](/tech/google-random) when I cracked the Google random number generator? Rumour has it that it stopped working: I've been told that the code is slow, the numbers are wrong, it ruined someone's well-rehearsed party trick in front of their crush, bankrupted a small business selling "intricate magic boxes", caused a train delay and consequently a minor, albeit heated, diplomatic incident, among other things.

### Recap

The original method recovered the 128-bit xorshift state from consecutive `Math.random()` outputs by feeding a constraint system into Z3. Two things have since changed: how the internal state is converted to a double and the xorshift algorithm itself.

### Change 1: ToDouble

**Commit [`e0609ce6`](https://chromium.googlesource.com/v8/v8/+/e0609ce60acf)**:
> Make random ToDouble better distributed  
> Use division instead of bit magic plus subtraction to map the RNG integer state into the [0,1) double value range.

The old `ToDouble` produced floats in [0, 1) using "bit magic":

```cpp
static inline double ToDouble(uint64_t state0) {
    static const uint64_t kExponentBits = uint64_t{0x3FF0000000000000};
    uint64_t random = (state0 >> 12) | kExponentBits;
    return base::bit_cast<double>(random) - 1;
}
```

The new version replaces this with integer division. By the way, it's a great case to see the difference between `bit_cast` and `static_cast`:

```cpp
static inline double ToDouble(uint64_t random) {
    // Get a random [0,2**53) integer value (up to MAX_SAFE_INTEGER) by dropping
    // 11 bits of the state.
    double random_0_to_2_53 = static_cast<double>(random >> 11);
    // Map this to [0,1) by division with 2**53.
    constexpr double k2_53{static_cast<uint64_t>(1) << 53};
    return random_0_to_2_53 / k2_53;
}
```

In the Python code it's mirrored as:
```python
def to_double(random):
    return (random >> 11) / (1 << 53)
```

Right-shifting by 11 bits, instead of 12, gives us one extra bit of entropy, making it 53 bits total and a statistically better, more uniform distribution.

This changes how the bounds are set. Recall that the observed value `x` is produced by:
```js
x = Math.floor(Math.random() * (max - min + 1)) + min
```
So the 53-bit integer `r` satisfies:
```math
floor(r / 2^53 * (max - min + 1)) == x - min
```
`r` maps to `x` when it falls in the half-open interval `[lo, hi)`, where `lo = normalize(x) * 2^53` and `hi = normalize(x+1) * 2^53`. Since `r` is an integer, the inclusive bounds are `[ceil(lo), ceil(hi) - 1]`. Using `floor(lo)` would include a value that maps to `x - 1`, so `ceil(lo)` is used. Similarly, `ceil(hi) - 1` is used because `ceil(hi)` would map to `x + 1`. In the code:

```python
def normalize(val):
    return (val - min) / (max - min + 1)

def get_bounds(point):
    lo = normalize(point) * (1 << 53)
    hi = normalize(point + 1) * (1 << 53)
    return math.ceil(lo), math.ceil(hi) - 1
```

The nasty exponent edge-case check from the original, where `upper_exp == 1024`, disappears entirely.

### Change 2: xorshift128+ with a plus

**Commit [`0596ead5`](https://chromium.googlesource.com/v8/v8/+/0596ead5b04f)**:
> Resurrect add operation in xorshift128+ implementation  
> ... which was accidentally removed in https://crrev.com/c/1238551.

<center>
    <img src="/assets/img/google-rng/two-milk.png" style="max-width: 400px; width: 100%;" />
    <p class="image-label">For 7 years, the Korova milk bar served plain milk instead of milk plus</p>
</center>

This one is remarkable. Since 2018 `xorshift128+` wasn't actually what it claims. It was plain `xorshift128` without the plus. The 64-bit states weren't summed and only `state0` was used to fill the cache:
```cpp
// Old: void, return value discarded
static inline void XorShift128(uint64_t* state0, uint64_t* state1) {
    uint64_t s1 = *state0;
    uint64_t s0 = *state1;
    *state0 = s0;
    s1 ^= s1 << 23;
    s1 ^= s1 >> 17;
    s1 ^= s0;
    s1 ^= s0 >> 26;
    *state1 = s1;
}

XorShift128(&state.s0, &state.s1);
cache->set(i, ToDouble(state.s0));
```

After 7 years in production, this was fixed by returning the sum `s0 + s1`:
```cpp
// New: returns s0 + s1
static inline uint64_t XorShift128(uint64_t* state0, uint64_t* state1) {
    uint64_t s1 = *state0;
    uint64_t s0 = *state1;
    *state0 = s0;
    s1 ^= s1 << 23;
    s1 ^= s1 >> 17;
    s1 ^= s0;
    s1 ^= s0 >> 26;
    *state1 = s1;
    return s0 + s1;  // <-- this line was missing for 7 years
}

uint64_t random = XorShift128(&state.s0, &state.s1);
cache->set(i, ToDouble(random));
```

Now the output is `state0 + state1` so the constraints become:
```python
points = points[::-1]
for point in points:
    state0, state1 = xs128p(state0, state1)
    output = state0 + state1
    calc = z3.LShR(output, 11)

    lower, upper = get_bounds(point)
    solver.add(z3.And(lower <= calc, calc <= upper))
```
Both state variables are entangled in every constraint, which increases computation time.

In the prediction itself we also use the sum of the states:
```python
if solver.check() == z3.sat:
    model = solver.model()
    state = {}
    for d in model.decls():
        state[d.name()] = model[d]
    s0_val = state["state0"].as_long()
    s1_val = state["state1"].as_long()

    output = (s0_val + s1_val) & 0xFFFFFFFFFFFFFFFF
    next = math.floor(to_double(output) * (max - min + 1)) + min
    print(next)
```
Here, overflow _will_ happen during summation, so a 64-bit mask (`0xFFFFFFFFFFFFFFFF`) is applied to the output.

### The observer's paradox
<div class="float-right-image">
    <img src="/assets/img/google-rng/milk-sipping.png" />
    <p class="image-label">Someone's sipping my entropy</p>
</div>

For ease of collecting data, I logged generated points into the console and copied into my code. It worked. However, later, when I tested it again, but copied the numbers manually, the solver failed. I tried again with the data from the console: it worked. Although the numbers were the same, when I copied them manually from the widget, it failed. Weird.

Quantum computing? No, telemetry. The paradox was caused by a call to `Math.random()` triggered by an event listener on selection, attached to the whole document. It's connected to Google's telemetry and `Math.random()` is used to collect just 5% of the data.

Moreover, I've discovered that when using Chrome without a Google profile logged in, every click of the "Generate" button runs 2 extra calls of `Math.random()`. Similarly, some other clicks also trigger 2 calls. This is connected to telemetry too, which requires a 64-bit ID, generated by two halves consuming one call each.

Although it's possible to handle this case in the solver by adding extra runs of xorshift for every point without any constraints, I've decided not to do it, due to the unclear nature of these twisted calls and my general disdain for them. They are more unpredictable than the RNG itself. 

As a result, in my case, the solver works as-is in Google Chrome v147 with a Google profile without selecting anything on the page in between calls. Or more generally: for any sequence of consecutive `Math.random()` calls.

Perhaps the electron, too, behaves differently under observation because of all-encompassing telemetry calls.

Code: [https://github.com/IvanLudvig/google-rng-hack](https://github.com/IvanLudvig/google-rng-hack)
