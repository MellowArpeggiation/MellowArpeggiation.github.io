import React, { Component } from 'react';

type HeaderProps = {
    title: string,
}

const Header = ({ title }: HeaderProps) =>
    <div className="intro-header">
        <h1 className="mobile-hidden">
            {title}
            <span>{title}</span>
        </h1>
        <h1 className="mobile-visible">
            {title[0]}
            <span>{title[0]}</span>
        </h1>
    </div>

export default Header
