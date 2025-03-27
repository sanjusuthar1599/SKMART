import React from "react";
import New_Collection from "../Assets/new_collections";
import Item from "../Item/Item";

const NewCollection = () => {
  return (
    <div className="px-4 sm:px-8 md:px-40 py-10">
      {/* Title Section */}
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          NEW COLLECTIONS
        </h1>
        <hr className="mt-3 w-16 sm:w-24 mx-auto border-2 border-black" />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {New_Collection.map((item, i) => (
          <div key={i} className="group relative transition-transform duration-300 hover:scale-105">
            <Item
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

export default NewCollection;
