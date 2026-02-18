import React, { useState } from 'react';
import { Play, MapPin, Clock, Phone, Mail, Calendar } from 'lucide-react';

const CampusTourSection = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Campus tour request:', formData);
    alert('Thank you for your interest! We will contact you soon to schedule your campus tour.');
  };

  return (
    <section className="py-20 bg-[#FFE8D2]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#00393C] mb-4">
            Request a Campus Tour
          </h2>
          <p className="text-xl text-[#303E3F] max-w-3xl mx-auto">
            Experience our learning environment firsthand. Schedule a personalized campus tour to see our facilities, meet our teachers, and discover what makes ROOH International School special.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Virtual Tour Video */}
          <div className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8613074/pexels-photo-8613074.jpeg"
                alt="ROOH International School Campus"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="bg-[#F68949] hover:bg-[#946F5C] text-white p-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300">
                  <Play className="h-12 w-12" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold mb-2">Virtual Campus Tour</h3>
                <p className="opacity-90">Take a 360° virtual tour of our facilities</p>
              </div>
            </div>

            {/* Tour Information */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#00393C] mb-6">What You'll See</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#F68949] rounded-full"></div>
                  <span className="text-[#303E3F]">Modern Classrooms</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#F68949] rounded-full"></div>
                  <span className="text-[#303E3F]">Science Laboratory</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#F68949] rounded-full"></div>
                  <span className="text-[#303E3F]">Computer Lab</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#F68949] rounded-full"></div>
                  <span className="text-[#303E3F]">Library</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#F68949] rounded-full"></div>
                  <span className="text-[#303E3F]">Playground</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#F68949] rounded-full"></div>
                  <span className="text-[#303E3F]">Arts & Crafts Room</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#F68949] rounded-full"></div>
                  <span className="text-[#303E3F]">Cafeteria</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#F68949] rounded-full"></div>
                  <span className="text-[#303E3F]">Administrative Offices</span>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-[#00393C] text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[#F68949]" />
                  <span>+880 1XXX-XXXXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[#F68949]" />
                  <span>admissions@roohschool.edu.bd</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-[#F68949]" />
                  <span>123 Education Street, Dhaka</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tour Request Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#00393C] mb-6">Schedule Your Visit</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Parent Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#303E3F] mb-2">
                    Parent/Guardian Name *
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    required
                    value={formData.parentName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#303E3F] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                  placeholder="Enter email address"
                />
              </div>

              {/* Child Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#303E3F] mb-2">
                    Child's Name
                  </label>
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                    placeholder="Enter child's name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#303E3F] mb-2">
                    Child's Age
                  </label>
                  <select
                    name="childAge"
                    value={formData.childAge}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                  >
                    <option value="">Select age</option>
                    <option value="2-3">2-3 years</option>
                    <option value="3-4">3-4 years</option>
                    <option value="4-5">4-5 years</option>
                    <option value="5-6">5-6 years</option>
                    <option value="6-7">6-7 years</option>
                    <option value="7-8">7-8 years</option>
                    <option value="8-9">8-9 years</option>
                    <option value="9-10">9-10 years</option>
                    <option value="10-11">10-11 years</option>
                  </select>
                </div>
              </div>

              {/* Preferred Schedule */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#303E3F] mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#303E3F] mb-2">
                    Preferred Time *
                  </label>
                  <select
                    name="preferredTime"
                    required
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                  >
                    <option value="">Select time</option>
                    <option value="9:00-10:00">9:00 AM - 10:00 AM</option>
                    <option value="10:00-11:00">10:00 AM - 11:00 AM</option>
                    <option value="11:00-12:00">11:00 AM - 12:00 PM</option>
                    <option value="2:00-3:00">2:00 PM - 3:00 PM</option>
                    <option value="3:00-4:00">3:00 PM - 4:00 PM</option>
                    <option value="4:00-5:00">4:00 PM - 5:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                  placeholder="Any specific questions or requirements..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#F68949] text-white py-4 rounded-lg font-medium hover:bg-[#946F5C] transition-colors duration-300 flex items-center justify-center"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Campus Tour
              </button>
            </form>

            {/* Download Prospectus */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <button className="w-full bg-[#00393C] text-white py-3 rounded-lg font-medium hover:bg-[#303E3F] transition-colors duration-300">
                Download School Prospectus
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusTourSection;