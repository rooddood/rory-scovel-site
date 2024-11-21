// NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import your CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li><Link to="/" className="navbar__link">Rory</Link></li>
        <li><Link to="/liveShows" className="navbar__link">Live Shows</Link></li>
        <li><Link to="/clips" className="navbar__link">Clips</Link></li>
        <li><Link to="/allspecials" className="navbar__link">Specials</Link></li>
        <li><Link to="/penpals" className="navbar__link">Pen Pals</Link></li>
        <li><Link to="/paintings" className="navbar__link">Paintings</Link></li>
        <li><Link to="/contact" className="navbar__link">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;