// src/components/Sidebar.jsx
import React, { useState, useEffect } from 'react';
import Advertisement from './Advertisement';

const Sidebar = () => {
  const [recentArticles, setRecentArticles] = useState([]);
  const [popularTags, setPopularTags] = useState([]);

  useEffect(() => {
    // Simulate fetching recent articles
    const fetchRecentArticles = () => {
      const articles = [
        { id: 1, title: 'Recent Article 1', path: '/article/1' },
        { id: 2, title: 'Recent Article 2', path: '/article/2' },
        { id: 3, title: 'Recent Article 3', path: '/article/3' },
        { id: 4, title: 'Recent Article 4', path: '/article/4' },
        { id: 5, title: 'Recent Article 5', path: '/article/5' },
        // Add more articles as needed
      ];
      setRecentArticles(articles);
    };

    // Simulate fetching popular tags
    const fetchPopularTags = () => {
      const tags = ['Technology', 'Business', 'Sports', 'Health', 'Entertainment'];
      setPopularTags(tags);
    };

    fetchRecentArticles();
    fetchPopularTags();
  }, []);

  const ads = [
    { id: 1, imageUrl: '/images/ad1.jpg', link: 'https://example.com/ad1', altText: 'Ad 1' },
    { id: 2, imageUrl: '/images/ad2.jpg', link: 'https://example.com/ad2', altText: 'Ad 2' },
    { id: 3, imageUrl: '/images/ad3.jpg', link: 'https://example.com/ad3', altText: 'Ad 3' },
    // Add more ads as needed
  ];

  return (
    <aside className="sidebar">
      <section className="recent-articles">
        <h3>Recent Articles</h3>
        <ul>
          {recentArticles.map(article => (
            <li key={article.id}>
              <a href={article.path}>{article.title}</a>
            </li>
          ))}
        </ul>
      </section>

      <section className="popular-tags">
        <h3>Popular Tags</h3>
        <ul>
          {popularTags.map((tag, index) => (
            <li key={index}>
              <a href={`/tag/${tag.toLowerCase()}`}>{tag}</a>
            </li>
          ))}
        </ul>
      </section>

      {ads.map(ad => (
        <Advertisement key={ad.id} imageUrl={ad.imageUrl} link={ad.link} altText={ad.altText} />
      ))}
    </aside>
  );
};

export default Sidebar;
