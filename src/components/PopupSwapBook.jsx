import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../context/AuthContext';
import { useParams } from 'react-router-dom';

export default function PopupSwapBook({ onClose, bookId }) {
  const [myBooks, setMyBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [receiverBook, setReceiverBook] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMyBooks = async () => {
      try {
        const response = await axios.get('/book/my');
        setMyBooks(response.data.data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch your books");
      }
    };

    const fetchReceiverBook = async () => {
      try {
        const response = await axios.get(`/book/${id}`);
        setReceiverBook(response.data.data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch receiver's book");
      }
    };

    fetchMyBooks();
    fetchReceiverBook();
  }, [bookId]);

  const handleSwapRequest = async () => {
    if (!receiverBook) {
      toast.error("Receiver's book details are missing");
      return;
    }

    try {
        await axios.post('/trade/request', {
            receiver: receiverBook.userId._id,
            requesterBook: selectedBook,
            receiverBook: receiverBook._id
        });
      toast.success("Swap request sent successfully!");
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send swap request");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-[30px] p-8 w-full max-w-xl shadow-lg relative">
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-2xl" onClick={onClose}>×</button>

        <h3 className="text-lg font-semibold mb-4">Swap Book</h3>

        <div className="space-y-4">
          <select
            className="w-full border-b border-gray-300 focus:outline-none py-2"
            value={selectedBook}
            onChange={(e) => setSelectedBook(e.target.value)}
          >
            <option value="" disabled>Select a book</option>
            {myBooks.map((book) => (
              <option key={book._id} value={book._id}>
                {book.title}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded shadow"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-[#1E1D6A] text-white px-4 py-2 rounded shadow"
            onClick={handleSwapRequest}
            disabled={!selectedBook || !receiverBook._id}
          >
            Swap
          </button>
        </div>
      </div>
    </div>
  );
}
