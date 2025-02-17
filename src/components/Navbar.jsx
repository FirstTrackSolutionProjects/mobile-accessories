import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { FaShoppingCart, FaUser, FaBars, FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Toggle Menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Toggle Dropdowns
  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white shadow-md">
      
      <Link to="/" className="flex items-center text-yellow-400">
        <img src={logo} alt="Logo" className="h-20 w-auto" />
      </Link>

     
      <div className="relative md:flex items-center  w-80">
      <input
        type="text"
        placeholder="Search for products"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-gray-500 rounded-full shadow-sm focus:outline-none "
  />
  <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600">
    <FaSearch className="text-lg" />
  </button>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6">
        <Link to="/cart" className="relative">
          <FaShoppingCart className="text-white hover:text-yellow-400 text-xl" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">0</span>
        </Link>
        <Link to="/login">
          <FaUser className="text-white hover:text-yellow-400 text-xl" />
        </Link>

       
        <button className="text-2xl md:hidden text-white hover:text-yellow-400" onClick={toggleMenu}>
          {isMenuOpen ? <IoMdClose /> : <FaBars />}
        </button>
      </div>

      
      {isMenuOpen && (
        <div className="fixed top-0 right-0 h-full w-4/5 bg-gray-900 text-white z-50 shadow-lg transition-transform duration-300">
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-2xl font-bold">
              ✕
            </button>
          </div>

          <nav className="flex flex-col space-y-6 p-6 text-lg">
            <Link to="/" className="hover:text-green-400" onClick={toggleMenu}>Home</Link>
            <div>
              <button
                onClick={() => toggleDropdown("category")}
                className="flex items-center justify-between w-full hover:text-black"
              >
                category {activeDropdown === "category" ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {activeDropdown === "category" && (
                <div className="pl-4 mt-2 space-y-2 text-sm">
                  <Link to="/category/apartments" onClick={toggleMenu}>Apartment</Link>
                  <Link to="/category/cottage" onClick={toggleMenu}>Cottage</Link>
                  <Link to="/category/bungalow" onClick={toggleMenu}>Bungalow</Link>
                  <Link to="/category/simplex" onClick={toggleMenu}>Simplex</Link>
                  <Link to="/category/duplex" onClick={toggleMenu}>Duplex</Link>
                </div>
              )}
            </div>
            <Link to="/order" className="hover:text-green-400" onClick={toggleMenu}>My Orders</Link>
            <Link to="/refer" className="hover:text-green-400" onClick={toggleMenu}>Refer & Earn</Link>
            <Link to="/about" className="hover:text-green-400" onClick={toggleMenu}>About Us</Link>

          

            <div>
              <button
                onClick={() => toggleDropdown("partner")}
                className="flex items-center justify-between w-full hover:text-black"
              >
                partner {activeDropdown === "partner" ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {activeDropdown === "partner" && (
                <div className="pl-4 mt-2 space-y-2 text-sm">
                  <Link to="/partner/Menu upload" onClick={toggleMenu}>Menu upload</Link>
                 
                </div>
              )}
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
