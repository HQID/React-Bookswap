import React from "react";
import logopng from '../assets/logo.png';
import book1 from '../assets/book1.png';
import banner from '../assets/banner.png';
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <img src={logopng} alt="Bookswap logo" className="h-8" />
    
        {/* Search Bar */}
        <div className="relative w-full max-w-md mx-4 shadow-md hidden sm:block rounded-full">
          <input 
            type="text"
            placeholder="Search books..."
            className="w-full py-2 pl-4 pr-10 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <svg
            className="absolute right-3 top-2.5 h-5 w-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z" />
          </svg>
        </div>
    
        {/* Right Side (Cart + Auth Buttons) */}
        <div className="flex items-center space-x-4">
          <button>
            <ShoppingCart />
          </button>
          <button className="px-4 py-1 text-sm font-medium border rounded-full text-indigo-800 border-indigo-800 hover:bg-indigo-900 hover:text-white transition">
            Sign up
          </button>
          <button className="px-4 py-1 text-sm font-medium border rounded-full text-white bg-indigo-800 hover:bg-indigo-800 transition">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
}