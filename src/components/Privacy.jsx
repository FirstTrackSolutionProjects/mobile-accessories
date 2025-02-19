import React from "react";
import { FaUserShield, FaLock, FaBullhorn, FaExclamationTriangle, FaEnvelope } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg p-8">
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Privacy & Policy</h1>

        {/* Section 1 - Personal Information */}
        <section className="mb-6">
          <div className="flex items-center mb-3">
            <FaUserShield className="text-blue-600 text-2xl mr-2" />
            <h2 className="text-xl font-semibold text-gray-700">Personal Information</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Mobile Accessories does not trade or sell your personal information in any manner, except as specified here or if you express your consent towards the same.
          </p>
          
          <h3 className="text-lg font-semibold mt-4">Personal Information provided by you is used only:</h3>
          <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
            <li>To facilitate your use of the website,</li>
            <li>To respond to your concerns, inquiries, or address your requests,</li>
            <li>To provide you with information about our services/products and send offers,</li>
            <li>To send you important updates regarding the website, terms, and policies,</li>
            <li>To conduct internal reviews and data analysis for improving services,</li>
          </ul>
        </section>

        <hr className="border-gray-300 my-6" />

        {/* Section 2 - Security */}
        <section className="mb-6">
          <div className="flex items-center mb-3">
            <FaLock className="text-green-600 text-2xl mr-2" />
            <h2 className="text-xl font-semibold text-gray-700">Security</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            We prioritize the security of your personal information with administrative, technical, and physical safeguards to prevent unauthorized access. If a data breach occurs, we will notify you promptly.
          </p>
        </section>

        <hr className="border-gray-300 my-6" />

        {/* Section 3 - Advertising */}
        <section className="mb-6">
          <div className="flex items-center mb-3">
            <FaBullhorn className="text-orange-600 text-2xl mr-2" />
            <h2 className="text-xl font-semibold text-gray-700">Advertising</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Some third-party advertisers may display limited advertisements. No personal information is shared, but aggregate profile data may be used to enhance ad relevance.
          </p>
        </section>

        <hr className="border-gray-300 my-6" />

        {/* Section 4 - Disclaimer */}
        <section className="mb-6">
          <div className="flex items-center mb-3">
            <FaExclamationTriangle className="text-red-600 text-2xl mr-2" />
            <h2 className="text-xl font-semibold text-gray-700">Important Disclaimer</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            While we ensure security, please avoid sharing sensitive information with unauthorized third parties. The Company disclaims any liabilities arising from negligence in handling your personal data.
          </p>
        </section>

        <hr className="border-gray-300 my-6" />

        {/* Contact Info */}
        <p className="text-gray-600 text-center mt-4 flex items-center justify-center">
          <FaEnvelope className="text-blue-600 text-xl mr-2" />
          For concerns, contact us at  
          <a href="mailto:support@mobileaccessories.com" className="text-blue-800 font-medium hover:underline ml-1">support@mobileaccessories.com</a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
