import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext)


    // Options array ko alag se define karein
  const sortOptions = [
    { value: "price-low-high", label: "Price: Low to High" },
    { value: "price-high-low", label: "Price: High to Low" },
    { value: "latest", label: "Latest" },
    { value: "oldest", label: "Oldest" },
  ];

  return (
     <div style={{paddingTop: '98px'}} className="p-4  md:p-10">
      <div className="w-full md:p-32 md:pt-0 md:pb-4  ">
        <img src={props.banner} alt="Banner" className="w-full  md:h-60 h-40 rounded-md" />
      </div>

      {/* Info Section */}
      {/* Info Section */}
      <div className="flex flex-col md:flex-row md:justify-between items-center mt-6 p-8 md:p-32 md:pt-0 md:pb-4 ">
        <p className="text-gray-700 text-sm md:text-lg">
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <select
          className="flex items-center px-2 py-2 border rounded-md hover:bg-gray-100 transition text-sm"
          defaultValue=""
        >
          <option value="" disabled>
            Sort by
          </option>

          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Product Grid */}
      <div className="mt-8 md:p-32 md:pt-0 md:pb-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       {all_product.map((item, i) => {
      if (props.category === item.category) {
       return (
       <div className="group relative transition-transform duration-300 hover:scale-105">
       <Item 
           key={item.id} 
           id={item.id}
           image={item.image}
           name={item.name}
           new_price={item.new_price}
           old_price={item.old_price}
         />
       </div>
       );
     }
     return null;
   })}
      </div>

      {/* Explore More Button */}
      <div className="text-center mt-10">
        <button className="px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition">
          Explore More
        </button>
      </div>
    </div>

  )
}

export default ShopCategory
