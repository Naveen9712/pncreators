import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 w-full">
            <img src="/images/about-image.jpg" alt="About Image" className="object-cover w-full h-auto rounded-lg" />
          </div>
          <div className="md:w-1/2 w-full text-center md:text-left">
            <p className="text-purple-600 font-semibold mb-2 text-sm sm:text-base">WE ARE CREATIVE AGENCY</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">We Are Creative Agency</h2>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              At <span className="font-semibold">PNCreators</span>, we specialize in creating modern, responsive, and affordable websites tailored to your business. From design to deployment, we handle every step with creativity and precision.
            </p>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              Our mission is to make your online presence powerful and professional. We don't just build websites — we build digital experiences that connect with your audience and drive results.
            </p>
            <p className="text-gray-600 text-sm sm:text-base">
              We believe in fast delivery, transparent communication, and 24/7 customer support to make sure your project runs smoothly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

