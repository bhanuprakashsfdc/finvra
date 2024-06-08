// src/components/Advertisement.jsx
import React from 'react';

const Advertisement = ({ imageUrl, link, altText }) => {
  return (
    <div className="advertisement">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={altText} />
      </a>
    </div>
  );
};

export default Advertisement;
