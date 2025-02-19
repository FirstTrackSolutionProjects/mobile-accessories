import React from "react";
import { FaUndo, FaMoneyBillWave } from "react-icons/fa";

const ReturnPolicy = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg p-8">
      
        <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-6">
          Return & Refunds
        </h1>

       <section className="mb-6">
          <div className="flex items-center mb-3">
            <FaUndo className="text-blue-600 text-2xl mr-2" />
            <h2 className="text-xl font-semibold text-gray-700">Returns</h2>
          </div>
          <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-2">
            <li>
              You have <strong>3 calendar days</strong> to return an item from the date you received it.
            </li>
            <li>Refunds are only applicable in case of a manufacturing defect.</li>
            <li>Returned items must be <strong>unused</strong>, in their original condition and packaging.</li>
            <li>A receipt or proof of purchase is required for returns.</li>
            <li>Orders placed for the wrong model, design, color, or product cannot be returned or replaced.</li>
            <li>Once the return request form is submitted, we will respond within <strong>2-5 working days</strong>.</li>
          </ul>
        </section>

        <hr className="border-gray-300 my-6" />

       
        <section className="mb-6">
          <div className="flex items-center mb-3">
            <FaMoneyBillWave className="text-green-600 text-2xl mr-2" />
            <h2 className="text-xl font-semibold text-gray-700">Refunds</h2>
          </div>
          <ul className="list-disc ml-6 text-gray-600 mt-2 space-y-2">
            <li>Once we receive your item, we will inspect it and notify you of its status.</li>
            <li>
              If approved, the refund will be processed to your original payment method within 
              <strong> 24 working hours</strong>.
            </li>
          </ul>
        </section>

        <hr className="border-gray-300 my-6" />

       
        <div className="text-center mt-8">
          <button className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-md">
            Initiate Return/Refunds
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
