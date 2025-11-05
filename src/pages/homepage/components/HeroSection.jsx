import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hello, I'm Manish";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-grid">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-terminal-text/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-terminal-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-3xl bg-gradient-radial opacity-50" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Terminal Window */}
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="terminal-button bg-terminal-error"></span>
              <span className="terminal-button bg-terminal-warning"></span>
              <span className="terminal-button bg-terminal-success"></span>
              <span className="ml-4 text-terminal-text-muted text-sm font-medium">manish@portfolio:~$</span>
            </div>

            <div className="p-6 md:p-8 lg:p-10">
              {/* Typing animation */}
              <div className="mb-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-4 leading-tight">
                  {typedText}
                  {showCursor && <span className="animate-blink">|</span>}
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="text-lg sm:text-xl md:text-2xl text-terminal-accent font-semibold mb-2"
                >
                  <span className="text-terminal-text-muted">{'>'} </span>
                  Full Stack Developer
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="text-sm sm:text-base text-terminal-text-bright font-mono max-w-2xl"
                >
                  <span className="text-terminal-text-muted">{'>'} </span>
                  Building digital experiences with modern technologies
                </motion.p>
              </div>

              {/* Commands */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="space-y-2 mb-6 bg-terminal-bg/40 rounded-lg p-4 md:p-6 border border-terminal-text-muted/20"
              >
                <p className="text-terminal-text-muted font-mono text-xs sm:text-sm">
                  $ cat skills.txt
                </p>
                <div className="pl-4 md:pl-6 text-terminal-text-bright space-y-1.5 font-mono text-xs sm:text-sm">
                  <p className="flex items-center gap-2">
                    <span className="text-terminal-success">→</span> 
                    <span>React.js, Node.js, TypeScript</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-terminal-success">→</span>
                    <span>Tailwind CSS, Framer Motion</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-terminal-success">→</span>
                    <span>MongoDB, PostgreSQL, MySQL, Firebase</span>
                  </p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="flex flex-wrap gap-4"
              >
                <Button variant="primary" size="lg" onClick={() => window.location.href = '#projects'}>
                  $ view_projects
                </Button>
                <Button variant="accent" size="lg" onClick={() => window.location.href = '#contact'}>
                  $ get_in_touch
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
