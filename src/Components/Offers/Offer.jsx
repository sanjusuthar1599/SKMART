import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";

const Offer = () => {
  return (
    <div className="px-4 sm:px-8 md:px-40 py-10">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 py-12 bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] rounded-lg">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Exclusive
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Offers For You
          </h1>
          <p className="text-gray-700 font-medium mt-4 text-sm sm:text-base">
            ONLY ON BEST SELLERS PRODUCTS
          </p>
          <button className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-red-500 text-white text-sm sm:text-lg font-semibold rounded-full shadow-md hover:bg-red-600 transition">
            Check Now
          </button>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 justify-center mt-6 md:mt-0 hidden md:flex">
          <img
            src={exclusive_image}
            alt="Exclusive Offer"
            className="w-60 sm:w-72 md:w-80 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Offer;
