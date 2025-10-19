import React from 'react';

const SkillEndorsements = ({ endorsements }) => {
  return (
    <div className="terminal-window p-6">
      <h3 className="text-xl font-bold text-terminal-accent mb-4">
        Endorsements
      </h3>
      <div className="space-y-3">
        {endorsements.map((endorsement, index) => (
          <div key={index} className="text-sm">
            <p className="text-terminal-text/70 italic mb-1">
              "{endorsement.text}"
            </p>
            <p className="text-terminal-text/50 font-mono">
              - {endorsement.author}, {endorsement.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillEndorsements;
