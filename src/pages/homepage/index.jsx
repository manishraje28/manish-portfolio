import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FeaturedProjectsSection from './components/FeaturedProjectsSection';
import ExperienceSection from './components/ExperienceSection';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent-primary/20 selection:text-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProjectsSection />
        <ExperienceSection />

        {/* Simple About / Contact Section */}
        <section id="about" className="py-24 bg-bg-secondary/30">
          <div className="container-custom max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-12">
              I'm a passionate developer with a knack for building robust applications.
              My journey involves exploring various technologies from desktop development with Java/C#
              to modern web stacks with React and Node.js. I'm always eager to learn and create.
            </p>

            <div id="contact" className="p-8 bg-bg-secondary border border-white/5 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-text-secondary mb-8">
                Interested in working together or just want to say hi?
              </p>
              <a
                href="mailto:contact@manish.dev"
                className="text-accent-primary text-lg font-medium hover:underline underline-offset-4"
              >
                manishraje28@gmail.com
              </a>
              <div className="flex justify-center gap-6 mt-8">
                <a href="https://github.com/manishraje28" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors">GitHub</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors">LinkedIn</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-primary transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 border-t border-white/5 text-center text-text-muted text-sm">
        <div className="container-custom">
          <p>© {new Date().getFullYear()} Manish Raje. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
