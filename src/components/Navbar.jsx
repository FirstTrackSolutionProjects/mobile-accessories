import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { FaShoppingCart, FaBars, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const numberOfItems = useSelector((state) => state.cart.totalItems);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="flex items-center justify-between w-full px-6 bg-zinc-700 p-4 text-white shadow-lg h-20">
      {/* Logo */}
      <Link to="/" className="flex items-center text-yellow-400">
        <img src={logo} alt="Logo" className="h-18 w-18 rounded-full" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-6">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/login" className="hover:text-yellow-400">Login</Link>
        <div className="relative">
          <button onClick={() => toggleDropdown("category")} className="flex items-center hover:text-yellow-400">
            Category {activeDropdown === "category" ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {activeDropdown === "category" && (
            <div className="absolute left-0 mt-2 bg-gray-900 p-4 w-48 space-y-2 shadow-lg rounded-md">
              <Link to="/category/headphones" className="block hover:text-yellow-400">Headphones</Link>
              <Link to="/category/charger" className="block hover:text-yellow-400">Charger</Link>
              <Link to="/category/cover" className="block hover:text-yellow-400">Cover</Link>
              <Link to="/category/earphone" className="block hover:text-yellow-400">Earphone</Link>
              <Link to="/category/powerbank" className="block hover:text-yellow-400">Powerbank</Link>
            </div>
          )}
        </div>
        <Link to="/order" className="hover:text-yellow-400">My Orders</Link>
        <Link to="/refer" className="hover:text-yellow-400">Refer & Earn</Link>
        <Link to="/about" className="hover:text-yellow-400">About Us</Link>
      </div>

      {/* Desktop Cart Icon */}
      <Link to="/cart" className="relative hidden lg:block ml-auto">
        <FaShoppingCart className="text-white hover:text-yellow-400 text-2xl" />
        {numberOfItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">{numberOfItems}</span>
        )}
      </Link>

      {/* Mobile Cart Icon & Menu Toggle */}
      <div className="flex items-center lg:hidden space-x-4">
        <Link to="/cart" className="relative">
          <FaShoppingCart className="text-white hover:text-yellow-400 text-2xl" />
          {numberOfItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">{numberOfItems}</span>
          )}
        </Link>
        <button className="text-2xl text-white hover:text-yellow-400" onClick={toggleMenu}>
          {isMenuOpen ? <IoMdClose /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="fixed top-0 right-0 w-100 h-full bg-gray-900 text-white p-6 shadow-lg z-50 transition-transform transform translate-x-0">
          <button className="absolute top-4 right-4 text-2xl text-white hover:text-yellow-400" 
          onClick={toggleMenu}>
            <IoMdClose />
          </button>
          <Link to="/" className="block hover:text-yellow-400 mb-4 mt-10 ml-4">Home</Link>
          <Link to="/login" className="block hover:text-yellow-400 mb-4 ml-4">Login</Link>
         
          <button onClick={() => toggleDropdown("category")} className="flex items-center hover:text-yellow-400 mb-5 ml-4">
            Category {activeDropdown === "category" ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {activeDropdown === "category" && (
            <div className="space-y-2 ml-5 mb-4">
              <Link to="/category/headphones" className="block hover:text-yellow-400">Headphones</Link>
              <Link to="/category/charger" className="block hover:text-yellow-400">Charger</Link>
              <Link to="/category/cover" className="block hover:text-yellow-400">Cover</Link>
              <Link to="/category/earphone" className="block hover:text-yellow-400">Earphone</Link>
              <Link to="/category/powerbank" className="block hover:text-yellow-400">Powerbank</Link>
            </div>
          )}
          <Link to="/order" className="block hover:text-yellow-400 mb-5 ml-4">My Orders</Link>
          <Link to="/refer" className="block hover:text-yellow-400 mb-4 ml-4">Refer & Earn</Link>
          <Link to="/about" className="block hover:text-yellow-400 ml-4">About Us</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
