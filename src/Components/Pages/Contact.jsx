import React from "react";
import Image from "../../assets/shecreate.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Map from "../../Map";

const Contact = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center w-full h-[47vh]  flex items-center justify-center"
        style={{ backgroundImage: `url(${Image})` }}
      ></div>
      <div className="pt-20 lg:px-40 md:px-28 sm:px-16 grid lg:grid-cols-12 md:grid-cols-6 lg:mb-20 md:mb-16">
        <div className="flex flex-col items-center justify-center col-span-6">
          <h1 className="mb-10 text-blue-800 text-4xl font-bold">
            Engineering Office
          </h1>
          <p className="flex items-center gap-2">
            <FaLocationDot size={18} /> GGY Bariga, Shomolu Lagos state,
            Nigeria.<span></span>
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneFlip size={16} />
            <span> +234 813 977 7046</span>
          </p>
          <p className="flex items-center gap-2">
            <IoMdMail size={18} />
            <span> hellow@hayus.com</span>
          </p>
        </div>
        <div className="flex flex-col items-center col-span-6">
          <h1 className="mb-5 text-blue-800 text-4xl font-bold">
            Fabrication Yard and <br /> Marine Logistics Base
          </h1>
          <p className="flex items-center gap-2">
            <FaLocationDot size={18} />
            <span> GGY Bariga, Shomolu Lagos state, Nigeria.</span>
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneFlip size={16} />
            <span> +234 813 910 0512</span>
          </p>
          <p className="flex items-center gap-2">
            <IoMdMail size={18} />
            <span> projects@hayus.com</span>
          </p>
        </div>
      </div>
      <div className="grid lg:grid-cols-12 md:grid-cols-6 gap-20 mx-20">
        <div className="col-span-6 place-content-centern place-items-center min-h-[30vh] bg-gray-100 p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            📍 Our Location Map
          </h1>

          {/* Pass coordinates dynamically */}
          <Map lat={6.5244} lng={3.3792} label="Lagos, Nigeria" />
        </div>

        <div className="col-span-6 place-content-center place-items-center min-h-[30vh] bg-gray-100 p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            📍 Our Location Map
          </h1>

          {/* Pass coordinates dynamically */}
          <Map lat={6.5244} lng={3.3792} label="Lagos, Nigeria" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
