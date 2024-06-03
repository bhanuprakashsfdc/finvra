// src/components/Submenu.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Submenu = ({ items }) => {
  return (
    <div className="dropdown-content">
      {items.map((item, index) => (
        <NavLink key={index} to={item.path}>{item.label}</NavLink>
      ))}
    </div>
  );
};

export default Submenu;
