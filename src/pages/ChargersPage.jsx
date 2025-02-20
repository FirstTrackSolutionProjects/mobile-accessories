// import React from "react";

// const ChargersPage = () => {
//   const chargers = [
//     {
//       id: 1,
//       name: "The Black Store Wall Charger",
//       image: "/assets/charger1.jpg",
//       OriginalPrice: "$2499",
//       OfferPrice: "859",
//     },
//     {
//       id: 2,
//       name: "HONOR SuperCharge 35W Single Port USB Type-A",
//       image: "/assets/charger2.jpg",
//       OriginalPrice: "$2499",
//       OfferPrice: "859",
//     },
//     {
//       id: 3,
//       name: "Zest Charger - GaN 100W",
//       image: "/assets/charger3.jpg",
//       OriginalPrice: "$2499",
//       OfferPrice: "859",
//     },
//     {
//       id: 4,
//       name: "DC Port Charger",
//       image: "/assets/charger4.jpg",
//       OriginalPrice: "$2499",
//       OfferPrice: "859",
//     },
//     {
//       id: 5,
//       name: "boAt 18W Power WCD QC3A Charger",
//       image: "/assets/charger5.jpg",
//       OriginalPrice: "$2499",
//       OfferPrice: "859",
//     },
//     {
//       id: 6,
//       name: "Maquter Fast Charger For Nokia ",
//       image: "/assets/charger6.jpg",
//       OriginalPrice: "$2499",
//       OfferPrice: "859",
//     },
//     {
//       id: 7,
//       name: "Samsung Galaxy S20 FE Type C Adaptive Fast Mobile Charger",
//       image: "/assets/charger7.jpg",
//       OriginalPrice: "$2499",
//       OfferPrice: "859",
//     },
//     {
//       id: 8,
//       name: "Apple iPhone 5W Mobile Charger",
//       image: "/assets/charger8.jpg",
//       OriginalPrice: "$2499",
//       OfferPrice: "859",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <h1 className="text-center text-3xl font-bold mt-8">Chargers</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
//         {chargers.map((charger) => (
//           <div
//             key={charger.id}
//             className="bg-white shadow-md rounded-lg overflow-hidden"
//           >
//             <img
//               src={charger.image}
//               alt={charger.name}
//               className="w-full h-40 object-cover"
//             />
//             <div className="mt-4">
//               <h2 className="text-lg font-semibold">{charger.name}</h2>
//               <p className="text-gray-400 line-through">{charger.OriginalPrice}</p>
//               <p className="text-red-500 text-xl font-bold">{charger.OfferPrice}</p>
//               <div className="mt-4 flex gap-2">
//               <button className="bg-blue-500 text-white px-4 py-2 rounded  cursor-pointer">Add to Cart</button>
//               <button className="bg-green-500 text-white px-4 py-2 rounded  cursor-pointer">Buy Now</button>
//             </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ChargersPage;

import React from "react";



const chargers = [
  { id: 1, name: "The Black Store Wall Charger", image: "/assets/charger1.jpg", OriginalPrice: "$2499", OfferPrice: "$859" },
  { id: 2, name: "HONOR SuperCharge 35W", image: "/assets/charger2.jpg", OriginalPrice: "$2499", OfferPrice: "$859" },
  { id: 3, name: "Zest Charger - GaN 100W", image: "/assets/charger3.jpg", OriginalPrice: "$2499", OfferPrice: "$859" },
  { id: 4, name: "DC Port Charger", image: "/assets/charger4.jpg", OriginalPrice: "$2499", OfferPrice: "$859" },
  { id: 5, name: "boAt 18W Power WCD QC3A Charger", image: "/assets/charger5.jpg", OriginalPrice: "$2499", OfferPrice: "$859" },
  { id: 6, name: "Maquter Fast Charger For Nokia", image: "/assets/charger6.jpg", OriginalPrice: "$2499", OfferPrice: "$859" },
  { id: 7, name: "Samsung Galaxy S20 FE Type C Adaptive Fast Mobile Charger", image: "/assets/charger7.jpg", OriginalPrice: "$2499", OfferPrice: "$859" },
  { id: 8, name: "Apple iPhone 5W Mobile Charger", image: "/assets/charger8.jpg", OriginalPrice: "$2499", OfferPrice: "$859" },
];

const ChargersPage = () => {
  return <ProductPage category="Chargers" products={chargers} />;
};

export default ChargersPage;
