import React from 'react';
import { Users, Award, Briefcase, MessageCircle, Globe, Clock } from 'lucide-react';
import './Stats.css';

export default function Stats() {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "15+", label: "Team Members" },
    { icon: <Award className="w-8 h-8" />, number: "80+", label: "Awards Won" },
    { icon: <Briefcase className="w-8 h-8" />, number: "450+", label: "Completed Projects" },
    { icon: <MessageCircle className="w-8 h-8" />, number: "48K", label: "Client Reviews" },
    { icon: <Globe className="w-8 h-8" />, number: "95K", label: "Facebook Followers" },
    { icon: <Clock className="w-8 h-8" />, number: "24/7", label: "Support Available" }
  ];

  return (
    <section className="stats-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center text-purple-600 mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

