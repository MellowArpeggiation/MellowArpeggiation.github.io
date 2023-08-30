precision mediump float;

uniform sampler2D previousDiffuseFrame;
uniform vec2 resolution;

void main() {
    gl_FragColor = texture2D(previousDiffuseFrame, gl_FragCoord.xy / resolution);
}