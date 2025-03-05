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
    <nav className="flex items-center justify-between w-full px-6 bg-gray-900 p-4 text-white shadow-lg">
      {/* Logo */}
      <Link to="/" className="flex items-center text-yellow-400">
        <img src={logo} alt="Logo" className="h-18 w-18 rounded-full" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex space-x-6">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/login" className="hover:text-yellow-400">Login</Link>
        
        {/* Category Dropdown */}
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
              <Link to="/category/temperglass" className="block hover:text-yellow-400">Temperglass</Link>
              <Link to="/category/memorychips" className="block hover:text-yellow-400">Memorychips</Link>
              <Link to="/category/mobilelens" className="block hover:text-yellow-400">Mobilelens</Link>
              <Link to="/category/usbcord" className="block hover:text-yellow-400">Usbcord</Link>
            </div>
          )}
        </div>

        <Link to="/order" className="hover:text-yellow-400">My Orders</Link>
        <Link to="/refer" className="hover:text-yellow-400">Refer & Earn</Link>
        <Link to="/about" className="hover:text-yellow-400">About Us</Link>
      </div>

      {/* Mobile Cart + Menu Button */}
      <div className="flex items-center lg:hidden space-x-4">
        <Link to="/cart" className="relative">
          <FaShoppingCart className="text-white hover:text-yellow-400 text-2xl" />
          {numberOfItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">{numberOfItems}</span>
          )}
        </Link>

        {/* Mobile Menu Toggle */}
        <button className="text-2xl text-white hover:text-yellow-400 lg:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <IoMdClose /> : <FaBars />}
        </button>
      </div>

      {/* Desktop Cart Icon */}
      <Link to="/cart" className="relative hidden lg:block ml-auto">
        <FaShoppingCart className="text-white hover:text-yellow-400 text-2xl" />
        {numberOfItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">{numberOfItems}</span>
        )}
      </Link>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full h-[65vh] bg-gray-900 text-white p-6 flex flex-col space-y-4 shadow-lg lg:hidden z-50">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/login" className="hover:text-yellow-400">Login</Link>
          <div className="relative">
            <button onClick={() => toggleDropdown("category")} className="flex items-center hover:text-yellow-400">
              Category {activeDropdown === "category" ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {activeDropdown === "category" && (
              <div className="mt-2 space-y-2">
                <Link to="/category/headphones" className="block hover:text-yellow-400">Headphones</Link>
                <Link to="/category/charger" className="block hover:text-yellow-400">Charger</Link>
                <Link to="/category/cover" className="block hover:text-yellow-400">Cover</Link>
                <Link to="/category/earphone" className="block hover:text-yellow-400">Earphone</Link>
                <Link to="/category/powerbank" className="block hover:text-yellow-400">Powerbank</Link>
                <Link to="/category/temperglass" className="block hover:text-yellow-400">Temperglass</Link>
                <Link to="/category/memorychips" className="block hover:text-yellow-400">Memorychips</Link>
                <Link to="/category/mobilelens" className="block hover:text-yellow-400">Mobilelens</Link>
                <Link to="/category/usbcord" className="block hover:text-yellow-400">Usbcord</Link>
              </div>
            )}
          </div>
          <Link to="/order" className="hover:text-yellow-400">My Orders</Link>
          <Link to="/refer" className="hover:text-yellow-400">Refer & Earn</Link>
          <Link to="/about" className="hover:text-yellow-400">About Us</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

