import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import {AuthContext} from "../context/AuthContext";

export default function PopupAddBook({ onClose, onBookAdded }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [purchase, setPurchase] = useState('');

  const handleSave = async () => {
    try {
      const response = await axios.post('/book/add', {
        title,
        author,
        purchase
      });

      toast.success("Book added successfully!");
      onBookAdded(); // untuk refresh data buku di parent
      onClose(); // tutup popup
      window.location.reload();
    } catch (error) {
      console.error(error);
      toast.error("Failed to add book");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-[30px] p-8 w-full max-w-xl shadow-lg relative">
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-2xl" onClick={onClose}>×</button>

        {/* Logo */}
        <div className="text-center mb-6">
          <img src=".\src\assets\logo.png" alt="Logo" className="mx-auto h-8 mb-2" />
        </div>

        <h3 className="text-lg font-semibold mb-4">Add Books</h3>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full border-b border-gray-300 focus:outline-none py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Author"
            className="w-full border-b border-gray-300 focus:outline-none py-2"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <input
            type="date"
            placeholder="Purchase"
            className="w-full border-b border-gray-300 focus:outline-none py-2"
            value={purchase}
            onChange={(e) => setPurchase(e.target.value)}
          />
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded shadow"
            onClick={onClose}
          >
            Delete
          </button>
          <button
            className="bg-[#1E1D6A] text-white px-4 py-2 rounded shadow"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
