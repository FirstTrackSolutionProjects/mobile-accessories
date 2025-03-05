// import React from "react";
// import { useCart } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const { cart, updateQuantity, removeFromCart } = useCart();
//   const navigate = useNavigate();

//   const handleCheckout = () => {
//     navigate("/checkout");
//   };

//   return (
//     <div>
//       <h2>Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         cart.map((item) => (
//           <div key={item.id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
//             <h3>{item.name} - ${item.offerPrice}</h3>
//             <p>
//               Quantity: 
//               <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
//               {item.quantity}
//               <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
//             </p>
//             <button onClick={() => removeFromCart(item.id)}>Remove</button>
//           </div>
//         ))
//       )}
//       {cart.length > 0 && <button onClick={handleCheckout}>Proceed to Checkout</button>}
//     </div>
//   );
// };

// export default Cart;
