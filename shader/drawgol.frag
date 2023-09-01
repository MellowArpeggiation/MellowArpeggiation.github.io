precision mediump float;

uniform sampler2D previousGolFrame;
uniform sampler2D previousDiffuseFrame;
uniform vec2 resolution;

void main() {
    vec2 uv = gl_FragCoord.xy / resolution;
    float prev = texture2D(previousGolFrame, uv).r;
    float value = texture2D(previousDiffuseFrame, uv).r;
    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);

    if (value > 0.8) { // Add
        color = vec4(1.0);
    } else if (value < 0.05) { // Clear
        color = vec4(0.0);
    }

    gl_FragColor = color;
}