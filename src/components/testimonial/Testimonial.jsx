import React from 'react';
import './Testimonial.css';

export default function Testimonial() {
  return (
    <section className="testimonial-section">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 md:mb-8 text-center md:text-left px-4">
            What our clients say<br className="hidden md:block" />about our Company.
          </h2>
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
            <p className="text-gray-700 mb-4 md:mb-6 italic text-base sm:text-lg">
              "PNCreators delivered exactly what we envisioned — a clean, modern, and responsive website. Their team was professional, supportive, and available whenever we needed help."
            </p>
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500 rounded-full flex-shrink-0"></div>
              <div>
                <div className="font-bold text-gray-800 text-sm sm:text-base">Himani Busta</div>
                <div className="text-xs sm:text-sm text-gray-600">Web Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

