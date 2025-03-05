import React from "react";

const SpecialOffers = () => {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Special Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">New Year Specials</h3>
          <div className="space-y-4">
            <div className="flex flex-col items-center">
              <img src="/assets/PowerBanks.jpg" alt="PowerBanks" className="w-24 h-24 object-cover" />
              <p className="mt-2 font-medium">PowerBanks</p>
              <span className="text-red-500 font-bold">Min. 20% Off</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/assets/EarBuds.jpg" alt="Earpods" className="w-24 h-24 object-cover" />
              <p className="mt-2 font-medium">Earbuds</p>
              <span className="text-red-500 font-bold">Min. 40% Off</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Special Days Special Offers</h3>
          <div className="space-y-4">
            <div className="flex flex-col items-center">
              <img src="/assets/Speakers.jpg" alt="Speakers" className="w-24 h-24 object-cover" />
              <p className="mt-2 font-medium">Speakers</p>
              <span className="text-red-500 font-bold">Special offer</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/assets/Wireless Earphones.jpg" alt="Wireless Earphones" className="w-24 h-24 object-cover" />
              <p className="mt-2 font-medium">Wireless Earphones</p>
              <span className="text-red-500 font-bold">Min. 40% Off</span>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Most Discounted Deals Here</h3>
          <div className="space-y-4">
            <div className="flex flex-col items-center">
              <img src="/assets/Type C Charger.jpg" alt="Type C Charger" className="w-24 h-24 object-cover" />
              <p className="mt-2 font-medium">Type C Charger</p>
              <span className="text-red-500 font-bold">Special offer</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/assets/Adaptor.jpg" alt="Adaptors" className="w-24 h-24 object-cover" />
              <p className="mt-2 font-medium">Adaptors</p>
              <span className="text-red-500 font-bold">Min. 20% Off</span>
            </div>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default SpecialOffers;
