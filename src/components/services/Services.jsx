import React from 'react';
import { Palette, Globe, Smartphone, TrendingUp } from 'lucide-react';
import './Services.css';

export default function Services() {
  const services = [
    {
      icon: Palette,
      gradient: "from-pink-500 to-rose-500",
      title: "Logo & Branding Service",
      description: "We craft unique, memorable brand identities that define your business and leave a lasting impression."
    },
    {
      icon: Globe,
      gradient: "from-blue-500 to-cyan-500",
      title: "Website Design & Development",
      description: "From landing pages to eCommerce websites, we design and develop responsive, SEO-optimized, and visually engaging web solutions."
    },
    {
      icon: Smartphone,
      gradient: "from-purple-500 to-indigo-500",
      title: "Mobile App Development",
      description: "Build user-friendly and high-performing mobile apps that bring your ideas to life on Android and iOS."
    },
    {
      icon: TrendingUp,
      gradient: "from-orange-500 to-red-500",
      title: "Digital Marketing Service",
      description: "Boost your brand visibility with result-oriented digital marketing strategies — including SEO, social media, and paid campaigns."
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 px-4">Our Design & Development Services</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="service-card bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`icon-wrapper bg-gradient-to-br ${service.gradient} mb-4`}>
                  <IconComponent className="icon" size={32} strokeWidth={2} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 md:mb-3">{service.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}