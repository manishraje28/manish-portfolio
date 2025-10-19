import React from 'react';

const CodePlayground = () => {
  const codeSnippet = `// Sample code demonstration
const buildAwesomeProjects = () => {
  const skills = [
    'React', 'Node.js', 
    'TypeScript', 'AWS'
  ];
  
  return skills.map(skill => ({
    name: skill,
    level: 'Expert',
    passion: '100%'
  }));
};

console.log(buildAwesomeProjects());`;

  return (
    <div className="terminal-window p-6">
      <div className="terminal-header mb-4">
        <span className="terminal-button bg-terminal-error"></span>
        <span className="terminal-button bg-terminal-warning"></span>
        <span className="terminal-button bg-terminal-text"></span>
        <span className="ml-4 text-terminal-text/60 text-sm">skills.js</span>
      </div>
      <pre className="text-terminal-text/80 text-sm font-mono overflow-x-auto">
        <code>{codeSnippet}</code>
      </pre>
    </div>
  );
};

export default CodePlayground;
