import React from "react";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import {AuthContext} from "../context/AuthContext";
import {toast} from "react-hot-toast";
import PopupAddBook from "../components/AddBook";

function Card({ title, author, status, img, onDelete, onClick }) {
  return (
    <div className="bg-white rounded-2xl border border-[#D9D9D9] shadow-md overflow-hidden transition-transform hover:scale-105 duration-300 relative">
      {img && <img src={img} alt={title} className="w-full h-64 object-contain p-4" onClick={onClick}/>}
      <button
        className="absolute top-2 right-2 bg-slate-500 text-white p-1 rounded-full"
        onClick={onDelete}
      >
        🗑
      </button>
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

export default function UserDetail() {
  const { user, setUser } = useContext(AuthContext);
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('/book/my');
        setBooks(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching books:", error);
        toast.error("Failed to load books.");
      }
    };

    fetchBooks(); 
  }, [])

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

  const [showPopup, setShowPopup] = useState(false);

  const handleAddBook = () => {
    setShowPopup(true);
  }

  const handleBookAdded = async () => {
    const response = await axios.post('/book/add', newBook);
    setNewBook(response.data.data);
  }

  const handleDeleteBook = async (bookId) => {
    try {
      await axios.delete(`/book/delete/${bookId}`);
      setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
      toast.success("Book deleted successfully.");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting book:", error);
      toast.error("Failed to delete book.");
    }
  };

  if(!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB]">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-[#1E1D6A] border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-[#1E1D6A] font-semibold text-lg">Loading User Details...</p>
        </div>
      </div>
    );
  }

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

        {/* Buttons */}
        <div className="flex justify-end gap-4 mt-4">
          <button className="bg-[#1E1D6A] text-white px-4 py-2 rounded-lg" onClick={handleAddBook}>Add Book</button>
          <button className="bg-[#1E1D6A] text-white px-4 py-2 rounded-lg">Transaction</button>
        </div>
      </section>

      {/* Book Cards */}
      <section className="bg-blue-50 px-6 py-10">
        <h1 className="text-[#1E1D6A] text-[35px] font-bold mb-6">My Book</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {books.map((book) => (
            <Card
              key={book._id}
              title={book.title}
              author={book.author}
              status={book.status}
              img={book.image}
              onDelete={() => handleDeleteBook(book._id)}
              onClick={() => navigate(`/detail/${book._id}`)}
            />
          ))}
        </div>
      </section>
      {showPopup && (
        <PopupAddBook
          onClose={() => setShowPopup(false)}
          onBookAdded={handleBookAdded}
          />
      )}
      {/* Footer */}
      <Footer />
    </div>
    
  )
}
