// // src/components/Cart.jsx

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';

// const Cart = () => {
//   const items = useSelector(state => state.cart.items);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
//       {items.length === 0 ? (
//         <p className="text-gray-600">Your cart is empty</p>
//       ) : (
//         <div className="space-y-4">
//           {items.map(item => (
//             <div key={item.id} className="flex items-center justify-between p-4 border rounded shadow">
//               <div>
//                 <h2 className="text-lg font-semibold">{item.title}</h2>
//                 <p className="text-gray-500">Price: ₹{item.price}</p>
//               </div>
//               <img src={item.img} alt={item.title} className="w-16 h-16 object-cover rounded" />
//             </div>
//           ))}
//         </div>
//       )}
//       <Link to="/checkout">
//         <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//           Proceed to Checkout
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default Cart;