import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold text-center text-black mb-4">Privacy & Policy</h1>
      
      <h2 className="text-xl font-semibold mt-4">Personal Information</h2>
      <p className="text-gray-700 mt-2">
        Mobile Accessories does not trade or sell your personal information in any manner, except as specified here or if you express your consent towards the same.
      </p>
      
      <h3 className="text-lg font-semibold mt-4">Personal Information provided by you is used only:</h3>
      <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
        <li>To facilitate your use of the website,</li>
        <li>To respond to your concerns, inquiries, or address your requests for information about our services,</li>
        <li>To provide you with information about our services/products and send offers,</li>
        <li>To send you important updates regarding the website, terms, and policies,</li>
        <li>To conduct internal reviews and data analysis for improving services,</li>
        <li>To comply with legal requirements under Indian law.</li>
      </ul>
      
      <h2 className="text-xl font-semibold mt-4">Security</h2>
      <p className="text-gray-700 mt-2">
        We prioritize the security of your personal information with administrative, technical, and physical safeguards to prevent unauthorized access. If a data breach occurs, we will notify you promptly.
      </p>
      
      <h2 className="text-xl font-semibold mt-4">Advertising</h2>
      <p className="text-gray-700 mt-2">
        Some third-party advertisers may display limited advertisements. No personal information is shared, but aggregate profile data may be used to enhance ad relevance.
      </p>
      
      <h2 className="text-xl font-semibold mt-4">Important Disclaimer</h2>
      <p className="text-gray-700 mt-2">
        While we ensure security, please avoid sharing sensitive information with any unauthorized third parties. The Company disclaims any liabilities arising from negligence in handling your personal data.
      </p>
      
      <p className="text-gray-700 mt-4">For concerns, contact us at <span className="text-black font-semibold">support@mobileaccessories.com</span></p>
    </div>
  );
};

export default PrivacyPolicy;
