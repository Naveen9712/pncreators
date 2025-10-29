import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800 font-poppins">
            PN<span className="text-purple-600">Creators</span>
          </div>
        
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-500 hover:text-purple-600 transition">Home</a>
            <a href="#about" className="text-gray-500 hover:text-purple-600 transition">About</a>
            <a href="#services" className="text-gray-500 hover:text-purple-600 transition">Services</a>
            <a href="#portfolio" className="text-gray-500 hover:text-purple-600 transition">Portfolio</a>
            <a href="#contact" className="text-gray-500 hover:text-purple-600 transition">Contact</a>
          </div>

          <button className="hidden md:block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a href="#home" className="block text-gray-700 hover:text-purple-600 transition">HOME</a>
            <a href="#about" className="block text-gray-700 hover:text-purple-600 transition">ABOUT</a>
            <a href="#services" className="block text-gray-700 hover:text-purple-600 transition">SERVICES</a>
            <a href="#portfolio" className="block text-gray-700 hover:text-purple-600 transition">PORTFOLIO</a>
            <a href="#contact" className="block text-gray-700 hover:text-purple-600 transition">CONTACT</a>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full w-full">
              Get Started
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

