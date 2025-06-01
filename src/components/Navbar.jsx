import React, { useContext, useState } from "react";
import logopng from '../assets/logo.png';
import { ShoppingCart, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { user } = useContext(AuthContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const res = await axios.post("/logout")
      if(res.data.status) {
        navigate('/signin');
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setSearchResults([]);
      return;
    }
    try {
      const res = await axios.post("/book/search", { query });
      setSearchResults(res.data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/">
        <img src={logopng} alt="Bookswap logo" className="h-8" />
        </Link>
    
        {/* Search Bar */}
        <div className="relative w-full max-w-md mt-3 hidden sm:block">
          <div className="flex items-center bg-white rounded-2xl shadow-lg px-4 py-2 hover:shadow-[#CBE4FE] transition">
              <Search className="text-[#A6A6A6] mr-2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-full outline-none text-sm text-gray-700 placeholder:text-gray-400"
              placeholder="Search books..."
            />
          </div>
          {searchResults.length > 0 && (
            <div className="absolute bg-white border rounded-lg shadow-lg mt-2 w-full max-h-60 overflow-y-auto">
              {searchResults.map((book) => (
                <Link
                  key={book._id}
                  to={`/book/${book._id}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {book.title} by {book.authors}
                </Link>
              ))}
            </div>
          )}
        </div>
    
        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <ShoppingCart />
            {/* Optional: Display cart item count if you have that state */}
          </Link>
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2 "
              >
                <img
                  src={"https://cdn-icons-png.flaticon.com/512/6175/6175043.png"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border border-black"
                />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link to="/signup">
                <button className="px-4 py-1 text-sm font-medium border rounded-xl text-[#1E1D6A] border-[#1E1D6A] hover:bg-[#1E1D6A] hover:text-[#FAFAFA] transition">
                  Sign up
                </button>
              </Link>
              <Link to="/signin">
                <button className="px-4 py-1 text-sm font-medium border rounded-xl bg-[#1E1D6A] text-[#FAFAFA] border-[#FAFAFA] hover:bg-[#FAFAFA] hover:border-[#1E1D6A] hover:text-[#1E1D6A] transition">
                  Sign in
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}