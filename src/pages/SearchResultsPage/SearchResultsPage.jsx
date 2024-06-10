// src/pages/SearchResultsPage.jsx
import React, { useState, useEffect } from 'react';
import './SearchResultsPage.css';
import { useSearchParams } from 'react-router-dom';
import NewsCard from '../../components/NewsCard';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Simulate fetching search results
    const fetchSearchResults = async () => {
      const articles = [
        { id: 1, title: 'Article 1', content: 'Content for article 1' },
        { id: 2, title: 'Article 2', content: 'Content for article 2' },
        { id: 3, title: 'Article 3', content: 'Content for article 3' },
      ];

      const filteredResults = articles.filter(article =>
        article.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    };

    if (query) {
      fetchSearchResults();
    }
  }, [query]);

  return (
    <div className="search-results-page">
      <h1>Search Results for "{query}"</h1>
      <div className="news-cards">
        {results.length > 0 ? (
          results.map(article => (
            <NewsCard key={article.id} title={article.title} content={article.content} />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResultsPage;
