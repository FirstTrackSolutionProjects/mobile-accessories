import React from "react";
import { FaShippingFast, FaMoneyBillWave, FaBoxOpen } from "react-icons/fa";

const ShippingPolicy = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
       
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
          Shipping and Delivery Policy
        </h2>

       
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <FaShippingFast className="text-blue-600 text-2xl mr-2" />
            <h3 className="text-xl font-semibold text-gray-700">
              How long will it take for my order to be delivered?
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            1. We have distinct shipping timelines for each product, and you can
            find this information listed under the respective product pages. Our
            standard delivery timeline is <strong>3-5 working days</strong> after
            shipping, depending on the location.
          </p>
          <p className="text-gray-600 leading-relaxed mt-2">
            2. If the order is shipped via Speedpost, the delivery time may
            extend to <strong>7-10 working days</strong>, depending on the
            location.
          </p>
        </div>

        <hr className="border-gray-300 my-6" />

       
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <FaMoneyBillWave className="text-green-600 text-2xl mr-2" />
            <h3 className="text-xl font-semibold text-gray-700">
              What is the price for the shipping?
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            We offer two shipping options: <strong>Prepaid</strong> and{" "}
            <strong>COD (Cash on Delivery)</strong>. For prepaid shipping, the
            minimum order value is <strong>Rs. 400</strong>. Orders below this
            value will incur a shipping charge of <strong>Rs. 69</strong>. For
            COD shipping, there is a delivery charge of <strong>Rs. 99</strong>.
          </p>
        </div>

        <hr className="border-gray-300 my-6" />

       
        <div>
          <div className="flex items-center mb-3">
            <FaBoxOpen className="text-red-600 text-2xl mr-2" />
            <h3 className="text-xl font-semibold text-gray-700">
              What if my order doesn’t get delivered?
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Our courier partner will make <strong>three delivery attempts</strong>. 
            If the product cannot be delivered, a refund will be credited to your 
            <strong>Mobile Accessories Wallet</strong>. You can redeem this refund 
            on your next order with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
