precision mediump float;

uniform sampler2D previousDiffuseFrame;
uniform sampler2D wallMask;
uniform vec2 dimensions;

uniform float dt;
uniform float diffusionRate;
uniform float evaporationRate;

void main() {
    vec2 position = gl_FragCoord.xy / dimensions;
    vec4 color = texture2D(previousDiffuseFrame, position);
    float wall = texture2D(wallMask, position).r;

    if (wall > 0.5) {
        gl_FragColor = vec4(0.0);
        return;
    };

    float sum = color.r;
    float dx, dy;
    float ox = 1.0 / dimensions.x;
    float oy = 1.0 / dimensions.y;
    float total = position.y - oy * 3.0 < 0.0
        || texture2D(wallMask, position - vec2(0, oy)).r > 0.5
        || texture2D(wallMask, position - vec2(0, oy * 2.0)).r > 0.5
        || texture2D(wallMask, position - vec2(0, oy * 3.0)).r > 0.5
            ? 4.0
            : 6.0;
    
    dy = position.y + oy;
    if (dy < 1.0) {
        dx = position.x - ox;
        if (dx > 0.0) {
            sum += texture2D(previousDiffuseFrame, vec2(dx, dy)).r;
        }

        sum += texture2D(previousDiffuseFrame, vec2(position.x, dy)).r;

        dx = position.x + ox;
        if (dx < 1.0) {
            sum += texture2D(previousDiffuseFrame, vec2(dx, dy)).r;
        }
    }

    dx = position.x - ox;
    if (dx > 0.0) {
        sum += texture2D(previousDiffuseFrame, vec2(dx, position.y)).r;
    }

    dx = position.x + ox;
    if (dx < 1.0) {
        sum += texture2D(previousDiffuseFrame, vec2(dx, position.y)).r;
    }

    float blur = sum / total;

    float diffused = mix(color.r, blur, diffusionRate * dt);
    float evaporated = clamp(diffused - evaporationRate * dt, 0.0, 1.0);

    gl_FragColor = vec4(evaporated, 0, 0, 1);
}