import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import ResourceCard from './components/ResourceCard';
import CategoryFilter from './components/CategoryFilter';
import DownloadTracker from './components/DownloadTracker';
import VideoIntroSection from './components/VideoIntroSection';
import ReferencesSection from './components/ReferencesSection';

const ResourcesHub = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'templates', 'snippets', 'guides', 'tools'];

  const resources = [
    {
      title: 'React Component Library',
      description: 'A collection of reusable React components with TypeScript support.',
      type: 'template',
      icon: '📦',
      downloads: '1.2K',
      link: '#',
      category: 'templates',
    },
    {
      title: 'Terminal CSS Theme',
      description: 'Complete CSS theme for terminal-style interfaces.',
      type: 'snippet',
      icon: '🎨',
      downloads: '890',
      link: '#',
      category: 'snippets',
    },
    {
      title: 'Full Stack Setup Guide',
      description: 'Step-by-step guide to set up a modern full-stack project.',
      type: 'guide',
      icon: '📚',
      downloads: '2.1K',
      link: '#',
      category: 'guides',
    },
    {
      title: 'API Testing Collection',
      description: 'Postman collection for testing REST APIs.',
      type: 'tool',
      icon: '🔧',
      downloads: '650',
      link: '#',
      category: 'tools',
    },
    {
      title: 'Docker Compose Templates',
      description: 'Ready-to-use Docker Compose configurations.',
      type: 'template',
      icon: '🐳',
      downloads: '980',
      link: '#',
      category: 'templates',
    },
    {
      title: 'Git Workflow Cheatsheet',
      description: 'Essential Git commands and workflows.',
      type: 'guide',
      icon: '📝',
      downloads: '1.5K',
      link: '#',
      category: 'guides',
    },
  ];

  const references = [
    {
      title: 'MDN Web Docs',
      description: 'Comprehensive web development documentation',
      url: 'https://developer.mozilla.org',
    },
    {
      title: 'React Documentation',
      description: 'Official React.js documentation',
      url: 'https://react.dev',
    },
    {
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework documentation',
      url: 'https://tailwindcss.com',
    },
  ];

  const filteredResources = selectedCategory === 'all'
    ? resources
    : resources.filter(resource => resource.category === selectedCategory);

  const totalDownloads = resources.reduce(
    (sum, resource) => sum + parseFloat(resource.downloads) * 1000,
    0
  ) / 1000;

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
              $ cd resources/
            </h1>
            <div className="h-1 w-24 bg-terminal-text mb-8"></div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <DownloadTracker totalDownloads={totalDownloads.toFixed(1)} />
                
                <CategoryFilter
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                />

                <div className="grid md:grid-cols-2 gap-6">
                  {filteredResources.map((resource, index) => (
                    <ResourceCard key={index} resource={resource} index={index} />
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <VideoIntroSection />
                <ReferencesSection references={references} />
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ResourcesHub;
