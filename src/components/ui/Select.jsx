import React from 'react';

const Select = ({ 
  options = [], 
  value, 
  onChange, 
  placeholder = 'Select...', 
  className = '',
  ...props 
}) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`
        w-full px-4 py-3 
        bg-terminal-bg/50 
        border border-terminal-text/30 
        text-terminal-text 
        font-mono 
        focus:outline-none 
        focus:border-terminal-text 
        focus:shadow-lg 
        focus:shadow-terminal-text/10
        transition-all duration-300
        cursor-pointer
        ${className}
      `}
      {...props}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
