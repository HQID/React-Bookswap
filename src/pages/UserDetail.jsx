import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import book1 from '../assets/book1.png';
import book2 from '../assets/book2.png';
import book3 from '../assets/book3.png';
import book4 from '../assets/book4.png';
import book5 from '../assets/book5.png';
import book6 from '../assets/book6.png';
import book7 from '../assets/book7.png';
import book8 from '../assets/book8.png';

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
        <p className="text-[#1E1D6A] font-bold">{status}</p>
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

const books = [
  {
    title: "Over (Love) Weight",
    author: "Desy Muliadina",
    status: "AVAILABLE",
    img: book1,
  },
  {
    title: "Pasta Kacang Merah",
    author: "Durian Sukegawa",
    status: "EXCHANGED",
    img: book2,
  },
  {
    title: "Masyarakat Adat",
    author: "Ahmad Arif",
    status: "AVAILABLE",
    img: book3,
  },
  {
    title: "MetroPop: Ganjil Genap",
    author: "Almira Bastari",
    status: "AVAILABLE",
    img: book4,
  },
];

export default function UserDetail() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* User Info */}
      <section className="p-8">
        <h1 className="text-2xl font-bold text-[#2D336B] ml-20">Welcome, User!</h1>
        <div className="grid grid-cols-3 mt-4 gap-6 items-start">
          <div className="flex flex-col items-center">
            <img
              src="/avatar-placeholder.png"
              alt="User Avatar"
              className="w-24 h-24 rounded-full border"
            />
            <button className="mt-2 text-sm text-blue-500">Change Photo</button>
          </div>
          <div className="col-span-1 grid grid-cols-1 gap-2">
            <p>
              Full Name:{" "}
              <span className="font-medium">
                Sofia Qatrunnada <span className="text-sm text-blue-500">✎</span>
              </span>
            </p>
            <p>
              Username:{" "}
              <span className="font-medium">
                Filarditz <span className="text-sm text-blue-500">✎</span>
              </span>
            </p>
            <p>
              Gender:{" "}
              <span className="font-medium">
                Male <span className="text-sm text-blue-500">✎</span>
              </span>
            </p>
          </div>
          <div className="col-span-1 grid grid-cols-1 gap-2">
            <p>
              Address:{" "}
              <span className="font-medium">
                Lebih jauh dari Palu Barat <span className="text-sm text-blue-500">✎</span>
              </span>
            </p>
            <p>
              Telephone:{" "}
              <span className="font-medium">
                +62 823 4897 0725 <span className="text-sm text-blue-500">✎</span>
              </span>
            </p>
            <p>
              Email:{" "}
              <span className="font-medium">
                Fakmal@gmail.com <span className="text-sm text-blue-500">✎</span>
              </span>
            </p>
          </div>
        </div>

        {/* Right Options */}
        <div className="flex justify-end gap-6 mt-4 text-sm text-gray-700 underline">
          <p>Cart</p>
          <p>Transaction</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-4">
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg">Log Out</button>
          <button className="bg-[#1E1D6A] text-white px-4 py-2 rounded-lg">Update Book</button>
        </div>
      </section>

      {/* Book Cards */}
      <section className="bg-blue-50 px-6 py-10">
        <h1 className="text-[#1E1D6A] text-[35px] font-bold mb-6">Explore More Book</h1>
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
      {/* Footer */}
      <Footer />
    </div>
  );
}
