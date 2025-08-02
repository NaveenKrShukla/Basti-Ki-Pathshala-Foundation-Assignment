import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      age: 16,
      role: "Student",
      image: "https://images.pexels.com/photos/8613103/pexels-photo-8613103.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      quote: "Before joining Basti Ki Pathshala, I never thought I could study beyond 8th grade. Now I'm in 11th grade and dream of becoming a teacher to help other children like me.",
      achievement: "Top 5% in state board exams"
    },
    {
      name: "Rahul Kumar",
      age: 22,
      role: "Former Student, Now Volunteer",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      quote: "The foundation didn't just teach me academics, they taught me to believe in myself. Today, I'm pursuing my engineering degree and volunteering to give back to my community.",
      achievement: "Engineering student & community leader"
    },
    {
      name: "Sunita Devi",
      age: 38,
      role: "Parent",
      image: "https://images.pexels.com/photos/8613028/pexels-photo-8613028.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      quote: "My daughter comes home excited about learning every day. The teachers here care about each child's growth and potential. They've given my family hope for a better future.",
      achievement: "Mother of 2 scholarship recipients"
    },
    {
      name: "Amit Patel",
      age: 19,
      role: "Graduate",
      image: "https://images.pexels.com/photos/8613074/pexels-photo-8613074.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      quote: "From struggling with basic math to starting my own small business - this journey wouldn't have been possible without the skills and confidence I gained here.",
      achievement: "Young entrepreneur & business owner"
    },
    {
      name: "Dr. Sarah Johnson",
      age: 45,
      role: "Volunteer Teacher",
      image: "https://images.pexels.com/photos/8613066/pexels-photo-8613066.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      quote: "In my 20 years of teaching, I've never seen such dedicated students and impactful programs. Every volunteer hour here creates ripples of positive change in the community.",
      achievement: "5+ years of volunteer service"
    },
    {
      name: "Kavya Singh",
      age: 17,
      role: "Student Leader",
      image: "https://images.pexels.com/photos/8613367/pexels-photo-8613367.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      quote: "Being part of the student council here taught me leadership and responsibility. I now mentor younger students and organize community awareness programs.",
      achievement: "Student council president & peer mentor"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Stories of Transformation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from the lives we've touched - students, parents, volunteers, 
            and community members sharing their journey with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="pt-8">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-blue-100"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-blue-600 font-medium">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">Age: {testimonial.age}</p>
                  </div>
                </div>

                <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>

                {/* Achievement Badge */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center mb-2">
                    <Star className="h-4 w-4 text-yellow-500 mr-2" />
                    <span className="text-sm font-semibold text-gray-800">Achievement</span>
                  </div>
                  <p className="text-sm text-gray-600">{testimonial.achievement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Your Story Could Be Next
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our community of learners, volunteers, and changemakers. 
              Together, we can write more stories of transformation and hope.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('volunteer')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Become a Volunteer
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Involved
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;