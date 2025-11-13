import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 md:mb-4 font-poppins">
              PN<span className="text-purple-400">Creators</span>
            </h3>
            <p className="text-gray-400 mb-4 text-xs sm:text-sm">
              Creative web development company dedicated to building amazing digital experiences.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 sm:px-6 py-2 rounded-full hover:shadow-lg transition text-xs sm:text-sm">
              Getting Started
            </button>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-bold mb-3 md:mb-4 text-sm sm:text-base">Contact Us</h4>
            <ul className="space-y-2 md:space-y-3 text-gray-400 text-xs sm:text-sm">
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@pncreators.com" className="hover:text-purple-400 transition break-all">info@pncreators.com</a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +91 9182289136
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="text-center sm:text-left">1234 Blunder Street, City</span>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-bold mb-3 md:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-gray-400 text-xs sm:text-sm">
              <li><a href="#about" className="hover:text-purple-400 transition">About Us</a></li>
              <li><a href="#services" className="hover:text-purple-400 transition">Our Services</a></li>
              <li><a href="#portfolio" className="hover:text-purple-400 transition">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-bold mb-3 md:mb-4 text-sm sm:text-base">Latest Blogs</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-600 rounded flex-shrink-0"></div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400 mb-1">Our latest insights on web development trends.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © 2025 PN Creators. All rights reserved.
            </div>
            <div className="flex gap-3 md:gap-4 flex-wrap justify-center">
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition">
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition">
                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition" title="Dribbble">
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-1.857-7.77-.367-.109-.775-.163-1.198-.163-.9 0-1.8.163-2.653.538.857 2.34 1.887 4.928 2.535 6.683 1.34-.615 2.17-1.305 3.173-2.288zm-8.72 2.58c1.17-1.335 1.887-3.12 1.887-5.115 0-1.32-.275-2.58-.817-3.735-.77.163-1.335.388-1.992.817-.438.438-.682.9-.682 1.523 0 .9.525 1.523 1.523 1.523.525 0 .9-.163 1.17-.438.163-.163.275-.438.275-.75 0-.525-.163-.9-.525-1.17-.163-.109-.438-.163-.817-.163-.525 0-1.17.163-1.887.525.163 2.58 1.17 4.928 2.535 6.683.163-.163.438-.275.75-.438zm-2.34-8.57c.525-.438 1.17-.682 1.887-.682.9 0 1.8.275 2.653.817-.163 1.17-.438 2.34-.817 3.51-.9-1.17-1.8-2.34-2.58-3.51-.163-.163-.275-.438-.163-.75.109-.275.275-.525.525-.75zm9.735 2.58c.9 3.51 1.523 6.684 1.857 8.208-2.535 1.17-5.46 1.17-7.995 0 .163-1.523.9-4.695 1.857-8.208.525-.163 1.17-.275 1.8-.275.9 0 1.8.163 2.58.438zm-12.18-1.523c-.163 0-.438.109-.682.275-.163.163-.275.438-.163.75.163.9.9 2.34 1.8 3.51.163-1.17.438-2.34.817-3.51-.438-.275-.9-.438-1.17-.438-.275 0-.525.109-.6.412z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

