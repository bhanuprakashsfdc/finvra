// src/components/LatestNews.jsx
import React from 'react';

const LatestNews = ({ articles }) => {
  return (
    <section className="latest-news">
      <h2>Latest News</h2>
      {articles.map(article => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </section>
  );
};

export default LatestNews;
