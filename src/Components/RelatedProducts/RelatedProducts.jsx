import React from 'react';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const RelatedProducts = () => {
  return (
    <div className="px-4 md:px-40 py-10">
      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Related Products</h1>
        <hr className="mt-2 w-16 mx-auto border-2 border-black" />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {data_product.map((item, i) => (
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

export default RelatedProducts;
