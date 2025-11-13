import React from 'react';
import './Clients.css';

export default function Clients() {
  const clients = [
    "COFFEE STYLE",
    "EAGLE",
    "C",
    "HETIGO",
    "TRAVEL"
  ];

  return (
    <section className="clients-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Some of our Clients</h2>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-12">
            {clients.map((client, index) => (
              <div key={index} className="bg-white px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="text-base sm:text-lg md:text-xl font-bold text-gray-700">{client}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8 md:mt-12">
          <p className="text-gray-700 text-base sm:text-lg mb-4">
            We <span className="font-bold">Promise.</span> We <span className="font-bold">Deliver.</span>
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:shadow-lg transition text-sm sm:text-base">
            Discover Service
          </button>
        </div>
      </div>
    </section>
  );
}

