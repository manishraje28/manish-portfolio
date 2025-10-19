import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import SkillCard from './components/SkillCard';
import SkillCategories from './components/SkillCategories';
import SkillStats from './components/SkillStats';
import CodePlayground from './components/CodePlayground';

const SkillsExpertise = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const stats = [
    { value: '20+', label: 'Technologies' },
    { value: '5+', label: 'Years Exp.' },
    { value: '100+', label: 'Projects' },
    { value: '10+', label: 'Certifications' },
  ];

  const categories = ['all', 'frontend', 'backend', 'devops', 'tools'];

  const skills = [
    {
      name: 'React.js',
      icon: '⚛️',
      level: 95,
      experience: '5+ years',
      category: 'frontend',
    },
    {
      name: 'Node.js',
      icon: '🟢',
      level: 90,
      experience: '4+ years',
      category: 'backend',
    },
    {
      name: 'TypeScript',
      icon: '💙',
      level: 88,
      experience: '3+ years',
      category: 'frontend',
    },
    {
      name: 'MongoDB',
      icon: '🍃',
      level: 85,
      experience: '4+ years',
      category: 'backend',
    },
    {
      name: 'Docker',
      icon: '🐳',
      level: 82,
      experience: '3+ years',
      category: 'devops',
    },
    {
      name: 'AWS',
      icon: '☁️',
      level: 80,
      experience: '2+ years',
      category: 'devops',
    },
    {
      name: 'Tailwind CSS',
      icon: '🎨',
      level: 92,
      experience: '3+ years',
      category: 'frontend',
    },
    {
      name: 'Git',
      icon: '🔧',
      level: 90,
      experience: '5+ years',
      category: 'tools',
    },
  ];

  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

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
              $ ./skills --list
            </h1>
            <div className="h-1 w-24 bg-terminal-text mb-8"></div>

            <SkillStats stats={stats} />
            
            <SkillCategories
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {filteredSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index} />
              ))}
            </div>

            <CodePlayground />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default SkillsExpertise;
