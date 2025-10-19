import React from 'react';

const CertificationBadges = ({ certifications }) => {
  return (
    <div className="terminal-window p-6">
      <h3 className="text-xl font-bold text-terminal-accent mb-4">
        Certifications
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="border border-terminal-text/30 p-4 hover:border-terminal-text/50 transition-colors"
          >
            <h4 className="font-bold text-terminal-text mb-1">{cert.name}</h4>
            <p className="text-terminal-text/60 text-sm font-mono">{cert.issuer}</p>
            <p className="text-terminal-text/40 text-xs font-mono mt-2">{cert.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationBadges;
