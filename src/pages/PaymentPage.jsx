import React from "react";
import { useLocation } from "react-router-dom";
import  Button  from "../components/ui/Button";

const Payment = () => {
  const { state } = useLocation();
  const order = state?.order;

  if (!order) {
    return <h2>No Payment Details Found</h2>;
  }

  const handlePaymentSuccess = () => {
    alert("Payment Successful!");
    
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Payment Page</h2>
      <p>Order ID: #{order.id}</p>
      <p>Grand Total: ₹{order.total}</p>

      <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
        <select className="border p-2 rounded w-full mb-4">
          <option>Credit/Debit Card</option>
          <option>UPI</option>
          <option>Net Banking</option>
          <option>Cash on Delivery</option>
        </select>
        <Button 
          onClick={handlePaymentSuccess} 
          className="bg-blue-500 text-white w-full py-2 rounded-lg"
        >
          Pay Now
        </Button>
      </div>
    </div>
  );
};

export default Payment;
