import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import book1 from '../assets/book1.png';
import book2 from '../assets/book2.png';
import book3 from '../assets/book3.png';
import book4 from '../assets/book4.png';



function Card({ title, status, img, children }) {
  const isSwap = status?.toUpperCase() === "SWAP";

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
      {/* Gambar jika ada */}
      {img && <img src={img} alt={title} className="w-full h-64 object-cover" />}

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

export default function DetailBuku() {
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
    <div className="min-h-screen font-sans">
      {/* Navbar */}
      <Navbar/>

      {/* Book Section */}
      <section className="flex justify px-24 py-12 gap-16">
        <img src={book1} alt="Laut Bercerita" className="w-50 h-80 rounded shadow-md" />

        <div>
          <h2 className="text-[35px] font-bold text-[#2D336B]">Laut Bercerita</h2>
          <p className="text-[15px] font-bold text-gray-600">Leila S. Chudori</p>
          <p className="text-[35px] font-bold text-[#263238] mb-4">Rp90.000</p>

          <h3 className="font-bold text-[#4E5E67]  flex items-center text-[23px]"> Description
          <span className="flex gap-2 ml-10">
            <span className="bg-[#C9E2FB] text-[#4E5E67] text-xs px-2 py-1 rounded-[8px] shadow-md">Fiksi Sejarah</span>
            <span className="bg-[#C9E2FB] text-[#4E5E67] text-xs px-2 py-1 rounded-[8px] shadow-md">Drama</span>
          </span>
          </h3>

          <p className="py-1 text-[43545D] text-[15px]  mb-2">
            Buku Laut Bercerita menceritakan terkait perilaku kekejaman dan kebingisan yang dirasakan oleh kelompok
            aktivis mahasiswa di masa Orde Baru. Tidak hanya itu, novel ini pun menenangkan kembali akan hilangnya
            tiga belas aktivis, bahkan sampai saat ini belum juga ada yang mendapatkan petunjuknya. Buku ini juga
            bercerita tentang kisah keluarga yang kehilangan, sekumpulan sahabat yang merasakan kekosongan di dada,
            sekelompok orang yang gemar menulis dan lancar berbicara, dan sejumlah keluarga yang mencari kejelasan
            makam anaknya.
          </p>

          <div className="flex gap-4 mb-6">
            <button className="bg-[#1E1D6A] text-white font-semibold px-9 py-1 shadow-md">Cart</button>
            <button className="bg-white text-[#1E1D6A] font-semibold px-9  py-1 shadow-md">Swap</button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-[200px_1fr] px-24 gap-[84px] items-start">
        <h3 className="font-bold text-[#4E5E67] text-[23px]">Book Details</h3>
  
        <div className="grid grid-cols-4 gap-y-4 text-[15px] text-[#43545D]">
          <p>Publisher <span className="text-black block">Gramedia Pustaka Utama</span></p>
          <p>Language <span className="text-black block">Indonesia</span></p>
          <p>Purchase Date <span className="text-black block">04 May 2024</span></p>
          <p className="font-semibold">Book Condition <span className="text-black font-normal block">Like New</span></p>

          <p>ISBN <span className="text-black block">9786020411333</span></p>
          <p>Pages <span className="text-black block">210</span></p>
          <p>Published Date <span className="text-black block">01 January 2024</span></p>
          <p className="font-semibold">Book Location <span className="text-black font-normal block">Tolitoli, Sulawesi Tengah</span></p>
        </div>
      </section>


      {/* Explore More Books */}
      <section className="px-16 pb-16 py-10 ml-8">
        <h3 className="text-[#1E1D6A] text-[35px] font-bold mb-6 ">Explore More Books</h3>
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

      {/* Footer */}
      <Footer/>
    </div>
  );
}
