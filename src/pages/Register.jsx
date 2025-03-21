import React from 'react'
import logopng from '../assets/logo.png';
import signsvg from '../assets/signup.svg';

export default function Register() {
  return (
    <div className="flex min-h-screen">
          <div className="w-1/2 bg-[#CBE4FE]"></div>
          <div className="w-1/2 bg-[#1E1D6A]"></div>
          <div className="absolute flex items-center justify-center min-h-screen w-full">
            <div className="flex w-[800px] shadow-lg rounded-lg overflow-hidden">
              {/* Left Section - Login Form */}
    
              <div className="w-1/2 bg-white p-8">
                <div className="flex justify-center mb-3 -ml-2">
                  <img
                    src={logopng} 
                    alt="logo"
                    className="w-1/4"
                  />
                </div>
                <h2 className="text-2xl font-bold text-center text-indigo-900">Create Account</h2>
    
                <form className="mt-3">
                  <input
                    type="full-name"
                    placeholder="full name"
                    className="w-full p-1 border-b my-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="username"
                    placeholder="username"
                    className="w-full p-1 border-b my-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="gender"
                    placeholder="gender"
                    className="w-full p-1 border-b my-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="city"
                    placeholder="city"
                    className="w-full p-1 border-b my-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                    <input
                    type="address"
                    placeholder="address"
                    className="w-full p-1 border-b my-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                    <input
                    type="telephone"
                    placeholder="telephone"
                    className="w-full p-1 border-b my-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                    <input
                    type="email"
                    placeholder="email"
                    className="w-full p-1 border-b my-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                    <input
                    type="password"
                    placeholder="password"
                    className="w-full p-1 border-b my-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                   <input
                    type="confirm-password"
                    placeholder="confirm password"
                    className="w-full p-1 border-b my-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
    
                  <button className="w-full bg-indigo-900 text-white py-3 rounded-lg mt-4 hover:bg-indigo-700">
                    Sign Up
                  </button>
                </form>
    
                <p className="text-center text-sm text-gray-500 mt-4">
                  Have an account?{" "}
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-indigo-600 hover:underline"
                  >
                    Sign In
                  </a>
                </p>
              </div>
    
              {/* Right Section - Illustration */}
              <div className="w-1/2 bg-[#CBE4FE] flex items-center justify-center">
                <img
                  src={signsvg}
                  alt="signup Illustration"
                  className="w-3/4"
                />
              </div>
            </div>
          </div>
        </div>
  )
}