// src/components/LatestNews.jsx
import React from 'react';
import NewsCard from './NewsCard';

const LatestNews = ({ articles }) => {
  return (
    <section className="latest-news">
      <h2>Latest News</h2>
      <div className="news-cards">
        {articles.map(article => (
          <NewsCard key={article.id} title={article.title} content={article.content} />
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
