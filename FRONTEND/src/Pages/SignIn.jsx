import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  function handleOnChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  }
  function handleOnSubmit(e) {
    e.preventDefault();
    const url = import.meta.env.VITE_BACKEND_URL;
    async function fetchData() {
      const res = await axios.post(`${url}/api/v1/login`, user);
      alert(res.data.message);
      if (res.status == 200) {
        navigate("/");
      }
    }
    fetchData();
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">
          Sign In
        </h2>
        <form action="" onSubmit={handleOnSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={user.email}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
              onChange={handleOnChange}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              required
              value={user.password}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your password"
              onChange={handleOnChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Sign In
          </button>
        </form>

        <div className="mt-4 text-center">
          <a
            href="/signup"
            className="text-blue-500 hover:text-blue-700 text-sm"
          >
            Don’t have an account? Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
