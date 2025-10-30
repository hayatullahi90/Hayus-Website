import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CarouselTrack from "../CarouselTrack"; 

const rawImages = [ "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg",
  "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg",
  "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", "/banner1.jpeg", ];

function groupImages(images, groupSize,) {
  const grouped = [];
  for (let i = 0; i < images.length; i += groupSize) {
    grouped.push(null);
    grouped.push(...images.slice(i, i + groupSize));
  }
  return grouped;
}

const ProjectCard = ({ rawImages = [], groupSize = 5 }) => {
  const images = groupImages(rawImages, groupSize);
  const visibleSlots = groupSize + 1; // groupSize images + blank slot
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
    <div className="relative">

      <div className="w-full mb-20">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow z-10"
        >
          <MdKeyboardArrowLeft size={40} />
        </button>

        {/* CarouselTrack should use currentIndex to compute translateX */}
        <CarouselTrack
          images={images}
          currentIndex={currentIndex}
          visibleSlots={visibleSlots}
        />

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow z-10"
        >
          <MdKeyboardArrowRight size={40} />
        </button>
      </div>
    </div>
  );
};
export default ProjectCard;