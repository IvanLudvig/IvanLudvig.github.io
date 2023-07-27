precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

vec3 palette(float t){
    vec3 a=vec3(.821,.328,.242);
    vec3 b=vec3(.659,.481,.896);
    vec3 c=vec3(.612,.34,.296);
    vec3 d=vec3(2.282,3.026,-.273);
    
    return a+b*cos(6.28318*(c*t+d));
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
        x = abs(sin(x * 4.)) / 2.;
        color += vec3(1.) * 0.01 / x;
        color += col * x;
    }

    gl_FragColor = vec4(color, 1.);
}

