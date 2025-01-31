import React, { useState } from 'react';
import './Navbar.css';
import logo from "../assets/logo.jpg";
import { FaShoppingCart, FaUser, FaBars, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="navbar-search">
      <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search for products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/category">Category</Link>
        <Link to="/order">My Orders</Link>
        <Link to="/refer">Refer & Earn</Link>
        <Link to="/partner">Partner</Link>
        <Link to="/about">About Us</Link>
       </div>

      <div className="navbar-icons">
        <Link to="/cart">
          <FaShoppingCart />
          <span className="cart-count">0</span>
        </Link>
        <Link to="/login">
          <FaUser />
        </Link>
      </div>

      <button className="navbar-toggle" onClick={toggleMenu}>
        <FaBars />
      </button>
    </nav>
  );
}

export default Navbar;
