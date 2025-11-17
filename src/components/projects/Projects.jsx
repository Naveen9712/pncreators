import React from 'react';
import { Globe, Smartphone, ShoppingBag, Building2, GraduationCap, Briefcase, ExternalLink } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A modern, responsive e-commerce platform with seamless shopping experience, payment integration, and admin dashboard.",
      icon: ShoppingBag,
      gradient: "from-blue-500 to-cyan-500",
      tech: ["React.js", "Node.js", "MongoDB"],
      image: "🛍️"
    },
    {
      title: "Corporate Website",
      category: "Web Design",
      description: "Professional corporate website with modern design, responsive layout, and integrated CMS for easy content management.",
      icon: Building2,
      gradient: "from-purple-500 to-pink-500",
      tech: ["WordPress", "HTML", "CSS"],
      image: "🏢"
    },
    {
      title: "Mobile Banking App",
      category: "Mobile App",
      description: "Secure mobile banking application with biometric authentication, transaction history, and real-time notifications.",
      icon: Smartphone,
      gradient: "from-green-500 to-emerald-500",
      tech: ["React Native", "Node.js", "Firebase"],
      image: "📱"
    },
    {
      title: "Portfolio Website",
      category: "Web Design",
      description: "Creative portfolio website for a designer showcasing work, skills, and achievements with smooth animations.",
      icon: Briefcase,
      gradient: "from-orange-500 to-red-500",
      tech: ["React.js", "CSS", "JavaScript"],
      image: "💼"
    },
    {
      title: "Educational Platform",
      category: "Web Development",
      description: "Interactive learning management system with course modules, quizzes, progress tracking, and student dashboard.",
      icon: GraduationCap,
      gradient: "from-indigo-500 to-purple-500",
      tech: ["PHP", "MySQL", "JavaScript"],
      image: "🎓"
    },
    {
      title: "Business Landing Page",
      category: "Web Design",
      description: "High-converting landing page with modern UI/UX, lead capture forms, and integrated analytics for better insights.",
      icon: Globe,
      gradient: "from-pink-500 to-rose-500",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "🌐"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-purple-600 font-semibold mb-2 text-sm sm:text-base">OUR WORK</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 px-4">Our Recent Projects</h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise in web design, development, and digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={index} className="project-card group">
                <div className="project-image">
                  <div className="image-placeholder">
                    <span className="text-6xl">{project.image}</span>
                  </div>
                  <div className={`project-icon bg-gradient-to-br ${project.gradient}`}>
                    <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                </div>
                
                <div className="project-content">
                  <div className="project-category">{project.category}</div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <button className="project-link">
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <button className="view-all-btn">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}

