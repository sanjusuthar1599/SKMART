import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import { ToastContainer, toast } from "react-toastify";
import { Link } from 'react-router-dom';

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItem, removeFromCart, increaseItemQuantity, decreaseItemQuantity } = useContext(ShopContext);

    const isCartEmpty = Object.keys(cartItem).length === 0 || all_product.length === 0 || !Object.values(cartItem).some(qty => qty > 0);

    return (
        <div className="px-4 md:px-20 py-10 mt-20">
            <h1 className="text-xl font-semibold mb-6">Shopping Cart</h1>

            {/* Table */}
            <div className="overflow-x-auto h-96 overflow-scroll border rounded-lg">
                <table className="w-full border-collapse border text-sm">
                    {/* Table Header */}
                    <thead className="bg-gray-100 text-gray-700 sticky top-0">
                        <tr className="border-b">
                            <th className="py-2 px-4 text-left">Product</th>
                            <th className="py-2 px-4 text-left">Title</th>
                            <th className="py-2 px-4 text-left">Price</th>
                            <th className="py-2 px-4 text-left">Quantity</th>
                            <th className="py-2 px-4 text-left">Total</th>
                            <th className="py-2 px-4 text-left">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isCartEmpty ? (
                            <tr>
                                <td colSpan="6" className="justify-center text-lg text-gray-500 p-4">
                                    <div className="bg-white rounded-lg flex flex-col items-center justify-center space-y-4">
                                        <img className="mx-auto h-40" src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="Empty cart illustration" />
                                        <div className="text-center">
                                            <p className="text-3xl font-semibold text-gray-800">Your cart is empty!</p>
                                            <p className="text-lg text-gray-600">Add items to it now.</p>
                                        </div>
                                        <Link to="/mens" className="bg-[#71cd14] text-white px-8 py-2 rounded-lg font-semibold hover:bg-[#4564ddeb] transition-all duration-300 transform hover:scale-105">
                                            Shop now
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            all_product.map((item) => {
                                if (cartItem[item.id] > 0) {
                                    return (
                                        <tr key={item.id} className="border-b text-gray-700">
                                            <td className="py-3 px-4">
                                                <img src={item.image} alt={item.name} className="w-12 h-12 rounded-md object-cover" />
                                            </td>
                                            <td className="py-3 px-4">{item.name}</td>
                                            <td className="py-3 px-4">${item.new_price}</td>
                                            {/* Quantity Control */}
                                            <td className="py-3 px-4 flex md:mt-0 mt-14 space-x-2">
                                                <button 
                                                    className="bg-gray-200 text-gray-800 rounded-full p-2 hover:bg-gray-300 transition-all duration-300"
                                                    onClick={() => decreaseItemQuantity(item.id)}
                                                >
                                                    <span className="font-bold text-xl">-</span>
                                                </button>
                                                <span className="px-4 mt-3">{cartItem[item.id]}</span>
                                                <button 
                                                    className="bg-gray-200 text-gray-800 rounded-full p-2 hover:bg-gray-300 transition-all duration-300"
                                                    onClick={() => increaseItemQuantity(item.id)}
                                                >
                                                    <span className="font-bold text-xl">+</span>
                                                </button>
                                            </td>

                                            <td className="py-3 px-4">$ {cartItem[item.id] * item.new_price}</td>
                                            <td className="py-3 px-4">
                                                <img
                                                    src={remove_icon}
                                                    onClick={() => {
                                                        removeFromCart(item.id);
                                                        toast.error("Item removed from cart!", { position: "top-right", autoClose: 1500 });
                                                    }}
                                                    alt="Remove item"
                                                    className="w-5 h-5 cursor-pointer hover:opacity-75"
                                                />
                                            </td>
                                        </tr>
                                    );
                                }
                                return null;
                            })
                        )}
                    </tbody>
                </table>
            </div>

            {/* Cart Totals */}
            <div className="flex flex-col lg:flex-row justify-between mt-8 gap-6">
                <div className="w-full lg:w-1/3 border p-4 rounded-md shadow-md">
                    <h1 className="text-md font-semibold mb-4">Cart Totals</h1>
                    <div className="flex justify-between text-sm">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between text-sm">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between text-sm font-semibold">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                    <button className="w-full bg-red-500 text-white py-2 mt-4 rounded-md hover:bg-red-600">
                        PROCEED TO CHECKOUT
                    </button>
                </div>

                {/* Promo Code Section */}
                <div className="w-full lg:w-1/3">
                    <p className="mb-2 text-sm">If you have a promo code, enter it here:</p>
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Promo code"
                            className="w-full border px-3 py-2 outline-none text-sm"
                        />
                        <button className="bg-black text-white px-4 py-2 text-sm">Submit</button>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default CartItems;
