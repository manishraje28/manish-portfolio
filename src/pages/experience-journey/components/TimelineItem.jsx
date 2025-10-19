import React from 'react';

const TimelineItem = ({ experience, index }) => {
  return (
    <div className="relative pl-8 pb-12 border-l-2 border-terminal-text/30 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-terminal-text border-2 border-terminal-bg"></div>
      
      <div className="terminal-window p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-terminal-accent">
              {experience.title}
            </h3>
            <p className="text-terminal-text/70 font-mono text-sm">
              @ {experience.company}
            </p>
          </div>
          <span className="text-terminal-text/60 text-sm font-mono px-3 py-1 border border-terminal-text/30">
            {experience.period}
          </span>
        </div>
        
        <p className="text-terminal-text/70 mb-4">{experience.description}</p>
        
        {experience.achievements && (
          <ul className="space-y-2">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-terminal-text/70">
                <span className="text-terminal-accent">▹</span>
                {achievement}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
