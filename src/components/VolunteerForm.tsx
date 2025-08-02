import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, User, Mail, Phone, Clock, MessageSquare } from 'lucide-react';

const VolunteerForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredRole: '',
    availability: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const roles = [
    'Teaching & Tutoring',
    'Administration & Documentation',
    'Fundraising & Events',
    'Community Outreach',
    'Technology & Digital Skills',
    'Health & Wellness Programs',
    'Arts & Creative Activities',
    'Other'
  ];

  const availabilityOptions = [
    { value: 'weekdays', label: 'Weekdays (Mon-Fri)' },
    { value: 'weekends', label: 'Weekends (Sat-Sun)' },
    { value: 'flexible', label: 'Flexible Schedule' },
    { value: 'evenings', label: 'Evenings Only' }
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters long';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^[+]?[\d\s\-()]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Role validation
    if (!formData.preferredRole) {
      newErrors.preferredRole = 'Please select a preferred role';
    }

    // Availability validation
    if (!formData.availability) {
      newErrors.availability = 'Please select your availability';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Please share your motivation to volunteer';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Please provide at least 20 characters describing your motivation';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Volunteer form submitted:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="volunteer" className="py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-lg">
            <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Volunteering!</h2>
            <p className="text-xl text-gray-600 mb-8">
              We've received your application and are excited about your interest in joining our mission. 
              Our team will review your information and get back to you within 2-3 business days.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-3">What's Next?</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• We'll contact you via email or phone to discuss opportunities</li>
                <li>• You'll receive information about our upcoming orientation session</li>
                <li>• We'll match you with volunteer opportunities that fit your interests and availability</li>
              </ul>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  preferredRole: '',
                  availability: '',
                  message: ''
                });
              }}
              className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="volunteer" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Join Our Volunteer Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Be part of the change you want to see. Join our dedicated team of volunteers 
            and help us create brighter futures for children in need.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <User className="h-4 w-4 mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                  errors.fullName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                    errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                  <Phone className="h-4 w-4 mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                    errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="+91 98765 43210"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Preferred Role */}
            <div>
              <label htmlFor="preferredRole" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <User className="h-4 w-4 mr-2" />
                Preferred Volunteer Role *
              </label>
              <select
                id="preferredRole"
                name="preferredRole"
                value={formData.preferredRole}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 ${
                  errors.preferredRole ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
              >
                <option value="">Select a role...</option>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
              {errors.preferredRole && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.preferredRole}
                </p>
              )}
            </div>

            {/* Availability */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-4">
                <Clock className="h-4 w-4 mr-2" />
                Availability *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {availabilityOptions.map((option) => (
                  <label key={option.value} className="flex items-center">
                    <input
                      type="radio"
                      name="availability"
                      value={option.value}
                      checked={formData.availability === option.value}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-3 text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
              {errors.availability && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.availability}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="flex items-center text-sm font-medium text-gray-700 mb-2">
                <MessageSquare className="h-4 w-4 mr-2" />
                Why do you want to volunteer with us? *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none ${
                  errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="Share your motivation, relevant experience, or what you hope to contribute to our mission..."
              />
              <div className="mt-2 flex justify-between items-center">
                {errors.message ? (
                  <p className="text-sm text-red-600 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.message}
                  </p>
                ) : (
                  <p className="text-sm text-gray-500">
                    {formData.message.length}/500 characters
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center space-x-2 ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : 'transform hover:-translate-y-1 hover:shadow-lg'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Submit Application</span>
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> All fields marked with * are required. We respect your privacy 
              and will only use your information to contact you about volunteer opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerForm;