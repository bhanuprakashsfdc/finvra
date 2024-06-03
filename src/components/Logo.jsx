// src/components/Logo.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">Finvra</Link>
    </div>
  );
};

export default Logo;
