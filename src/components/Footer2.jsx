import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import React from 'react'
 import "./Footer.css";

const Footer = () => {
  return (
    <>
    <div className='w-full  sm:p-4 px-4 py-8 justify-center flex flex-wrap bg-gray-900 text-white'>
      <div className=' flex my-8 flex-wrap space-y-10 md:space-y-0 justify-center'>
        <div className=' flex flex-col w-[300px] justify-center '>
        <div>
        <div className='relative flex flex-col justify-center items-center sm:items-start'>
              <div className=' text-left text-4xl text-white  font-bold italic'>MOBILE ACCESSORIES</div>
              <div className='flex items-center my-3'>
                {/* <img src="/logo.webp" alt="" className='w-[100px] h-[30px]' /> */}
                <div className='text-[37px] font-bold -ml-8 -mt-2 text-blue-400 italic'>WORLD</div>
              </div>
        </div>
        <div className='text-center sm:text-left'>
            Fastest platform with all courier service features. Help you start, run and grow your courier service.
        </div>
        </div>
        </div>
        <div className='w-[300px] flex flex-col  space-y-3 '>

            <div>
            <div className='font-medium text-xl mb-3'>Quick Links</div>
            <Link to='/home'><div>Home</div></Link>
            <Link to='/category'><div>Category</div></Link>
            <Link to='/about'><div>About</div></Link>
            <Link to='/contact'><div>Contact</div></Link>
            {/* <Link to='/support'><div>Support</div></Link> */}
            </div>
        </div>
      </div>
      <div className='flex my-8 flex-wrap md:space-y-0 space-y-10 justify-center'>
        <div className='w-[300px] xl:w-[200px] flex flex-col  '>
            <div>
        <div className='font-medium text-xl mb-4'>Customer Service</div>
            <Link to='/shipping'><div>Shipping & Delivery Policy</div></Link>
            <Link to={'/return'}><div>Returns & Refunds</div></Link>
            <Link to={'/term'}><div>Terms & Conditions</div> </Link>
            <Link to="/privacy"><div>Privacy & Policy</div></Link>
            </div>
        </div>
        <div className='w-[300px] space-y-3 flex flex-col justify-center '>
        <div className='font-medium text-xl'>Follow Us</div>
            {/* <div>Get business news , tip and solutions to your problems our experts.</div>
            <form action="" className='flex flex-col mx-4 space-y-4'>
                <input type="email" name='email' placeholder='E-mail address' className='py-2 px-4 rounded-xl' />
                <button className='border px-4 py-2 rounded-xl'>Subscribe</button>
            </form> */}
             <Link to="/facebook"> <FaFacebook size={20} /></Link>
             <Link to="/twitter"> <FaTwitter size={20} /></Link>
             <Link to="/instagram"> <FaInstagram size={20} /></Link>
             <Link to="/linkedin"> <FaLinkedin size={20} /></Link>
        </div>
      </div>
    </div>
    <div className='bg-black text-white w-full flex flex-col sm:flex-row justify-center items-center text-xs sm:text-md md:text-lg text-center py-3'>
      Copyright @ 2024, Developed by &nbsp; <p><a href="https://firsttracksolution.tech">First Track Solution Technologies</a></p>
    </div>
    </>
  )
}

export default Footer;