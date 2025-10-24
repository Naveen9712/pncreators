import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-purple-600 font-semibold mb-2">CONTACT WITH</p>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Have Question? Write a Message</h2>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input 
                type="text" 
                placeholder="Your name" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
              />
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
              />
            </div>
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 mb-6"
            />
            <textarea 
              placeholder="Message" 
              rows="5" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 mb-6"
            ></textarea>
            <div className="flex items-center gap-2 mb-6">
              <input type="checkbox" id="agree" className="w-4 h-4" />
              <label htmlFor="agree" className="text-sm text-gray-600">
                I agree that my submitted data is being collected and stored.
              </label>
            </div>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition w-full md:w-auto">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

