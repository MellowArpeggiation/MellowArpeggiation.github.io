import * as React from "react"

type Props = {
    side: string,
    children?: JSX.Element | JSX.Element[];
};

const Project: React.FunctionComponent<Props> = ({
    side,
    children,
}) => (
    <div className={`project-container project-container-${side}`}>
        {children}
    </div>
);

export default Project
