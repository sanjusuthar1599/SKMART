import React, { useState } from "react";

const DescriptionBox = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="w-full md:w-3/4 mx-auto mt-6 border rounded-lg shadow-lg">
      {/* Tab Section */}
      <div className="flex border-b">
        <button
          className={`w-1/2 p-3 text-center ${
            activeTab === "description" ? "border-b-4 border-black font-bold" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`w-1/2 p-3 text-center ${
            activeTab === "reviews" ? "border-b-4 border-black font-bold" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews (122)
        </button>
      </div>

      {/* Content Section */}
      <div className="p-4 text-gray-700">
        {activeTab === "description" ? (
          <div>
            <p>
              An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. 
              It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, 
              and conduct transactions without the need for a physical presence.
            </p>
            <p>
              E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer. 
              E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations 
              (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
            </p>
          </div>
        ) : (
          <div>
            <p className="text-gray-500">No reviews yet. Be the first to write a review!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
