import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';

const CertificationsAchievements = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const certifications = [
    {
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2024',
      category: 'cloud',
      icon: '☁️',
      description: 'Certified in developing and maintaining AWS-based applications',
      link: '#'
    },
    {
      title: 'React Advanced Certification',
      issuer: 'Meta',
      date: '2024',
      category: 'frontend',
      icon: '⚛️',
      description: 'Advanced React patterns, hooks, and performance optimization',
      link: '#'
    },
    {
      title: 'Node.js Application Development',
      issuer: 'OpenJS Foundation',
      date: '2023',
      category: 'backend',
      icon: '🟢',
      description: 'Building scalable server-side applications with Node.js',
      link: '#'
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2023',
      category: 'database',
      icon: '🍃',
      description: 'Database design, queries, and performance optimization',
      link: '#'
    },
    {
      title: 'Docker & Kubernetes',
      issuer: 'Linux Foundation',
      date: '2024',
      category: 'devops',
      icon: '🐳',
      description: 'Container orchestration and microservices deployment',
      link: '#'
    }
  ];

  const achievements = [
    // {
    //   title: 'Hackathon Winner 🏆',
    //   event: 'Smart India Hackathon 2024',
    //   description: 'Built an AI-powered voice assistant for government services',
    //   impact: '10,000+ users',
    //   icon: '🥇'
    // },
    // {
    //   title: 'Open Source Contributor',
    //   event: 'GitHub',
    //   description: 'Contributed to 15+ open source projects with 200+ stars',
    //   impact: 'Community Impact',
    //   icon: '💻'
    // },
    // {
    //   title: 'Tech Speaker',
    //   event: 'College Tech Fest 2024',
    //   description: 'Delivered talk on Modern Web Development and MERN Stack',
    //   impact: '500+ attendees',
    //   icon: '🎤'
    // },
    // {
    //   title: 'CSI VESIT Active Member',
    //   event: '2020 - Present',
    //   description: 'Contributing to technical events, workshops, and student mentoring',
    //   impact: 'Student Leadership',
    //   icon: '🎓'
    // }
  ];

  const categories = [
    { id: 'all', label: 'All Certifications', icon: '📜' },
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'backend', label: 'Backend', icon: '⚙️' },
    { id: 'cloud', label: 'Cloud', icon: '☁️' },
    { id: 'database', label: 'Database', icon: '💾' },
    { id: 'devops', label: 'DevOps', icon: '🚀' }
  ];

  const filteredCertifications = selectedCategory === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

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
                $ ls certifications/
              </h1>
              <p className="text-terminal-text-muted text-sm sm:text-base md:text-lg max-w-3xl">
                Professional certifications, achievements, and recognitions earned throughout my learning journey.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-terminal-accent mb-8">
                Professional Certifications
              </h2>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`
                      px-3 md:px-4 py-2 text-xs sm:text-sm font-mono transition-all duration-300
                      border ${selectedCategory === category.id 
                        ? 'border-terminal-accent bg-terminal-accent/10 text-terminal-accent' 
                        : 'border-terminal-text-muted/30 text-terminal-text-muted hover:border-terminal-accent/50 hover:text-terminal-accent'
                      }
                    `}
                  >
                    {category.icon} {category.label}
                  </button>
                ))}
              </div>

              {/* Certifications Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredCertifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="terminal-window p-4 md:p-6"
                  >
                    <div className="text-3xl md:text-4xl mb-4">{cert.icon}</div>
                    <h3 className="text-lg md:text-xl font-bold text-terminal-accent mb-2">
                      {cert.title}
                    </h3>
                    <p className="text-terminal-text-bright text-xs sm:text-sm font-mono mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-terminal-text-muted text-xs sm:text-sm mb-4">
                      {cert.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-terminal-text-muted font-mono text-xs">
                        {cert.date}
                      </span>
                      <a
                        href={cert.link}
                        className="text-terminal-accent hover:text-terminal-accent-bright text-xs sm:text-sm font-mono"
                      >
                        View →
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-terminal-bg-secondary/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-terminal-accent mb-8">
                Notable Achievements
              </h2>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="terminal-window p-4 md:p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl md:text-4xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-terminal-accent mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-terminal-text-bright font-mono text-xs sm:text-sm mb-2">
                          {achievement.event}
                        </p>
                        <p className="text-terminal-text-muted text-xs sm:text-sm mb-3">
                          {achievement.description}
                        </p>
                        <span className="inline-block px-3 py-1 bg-terminal-accent/10 border border-terminal-accent/30 text-terminal-accent text-xs font-mono">
                          {achievement.impact}
                        </span>
                      </div>
                    </div>
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

export default CertificationsAchievements;
