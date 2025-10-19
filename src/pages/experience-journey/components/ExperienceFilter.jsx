import React from 'react';
import Select from '../../../components/ui/Select';

const ExperienceFilter = ({ selectedCategory, onCategoryChange }) => {
  const categories = [
    { value: '', label: 'All Experience' },
    { value: 'work', label: 'Work' },
    { value: 'freelance', label: 'Freelance' },
    { value: 'education', label: 'Education' },
  ];

  return (
    <div className="mb-8">
      <Select
        options={categories}
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        placeholder="Filter by category"
      />
    </div>
  );
};

export default ExperienceFilter;
