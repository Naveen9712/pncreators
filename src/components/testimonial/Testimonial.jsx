import React from 'react';
import './Testimonial.css';

export default function Testimonial() {
  return (
    <section className="testimonial-section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            What our clients say<br />about our Company.
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-6 italic">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full"></div>
              <div>
                <div className="font-bold text-gray-800">Himani Butta</div>
                <div className="text-sm text-gray-600">Web Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

