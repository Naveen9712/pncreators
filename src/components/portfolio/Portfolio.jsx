import React from 'react';
import { GraduationCap, Briefcase, Check } from 'lucide-react';
import './Portfolio.css';

export default function Portfolio() {
  const portfolioServices = [
    {
      icon: GraduationCap,
      title: "Student Portfolio",
      description: "Perfect for students looking to showcase their academic projects, skills, and achievements. Stand out in college applications and internships.",
      features: [
        "Professional portfolio website",
        "Project showcase gallery",
        "Skills & achievements section"
      ]
    },
    {
      icon: Briefcase,
      title: "Job Seeker Portfolio",
      description: "Ideal for job seekers and professionals wanting to highlight their work experience, projects, and expertise to potential employers.",
      features: [
        "Professional portfolio website",
        "Work experience timeline",
        "Project portfolio showcase",
        "Resume/CV integration"
      ]
    }
  ];

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">Portfolio Services</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-4 md:mb-6 px-4">Affordable Professional Portfolios for Students & Job Seekers</p>
          <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Only ₹3,000 per person
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {portfolioServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col items-center mb-4 md:mb-6">
                  <div className="px-4 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-3 md:mb-4">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 md:mb-4">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 md:mb-6 text-center leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
                
                <div className="space-y-2 md:space-y-3">
                  <h4 className="font-semibold text-gray-800 mb-2 md:mb-3 text-sm sm:text-base">What's Included:</h4>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 md:gap-3">
                      <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                        <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

