import * as React from "react"

type BtnProps = {
    href: string,
    style?: React.CSSProperties,
    children?: JSX.Element | JSX.Element[] | string,
}

const BtnSource = ({ href, style, children }: BtnProps) => {
    let lines = [];
    for (let i = 0; i < 8; i++) {
        lines.push(Math.random() * 90);
    }

    // Add the first 6 lines to the end, so it loops smoothly
    lines = lines.concat(lines.slice(0, 5));

    return <a className="btn btn-source" href={href} style={style}>
        <div className="source-lines">
            {lines.map((lineWidth) => {
                return <div style={{ width: lineWidth + '%' }}></div>
            })}
        </div>

        {children}
    </a>
}

export default BtnSource
