import React from 'react';

const ReferencesSection = ({ references }) => {
  return (
    <div className="terminal-window p-6 mb-8">
      <h3 className="text-xl font-bold text-terminal-accent mb-4">
        Useful References
      </h3>
      <div className="space-y-3">
        {references.map((ref, index) => (
          <a
            key={index}
            href={ref.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-3 border border-terminal-text/20 hover:border-terminal-text/50 transition-colors group"
          >
            <h4 className="font-bold text-terminal-text group-hover:text-terminal-accent transition-colors mb-1">
              {ref.title}
            </h4>
            <p className="text-terminal-text/60 text-sm font-mono">
              {ref.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ReferencesSection;
