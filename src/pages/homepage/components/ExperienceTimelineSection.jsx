import React from 'react';
import { motion } from 'framer-motion';

const ExperienceTimelineSection = () => {
  const experiences = [
    {
      title: 'Junior Web Tech Officer',
      company: 'CSI VESIT',
      period: '2024 – 2025',
      location: 'Mumbai, India',
      type: 'Leadership Role',
      description: 'Leading technical initiatives and managing web development projects for the Computer Society of India student chapter at VESIT. Organizing informational events and workshops for students.',
      achievements: [
        'Conducted and organized informational events and workshops for students',
        'Worked on website development using React.js and Express.js',
        'Assisted in managing technical content and student engagement activities',
        'Contributed to technical events and student mentoring initiatives',
      ],
      skills: ['React.js', 'Express.js', 'Event Management', 'Technical Leadership']
    },
    {
      title: 'Web Development Intern',
      company: 'Digikraf, Thane',
      period: 'June 2022 – July 2022',
      location: 'Thane, India',
      type: 'Internship',
      description: 'Worked on various web portals including Edugrade, PropertyThane, CARZBOT and ThaneWeb, contributing to their development and enhancement.',
      achievements: [
        'Worked on various web portals including Edugrade, PropertyThane, CARZBOT and ThaneWeb',
        'Contributing to their development and enhancement',
        'Developed features using React.js and Express.js',
        'Collaborated with team members on multiple projects simultaneously',
      ],
      skills: ['React.js', 'Express.js', 'Node.js', 'Web Development', 'Team Collaboration']
    },
  ];

  return (
    <section id="experience" className="py-12 md:py-16 lg:py-20 bg-terminal-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold glow-text mb-2">
            $ cat experience.log
          </h2>
          <div className="h-1 w-20 bg-terminal-text mb-8 md:mb-12"></div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-terminal-text-muted/20 hidden md:block"></div>

            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-0 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-terminal-text rounded-full border-4 border-terminal-bg hidden md:block"></div>

                  <div className="terminal-window p-4 md:p-6 hover:border-terminal-text-bright/50 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-3 md:gap-4 mb-3 md:mb-4">
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-terminal-accent mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-terminal-text-bright font-mono text-xs sm:text-sm">
                          @ {exp.company}
                        </p>
                      </div>
                      <span className="text-terminal-text-muted font-mono text-xs sm:text-sm px-3 py-1 border border-terminal-text-muted/30 whitespace-nowrap">
                        {exp.year}
                      </span>
                    </div>

                    <p className="text-terminal-text-muted text-xs sm:text-sm mb-3 md:mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 md:gap-3 text-xs sm:text-sm">
                          <span className="text-terminal-accent mt-1">▹</span>
                          <span className="text-terminal-text-muted">{achievement}</span>
                        </div>
                      ))}
                    </div>
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

export default ExperienceTimelineSection;
