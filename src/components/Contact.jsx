import React from "react";
import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-white bg-opacity-90 backdrop-blur-lg shadow-2xl rounded-2xl p-8">
        
       
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Contact Us</h2>

       
        <form className="space-y-5">
         
          <div>
            <label className="block text-gray-700 font-medium flex items-center">
              <FaUser className="mr-2 text-black" /> Name
            </label>
            <input 
              type="text" 
              className="w-full p-3 border rounded-lg" 
              placeholder="Enter your name" 
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium flex items-center">
              <FaEnvelope className="mr-2 text-black" /> Email
            </label>
            <input 
              type="email" 
              className="w-full p-3 border rounded-lg" 
              placeholder="Enter your email" 
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="block text-gray-700 font-medium flex items-center">
              <FaCommentDots className="mr-2 text-black" /> Message
            </label>
            <textarea 
              className="w-full p-3 border rounded-lg" 
              rows="4" 
              placeholder="Your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button className="w-full flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-md">
            <FaPaperPlane className="mr-2" /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
