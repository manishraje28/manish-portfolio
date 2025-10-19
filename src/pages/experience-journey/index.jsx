import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import TimelineItem from './components/TimelineItem';
import ExperienceStats from './components/ExperienceStats';
import CertificationBadges from './components/CertificationBadges';
import SkillProgressChart from './components/SkillProgressChart';

const ExperienceJourney = () => {
  const stats = [
    { value: '5+', label: 'Years' },
    { value: '50+', label: 'Projects' },
    { value: '20+', label: 'Clients' },
    { value: '10+', label: 'Certifications' },
  ];

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Corp',
      period: '2023 - Present',
      description: 'Leading development of cloud-native applications and mentoring junior developers.',
      achievements: [
        'Architected microservices infrastructure serving 1M+ users',
        'Reduced API response time by 60%',
        'Led team of 5 developers',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      period: '2021 - 2023',
      description: 'Built and maintained multiple web applications.',
      achievements: [
        'Developed core platform features',
        'Implemented real-time chat system',
        'Optimized database queries',
      ],
    },
  ];

  const certifications = [
    { name: 'AWS Certified Developer', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'React Advanced Certification', issuer: 'Meta', year: '2022' },
    { name: 'Node.js Certification', issuer: 'OpenJS Foundation', year: '2021' },
  ];

  const skills = [
    { name: 'React/Next.js', level: 95 },
    { name: 'Node.js/Express', level: 90 },
    { name: 'TypeScript', level: 88 },
    { name: 'AWS/Cloud', level: 85 },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold glow-text mb-2">
              $ cat experience.log
            </h1>
            <div className="h-1 w-24 bg-terminal-text mb-8"></div>

            <ExperienceStats stats={stats} />

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-terminal-accent mb-6">
                  Professional Journey
                </h2>
                {experiences.map((exp, index) => (
                  <TimelineItem key={index} experience={exp} index={index} />
                ))}
              </div>

              <div className="space-y-8">
                <SkillProgressChart skills={skills} />
                <CertificationBadges certifications={certifications} />
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ExperienceJourney;
