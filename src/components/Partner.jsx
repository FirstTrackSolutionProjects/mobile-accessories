export default function PartnerSection() {
    return (
      <div className="text-center py-12 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Why should you partner with Fuddins?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          Fuddins enables you to get 60% more revenue, 10x new customers, and boost your brand visibility by
          providing insights to improve your business.
        </p>
  
        <div className="mt-8 space-y-8">
          {/* Cities */}
          <div className="flex flex-col items-center">
            <img src="/icons/globe.svg" alt="Cities" className="w-12 h-12" />
            <h3 className="text-xl font-semibold text-gray-900 mt-2">500+ Cities</h3>
            <p className="text-gray-600 text-sm">in India</p>
          </div>
  
          {/* Stores */}
          <div className="flex flex-col items-center">
            <img src="/icons/store.svg" alt="Stores" className="w-12 h-12" />
            <h3 className="text-xl font-semibold text-gray-900 mt-2">50000+ Stores</h3>
            <p className="text-gray-600 text-sm">Store Listings</p>
          </div>
  
          {/* Orders */}
          <div className="flex flex-col items-center">
            <img src="/icons/orders.svg" alt="Orders" className="w-12 h-12" />
            <h3 className="text-xl font-semibold text-gray-900 mt-2">1 lakh+ Orders</h3>
            <p className="text-gray-600 text-sm">Daily Orders</p>
          </div>
        </div>
      </div>
    );
  }
  