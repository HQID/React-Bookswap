import React from 'react';

const Popuptransaksi = ({ isOpen, onClose, transaction }) => {
  if (!isOpen || !transaction) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl rounded-lg overflow-y-auto max-h-[90vh]">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold text-[#1F255E]">Detail Transaksi</h2>
          <button onClick={onClose} className="text-2xl text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>

        {/* Transaction completed section */}
        {transaction.status === "Completed" && (
          <div className="px-4 py-3 border-b">
            <div className="font-bold text-[#1F255E] text-lg">Penukaran Selesai</div>
            <div className="grid grid-cols-1 gap-1 mt-2">
              <div className="flex justify-between">
                <span className="text-gray-600">No. Transaksi</span>
                <span className="text-right">{transaction.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tanggal Penukaran</span>
                <span className="text-right">{transaction.date}</span>
              </div>
            </div>
          </div>
        )}

        {/* BookSwap partner section */}
        {transaction.partner && (
          <div className="px-4 py-3 border-b flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-[#1F255E] text-white rounded-full flex items-center justify-center mr-2">
                <span>B</span>
              </div>
              <span>BookSwap</span>
            </div>
            <div>{transaction.partner}</div>
            <button className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}

        {/* Book details section */}
        <div className="px-4 py-3 border-b">
          <h3 className="font-bold text-[#1F255E]">Detail Buku</h3>
          <div className="mt-3 flex">
            <div className="w-20 h-28 bg-gray-100 rounded flex items-center justify-center mr-3">
              {transaction.item?.image ? (
                <img src={transaction.item.image} alt={transaction.item.title} className="w-full h-full object-cover rounded" />
              ) : (
                <div className="text-gray-400">No Image</div>
              )}
            </div>
            <div>
              <h4 className="font-bold">{transaction.item?.title}</h4>
              <p className="text-gray-600">{transaction.item?.author}</p>
              <span className="inline-block mt-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                Good
              </span>
              <p className="mt-2">Jumlah: 1 buku</p>
            </div>
          </div>
        </div>

        {/* Protection info section */}
        <div className="px-4 py-3 border-b">
          <div className="flex justify-between items-center">
            <div className="flex items-start">
              <div className="mt-1 mr-3">
                <svg className="w-6 h-6 text-[#1F255E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-[#1F255E]">Kamu pakai proteksi di transaksi ini</h4>
                <p className="text-gray-600 text-sm">Setelah penukaran selesai, kamu bisa cek polis dan ajukan klaim lewat sini</p>
              </div>
            </div>
            <button className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Status section */}
        <div className="px-4 py-3 border-b">
          <div className="flex justify-between items-center">
            <span>Status Penukaran</span>
            <span className={`${
              transaction.status === "Completed" 
                ? "text-green-600 bg-green-100" 
                : transaction.status === "Processing" 
                  ? "text-yellow-600 bg-yellow-100" 
                  : "text-blue-600 bg-blue-100"
            } px-3 py-1 rounded-full text-sm`}>
              {transaction.status === "Completed" ? "Selesai" : transaction.status}
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="p-4 grid grid-cols-2 gap-3">
          <button className="py-3 w-full text-center border border-gray-300 rounded-md text-gray-700 font-medium">
            Bantuan
          </button>
          <button className="py-3 w-full text-center bg-[#1F255E] text-white rounded-md font-medium">
            Chat Partner
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popuptransaksi;
