import React from 'react';
import './Navbar.css'; 
import logo from "../assets/logo.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="navbar-search">
        <input type="text" placeholder="Search products..." />
        <button>Search</button>
      </div>

      <div className="navbar-links">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </div>

      
      <div className="navbar-icons">
        <a href="#" className="cart">
          Cart <span className="cart-count">0</span>
        </a>
        <a href="#" className="login">Log In</a>
      </div>
    </nav>
  );
}

export default Navbar;
