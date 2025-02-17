import React from "react";

const ReturnPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-white shadow-lg rounded-lg mt-6">
      <h1 className="text-3xl font-bold text-center text-black mb-6">Return & Refunds</h1>

      {/* Returns Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Returns</h2>
        <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-2">
          <li>You have <strong>3 calendar days</strong> to return an item from the date you received it.</li>
          <li>Refunds are only applicable in case of a manufacturing defect.</li>
          <li>Incorrect product deliveries will receive a <strong>free replacement</strong>.</li>
          <li>Returned items must be <strong>unused</strong>, in their original condition and packaging.</li>
          <li>A receipt or proof of purchase is required for returns.</li>
          <li>Orders placed for the wrong model, design, color, or product cannot be returned or replaced.</li>
          <li>Once the return request form is submitted, we will respond within <strong>2-5 working days</strong>.</li>
        </ul>
      </section>

      {/* Refund Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Refunds</h2>
        <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-2">
          <li>Once we receive your item, we will inspect it and notify you of its status.</li>
          <li>If approved, the refund will be processed to your original payment method within <strong>24 working hours</strong>.</li>
        </ul>
      </section>

      {/* Manufacturing Defects */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">What Counts as a Manufacturing Defect?</h2>
        <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-2">
          <li>Fitting Issues</li>
          <li>Spots on print</li>
          <li>Major Alignment Issues</li>
          <li>Blurred Print</li>
        </ul>
      </section>

      {/* Non-eligible Manufacturing Defects */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800">What Does Not Count as a Manufacturing Defect?</h2>
        <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-2">
          <li>Minor color differences</li>
          <li>Different button, fingerprint, or camera cutouts</li>
          <li>Logo cutting or incorrect model orders</li>
          <li>Minor alignment issues</li>
          <li>Edge prints on soft-printed covers</li>
        </ul>
      </section>

      {/* Initiate Return/Replacement */}
      <div className="text-center mt-8">
        <button className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
          Initiate Return/Refunds
        </button>
      </div>

    </div>
  );
};

export default ReturnPolicy;
