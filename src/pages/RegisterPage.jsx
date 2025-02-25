import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaMobileAlt, FaBuilding } from "react-icons/fa";

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center  bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-90">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6 text-center">
        Register
        </h2>

        <form>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Full Name</label>
            <div className="flex items-center border rounded-lg p-3 bg-gray-50">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Your full name"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <div className="flex items-center border rounded-lg p-3 bg-gray-50">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Password</label>
            <div className="flex items-center border rounded-lg p-3 bg-gray-50">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Confirm Password</label>
            <div className="flex items-center border rounded-lg p-3 bg-gray-50">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Mobile Number</label>
            <div className="flex items-center border rounded-lg p-3 bg-gray-50">
              <FaMobileAlt className="text-gray-500 mr-2" />
              <input
                type="tel"
                placeholder="1234567890"
                className="w-full bg-transparent outline-none"
              />
            </div>
          </div>
         

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:opacity-80 transition"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-black font-medium">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
