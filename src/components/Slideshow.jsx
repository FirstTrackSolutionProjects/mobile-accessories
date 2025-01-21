import React, { useState, useEffect } from "react";
import "./Slideshow.css";

const Slideshow = () => {
  const images = [
    "/assets/image1.png",
    "/assets/image2.png",
    "/assets/image3.png",
    "/assets/image4.png", 
    "/assets/image5.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slideshow">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="slideshow-image"
      />
      <button className="prev" onClick={goToPrevious}>
        &#10094;
      </button>
      <button className="next" onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Slideshow;
