import React from "react";
import { FaBookOpen, FaBox, FaShoppingCart, FaUserShield, FaCopyright, FaPenNib } from "react-icons/fa";

const TermsConditions = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-blue-50 py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg p-8">
        
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Terms & Conditions</h1>

       
        <section className="mb-6">
          <div className="flex items-center mb-3">
            <FaBookOpen className="text-blue-600 text-2xl mr-2" />
            <h2 className="text-xl font-semibold text-gray-700">1. Introduction and Agreement</h2>
          </div>
          <p className="text-gray-600 ">
            By accessing or using our website, you agree to comply with these terms. If you do not agree, please stop using the website.
          </p>
        </section>

        <hr className="border-gray-300 my-6" />

       
        <section className="mb-6">
          <div className="flex items-center mb-3">
            <FaBox className="text-green-600 text-2xl mr-2" />
            <h2 className="text-xl font-semibold text-gray-700">2. Products and Services</h2>
          </div>
          <p className="text-gray-600 ">
            We strive to ensure product descriptions and pricing accuracy. However, product appearance may vary, especially for customized items.
          </p>
        </section>

        <hr className="border-gray-300 my-6" />

       
        <section className="mb-6">
          <div className="flex items-center mb-3">
            <FaShoppingCart className="text-orange-600 text-2xl mr-2" />
            <h2 className="text-xl font-semibold text-gray-700">3. Purchasing Terms</h2>
          </div>
          <p className="text-gray-600 ">
            Orders are processed upon payment confirmation. Shipping and handling costs apply. Returns and refunds are subject to our 
            <a href="/refund-policy" className="text-blue-800 font-medium hover:underline"> Refund Policy</a>.
          </p>
        </section>

        <hr className="border-gray-300 my-6" />

       
        <section className="mb-6">
          <div className="flex items-center mb-3">
            <FaUserShield className="text-red-600 text-2xl mr-2" />
            <h2 className="text-xl font-semibold text-gray-700">4. User Conduct</h2>
          </div>
          <p className="text-gray-600 ">
            Your information is protected as outlined in our 
            <a href="/privacy-policy" className="text-blue-800 font-medium hover:underline"> Privacy Policy</a>. Users must not misuse the website, engage in illegal activities, or violate intellectual property rights.
          </p>
        </section>

        <hr className="border-gray-300 my-6" />

       
        <section className="mb-6">
          <div className="flex items-center mb-3">
            <FaCopyright className="text-purple-600 text-2xl mr-2" />
            <h2 className="text-xl font-semibold text-gray-700">5. Intellectual Property Rights</h2>
          </div>
          <p className="text-gray-600 ">
            All trademarks, designs, and website content are owned by MobileAccessories and protected by applicable laws.
          </p>
        </section>

        <hr className="border-gray-300 my-6" />
 
        <section className="mb-6">
          <div className="flex items-center mb-3">
            <FaPenNib className="text-indigo-600 text-2xl mr-2" />
            <h2 className="text-xl font-semibold text-gray-700">6. Amendments</h2>
          </div>
          <p className="text-gray-600 ">
            We reserve the right to update these terms at any time. Continued use of the website constitutes acceptance of the revised terms.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsConditions;
