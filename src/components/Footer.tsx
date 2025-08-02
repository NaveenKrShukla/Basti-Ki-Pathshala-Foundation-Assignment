import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Programs", href: "#about" },
    { label: "Volunteer", href: "#volunteer" },
    { label: "Success Stories", href: "#testimonials" },
    { label: "Contact", href: "#contact" }
  ];

  const programs = [
    "Primary Education",
    "Secondary Education", 
    "Life Skills Training",
    "Health & Nutrition",
    "Community Outreach",
    "Teacher Training"
  ];

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Basti Ki Pathshala</h1>
                <p className="text-gray-400">Foundation</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Dedicated to empowering underprivileged children through quality education, 
              life skills training, and community development programs. Together, we're 
              building brighter futures for the next generation.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@bastikipathshala.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Programs</h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index} className="text-gray-300">
                  {program}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2024 Basti Ki Pathshala Foundation. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Registered Non-Profit Organization | 80G Tax Exemption Available
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms of Service
              </button>
              <button className="text-gray-400 hover:text-white transition-colors duration-200">
                Annual Reports
              </button>
            </div>
          </div>
          
          {/* Final Message */}
          <div className="text-center mt-8 pt-6 border-t border-gray-800">
            <p className="text-gray-400 italic">
              "Education is the most powerful weapon which you can use to change the world." - Nelson Mandela
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;