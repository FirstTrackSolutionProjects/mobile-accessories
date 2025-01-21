import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
       <div className="footer-logo-section">
          <h2>Mobile Accessories World</h2>
          <p>Your one-stop shop for all mobile accessories.</p>
        </div>

       
        <div className="footer-links">
          <div>
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#categories">Categories</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
            <a href="#support">Support</a>
          </div>
          <div>
            <h3>Customer Service</h3>
            <a href="#shipping">Shipping & Delivery Policy</a>
            <a href="#returns">Returns & Refunds</a>
            <a href="#Term">Terms & Conditions</a>
            <a href="#Privacy">Privacy & Policy</a>
           
          </div>
        </div>

        <div className="footer-social-contact">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#facebook">Facebook</a>
            <a href="#twitter">Twitter</a>
            <a href="#instagram">Instagram</a>
            <a href="#linkedin">LinkedIn</a>
          </div>
          <h3>Contact Us</h3>
          <p>Email: support@mobileaccessories.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Mobile Accessories World. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;