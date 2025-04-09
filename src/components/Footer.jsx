// src/components/Footer.jsx
import React from 'react';
import logopng from '../assets/logo.png';
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return(
  <footer className= "bg-[#DDEEFF] py-10 mt-16">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-[#1E1D6A]">
            <div>
              <h4 className="font-bold mb-3">Information</h4>
              <ul>
                <li><a href="/shipping" className="hover:underline">Shipping</a></li>
                <li><a href="/store" className="hover:underline">Store</a></li>
                <li><a href="/rental" className="hover:underline">Book Rental</a></li>
                <li><a href="/delivery" className="hover:underline">Delivery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">About Bookswap</h4>
              <ul>
                <li><a href="/about" className="hover:underline">About Us</a></li>
                <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Other</h4>
              <ul>
                <li><a href="/shop" className="hover:underline">Shop</a></li>
                <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
                <li><a href="/cooperation" className="hover:underline">Cooperation</a></li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img src={logopng} alt="logo" className="h-8" />
              <p className="ml-1 font-semibold">Swap, Read, Repeat</p>
            </div>
          </div>
              {/* Copyright text center */}
          <div className="pt-8 text-center">
            <button>
              <Instagram className="text-[#1E1D6A]" />
            </button>
            <button className="mx-2">
              <Facebook className="text-[#1E1D6A]" />
            </button>
            <button>
              <Twitter className="text-[#1E1D6A]" />
            </button>
            <button className="mx-2">
              <Linkedin className="text-[#1E1D6A]" />
            </button>
            <p>© 2025 Bookswap</p>
          </div>
        </footer>
  )}

export default Footer;
