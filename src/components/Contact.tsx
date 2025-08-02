import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: [
        "123 Community Center Road",
        "New Delhi, India - 110001",
        "Near Metro Station"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "+91 98765 43210 (Primary)",
        "+91 87654 32109 (Office)",
        "Available: Mon-Sat, 9 AM - 6 PM"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "info@bastikipathshala.org",
        "volunteer@bastikipathshala.org",
        "donations@bastikipathshala.org"
      ]
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed (Events Only)"
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, url: "#", label: "Facebook" },
    { icon: Twitter, url: "#", label: "Twitter" },
    { icon: Instagram, url: "#", label: "Instagram" },
    { icon: Linkedin, url: "#", label: "LinkedIn" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to make a difference? Contact us to learn more about our programs, 
            volunteer opportunities, or ways to support our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-300 mb-1">{detail}</p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h4 className="text-xl font-bold mb-6">Follow Our Journey</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      aria-label={social.label}
                      className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 transform hover:-translate-y-1"
                    >
                      <IconComponent className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Map and Quick Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Visit Our Center</h3>
            
            {/* Placeholder Map */}
            <div className="bg-gray-800 rounded-2xl p-8 mb-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                <p className="text-lg font-semibold mb-2">Interactive Map</p>
                <p className="text-gray-400">
                  Located in the heart of New Delhi, easily accessible by public transport
                </p>
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-blue-600 p-6 rounded-xl hover:bg-blue-700 transition-colors duration-200">
                <h4 className="text-lg font-bold mb-2">Emergency Contact</h4>
                <p className="text-blue-100 mb-3">For urgent matters or crises</p>
                <p className="font-semibold">+91 98765 43210</p>
              </div>
              
              <div className="bg-green-600 p-6 rounded-xl hover:bg-green-700 transition-colors duration-200">
                <h4 className="text-lg font-bold mb-2">Volunteer Coordination</h4>
                <p className="text-green-100 mb-3">Questions about volunteering</p>
                <p className="font-semibold">volunteer@bastikipathshala.org</p>
              </div>
            </div>

            {/* Operating Notice */}
            <div className="mt-8 bg-yellow-600 p-6 rounded-xl">
              <h4 className="text-lg font-bold mb-2 text-yellow-900">Current Programs</h4>
              <p className="text-yellow-900">
                We're currently running classes for 500+ children across 25+ communities. 
                New volunteer orientations happen every first Saturday of the month.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-12 border-t border-gray-700">
          <h3 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you want to volunteer, donate, or learn more about our programs, 
            we're here to help you get involved in meaningful ways.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('volunteer')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Volunteering
            </button>
            <a
              href="mailto:info@bastikipathshala.org"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Send Us an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;