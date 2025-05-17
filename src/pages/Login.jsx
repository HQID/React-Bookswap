import React from 'react';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import loginsvg from '../assets/login.svg';
import logopng from '../assets/logo.png';
import {toast} from 'react-hot-toast'
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [datas, setDatas] = useState({
    email: '',
    password: ''
  })

  const handleLogin =  async (e) => {
      e.preventDefault();
      
      try {
          const {data} = await axios.post('/login', datas)
          setDatas({
            email: '',
            password: ''
          })
          toast.success(data.message)
          navigate('/')
          window.location.reload()
      } catch (err) {
          toast.error(err.response.data.error)
          console.log(err);
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
            <h2 className="text-2xl font-bold text-center text-indigo-900">Welcome</h2>

            <form className="mt-4" onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={datas.email}
                onChange={(e) => setDatas({
                  ...datas, email: e.target.value
                })}
                className="w-full p-3 border rounded-lg my-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="password"
                placeholder="Password"
                value={datas.password}
                onChange={(e) => setDatas({
                  ...datas, password: e.target.value
                })}
                className="w-full p-3 border rounded-lg my-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <div className="text-indigo-600 hover:underline text-right text-sm">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                >
                  Forget password?
                </a>
              </div>

              <button type="submit" className="w-full bg-indigo-900 text-white py-3 rounded-lg mt-4 hover:bg-indigo-700">
                Login
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-4">
              Don't have an account?{" "}
              <Link to="/signup">
                <span
                  className="text-indigo-600 hover:underline"
                >
                  Sign up
                </span>
              </Link>
              
            </p>
          </div>

          {/* Right Section - Illustration */}
          <div className="w-1/2 bg-[#CBE4FE] flex items-center justify-center">
            <img
              src={loginsvg}
              alt="Login Illustration"
              className="w-4/4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;