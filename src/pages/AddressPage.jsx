import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

const AddressPage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const order = state?.order || {};

  const [selectedAddressIndex, setSelectedAddressIndex] = useState(0);
  const [addresses, setAddresses] = useState([
    {
      name: "Adya Ananya Mishra",
      addressLine: "misty hostel, BRIT Colony St, Nilakantha Nagar, Nayapalli, Bhubaneswar",
      cityStateZip: "Odisha, 751012",
      phone: "9348553817",
    },
    {
      name: "Adya Ananya Mishra",
      addressLine: "telephone exchange baikuntha Bihar lane-1 in front of Raja nibas, telephone exchange",
      cityStateZip: "Keonjhar, Odisha, 758002",
      phone: "9348553817",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [newAddress, setNewAddress] = useState({
    name: "",
    addressLine: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  });

  const handleDelivery = () => {
    const updatedOrder = {
      ...order,
      address: addresses[selectedAddressIndex],
    };
    navigate("/payment", { state: { order: updatedOrder } });
  };

  const handleInputChange = (e) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const fullAddress = {
      name: newAddress.name,
      addressLine: newAddress.addressLine,
      cityStateZip: `${newAddress.city}, ${newAddress.state}, ${newAddress.pincode}`,
      phone: newAddress.phone,
    };

    if (editIndex !== null) {
      const updated = [...addresses];
      updated[editIndex] = fullAddress;
      setAddresses(updated);
      setEditIndex(null);
    } else {
      setAddresses([...addresses, fullAddress]);
      setSelectedAddressIndex(addresses.length);
    }

    setShowForm(false);
    setNewAddress({
      name: "",
      addressLine: "",
      city: "",
      state: "",
      pincode: "",
      phone: "",
    });
  };

  const handleEdit = (index) => {
    const address = addresses[index];
    const [city, state, pincode] = address.cityStateZip.split(", ");
    setNewAddress({
      name: address.name,
      addressLine: address.addressLine,
      city: city || "",
      state: state || "",
      pincode: pincode || "",
      phone: address.phone,
    });
    setEditIndex(index);
    setShowForm(true);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 min-h-screen">
      {/* Left - Address Selection or Form */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Select Delivery Address</h2>
          {!showForm && (
            <button
              className="text-purple-700 font-semibold"
              onClick={() => {
                setShowForm(true);
                setEditIndex(null);
              }}
            >
              + ADD NEW ADDRESS
            </button>
          )}
        </div>

        {!showForm ? (
          addresses.map((address, index) => (
            <div
              key={index}
              className={`p-6 mb-4 rounded-lg shadow border ${
                selectedAddressIndex === index
                  ? "bg-indigo-50 border-purple-600"
                  : "bg-white"
              }`}
            >
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="radio"
                  checked={selectedAddressIndex === index}
                  onChange={() => setSelectedAddressIndex(index)}
                  className="mt-1 accent-purple-600"
                />
                <div className="flex-1">
                  <h3 className="font-bold">{address.name}</h3>
                  <p>{address.addressLine}</p>
                  <p>{address.cityStateZip}</p>
                  <p className="mt-1">{address.phone}</p>
                </div>
              </label>

              <div className="mt-4 flex gap-2">
                <Button
                  className="flex-1 bg-purple-700 text-white"
                  onClick={handleDelivery}
                >
                  Deliver to this Address
                </Button>
                <button
                  className="text-sm text-blue-600 underline"
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="relative bg-white p-6 rounded-lg shadow space-y-4">
            {/* Close (X) Button */}
            <button
              type="button"
              className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-red-600 font-bold"
              onClick={() => {
                setShowForm(false);
                setEditIndex(null);
              }}
            >
              &times;
            </button>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <h3 className="text-lg font-semibold">{editIndex !== null ? "Edit Address" : "Add New Address"}</h3>

              <input
                name="name"
                value={newAddress.name}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                placeholder="Name"
                required
              />

              <input
                name="phone"
                value={newAddress.phone}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                placeholder="Contact Number"
                required
              />

              <input
                name="addressLine"
                value={newAddress.addressLine}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                placeholder="House no./ Building / Street"
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  name="city"
                  value={newAddress.city}
                  onChange={handleInputChange}
                  className="border p-2 rounded"
                  placeholder="City"
                  required
                />
                <input
                  name="state"
                  value={newAddress.state}
                  onChange={handleInputChange}
                  className="border p-2 rounded"
                  placeholder="State"
                  required
                />
              </div>

              <input
                name="pincode"
                value={newAddress.pincode}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                placeholder="Pincode"
                required
              />

              <div className="flex gap-4">
                <Button type="submit" className="flex-1 bg-purple-700 text-white">
                  {editIndex !== null ? "Update Address" : "Save Address and Continue"}
                </Button>
                <Button
                  type="button"
                  className="bg-gray-300 text-black"
                  onClick={() => {
                    setShowForm(false);
                    setEditIndex(null);
                  }}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Right - Price Details */}
      <div className="w-full md:w-1/3 bg-white shadow p-6 rounded-lg">
        <h3 className="font-semibold mb-4">Price Details ({order.items?.length || 0} Items)</h3>
        <div className="flex justify-between mb-2">
          <span>Total Product Price</span>
          <span>₹{order.total}</span>
        </div>
        <hr />
        <div className="flex justify-between mt-2 font-bold">
          <span>Order Total</span>
          <span>₹{order.total}</span>
        </div>
      </div>
    </div>
  );
};

export default AddressPage;


