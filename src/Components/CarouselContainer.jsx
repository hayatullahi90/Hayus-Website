import { useState } from "react";

export default function CarouselContainer({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlots = 6; // 5 images + 1 blank

  const nextSlide = () => {
    if (currentIndex < images.length - visibleSlots) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
}