import React from 'react';

const TimelineItem = ({ experience, index }) => {
  return (
    <div className="relative pl-8 pb-12 border-l-2 border-terminal-text-muted/30 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-terminal-accent border-2 border-terminal-bg"></div>
      
      <div className="terminal-window p-4 md:p-6">
        <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-bold text-terminal-accent mb-1">
              {experience.title}
            </h3>
            <p className="text-terminal-text-bright font-mono text-xs sm:text-sm mb-1">
              @ {experience.company}
            </p>
            {experience.location && (
              <p className="text-terminal-text-muted font-mono text-xs">
                📍 {experience.location}
              </p>
            )}
          </div>
          <div className="flex flex-col items-end gap-2">
            <span className="text-terminal-text-muted text-xs sm:text-sm font-mono px-3 py-1 border border-terminal-text-muted/30 whitespace-nowrap">
              {experience.period}
            </span>
            {experience.type && (
              <span className="text-terminal-accent text-xs font-mono px-3 py-1 border border-terminal-accent/30">
                {experience.type}
              </span>
            )}
          </div>
        </div>
        
        <p className="text-terminal-text-muted text-xs sm:text-sm mb-4 leading-relaxed">
          {experience.description}
        </p>
        
        {experience.achievements && (
          <div className="mb-4">
            <p className="text-terminal-accent font-mono text-xs sm:text-sm mb-2">
              $ key_achievements:
            </p>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-terminal-text-muted">
                  <span className="text-terminal-accent mt-1">▹</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {experience.skills && (
          <div>
            <p className="text-terminal-accent font-mono text-xs sm:text-sm mb-2">
              $ technologies_used:
            </p>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 border border-terminal-text-muted/30 text-terminal-text-muted font-mono hover:border-terminal-accent/50 hover:text-terminal-accent transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
