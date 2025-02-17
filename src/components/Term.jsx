import React from "react";

const TermsConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-white shadow-lg rounded-lg mt-6">
      <h1 className="text-3xl font-bold text-center text-black mb-6">Terms & Conditions</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">1. Introduction and Agreement</h2>
        <p className="text-gray-600 mt-2">
          By accessing or using our website, you agree to comply with these terms. If you do not agree, please quit from using the website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">2. Products and Services</h2>
        <p className="text-gray-600 mt-2">
          We try to ensure product descriptions and pricing accuracy. However, product appearance may vary, especially for customized items.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">3. Purchasing Terms</h2>
        <p className="text-gray-600 mt-2">
          Orders are processed upon payment confirmation. Shipping and handling costs apply. Returns and refunds are subject to our <span className="text-blue-800 font-medium">Refund Policy</span>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">4. User Conduct</h2>
        <p className="text-gray-600 mt-2">
        Your information is protected as outlined in our <a href="/privacy-policy" className="text-blue-800 font-medium">Privacy Policy</a>. Users must not misuse the website, engage in illegal activities, or violate intellectual property rights.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">5. Intellectual Property Rights</h2>
        <p className="text-gray-600 mt-2">
          All trademarks, designs, and website content are owned by MobileAccessories and protected by applicable laws.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">6. Amendments</h2>
        <p className="text-gray-600 mt-2">
          We reserve the right to update these terms at any time. Continued use of the website constitutes acceptance of the revised terms.
        </p>
      </section>
    </div>
  );
};

export default TermsConditions;
