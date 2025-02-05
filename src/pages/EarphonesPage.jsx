import React from "react";

const EarphonesPage = () => {
  const earphones = [
    {
      id: 1,
      name: "Headset Mobile Earphone",
      image: "/assets/earphone1.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 2,
      name: "Original Vivo iQOO Earphone",
      image: "/assets/earphone2.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 3,
      name: "Apple Mobile Earphone",
      image: "/assets/earphone3.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 4,
      name: "Portronics Wired Earphones and Wired",
      image: "/assets/earphone4.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 5,
      name: "U&I Medal series Ui-378 Champ Mobile Earphone",
      image: "/assets/earphone5.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 6,
      name: "Samsung Type-C Earphones black",
      image: "/assets/earphone6.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 7,
      name: "Earphone for T-Mobile REVVL 4 Plus ",
      image: "/assets/earphone7.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 8,
      name: "Usb C Earphone with Type-C Plug",
      image: "/assets/earphone8.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-center text-3xl font-bold mt-8">Earphones</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {earphones.map((earphone) => (
          <div
            key={earphone.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={earphone.image}
              alt={earphone.name}
              className="w-full h-40 object-cover"
            />
           <div className="mt-4">
              <h2 className="text-lg font-semibold">{earphone.name}</h2>
              <p className="text-gray-400 line-through">{earphone.OriginalPrice}</p>
              <p className="text-red-500 text-xl font-bold">{earphone.OfferPrice}</p>
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

export default EarphonesPage;
