// src/components/Header.jsx
import React, { useState } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import Notifications from './Notifications';
import DarkModeToggle from './DarkModeToggle';

const Header = ({ onSearch }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <Logo />
      <button className="nav-toggle" onClick={toggleNav}>
        &#9776; {/* Hamburger icon */}
      </button>
      <nav className={isNavOpen ? 'open' : ''}>
        <Navigation />
      </nav>
      <SearchBar onSearch={onSearch} />
      <Notifications />
      <UserProfile />
      <DarkModeToggle />
    </header>
  );
};

export default Header;
