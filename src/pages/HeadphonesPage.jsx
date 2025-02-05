import React from "react";

const HeadphonesPage = () => {
  const headphones = [
    {
      id: 1,
      name: "Noise Airwave Max 4 Wireless Over-Ear",
      image: "/assets/headphone1.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 2,
      name: "Stereo Headphones - BASS 2.0 ",
      image: "/assets/headphone2.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 3,
      name: "Apple AirPods Max Wireless Over-Ear",
      image: "/assets/headphone3.jpg",
      OriginalPrice: "$3999",
      OfferPrice: "999",
    },
    {
      id: 4,
      name: "m360 Synergy HD Active Noise Cancelling Wireless",
      image: "/assets/headphone4.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 5,
      name: "PTron Studio High Bass Over The Ear Bluetooth",
      image: "/assets/headphone5.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 6,
      name: "Hp wired on ear headphones with mic",
      image: "/assets/headphone6.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 7,
      name: "Edifier G2 II 7.1 Surround Sound Gaming Headset",
      image: "/assets/headphone7.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 8,
      name: "Philips TAH8506BK wireless headphones",
      image: "/assets/headphone8.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
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
             <div className="mt-4">
              <h2 className="text-lg font-semibold">{headphone.name}</h2>
              <p className="text-gray-400 line-through">{headphone.OriginalPrice}</p>
              <p className="text-red-500 text-xl font-bold">{headphone.OfferPrice}</p>
              <div className="mt-4 flex gap-2">
              <button className="bg-blue-500 text-white px-4 py-2 rounded  cursor-pointer">Add to Cart</button>
              <button className="bg-green-500 text-white px-4 py-2 rounded  cursor-pointer">Buy Now</button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeadphonesPage;
