import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

function groupImages(images, groupSize) {
  const grouped = [];
  for (let i = 0; i < images.length; i += groupSize) {
    grouped.push({ blank: true });
    grouped.push(...images.slice(i, i + groupSize));
  }
  return grouped;
}

const ProjectCard = ({ rawImages = [], groupSize = 5 }) => {
  const images = groupImages(rawImages, groupSize);
  const visibleSlots = groupSize + 1;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < images.length - visibleSlots) {
      setCurrentIndex((i) => i + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow z-20"
      >
        <MdKeyboardArrowLeft size={40} />
      </button>

      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 260}px)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="min-w-[280px] mx-2 bg-gray-200 rounded-lg relative overflow-hidden"
          >
            {img.blank ? (
              <div className="w-full h-[200px]"></div>
            ) : (
              <>
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full h-[450px] object-cover"
                />

                <div className="absolute bottom-0 w-full bg-black/50 p-8">
                  <h3 className="text-white font-bold">{img.title}</h3>
                  <Link
                    to={img.link}
                    className="text-white underline text-sm flex items-center"
                  >
                    Read more
                    <MdKeyboardArrowRight size={16}/>
                  </Link>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow z-20"
      >
        <MdKeyboardArrowRight size={40} />
      </button>
    </div>
  );
};

export default ProjectCard;
