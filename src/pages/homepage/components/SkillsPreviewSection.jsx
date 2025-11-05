import React from 'react';
import { motion } from 'framer-motion';

const SkillsPreviewSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion'],
      icon: '⚛️',
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Firebase'],
      icon: '⚙️',
    },
    {
      title: 'DevOps',
      skills: ['Docker', 'AWS', 'CI/CD', 'Linux'],
      icon: '🚀',
    },
    {
      title: 'Tools',
      skills: ['Git', 'VS Code', 'Figma', 'Postman'],
      icon: '🛠️',
    },
  ];

  return (
    <section id="skills" className="py-12 md:py-16 lg:py-20 bg-terminal-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold glow-text mb-2">
            $ ls skills/
          </h2>
          <div className="h-1 w-20 bg-terminal-text mb-8"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="terminal-window p-4 md:p-6"
              >
                <div className="text-2xl md:text-3xl mb-3">{category.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-terminal-accent mb-3">
                  {category.title}
                </h3>
                <ul className="space-y-1.5 md:space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-terminal-text-muted font-mono text-xs sm:text-sm flex items-center gap-2"
                    >
                      <span className="text-terminal-text">→</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsPreviewSection;
