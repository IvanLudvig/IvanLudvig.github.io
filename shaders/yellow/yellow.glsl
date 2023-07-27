precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

vec3 palette(float t) {
    vec3 a = vec3(1.118, 0.968, 0.068);
    vec3 b = vec3(0.602, 0.335, 1.078);
    vec3 c = vec3(4.455, 3.618, 3.138);
    vec3 d = vec3(3.617, 0.807, 3.417);

    return a + b * cos(6.28318 * (c * t + d));
}

void main() {
    vec2 uv = 2. * (gl_FragCoord.xy * 2. - u_resolution.xy) / u_resolution.y;
    vec2 uv0 = uv;
    vec3 color = vec3(0.);

    for (float i = 1.; i < 4.0; i++) {
        uv.x += sin(cos(uv.y) * uv.y);
        uv.y += cos(sin(uv.x) * uv.x);
        uv.x += sin(u_time * 0.2);
        uv.y += cos(u_time * 0.2);

        float len = length(uv);
        vec3 col = palette(len * 0.8);
        float x = length(sin(uv.x + cos(len)));
        x = abs(sin(x * 4.)) / 2.4;
        color += vec3(1.) * 0.006 / x;
        color += col * x;
    }

    gl_FragColor = vec4(color, 1.);
}
