import React from "react";
import Pic1 from "../../assets/stepping.svg";
import Pic2 from "../../assets/shecreate.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="">
      <div className="p-3 bg-gray-200 text-center top-0">
        Ariosh delivers engineering and construction services in the onshore,
        offshore and subsea segment of the oil and gas sector in Nigeria, West
        Africa.
      </div>

      <div className="h-auto lg:px-40 md:px-10 bg-black py-16 grid lg:grid-cols-12 md:grid-cols-6 gap-20">
        <div className="col-span-6 place-content-center">
          <h1 className="text-5xl font-bold text-white mb-5">Engineering</h1>
          <p className="text-white mb-6">
            At Ariosh, we pride ourselves on delivering unparalleled engineering
            services tailored to the dynamic needs of the oil and gas industry.
            With a proven track record of success, we offer comprehensive
            solutions that span the entire project lifecycle, from
            conceptualization to execution.
          </p>
          <Link
            to="/engineering"
            className="text-xl text-blue-500 flex items-center m-0"
          >
            Read more{" "}
            <span>
              <FaArrowRight size={16} />
            </span>
          </Link>
        </div>
        <div className="col-span-6">
          <img className="h-[50vh] w-full rounded-4xl" src={Pic1} />
        </div>
      </div>

      <div className="h-auto lg:px-40 md:px-10 py-10 grid lg:grid-cols-12 md:grid-cols-6 gap-20 bg-gray-200">
        <div className="col-span-6">
          <img className="h-[45vh] w-full rounded-4xl" src={Pic2} />
        </div>
        <div className="col-span-6 place-content-center">
          <h1 className="text-5xl font-bold mb-5">Procurement​</h1>
          <p className="mb-7">
            We excel in delivering robust procurement strategies and solutions
            designed to substantially minimize supply chain costs while
            guaranteeing the timely delivery of top-tier supplies tailored to
            the unique specifications of our clients.
          </p>
          <Link
            to="/procurement"
            className="text-xl text-blue-500 flex items-center m-0"
            href="#"
          >
            Read more{" "}
            <span>
              <FaArrowRight size={16} />
            </span>
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 md:grid-cols-6 justify-content-center gap-20 md:px-10 lg:px-40 py-20">
        <div className="col-span-6">
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl mb-10 font-bold">Construction</h1>
            <p className="mb-12">
              We epitomize safety as our watchword while consistently delivering
              world-class infrastructure projects. Our commitment to excellence
              is underscored by renowned strategies and processes that ensure
              the successful execution of every construction endeavor.
            </p>

            <img
              className="bg-gray-200 rounded-4xl mb-5 h-[45vh] w-full"
              src={Pic1}
            />
            <Link
              to="/construction"
              className="text-xl text-blue-500 flex items-center m-0"
              href="#"
            >
              Read more{" "}
              <span>
                <FaArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
        <div className="col-span-6">
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl mb-10 font-bold">Installation</h1>
            <p className="mb-12">
              We pride ourselves on delivering dependable and highly efficient
              installation solutions across a diverse spectrum of projects. Our
              commitment to excellence is reflected in the reliability and
              effectiveness of our installation services.
            </p>

            <img
              className="bg-gray-200 rounded-4xl mb-5 h-[45vh] w-full"
              src={Pic1}
            />
            <Link
              to="/installation"
              className="text-xl text-blue-500 flex items-center m-0"
              href="#"
            >
              Read more{" "}
              <span>
                <FaArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-black py-16 px-8">
        <div className="text-center mb-10">
          <h1 className="text-6xl font-bold text-white mb-5">Marine</h1>
          <p className="font-bold text-white" style={{ fontSize: "22px" }}>
            Our vessels are designed for versatility, capable of adapting to the
            unique demands of various marine operations,
            <br /> regardless of complexity.
          </p>
        </div>
        <div className="flex justify-between items-center mb-10">
          <img className="h-[45vh] object-contain" src="/banner2.jpeg" />
          <img className="h-[45vh] object-contain" src="/banner2.jpeg" />
          <img className="h-[45vh] object-contain" src="/banner2.jpeg" />
        </div>
        <div className="flex items-center justify-center">
          <Link
            to="/fleet"
            className="text-xl text-blue-300 flex items-center justify-center m-0"
            href="#"
          >
            Read more{" "}
            <span>
              <FaArrowRight size={16} />
            </span>
          </Link>
        </div>
      </div>

      <div className="h-auto lg:px-40 md:px-10 py-14 grid lg:grid-cols-12 md:grid-cols-6 gap-20 bg-gray-200">
        <div className="col-span-6 place-content-center">
          <h1 className="text-6xl font-bold mb-5">
            Operations and Maintenance
          </h1>
          <p className="mb-7">
            We are dedicated to forging partnerships with our clients to ensure
            the safe and efficient operation of their assets. Our specialty is
            employing strategies that optimize performance while adhering to
            safety and regulatory standards.
          </p>
          <Link
            to="/operations"
            className="text-xl text-blue-500 flex items-center m-0"
            href="#"
          >
            Read more{" "}
            <span>
              <FaArrowRight size={16} />
            </span>
          </Link>
        </div>
        <div className="col-span-6">
          <img className="h-[45vh] w-full rounded-4xl" src={Pic2} />
        </div>
      </div>

      <div className="h-auto lg:px-40 md:px-10 py-14 grid lg:grid-cols-12 md:grid-cols-6 gap-20 bg-white">
        <div className="col-span-6">
          <img className="h-[45vh] w-full rounded-4xl" src={Pic2} />
        </div>
        <div className="col-span-6 place-content-center">
          <h1 className="text-6xl font-bold mb-5">Laser Scanning​</h1>
          <p className="mb-7">
            Ariosh stands as a premier 3D Laser Scanning provider, having
            pioneered its application in brownfield projects in Nigeria. Our
            commitment to innovation has revolutionized the fields of reverse
            engineering, construction, and fitting, setting new benchmarks for
            precision and efficiency.
          </p>
          <Link
            to="/laser"
            className="text-xl text-blue-500 flex items-center m-0"
            href="#"
          >
            Read more{" "}
            <span>
              <FaArrowRight size={16} />
            </span>
          </Link>
        </div>
      </div>

      <div className="h-auto lg:px-40 py-14 grid lg:grid-cols-12 md:grid-cols-6 gap-20 bg-gray-200">
        <div className="col-span-6 place-content-center">
          <h1 className="text-6xl font-bold mb-5">Manpower Supply​</h1>
          <p className="mb-7">
            We proudly lead the way in providing skilled manpower to the oil and
            gas industry in Nigeria. Our commitment to excellence in manpower
            supply ensures that our clients have access to a reliable,
            qualified, and proficient workforce that meets the dynamic demands
            of the industry.
          </p>
          <Link
            to="/manpower"
            className="text-xl text-blue-500 flex items-center m-0"
            href="#"
          >
            Read more{" "}
            <span>
              <FaArrowRight size={16} />
            </span>
          </Link>
        </div>
        <div className="col-span-6">
          <img className="h-[45vh] w-full rounded-4xl" src={Pic2} />
        </div>
      </div>
    </div>
  );
};

export default Services;
