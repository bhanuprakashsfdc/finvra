// src/components/SearchBar.jsx
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };

  return (
    <div className="search-bar">
      <input 
        type="text" 
        placeholder="Search..." 
        value={query} 
        onChange={handleInputChange} 
      />
      <button onClick={() => onSearch(query)}>Search</button>
    </div>
  );
};

export default SearchBar;
