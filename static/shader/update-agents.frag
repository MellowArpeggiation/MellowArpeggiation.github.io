precision mediump float;
#define PI 3.1415926538
#define TAU 6.2831853072

uniform sampler2D previousAgentFrame;
uniform sampler2D previousDiffuseFrame;
uniform sampler2D wallMask;

uniform float time;
uniform float dt;

uniform vec2 dimensions;

uniform float agentCount;
uniform float moveSpeed;
uniform float turnSpeed;
uniform float senseDistance;
uniform float senseAngle;
uniform float densitySpread;

float rand(vec2 co) {
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

vec2 sense(vec2 pos, float angle, float angleOffset) {
    float sensorAngle = angle + angleOffset;
    vec2 offset = vec2(cos(sensorAngle) * (senseDistance / dimensions.x), sin(sensorAngle) * (senseDistance / dimensions.y));

    return pos + offset;
}

void main() {
    float agentId = gl_FragCoord.x / agentCount;
    vec4 agentCoords = texture2D(previousAgentFrame, vec2(agentId, 0));

    vec2 agentPosition = agentCoords.xy;
    float agentRotation = agentCoords.z * TAU;

    float weightForward = texture2D(previousDiffuseFrame, sense(agentPosition, agentRotation, 0.0)).r;
    float weightLeft = texture2D(previousDiffuseFrame, sense(agentPosition, agentRotation, -senseAngle)).r;
    float weightRight = texture2D(previousDiffuseFrame, sense(agentPosition, agentRotation, senseAngle)).r;

    float random = rand(agentPosition + gl_FragCoord.xy + time);

    // Attempt to move the agent
    vec2 newPosition = vec2(agentPosition.x + (cos(agentRotation) / dimensions.x) * moveSpeed * dt, agentPosition.y + (sin(agentRotation) / dimensions.y) * moveSpeed * dt);

    // Check if we're now in a wall
    float wall = texture2D(wallMask, newPosition).r;

    if (wall > 0.5 || newPosition.x < 0.0 || newPosition.x > 1.0 || newPosition.y < 0.0 || newPosition.y > 1.0) {
        // Bounce randomly
        agentRotation = random * TAU;
    } else {
        agentPosition = newPosition;

        if (weightForward > densitySpread) {
            agentRotation = fract((agentRotation + (random - 0.5) * turnSpeed * dt) / TAU) * TAU;
        } else if (weightForward > weightLeft && weightForward > weightRight) {
            // Continue straight
        } else if (weightForward < weightLeft && weightForward < weightRight) {
            agentRotation = fract((agentRotation + (random - 0.5) * turnSpeed * dt) / TAU) * TAU;
        } else if (weightLeft > weightRight) {
            agentRotation = fract((agentRotation - (random) * turnSpeed * dt) / TAU) * TAU;
        } else if (weightLeft < weightRight) {
            agentRotation = fract((agentRotation + (random) * turnSpeed * dt) / TAU) * TAU;
        } else {
            agentRotation = fract((agentRotation + (random - 0.5) * turnSpeed * dt) / TAU) * TAU;
        }
    }


    gl_FragColor = vec4(agentPosition, agentRotation / TAU, 1);
}