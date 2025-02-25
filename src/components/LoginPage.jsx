// import React from "react";
// import { Link } from "react-router-dom";
// import { FaEnvelope, FaLock } from "react-icons/fa";

// const LoginPage = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
//         <h2 className="text-2xl font-bold mb-6">
//           Sign in 
//         </h2>
//         <form>
//           {/* Email Field */}
//           <div className="mb-4 text-left">
//             <label className="block text-sm font-medium text-gray-700">
//               Email address
//             </label>
//             <div className="flex items-center border rounded-lg p-3 bg-gray-50">
//               <FaEnvelope className="text-gray-500 mr-2" />
//               <input
//                 type="email"
//                 placeholder="you@example.com"
//                 className="w-full bg-transparent outline-none"
//               />
//             </div>
//           </div>

//           {/* Password Field */}
//           <div className="mb-4 text-left">
//             <label className="block text-sm font-medium text-gray-700">
//               Password
//             </label>
//             <div className="flex items-center border rounded-lg p-3 bg-gray-50">
//               <FaLock className="text-gray-500 mr-2" />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full bg-transparent outline-none"
//               />
//             </div>
//           </div>

//           {/* Forgot Password */}
//           <div className="text-right mb-6">
//             <Link to="/forgot-password" className="text-gray-600 text-sm">
//               Forgot your password?
//             </Link>
//           </div>

//           {/* Sign In Button */}
//           <button
//             type="submit"
//             className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:opacity-80 transition"
//           >
//             Sign in
//           </button>
//         </form>

//         {/* OR Separator */}
//         <div className="flex items-center my-6">
//           <hr className="w-full border-gray-300" />
//           <span className="px-3 text-gray-500 text-sm">OR</span>
//           <hr className="w-full border-gray-300" />
//         </div>

//         {/* Register Link */}
//         <p className="text-sm text-gray-600">
//           New User?{" "}
//           <Link to="/register" className="text-blue-600 font-medium">
//             Create a new account!
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy authentication - Replace with API call
    if (email === "admin@example.com" && password === "password") {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials. Try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold mb-6">Sign in</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4 text-left">
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="flex items-center border rounded-lg p-3 bg-gray-50">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-transparent outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-4 text-left">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="flex items-center border rounded-lg p-3 bg-gray-50">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg text-lg font-semibold hover:opacity-80 transition"
          >
            Sign in
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4">
          New User?{" "}
          <Link to="/register" className="text-blue-600 font-medium">
            Create a new account!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
