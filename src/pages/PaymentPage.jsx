import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const order = state?.order || { total: 589, items: [1, 2, 3] };

  const [paymentMethod, setPaymentMethod] = useState("cod");
  

  const discountAmount = 42;
  const discountedTotal = order.total - discountAmount;

  const handleContinue = () => {
    navigate("/confirmation", {
      state: {
        ...order,
        paymentMethod,
        finalTotal: paymentMethod === "online" ? discountedTotal : order.total,
      },
    });
  };

  return (
    <div className="flex flex-col md:flex-row p-6 gap-6 min-h-screen bg-gray-100">
      {/* Left - Payment Method */}
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-4">Select Payment Method</h2>

        {/* Cash on Delivery */}
        <div
          className={`border rounded-lg p-4 mb-4 cursor-pointer ${
            paymentMethod === "cod"
              ? "border-purple-600 bg-purple-50"
              : "bg-white"
          }`}
          onClick={() => setPaymentMethod("cod")}
        >
          <label className="flex items-center gap-4">
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
              className="accent-purple-600"
            />
            <span className="text-lg font-semibold">₹{order.total}</span>
            <span className="text-lg font-semibold">Cash on Delivery </span>
          </label>
        </div>

        {/* Pay Online */}
        <div
          className={`border rounded-lg p-4 cursor-pointer ${
            paymentMethod === "online"
              ? "border-purple-600 bg-purple-50"
              : "bg-white"
          }`}
          onClick={() => setPaymentMethod("online")}
        >
          <label className="flex items-start gap-4">
            <input
              type="radio"
              name="payment"
              value="online"
              checked={paymentMethod === "online"}
              onChange={() => setPaymentMethod("online")}
              className="accent-purple-600 mt-1"
            />
            <div>
              <p className="text-sm line-through">₹{order.total}</p>
              <p className="text-lg font-semibold text-green-600">
                ₹{discountedTotal}{" "}
                <span className="text-black">Pay Online </span>
              </p>
              <span className="text-xs text-green-600 font-medium bg-green-100 px-2 py-1 rounded inline-block mt-1">
                Save ₹{discountAmount}
              </span>
            </div>
          </label>
        </div>
      </div>

      {/* Right - Price Details */}
      <div className="w-full md:w-1/3">
        <div className="bg-white shadow p-6 rounded-lg sticky top-4">
          <h3 className="font-semibold mb-4">
            Price Details ({order.items?.length || 0} Items)
          </h3>

          <div className="flex justify-between mb-2">
            <span className="text-sm">Total Product Price</span>
            <span>
              + ₹{paymentMethod === "online" ? discountedTotal : order.total}
            </span>
          </div>

          <hr />

          <div className="flex justify-between mt-2 font-bold text-lg">
            <span>Order Total</span>
            <span>
              ₹{paymentMethod === "online" ? discountedTotal : order.total}
            </span>
          </div>

          <button
            onClick={handleContinue}
            className="w-full mt-4 py-2 bg-purple-700 text-white font-semibold rounded"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;

