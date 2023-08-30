precision mediump float;

uniform sampler2D wallMask;
uniform vec2 resolution;
uniform vec2 dimensions;

float rand(vec2 st) {
    return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123);
}

void main() {
    float scale = resolution.x / dimensions.x;

    vec2 agentPosition = vec2(rand(gl_FragCoord.xy), rand(gl_FragCoord.xy + 1000.0));
    float agentRotation = rand(gl_FragCoord.xy + 2000.0);

    for (float i = 1.0; i < 1000.0; i += 1.0) {
        if (texture2D(wallMask, agentPosition * scale).r < 0.5) break;
        agentPosition = vec2(rand(gl_FragCoord.xy + i), rand(gl_FragCoord.xy + i * 1000.0));
    }

    gl_FragColor = vec4(agentPosition, agentRotation, 1);
}