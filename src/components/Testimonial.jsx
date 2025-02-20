import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const testimonials = [
  {
    product: "Wireless Earbuds - Bass Boost Pro",
    review:
      "These earbuds have exceeded my expectations! The sound quality is amazing, and the battery life lasts all day. Highly recommended!",
    name: "Aman K.",
    avatar: "/avatar1.png",
    rating: 5,
  },
  {
    product: "Fast Charging Adapter - 30W PD",
    review:
      "Super fast charging! It charges my phone in no time, and I don’t have to worry about overheating. Great buy!",
    name: "Priya S.",
    avatar: "/avatar2.png",
    rating: 4.5,
  },
  {
    product: "Magnetic Phone Holder",
    review:
      "Very sturdy and holds my phone securely even on bumpy roads. A must-have accessory for every car owner.",
    name: "Rajat M.",
    avatar: "/avatar3.png",
    rating: 4,
  },
  {
    product: "Premium Leather Phone Case",
    review:
      "Excellent quality case with a premium feel. It provides great protection and looks stylish!",
    name: "Neha R.",
    avatar: "/avatar4.png",
    rating: 5,
  },
  {
    product: "Wireless Charging Pad - 15W",
    review:
      "A sleek and efficient charging pad that works flawlessly with my phone. No more messy cables!",
    name: "Vikram T.",
    avatar: "/avatar5.png",
    rating: 4.5,
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex text-yellow-500">
      {[...Array(fullStars)].map((_, index) => (
        <FaStar key={index} />
      ))}
      {halfStar && <FaStarHalfAlt />}
      {[...Array(emptyStars)].map((_, index) => (
        <FaRegStar key={index} />
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 py-12 px-6">
      <h2 className="text-center text-3xl font-bold mb-8">Customer Testimonials</h2>
      <div className="max-w-3xl mx-auto overflow-hidden relative">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full p-6 bg-white shadow-lg rounded-lg">
              <FaQuoteLeft className="text-3xl text-gray-400 mb-4" />
              <p className="font-semibold">
                <strong>Product: {testimonial.product}</strong>
              </p>
              <StarRating rating={testimonial.rating} />
              <p className="text-gray-700 mt-2">{testimonial.review}</p>
              <div className="flex items-center mt-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border border-gray-300 shadow"
                />
                <h4 className="text-lg font-bold ml-4">{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-orange-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
