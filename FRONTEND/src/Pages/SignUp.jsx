// RegistrationForm.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  //navigate
  const navigate = useNavigate();
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
      const res = await axios.post(`${url}/api/v1/register`, user);
      alert(res.data.message);
      console.log(res.data);
      if (res.status == 200) {
        navigate("/signin");
      }
    }
    fetchData();
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleOnSubmit}
        className="bg-black p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Register
        </h2>

        {/* Username */}
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="name"
            value={user.name}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter your username"
            required
            onChange={handleOnChange}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter your email"
            required
            onChange={handleOnChange}
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-white mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter your password"
            required
            onChange={handleOnChange}
          />
        </div>

        {/* Submit Button */}
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;
