import React, { useState } from 'react';
import './Navbar.css';
import logo from "../assets/logo.jpg";
import { FaShoppingCart, FaUser, FaBars } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="navbar-search">
        <input type="text" placeholder="Search products..." />
        <button>Search</button>
      </div>

      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
        <a href="#">LogIn</a>
      </div>

      <div className="navbar-icons">
        <a href="#" className="cart">
          <FaShoppingCart />
          <span className="cart-count">0</span>
        </a>
        {/* <a href="#" className="login">
          <FaUser />
        </a> */}
      </div>

      <button className="navbar-toggle" onClick={toggleMenu}>
        <FaBars />
      </button>
    </nav>
  );
}

export default Navbar;
