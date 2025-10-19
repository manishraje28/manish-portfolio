import React from 'react';

const SkillStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="terminal-window p-4 text-center">
          <div className="text-3xl font-bold glow-accent mb-2">
            {stat.value}
          </div>
          <div className="text-terminal-text/60 text-sm font-mono">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillStats;
