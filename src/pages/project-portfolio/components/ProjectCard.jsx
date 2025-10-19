import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  const statusColors = {
    'live': 'text-terminal-success',
    'completed': 'text-terminal-text-bright',
    'development': 'text-terminal-warning'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="terminal-window p-4 md:p-6 cursor-pointer h-full flex flex-col"
    >
      <div className="terminal-header mb-4">
        <span className="terminal-button bg-terminal-error"></span>
        <span className="terminal-button bg-terminal-warning"></span>
        <span className="terminal-button bg-terminal-success"></span>
        <span className={`ml-auto text-xs font-mono ${statusColors[project.status]}`}>
          [{project.status}]
        </span>
      </div>

      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-terminal-accent">
          {project.title}
        </h3>
      </div>

      {project.period && (
        <p className="text-terminal-text-muted font-mono text-xs mb-2">
          📅 {project.period}
        </p>
      )}

      {project.type && (
        <span className="inline-block text-xs px-2 py-1 mb-3 border border-terminal-accent/30 text-terminal-accent font-mono">
          {project.type}
        </span>
      )}

      <p className="text-terminal-text-muted text-xs sm:text-sm mb-4 flex-grow leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 border border-terminal-text-muted/30 text-terminal-text-muted font-mono hover:border-terminal-accent/50 hover:text-terminal-accent transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-xs sm:text-sm font-mono mt-auto">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terminal-text-bright hover:text-terminal-accent transition-colors"
          >
            $ demo →
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-terminal-text-bright hover:text-terminal-accent transition-colors"
          >
            $ code →
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
