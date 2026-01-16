import React from 'react';
import { motion } from 'framer-motion';
import StylishPortrait from '../../../components/StylishPortrait';
import { FloatingShapes } from '../../../components/3d';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* 3D Floating Shapes Background */}
      <FloatingShapes className="opacity-60" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-primary/5 via-transparent to-transparent -z-5" />

      <div className="container-custom">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl flex-1"
          >
            <h2 className="text-accent-primary font-medium tracking-wide mb-6">Hello, I'm Manish</h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight text-text-primary">
              Building digital experiences that matter.
            </h1>
            <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mb-12">
              I'm a Full Stack Developer specializing in building exceptional digital experiences.
              Currently, I'm focused on building accessible, human-centered products.
            </p>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-text-primary text-bg-primary font-semibold rounded-full hover:bg-white/90 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-text-secondary/30 text-text-primary font-medium rounded-full hover:bg-white/5 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Stylish Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <StylishPortrait src="/images/potrat.png" alt="Manish Raje" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
