import React from "react";
import logopng from '../assets/logo.png';
import book1 from '../assets/book1.png';

function Card({ children, className }) {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
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
  return (
    <div className="min-h-screen bg-[#FFFFF]">
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <img src={logopng} alt="logo" className="h-8" />
            <div className="flex items-center">
              <button className="text-gray-500 hover:text-indigo-600">Logout</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-100 text-center p-8">
        <h2 className="text-2xl font-bold text-indigo-700">Swap, read, repeat with Bookswap</h2>
        <p className="text-gray-600">Online book exchange platform</p>
      </section>

      {/* Book Listings */}
      <section className="p-8">
        <h3 className="text-xl font-bold mb-4">Swap</h3>
        <div className="flex flex-wrap gap-8 w-full">
            <Card className="p-2 w-64 h-full rounded-lg border-4 border-gray-200">
              <img src={book1} alt="" className="w-full h-full object-cover" />
              <CardContent>
                <p className="text-gray-500 text-sm">halo</p>
                <h4 className="font-bold text-gray-800">Halo</h4>
                <p className="text-indigo-600 font-semibold">SWAP</p>
              </CardContent>
            </Card>
            
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-100 p-4 text-center text-gray-600">
        <p>&copy; 2025 Bookswap</p>
      </footer>
    </div>
  );
}
