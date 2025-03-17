// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { Button } from "../components/ui/button";
// import { increaseQuantity ,decreaseQuantity } from "../redux/cartslice/cartslice";
// import { Trash2, Plus, Minus } from 'lucide-react';

// const CartPage = () => {
//   const cartItems = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

 

//   const removeItem = (id) => {
//     dispatch({ type: 'cart/removeItem', payload: id });
//   };

//   const total = cartItems.reduce((sum, item) => sum + item.offerPrice * item.quantity, 0);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <div>
//           {cartItems.map((item) => (
//             <div key={item.id} className="border p-4 mb-2 flex justify-between items-center">
//               <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg" />
//               <div className="flex flex-col">
//                 <h3 className="font-semibold">{item.name}</h3>
//                 <p>Original: ₹{item.originalPrice}</p>
//                 <p>Offer: ₹{item.offerPrice}</p>
//                 <div className="flex items-center gap-2 mt-2">
//                   <Button onClick={() => dispatch(decreaseQuantity({itemId:item.id}))} variant="outline"><Minus /></Button>
//                   <span>{item.quantity}</span>
//                   <Button onClick={() =>  dispatch(increaseQuantity({itemId:item.id}))} variant="outline"><Plus /></Button>
//                 </div>
//               </div>
//               <p className="font-bold">₹{item.offerPrice * item.quantity}</p>
//               <Button onClick={() => removeItem(item.id)} variant="destructive"><Trash2 /></Button>
//             </div>
//           ))}
//           <div className="text-xl font-bold mt-4">Total: ₹{total}</div>
//           <button
//             onClick={() => navigate("/checkout")}
//             className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
//           >
//             Proceed to Checkout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { increaseQuantity, decreaseQuantity, removeItem } from "../redux/cartslice/cartslice";
import { Trash2, X, Plus, Minus } from "lucide-react";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.offerPrice * item.quantity, 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="border p-4 mb-2 flex justify-between items-center">
              <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg" />
              <div className="flex flex-col">
                <h3 className="font-semibold">{item.name}</h3>
                <p>Original: ₹{item.originalPrice}</p>
                <p>Offer: ₹{item.offerPrice}</p>
                <div className="flex items-center gap-2 mt-2">
                  <Button
                    onClick={() => dispatch(decreaseQuantity({ itemId: item.id }))}
                    variant="outline"
                  >
                    <Minus />
                  </Button>
                  <span>{item.quantity}</span>
                  <Button
                    onClick={() => dispatch(increaseQuantity({ itemId: item.id }))}
                    variant="outline"
                  >
                    <Plus />
                  </Button>
                </div>
              </div>
              <p className="font-bold">₹{item.offerPrice * item.quantity}</p>
              <Button
                onClick={() => dispatch(removeItem({ itemId: item.id }))}
                variant="destructive"
              >
                {cartItems.some((cartItem) => cartItem.id === item.id) ? <Trash2 /> : <X />}
              </Button>
            </div>
          ))}
          <div className="text-xl font-bold mt-4">Total: ₹{total}</div>
          <button
            onClick={() => navigate("/checkout")}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
