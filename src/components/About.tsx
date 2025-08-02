import React from 'react';
import { Target, Eye, Heart, Award, MapPin, Calendar } from 'lucide-react';

const About: React.FC = () => {
  const images = [
    "https://images.pexels.com/photos/8613028/pexels-photo-8613028.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    "https://images.pexels.com/photos/8613074/pexels-photo-8613074.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    "https://images.pexels.com/photos/8613103/pexels-photo-8613103.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    "https://images.pexels.com/photos/8613066/pexels-photo-8613066.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    "https://images.pexels.com/photos/8613367/pexels-photo-8613367.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    "https://images.pexels.com/photos/8613364/pexels-photo-8613364.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
  ];

  const impactStats = [
    { label: "Children Educated", value: "500+", icon: Heart },
    { label: "Communities", value: "25+", icon: MapPin },
    { label: "Years Active", value: "8+", icon: Calendar },
    { label: "Success Rate", value: "95%", icon: Award }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Our Foundation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dedicated to breaking the cycle of poverty through education and empowerment 
            in underserved communities across India.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide quality education, resources, and opportunities to underprivileged 
              children, empowering them to build better futures for themselves and their communities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-100 p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center">
              <Eye className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              A world where every child, regardless of their background, has access to 
              quality education and the opportunity to reach their full potential.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mb-6 flex items-center justify-center">
              <Heart className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Compassion, integrity, excellence, and community-driven impact guide 
              everything we do as we work to create lasting positive change.
            </p>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 mb-16 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h3>
            <p className="text-xl text-blue-100">
              Real change, measured by the lives we've touched and transformed
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-yellow-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-200 text-sm md:text-base">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Our Work Gallery */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Work in Action
            </h3>
            <p className="text-xl text-gray-600">
              Glimpses of the transformative education and community programs we deliver
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={image}
                  alt={`Foundation work ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <p className="font-semibold">Empowering through Education</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* History */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Journey
            </h3>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                Founded in 2016, Basti Ki Pathshala Foundation began as a grassroots initiative 
                to address educational inequality in Delhi's underserved communities. What started 
                as weekend classes for 20 children has grown into a comprehensive educational 
                and empowerment program reaching over 500 children across 25+ communities.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our approach combines formal education with life skills training, health awareness, 
                and community engagement. We believe that education is not just about literacy 
                and numeracy, but about empowering children to become confident, capable individuals 
                who can contribute positively to their communities.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we work with local schools, community centers, and partner organizations 
                to create sustainable educational ecosystems that continue to thrive long after 
                our direct involvement. Our alumni are now pursuing higher education, starting 
                their own businesses, and becoming community leaders themselves.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;