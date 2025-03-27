import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setmenu] = useState("Shop");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();

  const { getTotalCartItem } = useContext(ShopContext)

  // Update the menu based on the current location
  useEffect(() => {
    if (location.pathname === "/") {
      setmenu("Shop");
    } else if (location.pathname === "/mens") {
      setmenu("Men");
    } else if (location.pathname === "/womens") {
      setmenu("Women");
    } else if (location.pathname === "/kids") {
      setmenu("Kids");
    } else {
      setmenu(""); // If you are on a page like /login, reset the menu
    }
  }, [location]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-5 py-4 bg-white shadow-md z-50">
        {/* Left Section - Logo & Brand Name */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <p className="text-2xl font-bold">SHOPPER</p>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="md:flex items-center gap-6 text-lg text-gray-800 hidden md:block ">
          <ul className="flex gap-6">
            <li className="cursor-pointer hover:text-red-600 transition" onClick={() => setmenu("Shop")}>
              <Link to="/"> Shop </Link>
              {menu === "Shop" ? <hr className='border-2 border-red-600' /> : <></>}
            </li>
            <li className="cursor-pointer hover:text-red-600 transition" onClick={() => setmenu("Men")}>
              <Link to="/mens"> Men </Link>
              {menu === "Men" ? <hr className='border-2 border-red-600' /> : <></>}
            </li>
            <li className="cursor-pointer hover:text-red-600 transition" onClick={() => setmenu("Women")}>
              <Link to="/womens"> Women </Link>
              {menu === "Women" ? <hr className='border-2 border-red-600' /> : <></>}
            </li>
            <li className="cursor-pointer hover:text-red-600 transition" onClick={() => setmenu("Kids")}>
              <Link to="/kids"> Kids </Link>
              {menu === "Kids" ? <hr className='border-2 border-red-600' /> : <></>}
            </li>
          </ul>
        </div>

        {/* Right Section - Login & Cart */}
        <div className="hidden md:flex items-center gap-5">
          <Link to="/login">
            <button className="px-5 py-2 border-2 border-black rounded-full transition hover:bg-black hover:text-white">
              Login
            </button>
          </Link>

          <Link to="/cart">
            <div className="relative">
              <img src={cart_icon} alt="Cart" className="w-8 h-8 cursor-pointer" />
              {getTotalCartItem() > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {getTotalCartItem()}
                </span>
              )}
            </div>
          </Link>
        </div>
      </nav>


      {/* Mobile Dropdown Menu */}
      <div style={{ position: "fixed", top: "70px" }} className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"} top-16 left-0 w-full bg-white shadow-lg z-10`}>
        <ul className="flex flex-col items-center py-4">
          <li className="cursor-pointer hover:text-red-600 transition py-2"
            onClick={() => {
              setmenu("Shop")
              setMobileMenuOpen(false);
            }}>
            <Link to="/"> Shop </Link>
          {menu === "Shop" ? <hr className='border-2 border-red-600' /> : <></>}
        </li>

        <li className="cursor-pointer hover:text-red-600 transition py-2"
         onClick={() => {
           setmenu("Men")
           setMobileMenuOpen(false);
         }}>
          <Link to="/mens"> Men </Link>
          {menu === "Men" ? <hr className='border-2 border-red-600' /> : <></>}
        </li>

        <li className="cursor-pointer hover:text-red-600 transition py-2"
         onClick={() => {
           setmenu("Women")
           setMobileMenuOpen(false);
         }}>
          <Link to="/womens"> Women </Link>
          {menu === "Women" ? <hr className='border-2 border-red-600' /> : <></>}
        </li>

        <li className="cursor-pointer hover:text-red-600 transition py-2"
         onClick={() => {
           setmenu("Kids")
           setMobileMenuOpen(false);
         }}>
          <Link to="/kids"> Kids </Link>
          {menu === "Kids" ? <hr className='border-2 border-red-600' /> : <></>}
        </li>

        {/* Mobile Login and Cart */}
        <li className="py-4">
          <Link to={"/login"}>
            <button className="px-5 py-2 border-2 border-black rounded-full transition hover:bg-black hover:text-white">
              Login
            </button>
          </Link>
        </li>

        <li>
          <Link to={"/cart"}>
            <div className="relative">
              <img src={cart_icon} alt="Cart" className="w-8 h-8 cursor-pointer" />
              {getTotalCartItem() > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {getTotalCartItem()}
                </span>
              )}
            </div>
          </Link>
        </li>
      </ul>
    </div >
      
    </>
  );
};

export default Navbar;
