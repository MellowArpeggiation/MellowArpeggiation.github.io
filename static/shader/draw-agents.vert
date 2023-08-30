attribute float agentId;
uniform float agentCount;
uniform sampler2D previousAgentFrame;

#define PI radians(180.0)

float rand(vec2 co) {
    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    vec2 pos = texture2D(previousAgentFrame, vec2(agentId / agentCount, 0)).xy;
    pos = pos * 2.0 - 1.0;
    
    gl_Position = vec4(pos, 0, 1);
    gl_PointSize = 1.0;
}