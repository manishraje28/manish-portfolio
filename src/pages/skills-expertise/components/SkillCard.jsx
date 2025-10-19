import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className="terminal-window p-6 cursor-pointer"
    >
      <div className="text-3xl mb-3">{skill.icon}</div>
      <h3 className="text-lg font-bold text-terminal-accent mb-2">
        {skill.name}
      </h3>
      <div className="mb-4">
        <div className="flex justify-between mb-1 text-sm">
          <span className="text-terminal-text/60">Proficiency</span>
          <span className="text-terminal-text">{skill.level}%</span>
        </div>
        <div className="h-2 bg-terminal-text/10 border border-terminal-text/30">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.level}%` }}
            transition={{ duration: 1, delay: index * 0.1 }}
            className="h-full bg-terminal-text"
          ></motion.div>
        </div>
      </div>
      <p className="text-terminal-text/60 text-sm font-mono">
        {skill.experience}
      </p>
    </motion.div>
  );
};

export default SkillCard;
