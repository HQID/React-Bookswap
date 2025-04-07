import React from 'react';

import book1 from '../assets/book1.png';

function Card({ children, className }) {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
      {children}
    </div>
  );
}

function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}

export default function DetailBuku() {
  return (
    <div className="min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow-md">
        <div className="flex items-center gap-2">
          <h1 className="font-bold text-[#2D336B] text-lg">Bookswap</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-full pl-10 pr-4 py-2 w-64"
            />
          </div>
          <button className="border border-[#2D336B] text-[#2D336B] px-4 py-1 rounded-full">Sign up</button>
          <button className="bg-[#2D336B] text-white px-4 py-1 rounded-full">Sign in</button>
        </div>
      </nav>

      {/* Book Section */}
      <section className="flex px-24 py-12 gap-16">
        <img src={book1} alt="Laut Bercerita" className="w-50 h-80 rounded shadow-md" />

        <div>
          <h2 className="text-2xl font-bold text-[#2D336B]">Laut Bercerita</h2>
          <p className="text-sm text-gray-600 mb-2">Leila S. Chudori</p>
          <p className="text-xl font-bold text-gray-800 mb-4">Rp90.000</p>

          <h3 className="font-semibold text-gray-800 mb-1">Description</h3>
          <div className="flex gap-2 mb-2">
            <span className="bg-[#A9B5DF] text-white text-xs px-2 py-1 rounded-full">Fiksi Sejarah</span>
            <span className="bg-[#A9B5DF] text-white text-xs px-2 py-1 rounded-full">Drama</span>
          </div>

          <p className="text-gray-700 text-sm max-w-xl mb-4">
            Buku Laut Bercerita menceritakan terkait perilaku kekejaman dan kebingisan yang dirasakan oleh kelompok
            aktivis mahasiswa di masa Orde Baru. Tidak hanya itu, novel ini pun menenangkan kembali akan hilangnya
            tiga belas aktivis, bahkan sampai saat ini belum juga ada yang mendapatkan petunjuknya. Buku ini juga
            bercerita tentang kisah keluarga yang kehilangan, sekumpulan sahabat yang merasakan kekosongan di dada,
            sekelompok orang yang gemar menulis dan lancar berbicara, dan sejumlah keluarga yang mencari kejelasan
            makam anaknya.
          </p>

          <div className="flex gap-4 mb-6">
            <button className="bg-[#2D336B] text-white rounded-md px-6 py-2 shadow">Cart</button>
            <button className="bg-white text-[#2D336B] border border-[#2D336B] rounded-md px-6 py-2 shadow">Swap</button>
          </div>

          <h3 className="font-semibold text-gray-800 mb-2">Book Details</h3>
          <div className="grid grid-cols-2 gap-y-1 text-sm text-gray-700">
            <p>Publisher: <span className="text-black">Gramedia Pustaka Utama</span></p>
            <p>Language: <span className="text-black">Indonesia</span></p>
            <p>ISBN: <span className="text-black">9786020411333</span></p>
            <p>Pages: <span className="text-black">210</span></p>
            <p>Purchase Date: <span className="text-black">04 May 2024</span></p>
            <p>Published Date: <span className="text-black">01 January 2024</span></p>
            <p>Book Condition: <span className="text-black">Like New</span></p>
            <p>Book Location: <span className="text-black">Tolitoli, Sulawesi Tengah</span></p>
          </div>
        </div>
      </section>

      {/* Explore More Books */}
      <section className="px-16 pb-16">
        <h3 className="text-2xl font-bold mb-6">Explore More Books</h3>
        <div className="flex flex-wrap gap-6">
          <Card className="p-2 w-44 rounded-lg border-2 border-gray-200">
            <img src={book1} alt="Book 1" className="w-full h-64 object-cover rounded" />
            <CardContent>
              <p className="text-sm text-gray-600">Desy Miladiana</p>
              <h4 className="font-bold text-gray-800 text-base">Over (Love) Weight</h4>
              <p className="text-indigo-600 font-semibold text-sm">AVAILABLE</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F9FAFB] py-10 px-16 mt-auto border-t text-sm text-gray-600">
        <div className="flex justify-between flex-wrap gap-8">
          <div>
            <h1 className="font-bold text-[#2D336B] text-lg mb-2">Bookswap</h1>
            <p>Swap. Read. Repeat</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Information</h4>
            <ul className="space-y-1">
              <li>Shopping</li>
              <li>Swap Books</li>
              <li>Payment</li>
              <li>Shipping</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">About Bookswap</h4>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Other</h4>
            <ul className="space-y-1">
              <li>Blog</li>
              <li>Privacy Policy</li>
              <li>Cooperation</li>
            </ul>
          </div>
        </div>

      </footer>
    </div>
  );
}
