import React from "react";
import { useLocation } from "react-router-dom";
import { Button } from "../components/ui/button"; 
const Orders = () => {
  const { state } = useLocation();  
  const order = state?.order;

  if (!order) {
    return <h2>No Orders Found</h2>;
  }

  const handlePayment = () => {
    navigate('/payment', { state: { order } });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Order Details</h2>
      <p className="mb-2">Order ID: #{order.id}</p>
      <p className="mb-2">Customer: {order.customerName}</p>
      <div>
        {order.items.map((item, index) => (
          <div key={index} className="border p-4 mb-4 flex justify-between items-center">
            <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg" />
            <div className="flex flex-col">
              <h3 className="font-semibold">{item.name}</h3>
              <p>Offer Price: ₹{item.offerPrice}</p>
              <p>Quantity: {item.quantity}</p>
              <p className="font-bold">Total: ₹{item.offerPrice * item.quantity}</p>
            </div>
          </div>
        ))}
        <div className="text-xl font-bold mt-4">Grand Total: ₹{order.total}</div>
        <Button 
          onClick={handlePayment} 
          className="mt-4 bg-green-500 text-white w-full py-2 rounded-lg"
        >
          Proceed to Payment
        </Button>
      </div>
    </div>
  );
};

export default Orders;
