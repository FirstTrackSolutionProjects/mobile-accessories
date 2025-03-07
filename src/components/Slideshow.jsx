import React, { useState, useEffect } from "react";

const Slideshow = () => {
  const images = [
    "/assets/image--1.jpg",
    "/assets/image--2.jpg",
    "/assets/image--3.jpg",
    "/assets/image--4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[400px]">
      {/* Slideshow Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />

      {/* Dots for Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
