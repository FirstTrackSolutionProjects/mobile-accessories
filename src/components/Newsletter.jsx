import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed successfully with: ${email}`);
      setEmail(""); // Clear input after submission
    }
  };

  return (
    <div className="py-10 px-5 text-center">
      <h2 className="text-xl font-bold text-black mb-4">SUBSCRIBE TO OUR NEWSLETTER</h2>
      <form onSubmit={handleSubscribe} className="flex flex-col items-center space-y-3 w-full max-w-md mx-auto">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="p-3 w-full border border-gray-400 rounded-md focus:outline-none focus:border-gray-600"
        />
        <button
          type="submit"
          className="w-full bg-transparent border-2 border-blue-900 text-blue-900 font-semibold py-3 rounded-md hover:bg-blue-900 hover:text-white transition duration-300 flex items-center justify-center"
        >
          SUBSCRIBE NOW →
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
