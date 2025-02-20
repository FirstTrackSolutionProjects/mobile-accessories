import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white p-10 rounded-lg shadow-lg w-100 text-center">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form>
          <div className="mb-4 text-left">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div className="mb-6 text-left">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4">
          Don't have an account? <Link to="/register" className="text-blue-500 font-medium">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
