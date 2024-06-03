// src/components/TopStories.jsx
import React from 'react';

const TopStories = ({ articles }) => {
  return (
    <section className="top-stories">
      <h2>Top Stories</h2>
      {articles.map(article => (
        <div key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.content}</p>
        </div>
      ))}
    </section>
  );
};

export default TopStories;
