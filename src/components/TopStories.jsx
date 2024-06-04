// src/components/TopStories.jsx
import React from 'react';
import NewsCard from './NewsCard';

const TopStories = ({ articles }) => {
  return (
    <section className="top-stories">
      <h2>Top Stories</h2>
      <div className="news-cards">
        {articles.map(article => (
          <NewsCard key={article.id} title={article.title} content={article.content} />
        ))}
      </div>
    </section>
  );
};

export default TopStories;
