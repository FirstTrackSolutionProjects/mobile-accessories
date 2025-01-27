import React from "react";

const MobileLensPage = () => {
  const mobilelenses = [
    {
      id: 1,
      name: "SIGNI Pro 2 in 1 Mobile Camera Lens Kit - SKYVIK",
      image: "/assets/mobilelens1.jpg",
      OriginalPrice: "$2499",
      OfferPrice: "859",
    },
    {
      id: 2,
      name: "Honor 8X Zoom Mobile Lens 3.0",
      image: "/assets/mobilelens2.jpg",
      price: "$149",
    },
    {
      id: 3,
      name: "Moment 10x Macro Lens",
      image: "/assets/mobilelens3.jpg",
      price: "$129",
    },
    {
      id: 4,
      name: "5 in 1 Mobile Phone Camera Lens Kit",
      image: "/assets/mobilelens4.jpg",
      price: "$129",
    },
    {
      id: 5,
      name: "DSLR Lens for Smartphone - Future of Mobile",
      image: "/assets/mobilelens5.jpg",
      price: "$129",
    },
    {
      id: 6,
      name: "Careflection Universal 3 In1 Set Mobile Professional",
      image: "/assets/mobilelens6.jpg",
      price: "$129",
    },
    {
      id: 7,
      name: "Fotorgear 400mm Telephoto Lens",
      image: "/assets/mobilelens7.jpg",
      price: "$129",
    },
    {
      id: 8,
      name: "Moment 14mm Fisheye T-Series Mobile Lens",
      image: "/assets/mobilelens8.jpg",
      price: "$129",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-center text-3xl font-bold mt-8">Mobilelenses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {mobilelenses.map((mobilelens) => (
          <div
            key={mobilelens.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={mobilelens.image}
              alt={mobilelens.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{mobilelens.name}</h2>
              <p className="text-gray-600">{mobilelens.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileLensPage;

