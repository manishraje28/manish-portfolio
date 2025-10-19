import React from 'react';

const SkillProgressChart = ({ skills }) => {
  return (
    <div className="terminal-window p-6">
      <h3 className="text-xl font-bold text-terminal-accent mb-4">
        Skill Proficiency
      </h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="text-terminal-text font-mono text-sm">{skill.name}</span>
              <span className="text-terminal-text/60 text-sm">{skill.level}%</span>
            </div>
            <div className="h-2 bg-terminal-text/10 border border-terminal-text/30">
              <div
                className="h-full bg-terminal-text transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillProgressChart;
