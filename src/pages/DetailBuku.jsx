import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from "axios";
import book5 from '../assets/book5.png';
import book6 from '../assets/book6.png';
import book7 from '../assets/book7.png';
import book8 from '../assets/book8.png';



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

export default function DetailBuku() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`/book/${id}`); // Adjust the endpoint as needed
        const fetchedBook = response.data.data;

        // Convert language code to language name dynamically
        const languageDisplay = new Intl.DisplayNames(['en'], { type: 'language' });
        fetchedBook.languange = languageDisplay.of(fetchedBook.languange) || fetchedBook.languange;

        fetchedBook.status = fetchedBook.status.toUpperCase();
        fetchedBook.published = new Date(fetchedBook.published).toLocaleDateString();
        fetchedBook.purchase = new Date(fetchedBook.purchase).toLocaleDateString();

        setBook(fetchedBook);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };

    fetchBook();
  }, [id]);

  const handleAddToCart = () => {
    // Here you would typically add the book to cart state/storage
    // For now, we'll just navigate to the cart page
    navigate('/cart');
  };
  
  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB]">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-[#1E1D6A] border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-[#1E1D6A] font-semibold text-lg">Loading book details...</p>
        </div>
      </div>
    );
  }

  const books = [
    {
      author: 'Adrindia Ryandisza',
      title: 'Uang Gawat Darurat',
      status: 'SWAP',
      img: book5
    },
    {
      author: 'DUBU/CHUGONG',
      title: 'Solo Leveling 7',
      status: 'SWAP',
      img: book6
    },
    {
      author: 'Brian Khrisna',
      title: 'Seporsi Mie Ayam Sebelum Mati',
      status: 'SWAP',
      img: book7
    },
    {
      author: 'Romee',
      title: '30 Juz',
      available: 'Rp77.000',
      img: book8
    }
  ];
  
  return (
    <div className="min-h-screen font-sans">
      {/* Navbar */}
      <Navbar />

      <div className="container mx-auto px-4 lg:px-40">

      {/* Book Section */}
      <section className="flex justify py-12 gap-16">
        <img src={book.image} alt={book.title} className="w-50 h-80  shadow-md" />

        <div>
          <h2 className="text-[35px] font-bold text-[#2D336B]">{book.title}</h2>
          <p className="text-[15px] font-bold text-gray-600">{book.authors}</p>
          <p className="text-[35px] font-bold text-[#263238] mb-4">{book.status}</p>

          <h3 className="font-bold text-[#4E5E67] flex items-center text-[23px]"> Description
          <span className="flex gap-2 ml-10">
            {book.category?.map((cat, index) => (
              <span
                key={index}
                className="bg-[#C9E2FB] text-[#4E5E67] text-xs px-2 py-1 rounded-[8px] shadow-md"
              >
                {cat}
              </span>
            ))}
          </span>
          </h3>

          <p className="py-1 text-[43545D] text-[15px]  mb-2">{book.description}</p>

          <div className="flex gap-4 mb-6">
            <button 
              onClick={handleAddToCart}
              className="bg-[#1E1D6A] text-white font-semibold px-9 py-1 shadow-md"
            >
              Cart
            </button>
            <button className="bg-white text-[#1E1D6A] font-semibold px-9 py-1 shadow-md">Swap</button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-[200px_1fr] gap-[84px] items-start">
        <h3 className="font-bold text-[#4E5E67] text-[23px]">Book Details</h3>
  
        <div className="grid grid-cols-4 gap-y-4 text-[15px] text-[#43545D]">
          <p>Publisher <span className="text-black block">{book.publisher}</span></p>
          <p>Language <span className="text-black block">{book.languange}</span></p>
          <p>Purchase Date <span className="text-black block">{book.purchase}</span></p>
          <p className="font-semibold">Book Condition <span className="text-black font-normal block">Like New</span></p>

          <p>ISBN <span className="text-black block">{book.isbn}</span></p>
          <p>Pages <span className="text-black block">{book.pages}</span></p>
          <p>Published Date <span className="text-black block">{book.published}</span></p>
          <p className="font-semibold">Book Location <span className="text-black font-normal block">{book.location}</span></p>
        </div>
      </section>


      {/* Explore More Books */}
      <section className=" py-10">
        <h3 className="text-[#1E1D6A] text-[35px] font-bold mb-6 ">Explore More Books</h3>
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
      <Footer />
    </div>
  );
}
