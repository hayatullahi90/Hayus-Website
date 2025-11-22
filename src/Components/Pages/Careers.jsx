import React from "react";
import { Link } from "react-router";

const Careers = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-12 md:grid-cols-8 sm:grid-cols-4 h-[70vh] place-items-center justify-contents-center lg:pt-40 lg:pb-20 md:pt-20 md:pb-16">
        <div className="col-span-4 flex flex-col gap-2 -mt-32 pl-28">
          <h1 className="text-5xl font-bold mb-5">You're in good company</h1>
          <p style={{ fontSize: "18px" }}>
            At Ariosh we believe “anything is achievable”. We push beyond our
            bandwidths per time and we see challenges as platforms for huge
            achievements.
          </p>
        </div>
        <div className="col-span-8 flex">
          <img
            className="h-[40vh] lg:w-50 md:w-44 sm:40 object-cover -mt-24 rounded-lg z-10"
            src="/banner1.jpeg"
          />
          <img
            className="h-[40vh] rounded-lg lg:w-100% md:w-90 sm:w-80 object-cover -ml-14 -mt-12"
            src="/banner1.jpeg"
          />
          <img
            className="h-[40vh] rounded-lg object-cover lg:w-50 md:w-44 sm:w-40 -ml-14"
            src="/banner1.jpeg"
          />
        </div>
      </div>

      <div className="lg:px-52 md:px-20 py-20 bg-black">
        <div className="grid grid-cols-12 mb-10 gap-4 place-content-center place-items-center">
          <img
            className="col-span-3 h-[30vh] w-full object-cover"
            src="/banner1.jpeg"
          />
          <img
            className="col-span-3 h-[35vh] w-full object-cover"
            src="/banner1.jpeg"
          />
          <div className="flex flex-col w-full gap-6 col-span-3">
            <img className="h-[16vh] w-full object-cover" src="/banner1.jpeg" />
            <img className="h-[16vh] w-full object-cover" src="/banner1.jpeg" />
          </div>
          <img
            className="col-span-3 h-[30vh] w-full object-cover"
            src="/banner1.jpeg"
          />
        </div>
        <div className="text-center">
          <h1 className="font-bold text-5xl text-white mb-5">
            A culture for knowledge sharing
          </h1>
          <p className="text-white text-xl">
            Our culture is one that provides a positive, productive and
            supportive working environment to enhance our
            <br /> employee’s career advancement and professional development.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 md:grid-cols-6 py-20 lg:px-30 md:px-24 sm:px-20 lg:gap-16 md:gap-8">
        <div className="col-span-6">
          <img
            className="rounded-4xl object-cover h-[92vh] w-full"
            src="/banner1.jpeg"
          />
        </div>
        <div className="col-span-6 mt-8">
          <h1 className="text-4xl text-black font-bold text-center mb-8">
            Our Commitments
          </h1>
          <div className="lg:flex justify-between md:flex-col lg:mb-20 md:mb-10">
            <div className="lg:w-54 md:w-full">
              <h1 className="text-blue-800 font-bold text-5xl mb-4">1</h1>
              <p>
                Growing local employment by fostering training, technology and
                skill transfer.
              </p>
            </div>
            <div className="lg:w-54 md:w-full">
              <h1 className="text-blue-800 font-bold text-5xl mb-4">2</h1>
              <p>
                Safely delivering projects in any environment with benefits to
                our clients and the communities we serve.
              </p>
            </div>
          </div>

          <div className="lg:flex justify-between md:flex-col lg:mb-20 md:mb-10">
            <div className="lg:w-54 md:w-full">
              <h1 className="text-blue-800 font-bold text-5xl mb-4">3</h1>
              <p>
                Sustainable development based on an open relationship with
                employees and client, enabling mutual trust, respect and
                success.
              </p>
            </div>
            <div className="lg:w-54 md:w-full">
              <h1 className="text-blue-800 font-bold text-5xl mb-4">4</h1>
              <p>
                An uncompromising standard of quality driven by performance.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16 lg:px-90 md:px-20">
        <h1 className="text-3xl font-bold text-black text-center mb-8">
          Want to find out more?
        </h1>
        <div className="flex justify-between items-center">
          <Link
            className="bg-blue-950 py-2 px-8 rounded-4xl text-white font-bold"
            to="/vaccancies"
          >
            Vacancies
          </Link>
          <Link
            className="bg-blue-950 py-2 px-8 rounded-4xl text-white font-bold"
            to="/about"
          >
            About Us
          </Link>
          <Link
            className="bg-blue-950 py-2 px-8 rounded-4xl text-white font-bold"
            to="/contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Careers;
