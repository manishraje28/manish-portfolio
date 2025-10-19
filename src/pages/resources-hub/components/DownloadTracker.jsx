import React from 'react';

const DownloadTracker = ({ totalDownloads }) => {
  return (
    <div className="terminal-window p-6 mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-terminal-accent mb-1">
            Total Downloads
          </h3>
          <p className="text-terminal-text/60 font-mono text-sm">
            Across all resources
          </p>
        </div>
        <div className="text-4xl font-bold glow-text">
          {totalDownloads}+
        </div>
      </div>
    </div>
  );
};

export default DownloadTracker;
