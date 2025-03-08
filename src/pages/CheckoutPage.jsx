import React, { useState } from "react";


const CheckoutPage = () => {
  const [selectedAddress, setSelectedAddress] = useState(0);
  const [showForm, setShowForm] = useState(false);
 

  const addresses = [
    {
      id: 1,
      name: "Adya Ananya Mishra",
      type: "HOME",
      phone: "9348553817",
      address: "In front of Raja Nibas, Telephone exchange Baikuntha Vihar lane 1, Keonjhar, Odisha",
      pincode: "758001",
    },
  ];

  const handleDeliverHere = () => {
    if (addresses[selectedAddress]) {
      navigate("/order-summary", { state: { selectedAddress: addresses[selectedAddress] } });
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* DELIVERY ADDRESS HEADER */}
      <div className="bg-gray-600 text-white p-3 flex justify-between items-center rounded-t-lg">
        <span className="font-semibold text-lg flex items-center">
          <span className="bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm font-bold">
            2
          </span>
          DELIVERY ADDRESS
        </span>
      </div>

      {/* ADDRESS LIST OR FORM */}
      <div className="bg-white shadow-md p-4 rounded-b-lg">
        {showForm ? (
          // Address Form
          <div>
            <h2 className="text-lg font-semibold mb-3">ADD A NEW ADDRESS</h2>
            <button className="bg-black text-white px-4 py-2 rounded-md">Use my current location</button>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <input type="text" placeholder="Name" className="border p-2 rounded" />
              <input type="text" placeholder="10-digit mobile number" className="border p-2 rounded" />
              <input type="text" placeholder="Pincode" className="border p-2 rounded" />
              <input type="text" placeholder="Locality" className="border p-2 rounded" />
              <textarea placeholder="Address (Area and Street)" className="border p-2 rounded col-span-2"></textarea>
              <input type="text" placeholder="City/District/Town" className="border p-2 rounded" />
              <select className="border p-2 rounded">
                <option>--Select State--</option>
                <option>Odisha</option>
                <option>Karnataka</option>
              </select>
              <input type="text" placeholder="Landmark (Optional)" className="border p-2 rounded" />
              <input type="text" placeholder="Alternate Phone (Optional)" className="border p-2 rounded" />
            </div>

            {/* Address Type */}
            <div className="mt-4">
              <p className="font-semibold">Address Type</p>
              <label className="mr-4">
                <input type="radio" name="addressType" className="mr-2" /> Home (All day delivery)
              </label>
              <label>
                <input type="radio" name="addressType" className="mr-2" /> Work (Delivery between 10 AM - 5 PM)
              </label>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex space-x-4">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md" onClick={() => setShowForm(false)}>
                SAVE AND DELIVER HERE
              </button>
              <button className="text-blue-600" onClick={() => setShowForm(false)}>CANCEL</button>
            </div>
          </div>
        ) : (
          // Address List
          <>
            {addresses.map((addr, index) => (
              <div
                key={addr.id}
                className={`border p-4 mb-2 rounded-md ${selectedAddress === index ? "border-black bg-red-50" : "border-gray-300"}`}
              >
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="address"
                    checked={selectedAddress === index}
                    onChange={() => setSelectedAddress(index)}
                    className="mt-1 accent-blue-600"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{addr.name} <span className="text-sm bg-gray-200 px-2 py-0.5 rounded">{addr.type}</span> <span className="font-bold">{addr.phone}</span></p>
                    <p className="text-gray-600">{addr.address}, <span className="font-bold">{addr.pincode}</span></p>
                    {selectedAddress === index && (
                      <button
                        className="mt-3 bg-orange-500 text-white px-4 py-2 rounded-md text-sm cursor-pointer"
                        onClick={handleDeliverHere}
                      >
                        DELIVER HERE
                      </button>
                    )}
                  </div>
                </label>
              </div>
            ))}

            {/* Add New Address Button */}
            <button className="text-blue-600 font-semibold flex items-center space-x-2 mt-2" onClick={() => setShowForm(true)}>
              <span className="text-xl">+</span> <span>Add a new address</span>
            </button>
          </>
        )}
      </div>
         {/* ORDER SUMMARY & PAYMENT OPTIONS */}
         <div className="mt-4">
        <div className="bg-gray-100 p-3 rounded-lg cursor-pointer">
          <span className="text-gray-700 font-semibold">
            <span className="bg-gray-300 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm font-bold inline-block">
              3
            </span>
            ORDER SUMMARY
          </span>
        </div>

        <div className="bg-gray-100 p-3 mt-2 rounded-lg cursor-pointer">
          <span className="text-gray-700 font-semibold">
            <span className="bg-gray-300 text-gray-700 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-sm font-bold inline-block">
              4
            </span>
            PAYMENT OPTIONS
          </span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

