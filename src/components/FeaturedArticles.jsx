// src/components/FeaturedArticles.jsx
import React from 'react';

const FeaturedArticles = ({ articles }) => {
  return (
    <section className="featured-articles">
      <h2>Featured Articles</h2>
      {articles.map(article => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </section>
  );
};

export default FeaturedArticles;
