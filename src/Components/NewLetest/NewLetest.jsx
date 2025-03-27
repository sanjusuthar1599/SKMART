import React from 'react';

const NewLetest = () => {
  return (
    <div className="px-4 sm:px-8 md:px-40 py-10">
      <div className="bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22] py-10 flex justify-center px-4">
        <div className="text-center w-full max-w-2xl">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Get Exclusive Offers On <span className="text-pink-600">Your Email</span>
          </h1>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Subscribe to our newsletter and stay updated
          </p>

          {/* Input Section */}
          <div className="mt-5 flex flex-col sm:flex-row justify-center gap-3">
            <input
              type="email"
              placeholder="Your Email ID"
              className="px-4 py-3 w-full sm:w-2/3 md:w-1/2 border rounded-full focus:outline-none focus:ring-2 focus:ring-pink-400 text-center sm:text-left"
            />
            <button className="w-full sm:w-auto px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLetest;
