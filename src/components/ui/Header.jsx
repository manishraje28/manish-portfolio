import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/', label: 'home' },
    { path: '/projects', label: 'projects' },
    { path: '/skills', label: 'skills' },
    { path: '/experience', label: 'experience' },
    { path: '/education', label: 'education' },
    { path: '/certifications', label: 'certifications' },
    { path: '/#contact', label: 'contact' },
  ];

  const handleClick = (e, path) => {
    if (path.startsWith('/#')) {
      e.preventDefault();
      const id = path.substring(2);
      
      // If we're not on the homepage, navigate there first
      if (location.pathname !== '/') {
        navigate('/');
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 300);
      } else {
        // Already on homepage, just scroll
        const element = document.getElementById(id);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-terminal-bg/95 backdrop-blur-md border-b border-terminal-text-muted/20 shadow-lg">
      <nav className="container mx-auto px-4 sm:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-base sm:text-lg md:text-xl font-bold text-gradient-blue hover:scale-105 transition-transform">
            <span className="font-mono">$ manish.dev</span>
          </Link>

          {/* Navigation */}
          <ul className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={(e) => handleClick(e, item.path)}
                  className={`
                    relative py-2 font-mono text-sm transition-all duration-300
                    ${location.pathname === item.path 
                      ? 'text-terminal-text font-semibold' 
                      : 'text-terminal-text-muted hover:text-terminal-text-bright'
                    }
                  `}
                >
                  <span>$ {item.label}</span>
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-terminal-text via-terminal-accent to-terminal-purple rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button className="md:hidden text-terminal-text-bright hover:text-terminal-accent transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
