import React from 'react';
import './NavBar.css';
import { UserButton } from '@clerk/nextjs';

function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="navbar-right">
        <a href="#">Employer Dashboard</a>
      </div>
      <ul className="navbar-left">
        <a href="#">Jobs</a>
        <a href="#">Settings</a>
        <UserButton/>
        <img src="https://via.placeholder.com/30" alt="Profile Picture" className="profile-picture" />
        <a href="#">Username</a>
      </ul>
    </nav>
  );
}

export default NavigationBar;