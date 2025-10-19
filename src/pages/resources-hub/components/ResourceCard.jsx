import React from 'react';
import { motion } from 'framer-motion';

const ResourceCard = ({ resource, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="terminal-window p-6"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-3xl">{resource.icon}</div>
        <span className="text-xs px-2 py-1 border border-terminal-text/30 text-terminal-text/60 font-mono">
          {resource.type}
        </span>
      </div>

      <h3 className="text-lg font-bold text-terminal-accent mb-2">
        {resource.title}
      </h3>

      <p className="text-terminal-text/70 text-sm mb-4">
        {resource.description}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-terminal-text/50 text-xs font-mono">
          {resource.downloads} downloads
        </span>
        <a
          href={resource.link}
          download
          className="text-terminal-text hover:text-terminal-accent transition-colors text-sm font-mono"
        >
          $ download →
        </a>
      </div>
    </motion.div>
  );
};

export default ResourceCard;
