import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/ui/Header';
import ProjectCard from './components/ProjectCard';
import ProjectFilters from './components/ProjectFilters';
import ProjectStats from './components/ProjectStats';

const ProjectPortfolio = () => {
  const [selectedTech, setSelectedTech] = useState([]);

  const stats = [
    { value: '15+', label: 'Projects' },
    { value: '4', label: 'Live Platforms' },
    { value: '10k+', label: 'Users' },
    { value: '100%', label: 'Learning' },
  ];

  const projects = [
    {
      title: 'VPM-X (University Dashboard Management)',
      description: 'Designed and developed a University Dashboard Management System leveraging React, Node.js, Express, and MongoDB. Features academic monitoring, resource sharing, project collaboration, built-in code compiler, and quiz module. Integrated Telegram bot for notifications.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Telegram Bot'],
      status: 'completed',
      demo: 'https://drive.google.com/file/d/1D5hmZys5UmmQLRzWXyiSmUiFDgaIMOFf/edit',
      github: '#',
      period: 'August 2023 - January 2024',
      type: 'Full-Stack'
    },
    {
      title: 'Social E-Commerce Platform',
      description: 'Developed a social e-commerce platform integrating shopping with social interactions. Built social features like follow system, posts, likes, and product management using React.js, Node.js, Express.js, and MongoDB.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      status: 'completed',
      demo: '#',
      github: '#',
      period: 'December 2024 - January 2025',
      type: 'Full-Stack'
    },
    {
      title: 'AI Voice Assistant',
      description: 'Developed a customizable AI Voice Assistant using VAPI AI API for various voice assistant models. Built a web platform allowing users to configure and modify the assistant based on specific needs. AI-powered voice assistance for diverse applications.',
      tech: ['React', 'VAPI AI', 'Node.js', 'AI Integration'],
      status: 'completed',
      demo: '#',
      github: '#',
      period: '2024',
      type: 'AI/ML'
    },
    {
      title: 'Edugrade Portal',
      description: 'Worked on website development using React.js and Express.js. Contributed to development and enhancement of the educational portal.',
      tech: ['React', 'Express', 'Node.js'],
      status: 'live',
      demo: '#',
      github: '#',
      period: 'June 2022 - July 2022',
      type: 'Web Development'
    },
    {
      title: 'PropertyThane Portal',
      description: 'Worked on various web portals contributing to their development and enhancement using modern web technologies.',
      tech: ['React', 'Node.js', 'Express'],
      status: 'live',
      demo: '#',
      github: '#',
      period: 'June 2022 - July 2022',
      type: 'Web Development'
    },
    {
      title: 'CARZBOT Portal',
      description: 'Contributed to development and enhancement of CARZBOT web portal using React.js and Express.js.',
      tech: ['React', 'Express', 'Node.js'],
      status: 'live',
      demo: '#',
      github: '#',
      period: 'June 2022 - July 2022',
      type: 'Web Development'
    },
    {
      title: 'ThaneWeb Portal',
      description: 'Worked on ThaneWeb portal development and enhancement using React.js and Express.js.',
      tech: ['React', 'Express', 'Node.js'],
      status: 'live',
      demo: '#',
      github: '#',
      period: 'June 2022 - July 2022',
      type: 'Web Development'
    },
    {
      title: 'Employee Management System (Java)',
      description: 'Managed employee records with CRUD operations using Java programming language.',
      tech: ['Java', 'MySQL', 'JDBC'],
      status: 'completed',
      demo: '#',
      github: '#',
      period: '2022',
      type: 'Desktop Application'
    },
    {
      title: 'Railway Management System (Java)',
      description: 'Managed train schedules, platform allocations, and record-keeping efficiently using Java.',
      tech: ['Java', 'MySQL', 'Swing'],
      status: 'completed',
      demo: '#',
      github: '#',
      period: '2022',
      type: 'Desktop Application'
    },
    {
      title: 'Hotel Management System (C)',
      description: 'Implemented room booking and billing system using C programming language.',
      tech: ['C', 'File Handling'],
      status: 'completed',
      demo: '#',
      github: '#',
      period: '2021',
      type: 'Desktop Application'
    },
    {
      title: 'Student Database Management (C++)',
      description: 'Tracked student records with result management using C++ and object-oriented programming.',
      tech: ['C++', 'OOP', 'File Handling'],
      status: 'completed',
      demo: '#',
      github: '#',
      period: '2021',
      type: 'Desktop Application'
    },
    {
      title: 'Sports Management System (.NET Forms)',
      description: 'Organized sports events and player records using .NET Windows Forms application.',
      tech: ['.NET', 'C#', 'Windows Forms'],
      status: 'completed',
      demo: '#',
      github: '#',
      period: '2022',
      type: 'Desktop Application'
    },
    {
      title: 'Fitness Buddy App (Java, Firebase)',
      description: 'Personalized fitness tracking with cloud storage using Java and Firebase integration.',
      tech: ['Java', 'Firebase', 'Android'],
      status: 'completed',
      demo: '#',
      github: '#',
      period: '2023',
      type: 'Mobile Application'
    },
    {
      title: 'Contact Management System (C, Data Structures)',
      description: 'Stored and retrieved contacts data structures efficiently using C programming and data structure concepts.',
      tech: ['C', 'Data Structures', 'Linked Lists'],
      status: 'completed',
      demo: '#',
      github: '#',
      period: '2021',
      type: 'Desktop Application'
    },
    {
      title: 'Professional To-Do List (PHP, MySQL)',
      description: 'Task management with user authentication using PHP and MySQL database.',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      status: 'completed',
      demo: '#',
      github: '#',
      period: '2022',
      type: 'Web Application'
    },
  ];

  const handleTechFilter = (tech) => {
    setSelectedTech(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const filteredProjects = selectedTech.length === 0
    ? projects
    : projects.filter(project =>
        selectedTech.some(tech => project.tech.includes(tech))
      );

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
              $ ls projects/
            </h1>
            <div className="h-1 w-24 bg-terminal-text mb-8"></div>

            <ProjectStats stats={stats} />
            <ProjectFilters selectedTech={selectedTech} onTechChange={handleTechFilter} />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <div className="terminal-window p-12 text-center">
                <p className="text-terminal-text/60 font-mono">
                  $ No projects found matching the selected filters
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProjectPortfolio;
