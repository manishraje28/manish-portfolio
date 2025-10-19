import React from 'react';
import Checkbox from '../../../components/ui/Checkbox';

const ProjectFilters = ({ selectedTech, onTechChange }) => {
  const technologies = [
    'React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 
    'Next.js', 'Tailwind CSS', 'AWS', 'Docker'
  ];

  return (
    <div className="terminal-window p-6 mb-8">
      <h3 className="text-lg font-bold text-terminal-accent mb-4">
        $ filter --tech
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {technologies.map((tech) => (
          <Checkbox
            key={tech}
            checked={selectedTech.includes(tech)}
            onChange={() => onTechChange(tech)}
            label={tech}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectFilters;
