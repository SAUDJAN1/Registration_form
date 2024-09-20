// Home.jsx
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Bookstore</h1>
          <p className="text-lg mb-8">
            Explore our collection of amazing books!
          </p>
          <a
            href="/signup"
            className="bg-white text-blue-500 py-2 px-4 rounded shadow hover:bg-gray-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Wide Selection</h3>
              <p>Choose from thousands of titles across various genres.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Affordable Prices</h3>
              <p>
                Find your favorite books at prices that won't break the bank.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p>Get your books delivered to your doorstep in no time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Registration Form. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
