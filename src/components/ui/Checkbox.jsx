import React from 'react';

const Checkbox = ({ 
  checked, 
  onChange, 
  label, 
  className = '',
  ...props 
}) => {
  return (
    <label className={`flex items-center gap-3 cursor-pointer group ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
          {...props}
        />
        <div className="w-5 h-5 border border-terminal-text/30 peer-checked:border-terminal-text peer-checked:bg-terminal-text/10 transition-all duration-300 group-hover:border-terminal-text/50">
          {checked && (
            <svg className="w-full h-full text-terminal-text" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </div>
      {label && (
        <span className="text-terminal-text/80 group-hover:text-terminal-text transition-colors font-mono">
          {label}
        </span>
      )}
    </label>
  );
};

export default Checkbox;
