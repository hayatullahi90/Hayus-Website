import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";

const ImageSlider = () => {
  const slides = [
    {
      url: "/banner1.jpeg",
      title: "Heavy Lift",
      subtitle: "On Time. On Budget.",
      link: "/projects",
    },
    {
      url: "/pic2.jpg",
      title: "Procurement",
      subtitle: "On Time. On Budget.",
      link: "/procurement",
    },
    {
      url: "/banner1.jpeg",
      title: "Operations & Maintenance",
      subtitle: "On Time. On Budget.",
      link: "/operations",
    },
    {
      url: "/pic3.jpg",
      title: "Laser Scanning",
      subtitle: "On Time. On Budget.",
      link: "/laser",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative w-full lg:h-[130vh] md:h-[70vh] sm:h-[50vh] overflow-hidden shadow-lg">
      {slides.map((slide, index) => (
        <Link
          key={index} to={slide.link}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.url}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute z-20 flex flex-col items-center inset-0 top-12">
            <h1 className="text-white font-bold text-6xl mb-5 text-center">
              {slide.title}
            </h1>
            <h3 className="text-3xl mb-3 font-bold text-white">{slide.subtitle}</h3>
            <div
              className="text-2xl text-white flex items-center font-bold cursor-pointer"
            >
              Explore more{" "}
              <MdKeyboardArrowRight size={24} />
            </div>
          </div>
        </Link>
      ))}

      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-1 transform -translate-y-1/2 p-1 z-30"
      >
        <ChevronLeft className="text-white font-extrabold" size={38} />
      </button>

      <button
        onClick={goToNext}
        className="absolute top-1/2 right-1 transform -translate-y-1/2 p-1 z-30"
      >
        <ChevronRight className="text-white font-extrabold" size={38} />
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

export default ImageSlider;
