import React from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import ExperienceJourney from './pages/experience-journey';
import ProjectPortfolio from './pages/project-portfolio';
import SkillsExpertise from './pages/skills-expertise';
import Education from './pages/education';
import CertificationsAchievements from './pages/certifications-achievements';
import NotFound from './pages/NotFound';

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Homepage />} />
      <Route path="/experience" element={<ExperienceJourney />} />
      <Route path="/projects" element={<ProjectPortfolio />} />
      <Route path="/skills" element={<SkillsExpertise />} />
      <Route path="/education" element={<Education />} />
      <Route path="/certifications" element={<CertificationsAchievements />} />
      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  );
};

export default Routes;
