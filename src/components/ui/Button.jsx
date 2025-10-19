import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '',
  disabled = false,
  ...props 
}) => {
  const baseStyles = 'font-mono transition-all duration-300 border inline-flex items-center justify-center gap-2 font-medium rounded-lg hover:scale-105 active:scale-95';
  
  const variants = {
    primary: 'border-terminal-text/50 text-terminal-text-bright bg-terminal-text/5 hover:bg-terminal-text/10 hover:border-terminal-text hover:shadow-lg hover:shadow-terminal-text/20',
    accent: 'border-terminal-accent/50 text-terminal-accent bg-terminal-accent/5 hover:bg-terminal-accent/10 hover:border-terminal-accent hover:shadow-lg hover:shadow-terminal-accent/20',
    ghost: 'border-transparent text-terminal-text-muted hover:text-terminal-text-bright hover:bg-terminal-text/5',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-xs sm:text-sm',
    md: 'px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base',
    lg: 'px-6 sm:px-8 py-2.5 sm:py-3 text-base sm:text-lg',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
