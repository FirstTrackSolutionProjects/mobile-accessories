import React from "react";

const CoversPage = () => {
  const covers = [
    {
      id: 1,
      name: "Logo Leather Phone Case for Vivo X100 Mobile",
      image: "/assets/cover1.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 2,
      name: "Customized Name 4D Acrylic Mobile Covers",
      image: "/assets/cover2.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 3,
      name: "Blue Clipper Waterproof Phone Pouch, rain Mobile Cover",
      image: "/assets/cover3.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 4,
      name: "Redwolf - Mobile Cover-apple",
      image: "/assets/cover4.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 5,
      name: "D5 Ring Stand Mobile Cover",
      image: "/assets/cover5.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 6,
      name: "Samsung Galaxy A51 Tough Dual-Layer Mobile Cover ",
      image: "/assets/cover6.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 7,
      name: "Starbucks Soft Silicone Mobile Cover ",
      image: "/assets/cover7.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 8,
      name: "iPhone XS North Face Puffer Edition Silicone",
      image: "/assets/cover8.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-center text-3xl font-bold mt-8">Covers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {covers.map((cover) => (
          <div
            key={cover.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={cover.image}
              alt={cover.name}
              className="w-full h-40 object-cover"
            />
             <div className="mt-4">
              <h2 className="text-lg font-semibold">{cover.name}</h2>
              <p className="text-gray-400 line-through">{cover.OriginalPrice}</p>
              <p className="text-red-500 text-xl font-bold">{cover.OfferPrice}</p>
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

export default CoversPage;

