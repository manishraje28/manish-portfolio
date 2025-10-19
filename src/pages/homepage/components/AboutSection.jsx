import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '10+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Coffee Consumed', value: '∞' },
  ];

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-terminal-bg relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient-blue mb-2">
            $ whoami
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-terminal-text to-terminal-purple rounded-full mb-8"></div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* About text */}
            <div className="space-y-4">
              <div className="terminal-window p-4 md:p-6">
                <div className="terminal-header">
                  <span className="terminal-button bg-terminal-error"></span>
                  <span className="terminal-button bg-terminal-warning"></span>
                  <span className="terminal-button bg-terminal-success"></span>
                </div>
                <div className="mt-4 space-y-4 text-terminal-text-bright leading-relaxed">
                  <p className="text-sm md:text-base">
                    <span className="text-terminal-accent font-bold">{'>'}</span> I'm a passionate full-stack developer with a love for creating 
                    elegant solutions to complex problems. My journey in tech started 5 years ago, 
                    and I haven't looked back since.
                  </p>
                  <p className="text-sm md:text-base">
                    <span className="text-terminal-accent font-bold">{'>'}</span> I specialize in building modern web applications using cutting-edge 
                    technologies. From pixel-perfect frontends to robust backend systems, 
                    I bring ideas to life with clean, maintainable code.
                  </p>
                  <p className="text-sm md:text-base">
                    <span className="text-terminal-accent font-bold">{'>'}</span> When I'm not coding, you'll find me exploring new technologies, 
                    contributing to open source, or sharing knowledge with the developer community.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="terminal-window p-4 md:p-6 text-center cursor-pointer group"
                >
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-2 group-hover:animate-glow-pulse">
                    {stat.value}
                  </div>
                  <div className="text-terminal-text-muted text-xs md:text-sm font-mono font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
