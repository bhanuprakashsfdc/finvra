// src/components/Breadcrumb.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ paths }) => {
  return (
    <nav className="breadcrumb">
      {paths.map((path, index) => (
        <span key={index}>
          {index > 0 && " / "}
          {path.link ? (
            <Link to={path.link}>{path.label}</Link>
          ) : (
            <span>{path.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
