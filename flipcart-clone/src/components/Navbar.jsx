import React from 'react'
// import {Link} from "react-router-dom"
import  { useState } from 'react';
import { Search, ShoppingCart, ChevronDown, User, LogIn, Package } from 'lucide-react';

const Navbar = () => {
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);
  return (

    <nav className="bg-white  shadow-xl rounded-xl">
    {/* Main Navbar Container */}
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="/" className="flex flex-col items-start">
            <span className="text-xl font-bold text-[#2874f0]">Flipkart</span>
            <span className="text-sm italic font-medium flex items-center text-gray-700">
              Explore
              <span className="ml-0.5 text-yellow-500"> Plus★</span>
            </span>
          </a>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="w-2xl py-2 pl-4 pr-10 h-12 text-gray-900 bg-slate-100 rounded-sm focus:outline-none"
            />
            <button className="absolute right-0 top-0 h-full px-4 text-[#2874f0]">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-8">
          {/* Login Button */}
          <div className="relative">
            <button
              className="flex items-center bg-white text-[#2874f0] px-8 py-1 font-medium"
              onMouseEnter={() => setIsLoginMenuOpen(true)}
              onMouseLeave={() => setIsLoginMenuOpen(false)}
            >
              <User className="w-5 h-5 mr-2" />
              Login
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>

            {/* Login Dropdown */}
            {isLoginMenuOpen && (
              <div
                className="absolute right-0 mt-1 w-60 bg-white rounded-sm shadow-lg py-2 text-gray-800"
                onMouseEnter={() => setIsLoginMenuOpen(true)}
                onMouseLeave={() => setIsLoginMenuOpen(false)}
              >
                <div className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <LogIn className="w-5 h-5 mr-3 text-[#2874f0]" />
                  <span>Sign in</span>
                </div>
                <div className="flex items-center px-4 py-2 hover:bg-gray-100">
                  <User className="w-5 h-5 mr-3 text-[#2874f0]" />
                  <span>Create Account</span>
                </div>
              </div>
            )}
          </div>

          {/* Become a Seller */}
          <a href="/seller" className="flex items-center hover:text-gray-200">
            <Package className="w-5 h-5 mr-2" />
            <span>Become a Seller</span>
          </a>

          {/* Cart */}
          <a href="/cart" className="flex items-center hover:text-gray-200">
            <ShoppingCart className="w-5 h-5 mr-2" />
            <span>Cart</span>
          </a>
        </div>
      </div>
    </div>
  </nav>






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
   
  )
}

export default Navbar