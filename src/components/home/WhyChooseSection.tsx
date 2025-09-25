import React from 'react';
import { Star, Users, Globe, Heart, BookOpen, Trophy } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: <Star className="h-8 w-8" />,
      title: "Excellence in Education",
      description: "Our curriculum is designed to meet international standards while maintaining local cultural values."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Experienced Faculty",
      description: "Dedicated teachers with years of experience in nurturing young minds and fostering creativity."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Perspective",
      description: "Preparing students for a globalized world with international exposure and modern teaching methods."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Holistic Development",
      description: "Focus on emotional, social, and physical development alongside academic excellence."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Modern Curriculum",
      description: "Updated curriculum that incorporates technology and innovative teaching methodologies."
    },
    {
      icon: <Trophy className="h-8 w-8" />,
      title: "Achievement Record",
      description: "Proven track record of student achievements in academics, sports, and extracurricular activities."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#00393C] mb-4">
            Why Choose ROOH International School?
          </h2>
          <p className="text-xl text-[#303E3F] max-w-3xl mx-auto">
            We are committed to providing the highest quality education that prepares 
            students for success in life through academic excellence and character development.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-[#FFE8D2] p-8 rounded-2xl hover:bg-[#F68949] hover:text-white transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="text-[#00393C] group-hover:text-white mb-4 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#00393C] group-hover:text-white mb-4 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-[#303E3F] group-hover:text-white/90 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Affiliations */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-[#00393C] mb-4">
              Affiliations & Partners
            </h3>
            <p className="text-lg text-[#303E3F]">
              Proud to be associated with leading educational organizations
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
              >
                <div className="text-[#00393C] font-bold text-lg">
                  Partner {index}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;