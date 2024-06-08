// src/components/CategoryCard.jsx
import React from 'react';

const CategoryCard = ({ category }) => {
  return (
    <div className="category-card">
      <a href={category.path}>
        <img src={category.image} alt={category.name} />
        <div className="category-info">
          <h3>{category.name}</h3>
        </div>
      </a>
    </div>
  );
};

export default CategoryCard;
