import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Heart, 
  UtensilsCrossed, 
  Landmark, 
  Home, 
  Laptop, 
  ShoppingBag, 
  Zap, 
  Palette, 
  Radio, 
  Plane 
} from 'lucide-react';
import './Domains.css';

export default function Domains() {
  const domains = [
    { icon: Briefcase, title: "Business", gradient: "from-cyan-400 to-cyan-600" },
    { icon: GraduationCap, title: "Education", gradient: "from-yellow-400 to-amber-500" },
    { icon: Heart, title: "Hospital", gradient: "from-green-400 to-emerald-600" },
    { icon: UtensilsCrossed, title: "Restaurant", gradient: "from-orange-400 to-orange-600" },
    { icon: Landmark, title: "Government", gradient: "from-lime-400 to-green-500" },
    { icon: Home, title: "Real Estate", gradient: "from-pink-400 to-rose-500" },
    { icon: Laptop, title: "Technology", gradient: "from-purple-400 to-purple-600" },
    { icon: ShoppingBag, title: "E-Commerce", gradient: "from-emerald-400 to-teal-600" },
    { icon: Zap, title: "Energy", gradient: "from-cyan-400 to-blue-500" },
    { icon: Palette, title: "Art & Design", gradient: "from-blue-400 to-indigo-500" },
    { icon: Radio, title: "Telecom", gradient: "from-amber-400 to-orange-400" },
    { icon: Plane, title: "Tourism", gradient: "from-teal-400 to-cyan-500" }
  ];

  return (
    <section className="domains-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="md:w-1/3 w-full text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">
              Helping<br />Businesses in All<br />Domains
            </h2>
            <p className="text-gray-600 mb-3 md:mb-4 text-sm sm:text-base">
              We help businesses grow across multiple industries with innovative design and technology solutions.
            </p>
            <p className="text-gray-600 font-semibold text-sm sm:text-base">
              Domains We Serve:
            </p>
          </div>
          <div className="md:w-2/3 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {domains.map((domain, index) => {
                const IconComponent = domain.icon;
                return (
                  <div key={index} className="domain-card bg-white p-4 sm:p-6 rounded-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                    <div className={`domain-icon-wrapper bg-gradient-to-br ${domain.gradient} mx-auto mb-3`}>
                      <IconComponent className="domain-icon" size={24} strokeWidth={2.5} />
                    </div>
                    <div className="font-semibold text-gray-800 text-xs sm:text-sm">{domain.title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}