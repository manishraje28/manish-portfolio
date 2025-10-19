import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';

const Education = () => {
  const education = [
    {
      degree: 'B.E in Computer Engineering',
      institution: "Vivekanand Education Society's Institute of Technology (VESIT)",
      location: 'Chembur, Mumbai',
      period: '2020 – Present',
      status: 'In Progress',
      description: 'Pursuing Bachelor of Engineering in Computer Engineering with a strong focus on full-stack development, MERN stack technologies, database management, and backend development. Active involvement in technical clubs and hands-on project work.',
      highlights: [
        'Active member of CSI VESIT, contributing to technical events and workshops',
        'Strong foundation in Data Structures & Algorithms, Operating Systems, and DBMS',
        'Experience with software testing and quality assurance methodologies',
        'Passionate about AI, movement science, biomechanics, and coaching techniques',
        'Worked on multiple full-stack projects using React, Node.js, Express, and MongoDB',
        'Participated in hackathons and coding competitions'
      ],
      coursework: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Operating Systems',
        'Computer Networks',
        'Software Engineering',
        'Web Technologies',
        'Object-Oriented Programming',
        'Artificial Intelligence'
      ],
      icon: '🎓',
      color: 'terminal-accent',
      gpa: '8.5 CGPA'
    },
    {
      degree: 'Diploma in Computer Engineering',
      institution: "V.P.M's Polytechnic",
      location: 'Thane, Mumbai',
      period: 'Completed in 2023',
      status: 'Completed',
      description: 'Completed diploma with comprehensive training in full-stack web development, database management, and backend development. Gained practical experience through internships and multiple real-world projects.',
      highlights: [
        'Worked on various web portals including Edugrade, PropertyThane, CARZBOT and ThaneWeb',
        'Contributed to development and enhancement of multiple web applications',
        'Built Employee Management System with CRUD operations using Java',
        'Developed Railway Management System for train scheduling and record-keeping',
        'Created Hotel Management System with room booking functionality',
        'Implemented Student Database Management System in C++',
        'Built Sports Management System using .NET Forms',
        'Gained hands-on experience with React.js, Express.js, Node.js, and PHP'
      ],
      coursework: [
        'Web Development (HTML, CSS, JavaScript)',
        'Java Programming',
        'C/C++ Programming',
        'PHP & MySQL',
        'Database Management',
        'Software Development',
        'Computer Networks',
        'Operating Systems'
      ],
      icon: '📚',
      color: 'terminal-text-bright',
      gpa: 'First Class with Distinction'
    }
  ];

  const statusColors = {
    'In Progress': 'text-terminal-warning',
    'Completed': 'text-terminal-success'
  };

  const stats = [
    { label: 'Years of Study', value: '6+', icon: '📖' },
    { label: 'Projects Built', value: '15+', icon: '💻' },
    { label: 'Technologies', value: '20+', icon: '⚡' },
    { label: 'Certifications', value: '5+', icon: '🏆' }
  ];

  return (
    <div className="min-h-screen bg-terminal-bg">
      <Header />
      
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-20 border-b border-terminal-text-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold glow-text mb-4">
                $ cat education.log
              </h1>
              <p className="text-terminal-text-muted text-sm sm:text-base md:text-lg max-w-3xl">
                My academic journey, coursework, and learning experiences that shaped my technical expertise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-8 md:py-12 bg-terminal-bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
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
            </div>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                          <p className="text-terminal-text-muted font-mono text-xs mb-2">
                            📍 {edu.location}
                          </p>
                          <p className="text-terminal-accent font-mono text-xs sm:text-sm">
                            📊 {edu.gpa}
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

                      <p className="text-terminal-text-muted text-xs sm:text-sm mb-4 md:mb-6 leading-relaxed">
                        {edu.description}
                      </p>

                      {/* Highlights */}
                      <div className="mb-4 md:mb-6">
                        <p className="text-terminal-accent font-mono text-xs sm:text-sm mb-3">
                          $ key_highlights:
                        </p>
                        <div className="space-y-2">
                          {edu.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-2 md:gap-3 text-xs sm:text-sm">
                              <span className="text-terminal-accent mt-1">▹</span>
                              <span className="text-terminal-text-muted">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Coursework */}
                      <div>
                        <p className="text-terminal-accent font-mono text-xs sm:text-sm mb-3">
                          $ relevant_coursework:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {edu.coursework.map((course, i) => (
                            <span
                              key={i}
                              className="text-xs px-2 py-1 border border-terminal-text-muted/30 text-terminal-text-muted font-mono hover:border-terminal-accent/50 hover:text-terminal-accent transition-colors"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Extracurricular Activities */}
        <section className="py-12 md:py-16 lg:py-20 bg-terminal-bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-terminal-accent mb-8">
                Extracurricular Activities
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {[
                  {
                    title: 'CSI VESIT Member',
                    icon: '👥',
                    description: 'Active member contributing to technical events and workshops',
                    period: '2020 - Present'
                  },
                  {
                    title: 'Web Development Intern',
                    icon: '💼',
                    description: 'Worked on Edugrade, PropertyThane, CARZBOT, and ThaneWeb portals',
                    period: '2022'
                  },
                  {
                    title: 'Coding Competitions',
                    icon: '🏆',
                    description: 'Participated in various hackathons and coding challenges',
                    period: '2021 - Present'
                  },
                  {
                    title: 'Sports Enthusiast',
                    icon: '⚽',
                    description: 'Interest in sports, biomechanics, and coaching techniques',
                    period: 'Ongoing'
                  },
                  {
                    title: 'Open Source',
                    icon: '💻',
                    description: 'Contributing to open source projects and learning communities',
                    period: '2021 - Present'
                  },
                  {
                    title: 'Technical Writing',
                    icon: '✍️',
                    description: 'Documentation and technical content creation',
                    period: '2022 - Present'
                  }
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="terminal-window p-4 md:p-6"
                  >
                    <div className="text-3xl mb-3">{activity.icon}</div>
                    <h3 className="text-base sm:text-lg font-bold text-terminal-accent mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-terminal-text-muted text-xs sm:text-sm mb-3">
                      {activity.description}
                    </p>
                    <p className="text-terminal-text-muted font-mono text-xs">
                      {activity.period}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Education;
