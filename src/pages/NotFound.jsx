import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-terminal-bg p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="terminal-window p-8 max-w-2xl w-full"
      >
        <div className="terminal-header">
          <span className="terminal-button bg-terminal-error"></span>
          <span className="terminal-button bg-terminal-warning"></span>
          <span className="terminal-button bg-terminal-text"></span>
          <span className="ml-4 text-terminal-text/60 text-sm">error_404.sh</span>
        </div>

        <div className="mt-8 text-center">
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-6xl md:text-8xl font-bold glow-text mb-4"
          >
            404
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4 mb-8"
          >
            <p className="text-xl text-terminal-error font-mono">
              $ Error: Page not found
            </p>
            <p className="text-terminal-text/70 font-mono">
              The page you're looking for doesn't exist in this directory.
            </p>
            
            <div className="text-left max-w-md mx-auto mt-6 p-4 border border-terminal-text/20 bg-terminal-text/5">
              <p className="text-terminal-text/60 text-sm font-mono">
                <span className="text-terminal-accent">$</span> ls -la
              </p>
              <p className="text-terminal-text/40 text-sm font-mono pl-4 mt-2">
                drwxr-xr-x  /home<br />
                drwxr-xr-x  /experience<br />
                drwxr-xr-x  /projects<br />
                drwxr-xr-x  /skills<br />
                drwxr-xr-x  /resources<br />
                <span className="text-terminal-error">-rw-r--r--  /this-page (404)</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/">
              <Button variant="primary" size="lg">
                $ cd /home
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
