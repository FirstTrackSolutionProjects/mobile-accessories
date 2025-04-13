import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const cartItems = useSelector((state) => state.cart.items);
  const address = location.state?.address;
  const paymentMethod = location.state?.paymentMethod;

  const [showSuccess, setShowSuccess] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.offerPrice * item.quantity,
    0
  );

  const placeOrder = () => {
    const order = {
      items: cartItems,
      address,
      paymentMethod,
      total,
    };

    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      // Uncomment below when order success page is ready
      // navigate("/order-success", { state: { order } });
    }, 3000);
  };

  return (
    <div className="relative">
      {/* ✅ Success Popup at Top */}
      {showSuccess && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded shadow-lg transition-all duration-300 ease-in-out">
            🎉 <strong className="font-semibold">Order Placed!</strong> Your order has been placed successfully.
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row p-6 gap-6 min-h-screen bg-gray-100">
        {/* Left Section */}
        <div className="flex-1 space-y-6">
          {/* Cart Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg p-4 shadow border"
            >
              <div className="text-sm text-gray-500 mb-2 font-medium">
                 Estimated Delivery by {item.deliveryDate || "Tuesday, 22nd Apr"}
              </div>
              <div className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="font-semibold text-gray-800 line-clamp-1">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-600">₹{item.offerPrice}</p>
                  <p className="text-xs text-gray-500">
                    Size: {item.size || "Free Size"} • Qty: {item.quantity}
                  </p>
                </div>
              </div>
             
              <p className="text-xs text-green-600">Free Delivery</p>
            </div>
          ))}

          {/* Delivery Address */}
          <div className="bg-white rounded-lg p-4 shadow border">
            <h4 className="font-semibold text-gray-700 mb-2">📍 Delivery Address</h4>
            <div className="flex justify-between">
              <div>
                <p className="font-semibold text-gray-800">{address?.name || "John Doe"}</p>
                <p className="text-sm text-gray-600">{address?.addressLine || "No address"}</p>
                <p className="text-sm text-gray-600">{address?.phone || "No phone"}</p>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="bg-white rounded-lg p-4 shadow border">
            <h4 className="font-semibold text-gray-700 mb-2">💳 Payment Mode</h4>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-700">{paymentMethod || "Not selected"}</p>
            </div>
          </div>
        </div>

        {/* Price Summary */}
        <div className="w-full md:w-1/3 bg-white shadow p-6 rounded-lg">
          <h3 className="font-semibold mb-4">
            Price Details ({cartItems.length} Items)
          </h3>

          <div className="flex justify-between mb-2 text-sm text-gray-600">
            <span className="underline">Total Product Price</span>
            <span>₹{total}</span>
          </div>

          <hr className="my-2" />

          <div className="flex justify-between text-lg font-bold">
            <span>Order Total</span>
            <span>₹{total}</span>
          </div>

          <button
            onClick={placeOrder}
            className="w-full mt-4 py-2 bg-purple-700 text-white font-semibold rounded"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
