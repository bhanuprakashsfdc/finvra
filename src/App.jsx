// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import SearchResultsPage from './pages/SearchResultsPage/SearchResultsPage';
import ScrollToTopButton from './components/ScrollToTopButton';
import './styles/global.scss';

const sampleArticle = {
  title: 'Sample Article',
  content: 'This is a sample article content.',
};

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div className="App">
        <Header onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
          <Route path="/article/:id" element={<ArticlePage article={sampleArticle} />} />
          <Route path="/search" element={<SearchResultsPage />} />
          {/* Add other routes here */}
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
