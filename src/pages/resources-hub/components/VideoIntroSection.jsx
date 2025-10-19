import React from 'react';

const VideoIntroSection = () => {
  return (
    <div className="terminal-window p-6 mb-8">
      <div className="terminal-header mb-4">
        <span className="terminal-button bg-terminal-error"></span>
        <span className="terminal-button bg-terminal-warning"></span>
        <span className="terminal-button bg-terminal-text"></span>
        <span className="ml-4 text-terminal-text/60 text-sm">intro_video.mp4</span>
      </div>

      <div className="aspect-video bg-terminal-text/10 border border-terminal-text/30 flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🎥</div>
          <p className="text-terminal-text/60 font-mono text-sm">
            Video introduction coming soon
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-bold text-terminal-accent mb-2">
          About These Resources
        </h3>
        <p className="text-terminal-text/70 text-sm leading-relaxed">
          This collection includes code snippets, templates, guides, and tools 
          I've created and used throughout my development journey. Feel free to 
          download and use them in your own projects!
        </p>
      </div>
    </div>
  );
};

export default VideoIntroSection;
