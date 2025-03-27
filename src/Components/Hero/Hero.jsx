import React from "react";
import hand_icon from "../Assets/hand_icon.png";
// import hand_gif from '../Assets/hand_gif.gif'
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
<div className="h-screen flex items-center bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] px-16 ps-4 pe-2 sm:px-16">
{/* Left Content */}
      <div className="w-1/2 space-y-5">
        <h2 className="text-2xl font-semibold ">
          NEW ARRIVALS ONLY
        </h2>
        <h1 className="text-7xl font-bold text-gray-900 flex items-center gap-2 h-20 ps">
          new
          {/* <img src={hand_icon} alt="hand" className="w-16 h-16" /> */}

          <motion.img
      src={hand_icon}
      alt="hand"
      className="w-16 h-16 "
      animate={{ rotate: [0, -20, 20, 0] }} // Left-Right Move
      transition={{
        duration: 1, // Time taken for one cycle
        repeat: Infinity, // Keep repeating
        ease: "easeInOut", // Smooth movement
      }}
    />


        </h1>
        <h1 className="text-7xl font-bold  text-gray-900">
          collection
        </h1>
        <h1 className="text-7xl font-bold  text-gray-900">
          for everyone
        </h1>

        <div className="mt-6 flex items-center gap-4">
          <button className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-medium flex items-center gap-2 hover:bg-red-700 transition">
            Latest Collection
            <img src={arrow_icon} alt="arrow" className="w-5" />
          </button>
        </div>
      </div>

     
      {/* Right Image - Only Visible on Larger Screens */}
      {/* <div className="w-1/2 justify-end hidden md:flex">
  <img
    src={hero_image}
    alt="hero"
    className="w-[500px] object-contain drop-shadow-xl animate-bounce"
  />
</div> */}
<div className="w-1/2 justify-end hidden md:flex">
      <motion.img
        src={hero_image}
        alt="hero"
        className="w-[500px] object-contain drop-shadow-xl"
        animate={{
          y: [0, -20, 0], 
        }}
        transition={{
          duration: 2, // Smooth effect
          repeat: Infinity, 
          ease: "easeInOut",
        }}
      />
    </div>

    </div>
  );
};

export default Hero;
