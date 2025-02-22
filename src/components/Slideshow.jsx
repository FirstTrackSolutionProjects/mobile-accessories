// import React, { useState, useEffect } from "react";

// const Slideshow = () => {
//   const images = [
//     "/assets/image--1.jpg",
//     "/assets/image--2.jpg",
//     "/assets/image--3.jpg",
//     "/assets/image--4.jpg",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="relative w-full max-w-4xl mx-auto overflow-hidden shadow-lg">
//       <img
//         src={images[currentIndex]}
//         alt={`Slide ${currentIndex + 1}`}
//         className="w-full h-96 object-cover"
//       />
//       <button
//         className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-3 rounded-full"
//         onClick={goToPrevious}
//       >
//         &#10094;
//       </button>
//       <button
//         className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-3 rounded-full"
//         onClick={goToNext}
//       >
//         &#10095;
//       </button>
//     </div>
//   );
// };

// export default Slideshow;
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

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />

      {/* Previous Button */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
        onClick={goToPrevious}
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
        onClick={goToNext}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slideshow;
