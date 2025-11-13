import React from 'react';
import './Newsletter.css';

export default function Newsletter() {
  return (
    <section className="newsletter-section">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 md:mb-4 px-4">Get New Insights Weekly</h2>
          <p className="text-gray-600 mb-4 md:mb-6 text-sm sm:text-base px-4">
            Stay updated with the latest trends in web design, digital marketing, and branding. Subscribe to our newsletter and get creative inspiration delivered to your inbox.
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center px-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-gray-300 focus:outline-none focus:border-purple-500 flex-1 max-w-md text-sm sm:text-base"
            />
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full hover:shadow-lg transition text-sm sm:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

