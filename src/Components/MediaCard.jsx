import React from "react";
import { Link } from "react-router-dom";

const MediaCard = ({ image, section }) => {
  return (
    <div>
      <div className="bg-gray-200/90 w-96 p-0 rounded-lg shadow-3xl hover:shadow-lg transition-shadow duration-300">
        <img
          className="h-[45vh] w-100 transition-transform duration-500 hover:scale-110 pb-10 object-center pt-0 rounded-xl object-cover p-0 mb-4"
          src={image}
        />
        <div className="flex flex-col gap-4 items-center pb-8">
          <h1 className="font-bold text-2xl">{section}</h1>
          <Link to="/" className="py-2 px-6 rounded-4xl font-bold border">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
