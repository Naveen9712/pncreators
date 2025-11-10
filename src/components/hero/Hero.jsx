import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl md:text-5xl font-semibold text-gray-800 mb-6 leading-tight">
              Creative Web<br />
              Development<br />
              Company
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              We craft beautiful, high-performing websites that help businesses grow online. Our team delivers custom design and development solutions that fit your goals, budget, and brand identity.
            </p>
            <button className="animated-button">
              Getting Started
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="hero-image-wrapper relative">
              <img src="https://separateweb.com/niwax--template/images/hero/hero-image.png" width="500" height="500" alt="Hero Image" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}