import React from 'react';
import { ArrowRight, Users, BookOpen, Heart } from 'lucide-react';

interface HeroProps {
  onJoinClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onJoinClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
          alt="Children learning in classroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Empowering Young Minds,
            <span className="text-yellow-400"> Building Bright Futures</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed animate-fade-in-delay">
            Join us in our mission to provide quality education and opportunities 
            to underprivileged children in communities across India.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 animate-fade-in-delay-2">
            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold">500+</div>
              <div className="text-blue-200">Children Educated</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-4 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold">25+</div>
              <div className="text-blue-200">Communities Served</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white/20 p-4 rounded-full mb-4">
                <Heart className="h-8 w-8 text-yellow-400" />
              </div>
              <div className="text-3xl font-bold">100+</div>
              <div className="text-blue-200">Active Volunteers</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
            <button
              onClick={onJoinClick}
              className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>Join Our Mission</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;