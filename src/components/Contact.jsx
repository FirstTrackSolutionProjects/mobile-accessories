import React from "react";

const Contact = () => {
  return (
    <div className="container bg-gray-100 mx-auto py-10">
   

      <h2 className="text-3xl font-bold text-center text-black-600 mb-6">Contact Us</h2>

      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" className="w-full p-2 border rounded-lg outline-none" placeholder="Enter your name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="w-full p-2 border rounded-lg outline-none" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea className="w-full p-2 border rounded-lg outline-none" rows="4" placeholder="Your message"></textarea>
          </div>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;