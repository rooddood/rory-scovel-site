// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import your CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li><Link to="/" className="navbar__link">Rory</Link></li>
        <li><Link to="/" className="navbar__link">HBO</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;