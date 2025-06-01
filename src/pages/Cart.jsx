import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get('/cart');
        setCartItems(response.data.data);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      }
    };
    fetchCartItems();
  }, []);

  const handleRemoveItem = async (id) => {
    try {
      await axios.delete(`/cart/delete/${id}`,);
      setCartItems(prevItems => prevItems.filter(item => item._id !== id));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-[#1F255E] mb-6">Cart</h1>
          
          {cartItems.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <Link to="/" className="text-[#1F255E] font-medium hover:underline">
                Explore books
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4 border-b">
                <h2 className="font-medium">{cartItems.length} Book</h2>
              </div>
              
              {cartItems.map(item => (
                <div key={item._id} className="p-4 border-b flex items-center cursor-pointer">
                  <div className="flex-shrink-0 mr-4" onClick={() => navigate(`/book/${item.bookId._id}`)}>
                    {item.bookId?.image && (
                      <img 
                        src={item.bookId.image} 
                        alt={item.bookId?.title || "Unknown Title"} 
                        className="w-24 h-32 object-cover rounded"
                      />
                    )}
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="font-medium text-lg">{item.bookId?.title || "Unknown Title"}</h3>
                    <p className="text-gray-600">{item.bookId?.userId?.username || "Unknown User"}</p>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <button 
                      onClick={() => handleRemoveItem(item._id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;
