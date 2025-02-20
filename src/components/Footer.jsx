// import { Link } from 'react-router-dom'
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
// import React from 'react'

// const Footer = () => {
//   return (
//     <>
//       <div className='w-full sm:p-4 px-4 py-8 justify-center flex flex-wrap bg-gray-900 text-white'>
//         <div className='flex my-8 flex-wrap space-y-10 md:space-y-0 justify-center'>

         
//           <div className='flex flex-col w-[300px] justify-center '>
//             <div className='relative flex flex-col justify-center items-center sm:items-start'>

//             <img src="src/assets/logo.jpg" 
//              alt="Company Logo" 
//              className='w-[120px] mb-4' />

//               <div className='text-left text-4xl text-white font-bold italic'>MOBILE ACCESSORIES</div>
//               <div className='flex items-center my-3'>
//                 <div className='text-[37px] font-bold -ml-8 -mt-2 text-blue-400 italic'>WORLD</div>
//               </div>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className='w-[300px] flex flex-col space-y-3 '>
//             <div>
//               <div className='font-medium text-xl mb-3'>Quick Links</div>
//               <Link to='/'><div>Home</div></Link>
//               <Link to='/about'><div>About</div></Link>
//               <Link to='/contact'><div>Contact</div></Link>
//             </div>
//           </div>

//         </div>

       
//         <div className='flex my-8 flex-wrap md:space-y-0 space-y-10 justify-center'>
//           <div className='w-[300px] xl:w-[200px] flex flex-col  '>
//             <div>
//               <div className='font-medium text-xl mb-4'>Customer Service</div>
//               <Link to='/shipping'><div>Shipping and Delivery Policy</div></Link>
//               <Link to='/return'><div>Returns and Refunds</div></Link>
//               <Link to='/term'><div>Terms and Conditions</div></Link>
//               <Link to="/privacy"><div>Privacy and Policy</div></Link>
//             </div>
//           </div>

//           {/* Social Media */}
//           <div className='w-[300px] space-y-3 flex flex-col justify-center '>
//             <div className='font-medium text-xl'>Follow Us</div>
//             <div className="footer-icons flex flex-row items-center space-x-4">
//               <Link to="/facebook"><FaFacebook size={20} /></Link>
//               <Link to="/twitter"><FaTwitter size={20} /></Link>
//               <Link to="/instagram"><FaInstagram size={20} /></Link>
//               <Link to="/linkedin"><FaLinkedin size={20} /></Link>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Copyright Section */}
//       <div className='bg-black text-white w-full flex flex-col sm:flex-row justify-center items-center text-xs sm:text-md md:text-lg text-center py-3'>
//         Copyright @ 2024, Developed by &nbsp; 
//         <p><a href="https://firsttracksolution.tech" className='text-blue-400'>First Track Solution Technologies</a></p>
//       </div>
//     </>
//   )
// }

// export default Footer;
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
          Copyright © 2024, Developed by 
          <a href="https://firsttracksolution.tech" className='text-blue-400 hover:underline ml-1'>
            First Track Solution Technologies
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
