import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Charger",
      price: 1200,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Phone Case",
      price: 500,
      quantity: 1,
      image: "https://via.placeholder.com/100",
    },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b py-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div className="flex-1 ml-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">₹{item.price}</p>
              </div>
              <div className="flex items-center">
                <button className="px-2 bg-gray-200 rounded" onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span className="mx-2">{item.quantity}</span>
                <button className="px-2 bg-gray-200 rounded" onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
              <button className="text-red-500 ml-4" onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))}
          <div className="mt-6 text-right">
            <h3 className="text-xl font-bold">Total: ₹{totalPrice}</h3>
            <button className="bg-black text-white px-6 py-2 rounded-lg mt-4">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
