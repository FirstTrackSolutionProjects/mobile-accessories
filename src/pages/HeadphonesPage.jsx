import React from "react";

const HeadphonesPage = () => {
  const headphones = [
    {
      id: 1,
      name: "Wireless Headphone A",
      image: "/assets/headphone1.jpg",
      price: "$99",
    },
    {
      id: 2,
      name: "Noise Cancelling Headphone B",
      image: "/assets/headphone2.jpg",
      price: "$149",
    },
    {
      id: 3,
      name: "Gaming Headphone C",
      image: "/assets/headphone3.jpg",
      price: "$129",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-center text-3xl font-bold mt-8">Headphones</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {headphones.map((headphone) => (
          <div
            key={headphone.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={headphone.image}
              alt={headphone.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{headphone.name}</h2>
              <p className="text-gray-600">{headphone.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeadphonesPage;
