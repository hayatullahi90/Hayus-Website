import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const ImageSlide = () => {
  const slides = ["/banner1.jpeg", "/pic2.jpg", "/banner1.jpeg", "/pic3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full lg:h-[105vh] md:h-[60vh] overflow-hidden shadow-gray-900">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img src={slide} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}

      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 hover:bg-white p-2 z-30"
      >
        <ChevronLeft className="hidden w-6 h-6 text-gray-800" />
      </button>

      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 hover:bg-white p-2 z-30"
      >
        <ChevronRight className="hidden w-6 h-6 text-gray-800" />
      </button>

      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-30">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              currentIndex === index ? "" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlide;