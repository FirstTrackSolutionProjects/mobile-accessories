// import React, { useState } from "react";
// import { FaTimes, FaBars } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <button className="p-3 text-green-600" onClick={() => setIsOpen(!isOpen)}>
//         <FaBars size={24} />
//       </button>

//       {isOpen && (
//         <div className="fixed inset-0 bg-white w-64 p-5 shadow-lg z-50">
//           <button className="absolute top-4 right-4 text-gray-600" onClick={() => setIsOpen(false)}>
//             <FaTimes size={24} />
//           </button>

//           <nav className="flex flex-col gap-4 text-green-600">
//             <Link to="/" className="hover:text-green-800">Home</Link>
//             <Link to="/category" className="hover:text-green-800">Category</Link>
//             <Link to="/order" className="hover:text-green-800">My Orders</Link>
//             <Link to="/refer" className="hover:text-green-800">Refer & Earn</Link>

//             <div className="mt-4 font-bold">Partner</div>
//             <Link to="/upload" className="ml-4 hover:text-green-800">Upload Catalog</Link>

//             <Link to="/about" className="mt-4 hover:text-green-800">About Us</Link>
//           </nav>
//         </div>
//       )}
//     </>
//   );
// };

// export default Sidebar;
