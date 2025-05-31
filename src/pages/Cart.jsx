import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      condition: "Good",
      image: "https://source.unsplash.com/random/100x150/?book",
      points: 150,
      quantity: 1
    }
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const totalPoints = cartItems.reduce((total, item) => total + (item.points * item.quantity), 0);

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
                <div key={item.id} className="p-4 border-b flex items-center">
                  <div className="flex-shrink-0 mr-4">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-24 h-32 object-cover rounded"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="font-medium text-lg">{item.title}</h3>
                    <p className="text-gray-600">{item.author}</p>
                    <div className="mt-1">
                      <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                        {item.condition}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <button 
                      onClick={() => handleRemoveItem(item.id)}
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
