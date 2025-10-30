export default function CarouselItem({ src, index }) {
  return (
    <div className="lg:basis-1/7 md:basis-1/6 mx-0 flex-shrink-0 flex items-center gap-6 justify-center">
      {src ? (
        <img
          src={src}
          alt={`Slide ${index + 1}`}
          className="h-[60vh] w-full object-cover rounded-lg"
        />
      ) : (
        <div className="h-[60vh] w-full bg-gray-200 rounded-lg" />
      )}
    </div>
  );
}