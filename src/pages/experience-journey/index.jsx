import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import TimelineItem from './components/TimelineItem';
import ExperienceStats from './components/ExperienceStats';
import CertificationBadges from './components/CertificationBadges';
import SkillProgressChart from './components/SkillProgressChart';

const ExperienceJourney = () => {
  const stats = [
    { value: '3+', label: 'Years Experience' },
    { value: '15+', label: 'Projects' },
    { value: '4', label: 'Live Portals' },
    { value: '5+', label: 'Technologies' },
  ];

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

  const certifications = [
    { name: 'Full-Stack Development', issuer: 'Self-Taught', year: '2023' },
    { name: 'MERN Stack', issuer: 'Online Courses', year: '2023' },
    { name: 'Database Management', issuer: 'Academic', year: '2022' },
  ];

  const skills = [
    { name: 'React.js', level: 90 },
    { name: 'Node.js/Express', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'JavaScript', level: 88 },
    { name: 'Java', level: 75 },
    { name: 'SQL/MySQL', level: 82 },
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
