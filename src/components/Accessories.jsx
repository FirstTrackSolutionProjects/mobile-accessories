import React from "react";

import AHeadphones from "../assets/AHeadphones.jpg";
import ACharger from "../assets/Acharger.jpg";
import ACovers from "../assets/Acovers.jpg";
import APowerbanks from "../assets/APowerbanks.jpg";
import ATemperglass from "../assets/ATemperglass.jpg";
import AMobilelens from "../assets/AMobilelens.jpg";
import AUsbcords from "../assets/AUsbcords.jpg";
import AMemorychips from "../assets/AMemorychips.jpg";
import AEarphones from "../assets/AEarphones.jpg";

const images = [
  AHeadphones,
  ACharger,
  ACovers,
  APowerbanks,
  ATemperglass,
  AMobilelens,
  AUsbcords,
  AMemorychips,
  AEarphones,
];

const Accessories = () => {
  return (
    <div className="p-6 bg-gray-100">
      <div className="flex space-x-4 overflow-x-auto scrollbar-hide p-4">
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 rounded-full">
            <div className="w-32 h-32 rounded-full bg-white p-2 flex items-center justify-center shadow-lg">
              <div className="w-24 h-20 rounded-full overflow-hidden">
                <img src={src} alt={`Item ${index}`} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
