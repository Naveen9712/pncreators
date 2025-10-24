import React from 'react';
import './Newsletter.css';

export default function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get New Insights Weekly</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-purple-500 flex-1 max-w-md"
            />
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

