import React from 'react';
import { 
  Code2, 
  FileCode, 
  Server, 
  Database, 
  Globe, 
  Palette, 
  Zap 
} from 'lucide-react';
import './Technologies.css';

export default function Technologies() {
  const technologies = [
    { 
      name: "React.js", 
      Icon: Code2, 
      color: "from-cyan-400 to-blue-500",
      shadowColor: "shadow-blue-500/50"
    },
    { 
      name: "WordPress", 
      Icon: FileCode, 
      color: "from-blue-400 to-indigo-600",
      shadowColor: "shadow-indigo-500/50"
    },
    { 
      name: "Node.js", 
      Icon: Server, 
      color: "from-green-400 to-emerald-600",
      shadowColor: "shadow-green-500/50"
    },
    { 
      name: "PHP", 
      Icon: Database, 
      color: "from-purple-400 to-indigo-600",
      shadowColor: "shadow-purple-500/50"
    },
    { 
      name: "HTML", 
      Icon: Globe, 
      color: "from-orange-400 to-red-500",
      shadowColor: "shadow-orange-500/50"
    },
    { 
      name: "CSS", 
      Icon: Palette, 
      color: "from-pink-400 to-rose-500",
      shadowColor: "shadow-pink-500/50"
    },
    { 
      name: "JavaScript", 
      Icon: Zap, 
      color: "from-yellow-400 to-amber-500",
      shadowColor: "shadow-yellow-500/50"
    }
  ];

  return (
    <section className="technologies-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6">
            Technologies We Use
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            We leverage cutting-edge technologies to build modern, scalable, and high-performance websites and applications.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16">
          {technologies.map((tech, index) => {
            const Icon = tech.Icon;
            return (
              <div 
                key={index} 
                className="tech-card group"
              >
                <div className={`icon-container bg-gradient-to-br ${tech.color}`}>
                  <Icon 
                    className="icon text-white" 
                    size={40}
                    strokeWidth={2}
                  />
                </div>
                <h3 className="tech-name">{tech.name}</h3>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-gray-700 text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 font-medium">
            We <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Promise.</span> We <span className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Deliver.</span>
          </p>
          <button className="cta-button group">
            <span className="relative z-10">Discover Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}