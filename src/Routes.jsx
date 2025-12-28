import React, { Suspense, lazy } from 'react';
import { Routes as RouterRoutes, Route } from 'react-router-dom';

const Homepage = lazy(() => import('./pages/homepage'));
const ExperienceJourney = lazy(() => import('./pages/experience-journey'));
const ProjectPortfolio = lazy(() => import('./pages/project-portfolio'));
const SkillsExpertise = lazy(() => import('./pages/skills-expertise'));
const Education = lazy(() => import('./pages/education'));
const CertificationsAchievements = lazy(() => import('./pages/certifications-achievements'));
const NotFound = lazy(() => import('./pages/NotFound'));

const Routes = () => {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen text-terminal-accent">
        <span className="font-mono text-xl animate-pulse">&gt; Loading module..._</span>
      </div>
    }>
      <RouterRoutes>
        <Route path="/" element={<Homepage />} />
        <Route path="/experience" element={<ExperienceJourney />} />
        <Route path="/projects" element={<ProjectPortfolio />} />
        <Route path="/skills" element={<SkillsExpertise />} />
        <Route path="/education" element={<Education />} />
        <Route path="/certifications" element={<CertificationsAchievements />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
    </Suspense>
  );
};

export default Routes;
