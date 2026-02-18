import React from 'react';
import { ArrowRight, Users, BookOpen, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#FFE8D2] to-[#F68949] min-h-screen flex items-center -mt-[88px] pt-[88px]">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00393C] mb-6 leading-tight">
                Nurturing
                <span className="text-[#946F5C] block">Tomorrow's</span>
                <span className="text-[#00393C] block">Leaders Today</span>
              </h1>
              <p className="text-xl text-[#303E3F] mb-8 leading-relaxed">
                At ROOH International School, we provide world-class education that nurtures young minds with excellence in education, character development, and holistic growth for a brighter future.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#00393C] text-white px-8 py-4 rounded-full font-medium hover:bg-[#303E3F] transition-colors duration-300 flex items-center justify-center">
                Apply for Admission
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-[#00393C] text-[#00393C] px-8 py-4 rounded-full font-medium hover:bg-[#00393C] hover:text-white transition-colors duration-300">
                Download Prospectus
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <Users className="h-8 w-8 text-[#F68949] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#00393C]">500+</div>
                  <div className="text-sm text-[#303E3F]">Students</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <BookOpen className="h-8 w-8 text-[#F68949] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#00393C]">25+</div>
                  <div className="text-sm text-[#303E3F]">Teachers</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                  <Award className="h-8 w-8 text-[#F68949] mx-auto mb-2" />
                  <div className="text-2xl font-bold text-[#00393C]">10+</div>
                  <div className="text-sm text-[#303E3F]">Years</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8613069/pexels-photo-8613069.jpeg"
                alt="Happy students at ROOH International School"
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-[#00393C] text-white p-6 rounded-xl shadow-lg">
                <div className="text-sm font-medium">Established</div>
                <div className="text-2xl font-bold">2014</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 bg-white/10 backdrop-blur-sm p-4 rounded-full animate-pulse">
        <BookOpen className="h-8 w-8 text-[#00393C]" />
      </div>
      <div className="absolute bottom-20 left-10 bg-white/10 backdrop-blur-sm p-4 rounded-full animate-pulse delay-1000">
        <Award className="h-8 w-8 text-[#946F5C]" />
      </div>
    </section>
  );
};

export default HeroSection;