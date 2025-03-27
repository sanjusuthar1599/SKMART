import React from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="px-4 md:px-40 py-10">
      {/* Title Section */}
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900">
          POPULAR IN WOMEN
        </h1>
        <hr className="mt-3 w-16 md:w-24 mx-auto border-2 border-black" />
      </div>
      
      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {data_product.map((item, i) => (
          <div className="group relative transition-transform duration-300 hover:scale-105">
          <Item
            key={i}
            id={item.id}
            image={item.image}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
          />
          </div>

        ))}
      </div>
    </div>
  );
};

export default Popular;
