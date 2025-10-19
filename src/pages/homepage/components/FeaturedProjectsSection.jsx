import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';

const FeaturedProjectsSection = () => {
  const projects = [
    {
      title: 'VPM-X (University Dashboard)',
      description: 'University Dashboard Management System with academic monitoring, resource sharing, project collaboration, built-in code compiler, quiz module, and Telegram bot integration.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      status: 'production',
      link: '#',
    },
    {
      title: 'Social E-Commerce Platform',
      description: 'E-commerce platform integrating shopping with social interactions. Features follow system, posts, likes, and product management.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      status: 'production',
      link: '#',
    },
    {
      title: 'AI Voice Assistant',
      description: 'Customizable AI Voice Assistant using VAPI AI API. Web platform allowing users to configure and modify voice assistants for diverse applications.',
      tech: ['React', 'VAPI AI', 'Node.js', 'AI Integration'],
      status: 'production',
      link: '#',
    },
  ];

  const statusColors = {
    production: 'text-terminal-success',
    development: 'text-terminal-warning',
    archived: 'text-terminal-text-muted/50',
  };

  return (
    <section id="projects" className="py-12 md:py-16 lg:py-20 bg-terminal-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold glow-text mb-2">
                $ cd projects/
              </h2>
              <div className="h-1 w-20 bg-terminal-text"></div>
            </div>
            <Link to="/projects">
              <Button variant="ghost" size="sm">View All →</Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="terminal-window p-4 md:p-6 cursor-pointer"
              >
                <div className="terminal-header mb-4">
                  <span className="terminal-button bg-terminal-error"></span>
                  <span className="terminal-button bg-terminal-warning"></span>
                  <span className="terminal-button bg-terminal-success"></span>
                  <span className={`ml-auto text-xs font-mono ${statusColors[project.status]}`}>
                    [{project.status}]
                  </span>
                </div>

                <h3 className="text-base sm:text-lg md:text-xl font-bold text-terminal-accent mb-2 md:mb-3">
                  {project.title}
                </h3>

                <p className="text-terminal-text-muted text-xs sm:text-sm mb-3 md:mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-2 py-1 border border-terminal-text-muted/30 text-terminal-text-muted font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="text-terminal-text-bright hover:text-terminal-accent transition-colors text-xs sm:text-sm font-mono inline-flex items-center gap-2"
                >
                  $ view project →
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
