import React from "react";
import logopng from '../assets/logo.png';
import book1 from '../assets/book1.png';
import book2 from '../assets/book2.png';
import book3 from '../assets/book3.png';
import book4 from '../assets/book4.png';
import banner from '../assets/banner.png';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


function Card({ title, status, img, children }) {
  const isSwap = status?.toUpperCase() === "SWAP";

  return (
    <div className="bg-white rounded-2xl border border-[#D9D9D9] shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
      {/* Gambar jika ada */}
      {img && <img src={img} alt={title} className="w-full h-64 object-contain p-2" />}

      <div className="p-4">
        {/* Judul */}
        {title && <p className="font-semibold text-gray-900 text-base mb-1">{title}</p>}

        {/* Status swap/available */}
        {status && (
          <p className={`text-sm font-semibold ${isSwap ? 'text-purple-700' : 'text-blue-600'}`}>
            {status.toUpperCase()}
          </p>
        )}

        {/* Slot children jika ada konten tambahan */}
        {children}
      </div>
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
      status: 'SWAP',
      img: book1
    },
    {
      title: 'Durian Sukegawa - Pasta Kacang Merah',
      status: 'AVAILABLE',
      img: book2
    },
    {
      title: 'Naoki Urasawa - 20th Century Boys',
      status: 'AVAILABLE',
      img: book3
    },
    {
      title: 'Kim Seo Ryul - Things Left Behind',
      status: 'SWAP',
      img: book4
    }
    // Tambahkan buku lain sesuai kebutuhan
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-sans">
      {/* Navbar */}
      <Navbar/>

      <div className="px-20 md:px-24 lg:px-36">
  
  {/* Banner */}
  <section className="mt-8">
    <div className="bg-[#DDEEFF] rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between p-6 md:p-5">
      
      {/* Kiri - Teks */}
      <div className="max-w-md px-0 md:px-12">
        <h1 className="text-5xl md:text-6xl font-bold text-indigo-800 leading-tight">
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
  <section className="py-10">
    <h2 className="text-2xl font-bold mb-6 text-indigo-800">Swap</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
      {books.map((book, index) => (
        <Card
          key={index}
          title={book.title}
          status={book.status}
          img={book.img}
        />
      ))}
    </div>
  </section>

</div>


      {/* Footer */}
      <Footer/>
    </div>
  );
}
