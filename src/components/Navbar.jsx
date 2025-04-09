import React from "react";
import logopng from '../assets/logo.png';
import { ShoppingCart } from "lucide-react";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <img src={logopng} alt="Bookswap logo" className="h-8" />
    
        {/* Search Bar */}
        <div className="relative w-full max-w-md mt-3 hidden sm:block">
          <div className="flex items-center bg-white rounded-2xl shadow-lg px-4 py-2 hover:shadow-[#CBE4FE] transition">
              <Search className="text-[#A6A6A6] mr-2" />
            <input
              type="text"
              className="w-full outline-none text-sm text-gray-700 placeholder:text-gray-400"
            />
          </div>

        </div>
    
        {/* Right Side (Cart + Auth Buttons) */}
        <div className="flex items-center space-x-4">
          <button className="text-[#1E1D6A]">
            <ShoppingCart />
          </button>
          <button className="px-4 py-1 text-sm font-medium border rounded-xl text-[#1E1D6A] border-[#1E1D6A] hover:bg-[#1E1D6A] hover:text-[#FAFAFA] transition">
            Sign up
          </button>
          <button className="px-4 py-1 text-sm font-medium border rounded-xl bg-[#1E1D6A] text-[#FAFAFA] border-[#FAFAFA] hover:bg-[#FAFAFA] hover:border-[#1E1D6A] hover:text-[#1E1D6A] transition">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
}