// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  <footer className= "bg-[#DDEEFF] py-10 mt-16">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-600">
            <div>
              <h4 className="font-bold mb-3">Information</h4>
              <ul>
                <li>Shipping</li>
                <li>Store</li>
                <li>Book Rental</li>
                <li>Shipping</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">About Bookswap</h4>
              <ul>
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Other</h4>
              <ul>
                <li>Shop</li>
                <li>Privacy Policy</li>
                <li>Cooperation</li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={logopng} alt="logo" className="h-8 mb-3" />
              <p>© 2025 Bookswap</p>
            </div>
          </div>
        </footer>
  }

export default Footer;
