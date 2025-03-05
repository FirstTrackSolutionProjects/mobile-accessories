// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeItem, updateQuantity, clearCart } from "../redux/cartslice/cartslice";

// const CartPage = () => {
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   const handleRemove = (id) => {
//     dispatch(removeItem(id));
//   };

//   const handleQuantityChange = (id, quantity) => {
//     dispatch(updateQuantity({ id, quantity }));
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold">Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div>
//           {cart.map((item) => (
//             <div key={item.id} className="flex justify-between border p-2 my-2">
//               <span>{item.name}</span>
//               <span>${item.price}</span>
//               <input
//                 type="number"
//                 min="1"
//                 value={item.quantity}
//                 onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
//                 className="w-16 border p-1"
//               />
//               <button onClick={() => handleRemove(item.id)} className="bg-red-500 text-white px-2 py-1">
//                 Remove
//               </button>
//             </div>
//           ))}
//           <button onClick={() => dispatch(clearCart())} className="bg-gray-500 text-white px-4 py-2 mt-4">
//             Clear Cart
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;
