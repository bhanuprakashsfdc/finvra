// src/components/LatestNews.jsx
import React, { useState } from 'react';
import NewsCard from './NewsCard';
import Pagination from './Pagination';

const LatestNews = ({ articles }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  return (
    <section className="latest-news">
      <h2>Latest News</h2>
      <div className="news-cards">
        {currentArticles.map(article => (
          <NewsCard key={article.id} title={article.title} content={article.content} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </section>
  );
};

export default LatestNews;
