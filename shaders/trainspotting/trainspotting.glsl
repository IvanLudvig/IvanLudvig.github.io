#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float random (float seed) {
    return fract(sin(dot(vec2(seed), vec2(12.9898,78.233))) * 43758.5453123);
}

const float PI = 3.14159265359;

void main() {
    vec2 uv = gl_FragCoord.xy / u_resolution.x;

    const float numLines = 8.;

    float minWidth = 0.001;
    float maxWidth = 0.04;

    vec3 color = vec3(0.);
    
    for (float i = 0.; i < numLines; i++) {
        float speed = 0.5 + 2. * random(i + 1.) * random(i + 2.);
        float period = 2. * PI / speed;
        float periods = u_time / period;

        float fullPeriods = floor(periods);
        float halfPeriods = floor(periods + 0.25);

        float offsetStart = -step(random(i + halfPeriods + 1.), 0.2);
        float offsetEnd = 0.5*step(random(i + fullPeriods + 3.), 0.2);
        float rangeStart = min(random(i + halfPeriods + 2.)*0.5 + 0.2 + offsetStart, 0.65);
        float rangeEnd = max(random(i + fullPeriods + 3.)*0.5 + 0.5 + offsetEnd, 0.75);

        float lineWidth = random(i + 6.) * random(i + 6.) * (maxWidth - minWidth) + minWidth;
        float lineStart = pow(sin(u_time * speed), 2.) * (rangeEnd - rangeStart) + rangeStart;
        float lineEnd = lineStart + lineWidth;
        float edge = 0.2*lineWidth;
        color += vec3(
            smoothstep(lineStart, lineStart + edge, uv.x)*
            smoothstep(uv.x, uv.x+edge, lineEnd)
        );
    }

    
    gl_FragColor=vec4(color,1.);
}
