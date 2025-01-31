import React from "react";

const Order = ({ order }) => {
  if (!order) {
    return <h2>No Orders Found</h2>;
  }

  return (
    <div>
      <h2>Order #{order.id}</h2>
      <p>Customer: {order.customerName}</p>
      <ul>
        {order.items.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
      <p>Total: ${order.total}</p>
    </div>
  );
};

export default Order;
