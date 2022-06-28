import * as React from "react"

type Props = {
    side: string,
    children?: JSX.Element | JSX.Element[],
};

const Project: React.FunctionComponent<Props> = ({
    side,
    children,
}) => (
    <div className="project-container">
        <div className={`project project-${side}`}>
            {children}
        </div>
        <div className={`timeline-icon timeline-icon-${side}`}></div>
    </div>
);

export default Project
