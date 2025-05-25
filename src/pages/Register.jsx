import React from 'react'
import { useState, useEffect } from 'react'
import logopng from '../assets/logo.png';
import signsvg from '../assets/signup.svg';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import {toast} from 'react-hot-toast'

export default function Register() {
  const navigate = useNavigate();
  const [datas, setDatas] = useState({
    fullname: '',
    username: '',
    gender: '',
    city: '',
    address: '',
    telephone: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    setIsFormValid(
      datas.fullname.trim()!== '' &&
      datas.username.trim()!== '' &&
      datas.gender.trim()!== '' &&
      datas.city.trim()!== '' &&
      datas.address.trim()!== '' &&
      datas.phone.trim()!== '' &&
      datas.email.trim()!== '' &&
      datas.password.trim()!== '',
      datas.password === datas.confirmPassword
    )
  } ,[datas]);

  const registerUser = async (ev) => {
    ev.preventDefault();
    try {
      const {data} = await axios.post('/register', datas)
        setDatas({
          fullname: '',
          username: '',
          gender: '',
          city: '',
          address: '',
          phone: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
        toast.success('Registration Successful')
        navigate('/signin')
    } catch(err) {
        toast.error(err.response.data.error)
        console.log(err)
    }
  }

  return (
    <div className="flex min-h-screen">
          <div className="w-1/2 bg-[#CBE4FE]"></div>
          <div className="w-1/2 bg-[#1E1D6A]"></div>
          <div className="absolute flex items-center justify-center min-h-screen w-full">
            <div className="flex w-[800px] shadow-lg rounded-lg overflow-hidden">
              {/* Left Section - Login Form */}
    
              <div className="w-1/2 bg-white p-8">
                <div className="flex justify-center mb-3 -ml-2">
                  <img
                    src={logopng} 
                    alt="logo"
                    className="w-1/4"
                  />
                </div>
                <h2 className="text-2xl font-bold text-center text-indigo-900">Create Account</h2>
    
                <form onSubmit={registerUser} className="mt-3">
                  <input
                    type="full-name"
                    placeholder="Fullname"
                    value={datas.fullname}
                    onChange={(e) => setDatas({
                      ...datas, fullname: e.target.value
                    })}
                    className="w-full p-1 border-b my-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <input
                    type="username"
                    placeholder="Username"
                    value={datas.username}
                    onChange={(e) => setDatas({
                      ...datas, username: e.target.value
                    })}
                    className="w-full p-1 border-b my-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <select
                    value={datas.gender}
                    onChange={(e) => setDatas({
                      ...datas, gender: e.target.value
                    })}
                    className="w-full p-1 border-b my-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="" disabled>Select Gender</option>
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                  <input
                    type="city"
                    placeholder="City"
                    value={datas.city}
                    onChange={(e) => setDatas({
                      ...datas, city: e.target.value
                    })}
                    className="w-full p-1 border-b my-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                    <input
                    type="address"
                    placeholder="Address"
                    value={datas.address}
                    onChange={(e) => setDatas({
                      ...datas, address: e.target.value
                    })}
                    className="w-full p-1 border-b my-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                    <input
                    type="telephone"
                    placeholder="Handphone Number"
                    value={datas.phone}
                    onChange={(e) => setDatas({
                      ...datas, phone: e.target.value
                    })}
                    className="w-full p-1 border-b my-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                    <input
                    type="email"
                    placeholder="Email"
                    value={datas.email}
                    onChange={(e) => setDatas({
                      ...datas, email: e.target.value
                    })}
                    className="w-full p-1 border-b my-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                    <input
                    type="password"
                    placeholder="Password"
                    value={datas.password}
                    onChange={(e) => setDatas({
                      ...datas, password: e.target.value
                    })}
                    className="w-full p-1 border-b my-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                   <input
                    type="password"
                    placeholder="Confirm Password"
                    value={datas.confirmPassword}
                    onChange={(e) => setDatas({
                      ...datas, confirmPassword: e.target.value
                    })}
                    className="w-full p-1 border-b my-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
    
                  <button disabled={!isFormValid} className="w-full bg-indigo-900 text-white py-3 rounded-lg mt-4 hover:bg-indigo-700">
                    Sign Up
                  </button>
                </form>
    
                <p className="text-center text-sm text-gray-500 mt-4">
                  Have an account?{" "}
                  <Link to="/signin">
                    <span
                      className="text-indigo-600 hover:underline"
                    >
                      Sign In
                    </span>
                  </Link>
                  
                </p>
              </div>
    
              {/* Right Section - Illustration */}
              <div className="w-1/2 bg-[#CBE4FE] flex items-center justify-center">
                <img
                  src={signsvg}
                  alt="signup Illustration"
                  className="w-3/4"
                />
              </div>
            </div>
          </div>
        </div>
  )
}