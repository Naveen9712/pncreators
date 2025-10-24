import React from 'react';
import './Portfolio.css';

export default function Portfolio() {
  const portfolio = [
    { title: "Ecommerce Development", category: "WEB DESIGN", color: "bg-gray-100" },
    { title: "Creative App", category: "UI/UX DESIGN", color: "bg-pink-50" }
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-purple-600 font-semibold mb-2">OUR WORKS</p>
          <h2 className="text-4xl font-bold text-gray-800">Our Latest Creative Work</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolio.map((item, index) => (
            <div key={index} className={`${item.color} p-8 rounded-lg hover:shadow-xl transition`}>
              <div className="h-64 bg-white rounded-lg mb-4 flex items-center justify-center">
                <div className="text-6xl">{index === 0 ? "💻" : "📱"}</div>
              </div>
              <p className="text-purple-600 font-semibold text-sm mb-2">{item.category}</p>
              <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

