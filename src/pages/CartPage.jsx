// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import  Button  from "../components/ui/Button";
// import { increaseQuantity, decreaseQuantity, removeItem } from "../redux/cartslice/cartslice";
// import { setCheckoutItems } from "../redux/checkoutSlice/checkoutSlice";
// import { Trash2, Plus, Minus } from "lucide-react";

// const CartPage = () => {
//   const cartItems = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Calculate the total amount of the cart
//   const total = cartItems.reduce((sum, item) => sum + item.offerPrice * item.quantity, 0);

//   // Checkout function to navigate to the Order page
//   const checkout = () => {
//     const order = {
//       id: Date.now(), // Generate a unique order ID
//       customerName: "John Doe", // Placeholder customer name
//       items: cartItems,
//       total: total,
//     };
//     dispatch(setCheckoutItems(cartItems)); // Store the items in checkout state (optional)
//     navigate('/orders', { state: { order } }); // Navigate to Order page with order data
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <div>
//           {cartItems.map((item) => (
//             <div key={item.id} className="border p-4 mb-4 flex justify-between items-center rounded-lg bg-white shadow-md">
//               <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg" />
//               <div className="flex flex-col">
//                 <h3 className="font-semibold">{item.name}</h3>
//                 <p>Offer Price: ₹{item.offerPrice}</p>
//                 <div className="flex items-center gap-2 mt-2">
//                   <Button onClick={() => dispatch(decreaseQuantity({ itemId: item.id }))} variant="outline">
//                     <Minus />
//                   </Button>
//                   <span className="font-bold text-lg">{item.quantity}</span>
//                   <Button onClick={() => dispatch(increaseQuantity({ itemId: item.id }))} variant="outline">
//                     <Plus />
//                   </Button>
//                 </div>
//               </div>
//               <p className="font-bold">₹{item.offerPrice * item.quantity}</p>
//               <Button onClick={() => dispatch(removeItem({ itemId: item.id }))} className="bg-red-500 text-white">
//                 <Trash2 />
//               </Button>
//             </div>
//           ))}
//           <div className="text-xl font-bold mt-4">Total: ₹{total}</div>
//           <Button onClick={checkout} className="mt-4 bg-blue-500 text-white w-full">
//             Proceed to Checkout
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { increaseQuantity, decreaseQuantity, removeItem } from "../redux/cartslice/cartslice";
import { setCheckoutItems } from "../redux/checkoutSlice/checkoutSlice";
import { Plus, Minus } from "lucide-react";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = cartItems.reduce((sum, item) => sum + item.offerPrice * item.quantity, 0);

  const checkout = () => {
    const order = {
      id: Date.now(),
      customerName: "John Doe",
      items: cartItems,
      total: total,
    };
    dispatch(setCheckoutItems(cartItems));
   navigate('/address', {
      state: {
        order: {
          id: Date.now(),
          customerName: "John Doe",
          items: cartItems,
          total: total,
        },
      },
    });
    
  };

  return (
    <div className="p-6 bg-gray-100 w-full">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left: Product Details */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Product Details</h3>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-sm rounded-lg p-4 mb-4 flex items-center justify-between"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1 px-4">
                  <h4 className="font-semibold text-base truncate">{item.name}</h4>
                  <p className="text-sm text-gray-600">₹{item.offerPrice}</p>
                
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  <div className="flex gap-2 mt-2">
                    <Button onClick={() => dispatch(decreaseQuantity({ itemId: item.id }))} variant="outline" size="sm">
                      <Minus size={16} />
                    </Button>
                    <span className="text-lg font-semibold">{item.quantity}</span>
                    <Button onClick={() => dispatch(increaseQuantity({ itemId: item.id }))} variant="outline" size="sm">
                      <Plus size={16} />
                    </Button>
                  </div>
                  <button
                    onClick={() => dispatch(removeItem({ itemId: item.id }))}
                    className="text-black text-sm mt-2"
                  >
                    ✕ REMOVE
                  </button>
                </div>
                <p className="font-bold text-gray-700">₹{item.offerPrice * item.quantity}</p>
              </div>
            ))}
          </div>

          {/* Right: Price Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-6">
              <h3 className="text-lg font-semibold mb-4">Price Details ({cartItems.length} Items)</h3>
              <div className="flex justify-between text-sm mb-2">
                <span>Total Product Price</span>
                <span>₹{total}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-semibold text-lg mb-4">
                <span>Order Total</span>
                <span>₹{total}</span>
              </div>
              
              <Button
                onClick={checkout}
                className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold"
              >
                Continue
              </Button>
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

