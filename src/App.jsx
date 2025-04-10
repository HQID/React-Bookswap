import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import axios from 'axios';
import DetailBuku from './pages/DetailBuku';
import UserDetail from './pages/UserDetail';

const apiDev = import.meta.env.VITE_API_BASE_URL_DEV
axios.defaults.baseURL = apiDev;
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Toaster position="bottom-right" toastOptions={{duration: 2000}} />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/detailbuku" element={<DetailBuku />} />
          <Route path="/userdetail" element={<UserDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;