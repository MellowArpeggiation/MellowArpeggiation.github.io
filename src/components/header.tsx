import React, { Component } from 'react';

type HeaderProps = {
    title: string,
}

const Header = ({ title }: HeaderProps) =>
    <div className="intro">
        <div className="intro-header">
            <h1>
                {title}
                <span>{title}</span>
            </h1>
        </div>
        <div className="scroll-indicator"></div>
    </div>

export default Header
