import React, { Component } from 'react';

type HeaderProps = {
    title: string,
}

const Header = ({ title }: HeaderProps) =>
    <div className="intro-header">
        <h1>
            {title}
            <span>{title}</span>
        </h1>
    </div>

export default Header
