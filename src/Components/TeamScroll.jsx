import React, { useRef } from "react";
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

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
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
        className="flex overflow-x-scroll overflow-y-hidden scrollbar-hide gap-6 w-[90%] mx-auto px-10 scroll-smooth"
      >
        <div className="w-60 h-[40vh] bg-white flex-shrink-0 rounded-lg shadow-md"></div>

        {teamMembers.map((member, index) => (
          <div key={index} className="flex-shrink-0">
            <OurTeam
              image={member.image}
              name={member.name}
              title={member.title}
            />
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

