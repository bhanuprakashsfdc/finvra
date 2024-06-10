// src/pages/ArticlePage.jsx
import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import RelatedArticles from '../../components/RelatedArticles';

const sampleArticles = [
  { id: 1, title: 'Related Article 1' },
  { id: 2, title: 'Related Article 2' },
  { id: 3, title: 'Related Article 3' },
];

const sampleBreadcrumbPaths = [
  { label: 'Home', link: '/' },
  { label: 'Articles', link: '/articles' },
  { label: 'Sample Article' },
];

const ArticlePage = ({ article }) => {
  return (
    <div className="article-page">
      <Breadcrumb paths={sampleBreadcrumbPaths} />
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <RelatedArticles articles={sampleArticles} />
    </div>
  );
};

export default ArticlePage;
