precision mediump float;

uniform sampler2D previousGolFrame;
uniform vec2 resolution;

void main() {
    vec2 pos = gl_FragCoord.xy / resolution;
    
    float neighbors = 0.0;
    float cell = texture2D(previousGolFrame, pos).r;

    for (float x = -1.0; x <= 1.0; x += 1.0) {
        for (float y = -1.0; y <= 1.0; y += 1.0) {
            vec2 offset = vec2(x, y) / resolution;
            neighbors += texture2D(previousGolFrame, pos + offset).r;
        }
    }

    vec4 color = vec4(0.0, 0.0, 0.0, 1.0);

    if (cell > 0.0) {
        if (neighbors >= 3.0 && neighbors <= 4.0) {
            color = vec4(1.0);
        }
    } else {
        if ((neighbors > 2.0 && neighbors < 4.0) || (neighbors > 5.0 && neighbors < 7.0)) {
            color = vec4(1.0);
        }
    }

    gl_FragColor = color;
}