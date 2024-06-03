// src/components/UserProfile.jsx
import React from 'react';

const UserProfile = () => {
  return (
    <div className="user-profile">
      <img src="/path-to-avatar" alt="User Avatar" />
      <div className="dropdown">
        <button className="dropbtn">Profile</button>
        <div className="dropdown-content">
          <a href="#">Account</a>
          <a href="#">Settings</a>
          <a href="#">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
