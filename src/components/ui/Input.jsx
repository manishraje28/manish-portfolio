import React from 'react';

const Input = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  className = '',
  required = false,
  ...props 
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`
        w-full px-4 py-3 
        bg-terminal-bg-secondary/80
        border border-terminal-text-muted/30 
        text-terminal-text-bright
        font-mono text-sm
        placeholder:text-terminal-text-muted
        focus:outline-none 
        focus:border-terminal-text 
        focus:bg-terminal-bg-secondary
        focus:shadow-lg 
        focus:shadow-terminal-text/10
        rounded-lg
        transition-all duration-300
        ${className}
      `}
      {...props}
    />
  );
};

export default Input;
