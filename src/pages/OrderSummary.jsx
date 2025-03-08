import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedAddress = location.state?.selectedAddress;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="bg-blue-600 text-white p-3 flex items-center rounded-t-lg">
        <span className="font-semibold text-lg">ORDER SUMMARY</span>
      </div>

      <div className="bg-white shadow-md p-4 rounded-b-lg">
        {selectedAddress ? (
          <div className="border p-4 mb-2 rounded-md border-gray-300">
            <p className="font-semibold text-gray-800">{selectedAddress.name} <span className="text-sm bg-gray-200 px-2 py-0.5 rounded">{selectedAddress.type}</span></p>
            <p className="text-gray-600">{selectedAddress.address}, <span className="font-bold">{selectedAddress.pincode}</span></p>
          </div>
        ) : (
          <p className="text-gray-600">No address selected.</p>
        )}

        <button
          className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-md text-sm w-full"
          onClick={() => navigate("/payment-options")}
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
