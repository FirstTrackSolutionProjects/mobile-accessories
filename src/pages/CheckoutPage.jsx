// import React from "react";
// import { useCart } from "../context/CartContext";
// import { Card, CardContent } from "../components/ui/card";
// import { Button } from "../components/ui/button";
// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// const CheckoutPage = () => {
//   const { cart, calculateTotal, clearCart } = useCart();
//   const dispatch = useDispatch()
//   const checkoutItems = useSelector((state)=>state.checkout.items)
//   // Place Order Handler
//   const handlePlaceOrder = () => {
//     alert("Order placed successfully!");
//     clearCart();
//   };
//   useEffect(()=>{},[])

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-4">Checkout</h1>

//       {/* Returning Customer Section */}
//       <Card className="p-6 mb-4 border ">
//         <label className="flex items-center mb-2">
//           <input type="checkbox" className="mr-2" />
//           <span>
//             Returning customer?{" "}
//             <a href="#" className="text-green-600">
//               Click here to login
//             </a>
//           </span>
//         </label>

//         <div className="flex gap-2 mt-2">
//           <select className="p-2 border rounded-md">
//             <option>IN +91</option>
//             <option>US +1</option>
//             <option>UK +44</option>
//             <option>CA +1</option>
//           </select>
//           <input className="p-2 border rounded-md flex-1" placeholder="Phone" />
//         </div>

//         <div className="flex gap-4 mt-4">
//           <Button className="w-full bg-blue-500">Login with OTP</Button>
//           <Button className="w-full bg-blue-500">
//             Login with Email & Password
//           </Button>
//         </div>

//         <label className="flex items-center mt-4">
//           <input type="checkbox" className="mr-2" />
//           <span>
//             Have a coupon?{" "}
//             <a href="#" className="text-green-600">
//               Click here to enter your code
//             </a>
//           </span>
//         </label>
//       </Card>

//       {/* Billing Details */}
//       <Card className="p-6 mb-4">
//         <h2 className="text-xl font-semibold">Billing Details</h2>
//         <div className="grid gap-4 mt-4">
//           <input
//             className="p-2 border rounded-md"
//             placeholder="First Name"
//             required
//           />
//           <input
//             className="p-2 border rounded-md"
//             placeholder="Last Name"
//             required
//           />
//           <input
//             className="p-2 border rounded-md"
//             placeholder="Phone Number"
//             required
//           />
//           <input
//             className="p-2 border rounded-md"
//             placeholder="Email Address"
//             required
//           />
//           <input
//             className="p-2 border rounded-md"
//             placeholder="Street Address"
//             required
//           />
//           <input
//             className="p-2 border rounded-md"
//             placeholder="City"
//             required
//           />
//           <input
//             className="p-2 border rounded-md"
//             placeholder="State"
//             required
//           />
//           <input
//             className="p-2 border rounded-md"
//             placeholder="PIN Code"
//             required
//           />
//         </div>
//       </Card>

//       {/* Order Summary */}
//       <Card className="p-6 mb-4">
//         <h2 className="text-xl font-semibold">Your Order</h2>
//         <div className="mt-4 space-y-2">
//           {checkoutItems.length === 0 ? (
//             <p>Your cart is empty.</p>
//           ) : (
//             checkoutItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex justify-between items-center p-2 border-b"
//               >
//                 <p>
//                   {item.name}  {item.quantity}
//                 </p>
//                 <p>₹{item.price * item.quantity}</p>
//               </div>
//             ))
//           )}
//           <div className="flex justify-between font-bold text-lg mt-4">
//             <p>Total:</p>
//             <p>₹{calculateTotal()}</p>
//           </div>
//         </div>
//       </Card>

//       {/* Payment Method */}
//       <Card className="p-6 mb-4">
//         <h2 className="text-xl font-semibold">Payment Method</h2>
//         <div className="mt-4 space-y-2">
//           <label className="flex items-center">
//             <input type="radio" name="payment" className="mr-2" />
//             Cash on Delivery
//           </label>
//           <label className="flex items-center">
//             <input type="radio" name="payment" className="mr-2" />
//             Razorpay
//           </label>
//         </div>
//       </Card>

//       <Button
//         className="mt-4 w-full bg-green-500 text-white py-2 rounded-md"
//         onClick={handlePlaceOrder}
//       >
//         Place Order
//       </Button>
//     </div>
//   );
// };

// export default CheckoutPage;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { clearCheckoutItems } from "../redux/checkoutSlice/checkoutSlice";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const checkoutItems = useSelector((state) => state.checkout.items);

  // Place Order Handler
  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    dispatch(clearCheckoutItems());
  };

  // Calculate Total Price
  const calculateTotal = () => {
    return checkoutItems.reduce((sum, item) => sum + item.offerPrice * item.quantity, 0);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>

      {/* Returning Customer Section */}
      <Card className="p-6 mb-4 border">
        {/* <label className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          <span>
            Returning customer?{" "}
            <a href="#" className="text-green-600">
              Click here to login
            </a>
          </span>
        </label> */}

        <div className="flex gap-2 mt-2">
          <select className="p-2 border rounded-md">
            <option>IN +91</option>
            <option>US +1</option>
            <option>UK +44</option>
            <option>CA +1</option>
          </select>
          <input
            className="p-2 border rounded-md flex-1"
            placeholder="Phone"
          />
        </div>

        <div className="flex gap-4 mt-4">
          <Button className="w-full bg-blue-500">Login with OTP</Button>
          <Button className="w-full bg-blue-500">
            Login with Email & Password
          </Button>
        </div>

        <label className="flex items-center mt-4">
          <input type="checkbox" className="mr-2" />
          <span>
            Have a coupon?{" "}
            <a href="#" className="text-green-600">
              Click here to enter your code
            </a>
          </span>
        </label>
      </Card>

      {/* Billing Details */}
      <Card className="p-6 mb-4">
        <h2 className="text-xl font-semibold">Billing Details</h2>
        <div className="grid gap-4 mt-4">
          <input className="p-2 border rounded-md" placeholder="First Name" required />
          <input className="p-2 border rounded-md" placeholder="Last Name" required />
          <input className="p-2 border rounded-md" placeholder="Phone Number" required />
          <input className="p-2 border rounded-md" placeholder="Email Address" required />
          <input className="p-2 border rounded-md" placeholder="Street Address" required />
          <input className="p-2 border rounded-md" placeholder="City" required />
          <input className="p-2 border rounded-md" placeholder="State" required />
          <input className="p-2 border rounded-md" placeholder="PIN Code" required />
        </div>
      </Card>

      
     {/* Order Summary */}
      <Card className="p-6 mb-4">
        <h2 className="text-xl font-semibold">Your Order</h2>
          <div className="mt-4 space-y-2">
            {checkoutItems.length > 0 && 
              checkoutItems.map((item) => (
                <div key={item.id} className="flex justify-between items-center p-2 border-b">
            <p>{item.name} x {item.quantity}</p>
            <p>₹{item.offerPrice * item.quantity}</p>
        </div>
      ))
    }
    <div className="flex justify-between font-bold text-lg mt-4">
      <p>Total:</p>
      <p>₹{calculateTotal()}</p>
    </div>
      </div>
    </Card>


      {/* Payment Method */}
      <Card className="p-6 mb-4">
        <h2 className="text-xl font-semibold">Payment Method</h2>
        <div className="mt-4 space-y-2">
          <label className="flex items-center">
            <input type="radio" name="payment" className="mr-2" />
            Cash on Delivery
          </label>
          <label className="flex items-center">
            <input type="radio" name="payment" className="mr-2" />
            Razorpay
          </label>
        </div>
      </Card>

      <Button
        className="mt-4 w-full bg-green-500 text-white py-2 rounded-md"
        onClick={handlePlaceOrder}
      >
        Place Order
      </Button>
    </div>
  );
};

export default CheckoutPage;
