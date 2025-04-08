import React from "react";
import logopng from '../assets/logo.png';
import book1 from '../assets/book1.png';
import banner from '../assets/banner.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
      <Navbar />

      {/* Banner */}
      <section className="flex justify-center mt-8">
        <div className="w-[90%] md:w-[90%] bg-[#DDEEFF] rounded-2xl shadow-lg flex items-center justify-between p-6 md:p-5">
          
          {/* Kiri - Teks */}
          <div className="max-w-md">
            <h1 className="text-5xl md:text-6xl font-bold text-indigo-900 leading-tight">
              Swap, read, <br /> repeat with
            </h1>
            <div className="mt-2 flex items-center space-x-2">
              <img src={logopng} alt="Bookswap logo" className="h-18" />
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

      <Footer />
    </div>
  );
}