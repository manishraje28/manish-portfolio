import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="terminal-window p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="terminal-header mb-6">
            <span className="terminal-button bg-terminal-error" onClick={onClose}></span>
            <span className="terminal-button bg-terminal-warning"></span>
            <span className="terminal-button bg-terminal-text"></span>
          </div>

          <h2 className="text-3xl font-bold text-terminal-accent mb-4">
            {project.title}
          </h2>

          <p className="text-terminal-text/70 mb-6 leading-relaxed">
            {project.fullDescription || project.description}
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-terminal-text mb-2">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 border border-terminal-text/30 text-terminal-text/70 font-mono text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
