import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Popuptransaksi from '../components/Popuptransaksi';

const DetailTransaksi = () => {
  const { id } = useParams();
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [transactions, setTransactions] = useState([
    {
      id: "BSW/20240531/MPL/4088662462",
      date: "31 May 2024, 14:46 WIB",
      status: "Completed",
      partner: "Literary Haven",
      item: { 
        id: 1, 
        title: "To Kill a Mockingbird", 
        author: "Harper Lee",
        requester: "Sarah Johnson",
        condition: "Good",
        image: "https://source.unsplash.com/random/100x150/?book"
      }
    },
    {
      id: "TRX87654321",
      date: "10 May 2023",
      status: "Processing",
      partner: "Book Corner",
      item: { 
        id: 2, 
        title: "The Great Gatsby", 
        author: "F. Scott Fitzgerald",
        requester: "John Davis",
        condition: "Good",
        image: "https://source.unsplash.com/random/100x150/?novel"
      }
    },
    {
      id: "TRX23456789",
      date: "5 May 2023",
      status: "Pending",
      partner: "ReadMore",
      item: { 
        id: 3, 
        title: "Pride and Prejudice", 
        author: "Jane Austen",
        requester: "Emma Wilson",
        condition: "Good",
        image: "https://source.unsplash.com/random/100x150/?classic"
      }
    }
  ]);

  // Fetch transaction data (placeholder for actual API call)
  useEffect(() => {
    // Actual implementation would fetch data based on the ID
    // Example: fetchTransactionDetails(id).then(data => setTransaction(data));
    console.log("Fetching transaction details for ID:", id);
  }, [id]);

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'completed':
        return 'text-green-600 bg-green-100';
      case 'processing':
        return 'text-yellow-600 bg-yellow-100';
      case 'pending':
        return 'text-blue-600 bg-blue-100';
      case 'cancelled':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };
  
  const handleViewDetails = (transaction) => {
    setSelectedTransaction(transaction);
    setIsPopupOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="w-full px-4 py-8 flex-grow">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-[#1F255E] mb-2">Recent Transactions</h1>
          <p className="text-gray-600 mb-6">View your latest book swap transactions</p>
          
          <div className="flex flex-col gap-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="border rounded-lg p-4 hover:shadow-md transition">
                <div className="flex items-start mb-4">
                  <div className="w-24 h-32 bg-gray-200 rounded flex items-center justify-center mr-4">
                    {transaction.item.image ? (
                      <img 
                        src={transaction.item.image} 
                        alt={transaction.item.title}
                        className="w-full h-full object-cover rounded"
                      />
                    ) : (
                      <div className="text-gray-400 text-3xl">•</div>
                    )}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <h2 className="text-lg font-semibold text-[#1F255E]">{transaction.item.title}</h2>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                        {transaction.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-1">{transaction.item.author}</p>
                    <p className="text-[#1F255E] font-medium text-sm mb-1">Requested by: {transaction.item.requester}</p>
                    <p className="text-gray-500 text-sm">Transaction ID: {transaction.id}</p>
                    <p className="text-gray-500 text-sm">Date: {transaction.date}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <div className="flex gap-2">
                    <button className="py-1.5 px-3 bg-[#5CB85C] text-white rounded-md hover:bg-[#4cae4c] transition font-medium text-xs">
                      Accept
                    </button>
                    <button className="py-1.5 px-3 bg-white border border-[#D9534F] text-[#D9534F] rounded-md hover:bg-[#f2dede] transition font-medium text-xs">
                      Reject
                    </button>
                  </div>
                  
                  <div className="flex gap-2 sm:ml-auto">
                    <button className="py-2 px-4 bg-[#1F255E] text-white rounded-md hover:bg-[#161c46] transition font-medium text-sm">
                      Complete
                    </button>
                    <button 
                      onClick={() => handleViewDetails(transaction)}
                      className="py-2 px-4 bg-white border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition font-medium text-sm"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Popuptransaksi 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
        transaction={selectedTransaction} 
      />
      
      <Footer />
    </div>
  );
};

export default DetailTransaksi;
