import CarouselItem from "./CarouselItem";

export default function CarouselTrack({ images, currentIndex, visibleSlots }) {
  return (
    <div className="overflow-hidden px-4">
      <div
        className="flex gap-4 transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * (100 / visibleSlots)}%)`,
        }}
      >
        {images.map((src, index) => (
          <CarouselItem key={index} src={src} index={index} />
        ))}
      </div>
    </div>
  );
}