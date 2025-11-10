import React from 'react';
import './Domains.css';

export default function Domains() {
  const domains = [
    { icon: "💰", title: "Business", color: "bg-cyan-200" },
    { icon: "📚", title: "Education", color: "bg-yellow-200" },
    { icon: "🏥", title: "Hospital", color: "bg-green-200" },
    { icon: "🍔", title: "Restaurant", color: "bg-orange-200" },
    { icon: "🏛️", title: "Government", color: "bg-lime-300" },
    { icon: "🏠", title: "Real Estate", color: "bg-pink-200" },
    { icon: "💻", title: "Technology", color: "bg-purple-200" },
    { icon: "🛍️", title: "E-Commerce", color: "bg-emerald-300" },
    { icon: "⚡", title: "Energy", color: "bg-cyan-300" },
    { icon: "🎨", title: "Art & Design", color: "bg-blue-200" },
    { icon: "📱", title: "Telecom", color: "bg-amber-100" },
    { icon: "✈️", title: "Tourism", color: "bg-teal-200" }
  ];

  return (
    <section className="domains-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Helping<br />Businesses in All<br />Domains
            </h2>
            <p className="text-gray-600 mb-4">
              We help businesses grow across multiple industries with innovative design and technology solutions.
            </p>
            <p className="text-gray-600 font-semibold">
              Domains We Serve:
            </p>
          </div>
          <div className="md:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {domains.map((domain, index) => (
                <div key={index} className={`${domain.color} p-6 rounded-lg text-center hover:shadow-lg transition transform hover:scale-105`}>
                  <div className="text-4xl mb-2">{domain.icon}</div>
                  <div className="font-semibold text-gray-800 text-sm">{domain.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

