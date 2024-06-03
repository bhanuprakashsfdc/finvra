// src/components/Header.jsx
import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import Notifications from './Notifications';

const Header = ({ onSearch }) => {
  return (
    <header>
      <Logo />
      <button className="nav-toggle">&#9776;</button>
      <nav>
        <Navigation />
      </nav>
      <SearchBar onSearch={onSearch} />
      <Notifications />
      <UserProfile />
    </header>
  );
};

export default Header;
