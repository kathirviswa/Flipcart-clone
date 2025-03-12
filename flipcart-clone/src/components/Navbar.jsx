import React, { useState } from "react";
import { Search, ShoppingCart, ChevronDown, User, LogIn, Package, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <a href="/" className="flex flex-col">
              <span className="text-xl font-bold text-[#2874f0]">Flipkart</span>
              <span className="text-xs italic font-medium text-gray-700">
                Explore <span className="text-yellow-500">Plus★</span>
              </span>
            </a>
          </div>

          {/* Search Bar (Hidden on Small Screens) */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for Products, Brands and More "
                className="w-full py-2 pl-4 pr-10 h-10 text-gray-900 bg-gray-100 rounded-md focus:outline-none"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#2874f0]">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Login Button with Dropdown */}
            <div className="relative"
              onMouseEnter={() => setIsLoginMenuOpen(true)}
              onMouseLeave={() => setIsLoginMenuOpen(false)}
            >
              <button className="flex items-center text-[#2874f0] font-medium">
                <User className="w-5 h-5 mr-2" />
                Login
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {isLoginMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md py-2">
                  <a href="/signin" className="flex items-center px-4 py-2 hover:bg-gray-100">
                    <LogIn className="w-5 h-5 mr-2 text-[#2874f0]" />
                    Sign in
                  </a>
                  <a href="/register" className="flex items-center px-4 py-2 hover:bg-gray-100">
                    <User className="w-5 h-5 mr-2 text-[#2874f0]" />
                    Create Account
                  </a>
                </div>
              )}
            </div>

            {/* Become a Seller */}
            <a href="/seller" className="flex items-center hover:text-gray-500">
              <Package className="w-5 h-5 mr-2" />
              <span>Become a Seller</span>
            </a>

            {/* Cart */}
            <a href="/cart" className="flex items-center hover:text-gray-500">
              <ShoppingCart className="w-5 h-5 mr-2" />
              <span>Cart</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-3">
            <a href="/signin" className="flex items-center py-2 text-gray-700 hover:bg-gray-100">
              <User className="w-5 h-5 mr-2 text-[#2874f0]" />
              Login / Sign Up
            </a>
            <a href="/seller" className="flex items-center py-2 text-gray-700 hover:bg-gray-100">
              <Package className="w-5 h-5 mr-2" />
              Become a Seller
            </a>
            <a href="/cart" className="flex items-center py-2 text-gray-700 hover:bg-gray-100">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Cart
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;



    // <div className='Navbar-container h-14 bg-indigo-500 fixed w-full text-black z-[2] '>
    //   <div className='Navbar max-w-[1248px] w-full flex justify-between items-center mx-auto pt-2.5 pr-31 pb-2.5 pl-31'>
    //   <Link to = {"/"}>
    //   <img src='./flipkart.png' alt='logo' className='logo w-20' />
    //   </Link>

    //   <div className='navbar-search h-9 flex justify-between max-w-[444px] w-[calc(100% - 540px)] bg-white rounded-sm'>
      
    //   <input type='text' placeholder='Search for products,Brands and More' className='search-bar' />
    //   <button className='btn btn-search h-9 w-11 border-none bg-white font-[20px] p-1 pr-2 pl-3 '>
    //   <Search /></button>
    //    <div className='navbar-login' >
    //    <CircleUser />Login  
    //    <ChevronDown />
    //   </div>
   
    //  {/* cart  */}
    //   <Link to ='cart'> cart
    //   <ShoppingCart />
    //   </Link>
    //  <h1><Package2 />Become a Seller</h1>
    // </div>
    // </div>
    // </div>
   

// export default Navbar