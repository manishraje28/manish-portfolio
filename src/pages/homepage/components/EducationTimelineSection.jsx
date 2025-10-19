import React from 'react';
import { motion } from 'framer-motion';

const EducationTimelineSection = () => {
  const education = [
    {
      degree: 'B.E in Computer Engineering',
      institution: "Vivekanand Education Society's Institute of Technology (VESIT)",
      location: 'Chembur',
      period: '2020 – Present',
      status: 'In Progress',
      description: 'Pursuing Bachelor of Engineering in Computer Engineering with focus on full-stack development, MERN stack, database management, and backend technologies.',
      highlights: [
        'Active member of CSI VESIT, contributing to technical events and workshops',
        'Strong foundation in Data Structures & Algorithms',
        'Experience with software testing and quality assurance',
        'Passionate about AI, movement science, biomechanics, and coaching techniques'
      ],
      icon: '🎓',
      color: 'terminal-accent'
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: "V.P.M's Polytechnic",
      location: 'Thane',
      period: 'Completed in 2023',
      status: 'Completed',
      description: 'Completed diploma with comprehensive training in full-stack web development, database management, and backend development.',
      highlights: [
        'Worked on various web portals including Edugrade, PropertyThane, CARZBOT and ThaneWeb',
        'Built multiple mini projects using Java, C, C++, PHP, MySQL',
        'Developed Employee Management System, Railway Management System, and more',
        'Gained hands-on experience with React.js, Express.js, Node.js'
      ],
      icon: '📚',
      color: 'terminal-text-bright'
    }
  ];

  const statusColors = {
    'In Progress': 'text-terminal-warning',
    'Completed': 'text-terminal-success'
  };

  return (
    <section id="education" className="py-12 md:py-16 lg:py-20 bg-terminal-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold glow-text mb-2">
            $ cat education.log
          </h2>
          <div className="h-1 w-20 bg-terminal-text mb-8 md:mb-12"></div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-terminal-text-muted/20 hidden md:block"></div>

            <div className="space-y-8 md:space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative pl-0 md:pl-20"
                >
                  {/* Timeline dot with icon */}
                  <div className="absolute left-4 top-6 w-8 h-8 bg-terminal-bg border-2 border-terminal-text rounded-full hidden md:flex items-center justify-center text-lg z-10">
                    {edu.icon}
                  </div>

                  <div className="terminal-window p-4 md:p-6 hover:border-terminal-text-bright/50 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl md:hidden">{edu.icon}</span>
                          <h3 className={`text-lg sm:text-xl md:text-2xl font-bold text-${edu.color}`}>
                            {edu.degree}
                          </h3>
                        </div>
                        <p className="text-terminal-text-bright font-mono text-xs sm:text-sm mb-1">
                          @ {edu.institution}
                        </p>
                        <p className="text-terminal-text-muted font-mono text-xs">
                          📍 {edu.location}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-terminal-text-muted font-mono text-xs sm:text-sm px-3 py-1 border border-terminal-text-muted/30 whitespace-nowrap">
                          {edu.period}
                        </span>
                        <span className={`${statusColors[edu.status]} font-mono text-xs px-3 py-1 border ${
                          edu.status === 'In Progress' ? 'border-terminal-warning/30' : 'border-terminal-success/30'
                        }`}>
                          [{edu.status}]
                        </span>
                      </div>
                    </div>

                    <p className="text-terminal-text-muted text-xs sm:text-sm mb-3 md:mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="space-y-2">
                      <p className="text-terminal-accent font-mono text-xs sm:text-sm mb-2">
                        $ highlights:
                      </p>
                      {edu.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2 md:gap-3 text-xs sm:text-sm">
                          <span className="text-terminal-accent mt-1">▹</span>
                          <span className="text-terminal-text-muted">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 md:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { label: 'Years of Study', value: '6+', icon: '📖' },
              { label: 'Projects Built', value: '15+', icon: '💻' },
              { label: 'Technologies', value: '20+', icon: '⚡' },
              { label: 'Certifications', value: '5+', icon: '🏆' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="terminal-window p-4 text-center"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-terminal-accent mb-1">
                  {stat.value}
                </div>
                <div className="text-terminal-text-muted font-mono text-xs">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationTimelineSection;
