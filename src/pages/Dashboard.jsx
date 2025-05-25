import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logopng from '../assets/logo.png';
import banner from '../assets/banner.png';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Card({ title, author, status, img, onClick }) {

  return (
    <div
      className="bg-white rounded-2xl border border-[#D9D9D9] shadow-md overflow-hidden transition-transform hover:scale-105 duration-300 cursor-pointer"
      onClick={onClick}
    >
      {img && <img src={img} alt={title} className="w-full h-64 object-contain p-4" />}
      <div className="px-4 pb-4">
        <p className="text-sm text-gray-400 font-semibold">{author}</p>
        <p className="text-base font-bold text-black">{title}</p>
        <p className={`text-sm font-bold py-1 text-[#1E1D6A]`}>{status}</p>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    // Fetch books data from the API
    const fetchBooks = async () => {
      try {
        const response = await axios.get('/book');
        setBooks(response.data.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

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
    {books.map((book) => (
      <Card
        key={book._id}
        title={book.title}
        author={book.authors}
        status={book.status?.toUpperCase()}
        img={book.image}
        onClick={() => navigate(`/detail/${book._id}`)}
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