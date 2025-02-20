// import React from "react";

// const images = [
//   "/assets/AHeadphones.jpg",
//   "/assets/ACharger.jpg",
//   "/assets/ACovers.jpg",
//   "/assets/APowerbanks.jpg",
//   "/assets/ATemperglass.jpg",
//   "/assets/AMobilelens.jpg",
//   "/assets/AUsbcords.jpg",
//   "/assets/AMemorychips.jpg",
//   "/assets/AEarphones.jpg",
// ];

// const Accessories = () => {
//   return (
//     <div className="mb-15 bg-gray-100 overflow-x-auto scrollbar-hide">
//       <div className="flex space-x-4 p-6 animate-scroll hover:pause-scroll">
//         {images.concat(images).map((src, index) => (
//           <div key={index} className="flex-shrink-0 rounded-full">
//             <div className="w-20 h-20 rounded-full bg-gray-700 p-2 flex items-center justify-center shadow-lg">
//               <div className="w-17 h-17 rounded-full overflow-hidden">
//                 <img src={src} alt={`Item ${index}`} className="w-full h-full object-cover" />
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Tailwind + CSS Animation */}
//       <style>{`
//         @keyframes scroll {
//           0% { transform: translateX(0%); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-scroll {
//           display: flex;
//           white-space: nowrap;
//           animation: scroll 10s linear infinite;
//         }
//         .pause-scroll:hover {
//           animation-play-state: paused;
//         }
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Accessories;