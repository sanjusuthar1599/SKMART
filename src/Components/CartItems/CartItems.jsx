import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import { ToastContainer, toast } from "react-toastify";

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItem, removeFromCart } = useContext(ShopContext);

    return (
        <div className="px-4 md:px-20 py-10 mt-20">
            <h1 className="text-xl font-semibold mb-6">Shopping Cart</h1>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border text-sm">
                    {/* Table Header */}
                    <thead className="bg-gray-100 text-gray-700">
                        <tr className="border-b">
                            <th className="py-2 px-4 text-left">Product</th>
                            <th className="py-2 px-4 text-left">Title</th>
                            <th className="py-2 px-4 text-left">Price</th>
                            <th className="py-2 px-4 text-left">Quantity</th>
                            <th className="py-2 px-4 text-left">Total</th>
                            <th className="py-2 px-4 text-left">Remove</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        {all_product.map((item) => {
                            if (cartItem[item.id] > 0) {
                                return (
                                    <tr key={item.id} className="border-b text-gray-700">
                                        <td className="py-3 px-4">
                                            <img src={item.image} alt="" className="w-12 h-12 rounded-md object-cover" />
                                        </td>
                                        <td className="py-3 px-4">{item.name}</td>
                                        <td className="py-3 px-4">${item.new_price}</td>
                                        <td className="py-3 px-4">
                                            <button className="border px-3 py-1">{cartItem[item.id]}</button>
                                        </td>
                                        <td className="py-3 px-4">${cartItem[item.id] * item.new_price}</td>
                                        <td className="py-3 px-4">
                                            <img
                                                src={remove_icon}
                                                onClick={() => {
                                                    removeFromCart(item.id);
                                                    toast.error("Item removed from carts!", { position: "top-right", autoClose: 1500 });
                                                }}
                                                alt=""
                                                className="w-5 h-5 cursor-pointer hover:opacity-75"
                                            />
                                        </td>
                                    </tr>
                                );
                            }
                            return null;
                        })}
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
