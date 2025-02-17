import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Shipping and Delivery Policy</h2>
      
     
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">How long will it take for my order to be delivered?</h3>
        <p className="text-gray-600">
          1. We have distinct shipping timelines for each product, and you can find this information listed under the respective product pages. 
          Our Standard delivery timeline is 3-5 working days after shipping, depending on the location.
        </p>
        <p className="text-gray-600 mt-2">
          2. If the order is shipped via Speedpost, the delivery time may extend to 7-10 working days, depending on the location.
        </p>
      </div>

    
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">What is the price for the shipping?</h3>
        <p className="text-gray-600">
          We offer two shipping options: prepaid and COD (Cash on Delivery). For prepaid shipping, the minimum order value is Rs. 400. 
          Orders below this value will incur a shipping charge of Rs. 69. For COD shipping, there is a delivery charge of Rs. 99. 
        </p>
      </div>

      
      <div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">What if my order doesn’t get delivered?</h3>
        <p className="text-gray-600">
          Our courier partner will make three delivery attempts. If the product cannot be delivered, a refund will be credited to your Mobile Accessories wallet. 
          You can redeem this refund on your next order with us.
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicy;
