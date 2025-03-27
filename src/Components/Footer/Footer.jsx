import React from "react";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import Whatsapp_icon from "../Assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div style={{paddingTop: '98px'}} className="bg-white py-10 px-4 md:px-20 text-center">
      {/* Logo Section */}
      <div className="flex flex-col items-center">
        <img src={footer_logo} alt="Shopper Logo" className="w-16 h-16" />
        <p className="text-xl font-bold mt-2">SHOPPER</p>
      </div>

      {/* Navigation Links */}
      <div className="mt-6">
        <ul className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm sm:text-lg">
          <li className="hover:text-black cursor-pointer">Company</li>
          <li className="hover:text-black cursor-pointer">Products</li>
          <li className="hover:text-black cursor-pointer">Offices</li>
          <li className="hover:text-black cursor-pointer">About</li>
          <li className="hover:text-black cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Social Media Icons */}
      <div className="mt-6 flex justify-center gap-4">
        {[instagram_icon, pintester_icon, Whatsapp_icon].map((icon, i) => (
          <img
            key={i}
            src={icon}
            alt="Social Icon"
            className="w-10 h-10 p-2 rounded-full border border-gray-300 hover:scale-110 transition-transform"
          />
        ))}
      </div>

      {/* Copyright Section */}
      <div className="mt-10">
        <hr className="border-gray-300" />
        <p className="text-gray-500 mt-4 text-sm sm:text-base">
          Copyright © 2025 - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
