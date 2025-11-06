import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsPreviewSection from './components/SkillsPreviewSection';
import FeaturedProjectsSection from './components/FeaturedProjectsSection';
import ExperienceTimelineSection from './components/ExperienceTimelineSection';
import EducationTimelineSection from './components/EducationTimelineSection';
import ContactSection from './components/ContactSection';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsPreviewSection />
        <FeaturedProjectsSection />
        <ExperienceTimelineSection />
        <EducationTimelineSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-terminal-text-muted/20 py-8 md:py-12 bg-terminal-bg-secondary/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-gradient-blue mb-3">$ manish.dev</h3>
              <p className="text-terminal-text-muted text-sm leading-relaxed">
                Building exceptional digital experiences with modern web technologies.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-terminal-text-bright font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-terminal-text-muted hover:text-terminal-accent transition-colors text-sm">About</a></li>
                <li><a href="#skills" className="text-terminal-text-muted hover:text-terminal-accent transition-colors text-sm">Skills</a></li>
                <li><a href="#projects" className="text-terminal-text-muted hover:text-terminal-accent transition-colors text-sm">Projects</a></li>
                <li><a href="#experience" className="text-terminal-text-muted hover:text-terminal-accent transition-colors text-sm">Experience</a></li>
                <li><a href="#education" className="text-terminal-text-muted hover:text-terminal-accent transition-colors text-sm">Education</a></li>
                <li><a href="#contact" className="text-terminal-text-muted hover:text-terminal-accent transition-colors text-sm">Contact</a></li>
              </ul>
            </div>
            
            {/* Tech Stack */}
            <div>
              <h4 className="text-terminal-text-bright font-semibold mb-3">Built With</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Tailwind CSS', 'Framer Motion'].map((tech, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-terminal-text/5 border border-terminal-text-muted/20 text-terminal-text-muted rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-terminal-text-muted/10 text-center">
            <p className="text-terminal-text-muted font-mono text-sm">
              © 2025 Manish. Crafted with 💙 and ☕
            </p>
            <p className="text-terminal-text-muted/60 font-mono text-xs mt-2">
              $ echo "Thanks for visiting!"
            </p>
          </div>
        </div>
      </footer>
      
    </div>
    
  );
};

export default Homepage;
