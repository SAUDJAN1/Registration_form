import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <ul className="flex  gap-10 justify-center">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link to="/signin" className="text-white hover:text-gray-400">
              SignIn
            </Link>
          </li>
          <li>
            <Link to="/signup" className="text-white hover:text-gray-400">
              SignUp
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
