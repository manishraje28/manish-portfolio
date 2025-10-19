import React from 'react';
import Button from '../../../components/ui/Button';

const SkillCategories = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => onCategoryChange(category)}
        >
          $ {category}
        </Button>
      ))}
    </div>
  );
};

export default SkillCategories;
