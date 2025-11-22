import React, { useRef, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import OurTeam from "./OurTeam";

const TeamScroll = () => {
  const scrollRef = useRef(null);

  const teamMembers = [
    { image: "/banner1.jpeg", name: "Olasile Ayoola", title: "Founder" },
    { image: "/banner1.jpeg", name: "Hassan Bello", title: "Manager" },
    { image: "/banner1.jpeg", name: "Tunde Adisa", title: "Engineer" },
    { image: "/banner1.jpeg", name: "Fatima Sulaiman", title: "Designer" },
    { image: "/banner1.jpeg", name: "Hayatullahi Jamiu", title: "Developer" },
    { image: "/banner1.jpeg", name: "Zainab Ali", title: "Coordinator" },
    { image: "/banner1.jpeg", name: "Ibrahim Musa", title: "Supervisor" },
    { image: "/banner1.jpeg", name: "Maryam Jamiu", title: "Analyst" },
  ];

  const pattern = [
    { type: "blank" },
    ...teamMembers.map((m) => ({ type: "member", ...m })),
  ];

  const displayList = [...pattern, ...pattern, ...pattern];

  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current;

      const middle = container.scrollWidth / 3;
      container.scrollLeft = middle;
    }
  }, []);

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth;
    const third = totalWidth / 3;


    if (container.scrollLeft < third * 0.3) {
      container.scrollLeft += third;
    }

    if (container.scrollLeft > third * 1.7) {
      container.scrollLeft -= third;
    }
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };


return (
    <div className="relative bg-white py-10">
      
      <button
        onClick={scrollLeft}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-gray-200 p-3 rounded-full shadow-md hover:bg-gray-300 z-10"
      >
        <MdKeyboardArrowLeft size={35} />
      </button>

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-scroll overflow-y-hidden scrollbar-hide gap-6 w-[90%] mx-auto px-10"
      >
        {displayList.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            {item.type === "blank" ? (
              <div className="w-60 h-[40vh] bg-white rounded-lg shadow-md"></div>
            ) : (
              <OurTeam
                image={item.image}
                name={item.name}
                title={item.title}
              />
            )}
          </div>
        ))}
      </div>

      <button
        onClick={scrollRight}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-gray-200 p-3 rounded-full shadow-md hover:bg-gray-300 z-10"
      >
        <MdKeyboardArrowRight size={35} />
      </button>
    </div>
  );
};

export default TeamScroll;