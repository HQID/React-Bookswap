import React from "react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import book1 from '../assets/book1.png';
import book2 from '../assets/book2.png';
import book3 from '../assets/book3.png';
import book4 from '../assets/book4.png';
import axios from "axios";
import {AuthContext} from "../context/AuthContext";
import {toast} from "react-hot-toast";

function Card({ title, author, status, img }) {
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
  const { user, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/verify')
      .then((res) => {
        if (!res.data.status) {
          setUser(null); // Reset user state
          navigate('/signin');
        }
      })
      .catch((err) => {
        console.error("Failed to verify user:", err);
        toast.error("Session expired. Please log in again.");
        setUser(null); // Reset user state
        navigate('/signin');
      });
  }, [navigate, setUser]);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* User Info */}
      <section className="p-8">
        <h1 className="text-2xl font-bold text-[#2D336B] ml-20">Welcome, {user?.username}!</h1>
        <div className="grid grid-cols-3 mt-4 gap-6 items-start">
          <div className="flex flex-col items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6175/6175043.png"
              alt="User Avatar"
              className="w-24 h-24 rounded-full border"
            />
            <button className="mt-2 text-sm text-blue-500">Change Photo</button>
          </div>
          <div className="col-span-1 grid grid-cols-1 gap-2">
            <p>
              Full Name:{" "}
              <span className="font-medium">
                {user?.fullname} <span className="text-sm text-blue-500">✎</span>
              </span>
            </p>
            <p>
              Username:{" "}
              <span className="font-medium">
                {user?.username} <span className="text-sm text-blue-500">✎</span>
              </span>
            </p>
            <p>
              Gender:{" "}
              <span className="font-medium">
                {user?.gender} <span className="text-sm text-blue-500">✎</span>
              </span>
            </p>
          </div>
          <div className="col-span-1 grid grid-cols-1 gap-2">
            <p>
              Address:{" "}
              <span className="font-medium">
                {user?.address} <span className="text-sm text-blue-500">✎</span>
              </span>
            </p>
            <p>
              Telephone:{" "}
              <span className="font-medium">
                {user?.phone} <span className="text-sm text-blue-500">✎</span>
              </span>
            </p>
            <p>
              Email:{" "}
              <span className="font-medium">
                {user?.email} <span className="text-sm text-blue-500">✎</span>
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
