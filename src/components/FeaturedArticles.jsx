// src/components/FeaturedArticles.jsx
import React from 'react';
import NewsCard from './NewsCard';

const FeaturedArticles = ({ articles }) => {
  return (
    <section className="featured-articles">
      <h2>Featured Articles</h2>
      <div className="news-cards">
        {articles.map(article => (
          <NewsCard key={article.id} title={article.title} content={article.content} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedArticles;
