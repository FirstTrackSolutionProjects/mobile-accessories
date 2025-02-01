import React, { useState } from 'react';
import './Navbar.css';
import logo from "../assets/logo.jpg";
import { FaShoppingCart, FaUser, FaBars, FaSearch, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Toggle functions
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCategoryDropdown = () => setIsCategoryOpen(!isCategoryOpen);
  const togglePartnerDropdown = () => setIsPartnerOpen(!isPartnerOpen);

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

        {/* Category Dropdown */}
        <div className={`dropdown ${isCategoryOpen ? 'open' : ''}`}>
          <Link to="/category" className="category-link">Category</Link>
          <button className="dropdown-toggle" onClick={toggleCategoryDropdown}>
            <FaChevronDown />
          </button>
          {isCategoryOpen && (
            <div className="dropdown-menu">
              <Link to="/category/headphones">Headphones</Link>
              <Link to="/category/earphones">Earbuds</Link>
              <Link to="/category/powerbanks">Power Bank</Link>
              <Link to="/category/chargers">Chargers</Link>
              <Link to="/category/covers">Covers</Link>
              <Link to="/category/temperglass">Temper Glass</Link>
              <Link to="/category/mobilelens">Mobile Lens</Link>
              <Link to="/category/memorychip">Memory Chip</Link>
              <Link to="/category/usbcord">USB Cord</Link>
            </div>
          )}
        </div>

        <Link to="/order">My Orders</Link>
        <Link to="/refer">Refer & Earn</Link>

        {/* Partner Dropdown */}
        <div className={`dropdown ${isPartnerOpen ? 'open' : ''}`}>
          <Link to="/partner" className="partner-link">Partner</Link>
          <button className="dropdown-toggle" onClick={togglePartnerDropdown}>
            <FaChevronDown />
          </button>
          {isPartnerOpen && (
            <div className="dropdown-menu">
              <Link to="/partner/upload">Menu Upload</Link>
            </div>
          )}
        </div>

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
