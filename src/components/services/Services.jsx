import React from 'react';
import './Services.css';

export default function Services() {
  const services = [
    {
      icon: "🎨",
      title: "Logo & Branding Service",
      description: "We craft unique, memorable brand identities that define your business and leave a lasting impression."
    },
    {
      icon: "🌐",
      title: "Website Design & Development",
      description: "From landing pages to eCommerce websites, we design and develop responsive, SEO-optimized, and visually engaging web solutions."
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Build user-friendly and high-performing mobile apps that bring your ideas to life on Android and iOS."
    },
    {
      icon: "📊",
      title: "Digital Marketing Service",
      description: "Boost your brand visibility with result-oriented digital marketing strategies — including SEO, social media, and paid campaigns."
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Design & Development Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">
            👉 Hire a <span className="font-bold">Dedicated Developer</span>
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition">
            Hire a Dedicated Developer
          </button>
        </div>
      </div>
    </section>
  );
}

