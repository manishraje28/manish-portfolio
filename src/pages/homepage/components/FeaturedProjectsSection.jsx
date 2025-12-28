import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../../data/projects';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-bg-secondary border border-white/5 rounded-2xl overflow-hidden hover:border-accent-primary/20 transition-all duration-300"
    >
      <div className="p-8 h-full flex flex-col">
        <div className="flex justify-between items-start mb-6">
          <div className="bg-bg-tertiary px-3 py-1 rounded-full text-xs font-mono text-text-secondary border border-white/5">
            {project.type}
          </div>
          {project.featured && (
            <span className="text-accent-primary text-xs font-medium tracking-wider uppercase">Featured</span>
          )}
        </div>

        <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors">
          {project.title}
        </h3>

        <p className="text-text-secondary leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>

        <div className="space-y-6 mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span key={i} className="text-xs text-text-muted">#{t}</span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-6 border-t border-white/5">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-text-primary hover:text-accent-primary transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              GitHub
            </a>
            {project.demo && project.demo !== '#' && (
              <a
                href={project.demo}
                className="text-sm font-medium text-text-primary hover:text-accent-primary transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                {project.linkLabel || 'Live Demo'}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedProjectsSection = () => {
  // Filter only featured projects or take first 6
  const featuredProjects = projects.filter(p => p.featured).slice(0, 6);

  return (
    <section id="projects" className="py-24 bg-bg-primary relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">Featured Work</h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            A collection of projects exploring AI, web development, and modern user interfaces.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="https://github.com/manishraje28" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors pb-1 border-b border-transparent hover:border-text-primary">
            View all projects on GitHub &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
