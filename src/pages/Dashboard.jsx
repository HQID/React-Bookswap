import React from "react";
import logopng from '../assets/logo.png';
import book1 from '../assets/book1.png';
import book2 from '../assets/book2.png';
import book3 from '../assets/book3.png';
import book4 from '../assets/book4.png';
import book5 from '../assets/book5.png';
import book6 from '../assets/book6.png';
import book7 from '../assets/book7.png';
import book8 from '../assets/book8.png';
import banner from '../assets/banner.png';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Card({ title, author, status, img }) {
  const isSwap = status?.toUpperCase() === "SWAP";

  return (
    <div className="bg-white rounded-2xl border border-[#D9D9D9] shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
      {img && <img src={img} alt={title} className="w-full h-64 object-contain p-4" />}

      <div className="px-4 pb-4">
        {/* Penulis */}
        <p className="text-sm text-gray-400 font-semibold">{author}</p>

        {/* Judul Buku */}
        <p className="text-base font-bold text-black">{title}</p>

        {/* Status */}
        <p className={`text-sm font-semibold py-1  ${isSwap ? ' text-[#757070] font-normal' : ' text-[#1E1D6A] font-bold'}`}>{status}
  </p>

      </div>
    </div>
  );
}

export default function Dashboard() {
  const books = [
    {
      author: 'Leila S. Chudori',
      title: 'Laut Bercerita',
      status: 'SWAP',
      img: book1
    },
    {
      author: 'Durian Sukegawa',
      title: 'Pasta Kacang Merah',
      status: 'AVAILABLE',
      img: book2
    },
    {
      author: 'Naoki Urasawa',
      title: '20th Century Boys',
      status: 'AVAILABLE',
      img: book3
    },
    {
      author: 'Kim Seo Ryul',
      title: 'Things Left Behind',
      status: 'SWAP',
      img: book4
    },
    {
      author: 'Adrindia Ryandisza',
      title: 'Uang Gawat Darurat',
      status: 'SWAP',
      img: book5
    },
    {
      author: 'DUBU/CHUGONG',
      title: 'Solo Leveling 7',
      status: 'AWAILABLE',
      img: book6
    },
    {
      author: 'Brian Khrisna',
      title: 'Seporsi Mie Ayam Sebelum Mati',
      status: 'AVAILABLE',
      img: book7
    },
    { 
      author: 'Romee',
      title: '30 Juz',
      status: 'AVAILABLE',
      img: book8
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] font-sans">
      {/* Navbar */}
      <Navbar/>

      <div className="container mx-auto px-4 lg:px-40">
  
  {/* Banner */}
  <section className="mt-8">
    <div className="bg-[#DDEEFF] rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between p-6 md:pl-20 pr-20">
      
      {/* Kiri - Teks */}
      <div className="max-w-md px-0">
        <h1 className="text-5xl md:text-6xl font-bold text-[#1E1D6A] leading-tight">
          Swap, read, <br /> repeat with
        </h1>
        <div className="mt-2 flex items-center space-x-2">
          <img src={logopng} alt="Bookswap logo" className="h-18" />
        </div>
        <p className="mt-2 text-sm text-[#1E1D6A]">Online book exchange platform</p>
      </div>

      {/* Kanan - Gambar banner */}
      <div className="hidden md:block w-[40%]">
        <img src={banner} alt="Banner" className="w-full object-contain" />
      </div>

    </div>
  </section>

  {/* Book Swap Section */}
  <section className="py-10">
    <h2 className="text-3xl font-bold mb-6 text-[#1E1D6A]">Swap</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
    {books.map((book, index) => (
      <Card
        key={index}
        title={book.title}
        author={book.author}
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