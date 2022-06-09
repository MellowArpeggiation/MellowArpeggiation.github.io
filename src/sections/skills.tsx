const skillNames = [
    'JS', 'HTML5', 'TS', 'CSS3', 'SASS/SCSS', 'LESS',
    'ASP.NET', 'Bootstrap', 'jQuery', 'AJAX', 'Angular', 'React',
    'C++', 'C#', 'Objective-C', 'Java', 'Python', 'Visual Basic',
    'AWT', 'Node.js', 'Express',
    'Lua', 'Haskell',
    'Mocha', 'Chai',
    'MySQL', 'Transact-SQL', 'MongoDB',
    'bash', 'zsh', 'fish', 'Powershell',
    'git', 'SVN', 'Mercurial',
    'Unreal', 'Unity', 'LÖVE', 'Godot', 'Cocos2d',
];

const Skills = skillNames.map((name) => {
    return {
        text: name,
        value: (1 / name.length) * 3000,
    };
});

export default Skills
