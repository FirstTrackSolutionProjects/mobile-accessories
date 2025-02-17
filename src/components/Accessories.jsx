import React from "react";

const images = [
  "src/assets/AHeadphones.jpg",
  "src/assets/Acharger.jpg",
  "src/assets/Acovers.jpg",
  "src/assets/APowerbanks.jpg",
  "src/assets/ATemperglass.jpg",
  "src/assets/AMobilelens.jpg",
  "src/assets/AUsbcords.jpg",
  "src/assets/AMemorychips.jpg",
  "src/assets/AEarphones.jpg",
];

const Accessories = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="flex space-x-4 overflow-x-auto  scrollbar-hide p-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-30 h-30   rounded-full overflow-hidden border-4 border-gray-300"
          >
            <img src={src} alt={`Item ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
