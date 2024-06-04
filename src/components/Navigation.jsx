// src/components/Navigation.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Submenu from './Submenu';

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const technologySubmenuItems = [
    { path: '/technology/ai', label: 'AI' },
    { path: '/technology/software', label: 'Software' },
    { path: '/technology/hardware', label: 'Hardware' },
  ];

  return (
    <nav>
      <ul>
        <li><NavLink to="/world" activeClassName="active">World</NavLink></li>
        <li><NavLink to="/business" activeClassName="active">Business</NavLink></li>
        <li 
          className="dropdown" 
          onMouseEnter={toggleDropdown} 
          onMouseLeave={toggleDropdown}
        >
          <NavLink to="/technology" activeClassName="active">Technology</NavLink>
          {isDropdownOpen && <Submenu items={technologySubmenuItems} />}
        </li>
        {/* Add more links here */}
      </ul>
    </nav>
  );
};

export default Navigation;
