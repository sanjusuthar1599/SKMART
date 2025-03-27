  import React, { useContext } from "react";
  import star_icon from "../Assets/star_icon.png";
  import star_dull_icon from "../Assets/star_dull_icon.png";
  import { ShopContext } from "../../Context/ShopContext";
  import { ToastContainer , toast } from "react-toastify";

  const ProductDisplay = (props ) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext)
    return (
      <div className="flex flex-col md:flex-row gap-8 px-4 md:px-40 py-10">
        {/* Left Side - Image Gallery */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Small Images */}
          <div className="flex md:flex-col gap-2">
            <img src={product.image} alt="" className="w-20 md:w-24 cursor-pointer border rounded-lg" />
            <img src={product.image} alt="" className="w-20 md:w-24 cursor-pointer border rounded-lg" />
            <img src={product.image} alt="" className="w-20 md:w-24 cursor-pointer border rounded-lg" />
            <img src={product.image} alt="" className="w-20 md:w-24 cursor-pointer border rounded-lg" />
          </div>
          {/* Main Image */}
          <div>
            <img src={product.image} alt="" className="w-72 md:w-[400px] rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Right Side - Product Details */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{product.name}</h1>

          {/* Ratings */}
          <div className="flex items-center gap-1">
            <img src={star_icon} alt="star" className="w-5" />
            <img src={star_icon} alt="star" className="w-5" />
            <img src={star_icon} alt="star" className="w-5" />
            <img src={star_icon} alt="star" className="w-5" />
            <img src={star_dull_icon} alt="star" className="w-5" />
            <p className="text-gray-500 ml-2">(122)</p>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2 text-lg">
            <span className="line-through text-gray-500">${product.old_price}</span>
            <span className="text-red-600 font-semibold text-2xl">${product.new_price}</span>
          </div>

          {/* Description */}
          <p className="text-gray-600">
            A lightweight, knitted pullover shirt with a round neckline and short sleeves. Perfect for casual wear.
          </p>

          {/* Select Size */}
          <div>
            <h1 className="text-lg font-semibold">Select Size</h1>
            <div className="flex gap-3 mt-2">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <div
                  key={size}
                  className="border px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button 
  onClick={() => {
    addToCart(product.id); 
    toast.success("Added to cart!", { position: "top-right", autoClose: 1500 });
  }} 
  className="bg-red-600 w-40 text-white py-3 rounded-lg text-lg font-medium hover:bg-red-700 transition"
>
  ADD TO CART
</button>

          {/* Category & Tags */}
          <p className="text-gray-600">
            <span className="font-semibold">Category: </span>Women, T-shirt, Crop Top
          </p>
          <p className="text-gray-600">
            <span className="font-semibold">Tags: </span>Modern, Latest
          </p>
        </div>

              <ToastContainer />

      </div>
    );
  };

  export default ProductDisplay;
