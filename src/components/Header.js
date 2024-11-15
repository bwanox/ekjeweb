import React, { useState } from "react";
import '../styles/Header.css';
import logo from '../assets/ekjelogo.png';  
import { Link } from 'react-router-dom'; // Ensure this is imported

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to control mobile menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <img src={logo} alt="EKJE logo" className="logo" />
        <h1 className="business-name">EKJE</h1>
      </div>
      <div className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`nav-list ${menuOpen ? 'open' : ''}`} aria-label="Primary Navigation">
        <Link to="/" className="nav-list-item" aria-label="Home">Home</Link>
        <Link to="/about" className="nav-list-item" aria-label="About Us">About Us</Link>
        <Link to="/services" className="nav-list-item" aria-label="Our Services">Services</Link>
        <Link to="/contact" className="nav-list-item" aria-label="Contact Us">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
