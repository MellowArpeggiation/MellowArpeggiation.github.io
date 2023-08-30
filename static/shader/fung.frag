precision mediump float;

uniform sampler2D previousGolFrame;
uniform sampler2D previousDiffuseFrame;
uniform vec2 resolution;

uniform vec4 fromColor;
uniform vec4 toColor;

void main() {
    vec2 uv = gl_FragCoord.xy / resolution;
    float cell = texture2D(previousGolFrame, uv).r;
    float value = texture2D(previousDiffuseFrame, uv).r;

    vec4 color = mix(fromColor, toColor, value) * cell;

    gl_FragColor = color;
}