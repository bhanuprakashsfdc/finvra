// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import TopStories from '../../components/TopStories';
import LatestNews from '../../components/LatestNews';
import FeaturedArticles from '../../components/FeaturedArticles';
import MarketData from '../../components/MarketData';
import Categories from '../../components/Categories';
import Sidebar from '../../components/Sidebar';

const articles = [
  { id: 1, title: 'Top Story 1', content: 'Content for top story 1' },
  { id: 2, title: 'Latest News 1', content: 'Content for latest news 1' },
  { id: 3, title: 'Featured Article 1', content: 'Content for featured article 1' },
  // Add more articles as needed
];

const Home = ({ searchQuery }) => {
  const [filteredArticles, setFilteredArticles] = useState(articles);

  useEffect(() => {
    if (searchQuery) {
      setFilteredArticles(
        articles.filter(article => 
          article.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredArticles(articles);
    }
  }, [searchQuery]);

  return (
    <div className="home">
      <main className="main-content">
        <TopStories articles={filteredArticles.filter(article => article.id === 1)} />
        <LatestNews articles={filteredArticles.filter(article => article.id === 2)} />
        <FeaturedArticles articles={filteredArticles.filter(article => article.id === 3)} />
        <MarketData />
        <Categories />
      </main>
      <Sidebar />
    </div>
  );
};

export default Home;
