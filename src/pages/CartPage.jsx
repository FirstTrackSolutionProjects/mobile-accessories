import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="border p-4 mb-2 flex justify-between">
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
              </div>
              <p className="font-bold">${item.offerPrice * item.quantity}</p>
             
            </div>
            ))}
         <button
                onClick={() => navigate("/checkout")}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Proceed to checkout
              </button>

        </div>
      )}
    </div>
  );
};

export default CartPage;

