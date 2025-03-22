import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='w-full px-6 py-12 bg-gray-900 text-white flex flex-col items-center'>
        {/* Logo & Branding */}
        <div className='flex flex-col items-center text-center'>
          <img
            src="src/assets/logo.jpg"
            alt="Company Logo"
            className='w-[100px] mb-2'
          />
          <div className='text-3xl font-bold italic text-white'>
            MOBILE ACCESSORIES
          </div>
          <div className='text-2xl font-bold text-blue-400 italic'>WORLD</div>
          <p className='mt-2 text-gray-400 max-w-md text-center'>
            Fastest platform with all courier service features. Helping you start, run, and grow your courier service.
          </p>
        </div>

       
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-8 w-full max-w-5xl text-center md:text-left'>
          
        
          <div>
            <h3 className='text-lg font-semibold text-white mb-3'>Quick Links</h3>
            <div className='space-y-2 text-gray-400'>
              <Link to='/'>Home</Link>
              <br />
              <Link to='/about'>About</Link>
              <br />
              <Link to='/contact'>Contact</Link>
            </div>
          </div>

  
          <div>
            <h3 className='text-lg font-semibold text-white mb-3'>Customer Service</h3>
            <div className='space-y-2 text-gray-400'>
              <Link to='/shipping'>Shipping and Delivery Policy</Link>
              <br />
              <Link to='/return'>Returns and Refunds</Link>
              <br />
              <Link to='/terms'>Terms and Conditions</Link>
              <br />
              <Link to='/privacy'>Privacy and Policy</Link>
            </div>
          </div>

          <div className='flex flex-col items-center md:items-start'>
            <h3 className='text-lg font-semibold text-white mb-3'>Follow Us</h3>
            <div className='flex space-x-4 text-gray-400'>
              <Link to="/facebook"><FaFacebook size={20} /></Link>
              <Link to="/twitter"><FaTwitter size={20} /></Link>
              <Link to="/instagram"><FaInstagram size={20} /></Link>
              <Link to="/linkedin"><FaLinkedin size={20} /></Link>
            </div>
          </div>

        </div>

        <div className='mt-8 w-full text-center text-gray-500 border-t border-gray-700 pt-4'>
          Copyright © 2025, Developed by 
          <a href="https://firsttracksolution.tech" className='text-blue-400 hover:underline ml-1'>
            First Track Solution Technologies
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;