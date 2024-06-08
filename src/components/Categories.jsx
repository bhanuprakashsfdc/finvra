// src/components/Categories.jsx
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  const categories = [
    { id: 1, name: 'World', path: '/world', image: '/images/world.jpg' },
    { id: 2, name: 'Business', path: '/business', image: '/images/business.jpg' },
    { id: 3, name: 'Technology', path: '/technology', image: '/images/technology.jpg' },
    { id: 4, name: 'Sports', path: '/sports', image: '/images/sports.jpg' },
    { id: 5, name: 'Entertainment', path: '/entertainment', image: '/images/entertainment.jpg' },
    { id: 6, name: 'Health', path: '/health', image: '/images/health.jpg' },
    // Add more categories as needed
  ];

  return (
    <section className="categories">
      <h2>Categories</h2>
      <div className="category-cards">
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
