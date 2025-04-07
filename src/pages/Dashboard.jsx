import React from "react";
import logopng from '../assets/logo.png';
import book1 from '../assets/book1.png';
import banner from '../assets/banner.png'; // Pastikan path-nya benar

function Card({ children, className }) {
  return (
    <div className={`bg-white rounded-2xl shadow-md overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

function CardContent({ children }) {
  return (
    <div className="p-4">
      {children}
    </div>
  );
}

export default function Dashboard() {
  const books = [
    {
      title: 'Laut Bercerita',
      price: 'SWAP',
      img: book1
    },
    {
      title: 'Durian Sukegawa - Pasta Kacang Merah',
      price: 'Rp61.000',
      img: book1
    },
    {
      title: 'Naoki Urasawa - 20th Century Boys',
      price: 'Rp61.000',
      img: book1
    },
    {
      title: 'Kim Seo Ryul - Things Left Behind',
      price: 'Rp61.000',
      img: book1
    }
    // Tambahkan buku lain sesuai kebutuhan
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-sans">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
  <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
    
    {/* Logo */}
    <img src={logopng} alt="Bookswap logo" className="h-8" />

    {/* Search Bar */}
    <div className="relative w-full max-w-md mx-4 hidden sm:block">
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
        <svg
          className="h-6 w-6 text-gray-700"
          fill="none" stroke="currentColor"
          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M10 21a1 1 0 102 0" />
        </svg>
      </button>
      <button className="px-4 py-1 text-sm font-medium border rounded-full text-indigo-900 border-indigo-900 hover:bg-indigo-900 hover:text-white transition">
        Sign up
      </button>
      <button className="px-4 py-1 text-sm font-medium border rounded-full text-white bg-indigo-900 hover:bg-indigo-800 transition">
        Sign in
      </button>
    </div>
  </div>
</nav>

      {/* Banner */}
<section className="flex justify-center mt-8">
  <div className="w-[90%] md:w-[90%] bg-[#DDEEFF] rounded-2xl shadow-lg flex items-center justify-between p-6 md:p-5">
    
    {/* Kiri - Teks */}
    <div className="max-w-md">
      <h1 className="text-2xl md:text-3xl font-bold text-indigo-900 leading-tight">
        Swap, read, <br /> repeat with
      </h1>
      <div className="mt-2 flex items-center space-x-2">
        <img src={logopng} alt="Bookswap logo" className="h-6" />
      </div>
      <p className="mt-2 text-sm text-indigo-800">Online book exchange platform</p>
    </div>

    {/* Kanan - Gambar banner */}
    <div className="hidden md:block w-[40%]">
      <img src={banner} alt="Banner" className="w-full object-contain" />
    </div>

  </div>
</section>


      {/* Book Swap Section */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6 text-indigo-800">Swap</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {books.map((book, index) => (
            <Card key={index}>
              <img src={book.img} alt={book.title} className="w-full h-60 object-cover" />
              <CardContent>
                <p className="font-semibold text-gray-800 text-sm">{book.title}</p>
                <p className="text-indigo-600 font-semibold text-sm">{book.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}
