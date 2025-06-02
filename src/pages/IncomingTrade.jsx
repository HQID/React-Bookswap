import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const IncomingTrade = () => {
  const { user, setUser } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/verify')
      .then((res) => {
        if (!res.data.status) {
          setUser(null);
          navigate('/signin');
        }
      })
      .catch((err) => {
        console.error("Failed to verify user:", err);
        toast.error("Session expired. Please log in again.");
        setUser(null);
        navigate('/signin');
      });
  }, [navigate, setUser]);

  useEffect(() => {
    const fetchIncomingTrades = async () => {
      try {
        const response = await axios.get(`/trade`);
        setTransactions(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching incoming trades:", error);
      }
    };

    fetchIncomingTrades();
  }, []);

  const handleRespondTrade = async (transactionId, action) => {
    try {
      const response = await axios.patch('/trade/respond', {
        id: transactionId,
        status: action
      });
      toast.success(response.data.message);
      window.location.reload();
    } catch (error) {
      console.error("Error responding to trade:", error);
      toast.error("Failed to respond to trade request.");
    }
  }

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'accepted':
        return 'text-green-600 bg-green-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'rejected':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="w-full px-4 py-8 flex-grow">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-[#1F255E] mb-2">Incoming Trades</h1>
          <p className="text-gray-600 mb-6">View all incoming book swap requests</p>

          <div className="flex flex-col gap-4">
            {transactions.map((transaction) => (
              <div key={transaction._id} className="border rounded-lg p-4 hover:shadow-md transition">
                <div className="flex items-start mb-4">
                  <div className="flex flex-col w-1/2 pr-4">
                    <h3 className="text-lg font-semibold text-[#1F255E] mb-2">Requester</h3>
                    <div className="flex items-center">
                      <div className="w-24 h-32 bg-gray-200 rounded flex items-center justify-center mr-4">
                        {transaction.requesterBook.image ? (
                          <img
                            src={transaction.requesterBook.image}
                            alt={transaction.requesterBook.title}
                            className="w-full h-full object-cover rounded"
                          />
                        ) : (
                          <div className="text-gray-400 text-3xl">•</div>
                        )}
                      </div>
                      <div>
                        <p className="text-[#1F255E] font-medium text-sm mb-1">{transaction.requester.username}</p>
                        <p className="text-gray-600">{transaction.requesterBook.title}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col w-1/2 pl-4">
                    <h3 className="text-lg font-semibold text-[#1F255E] mb-2">Receiver</h3>
                    <div className="flex items-center">
                      <div className="w-24 h-32 bg-gray-200 rounded flex items-center justify-center mr-4">
                        {transaction.receiverBook.image ? (
                          <img
                            src={transaction.receiverBook.image}
                            alt={transaction.receiverBook.title}
                            className="w-full h-full object-cover rounded"
                          />
                        ) : (
                          <div className="text-gray-400 text-3xl">•</div>
                        )}
                      </div>
                      <div>
                        <p className="text-[#1F255E] font-medium text-sm mb-1">{transaction.receiver.username}</p>
                        <p className="text-gray-600">{transaction.receiverBook.title}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-start mb-4">
                  <div className="flex-grow">
                    <div className="flex justify-end mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                        {transaction.status}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm">Transaction ID: {transaction._id}</p>
                    <p className="text-gray-500 text-sm">Date: {transaction.updatedAt}</p>
                    <p className="text-gray-500 text-sm">Owner Phone Number : {transaction.requester.phone}</p>
                    <p className="text-gray-500 text-sm">Owner Location : {transaction.requesterBook.location}</p>
                    
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4 justify-end">
                  {transaction.status.toLowerCase() === 'pending' && (
                    <div className="flex gap-4">
                      <button className="py-2 px-6 bg-[#5CB85C] text-white rounded-md hover:bg-[#4cae4c] transition font-medium text-md" onClick={() => handleRespondTrade(transaction._id, 'accepted')}>
                        Accept
                      </button>
                      <button className="py-2 px-6 bg-white border border-[#D9534F] text-[#D9534F] rounded-md hover:bg-[#f2dede] transition font-medium text-md" onClick={() => handleRespondTrade(transaction._id, 'rejected')}>
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IncomingTrade;
