import React from 'react';
import { Heart, Target, Star, Users, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFE8D2] to-[#F68949] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00393C] mb-6">
            About ROOH International School
          </h1>
          <p className="text-xl text-[#303E3F] max-w-3xl mx-auto">
            Established in 2014, ROOH International School has been dedicated to 
            providing world-class education that nurtures young minds and builds strong characters.
          </p>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Vision */}
            <div className="text-center">
              <div className="bg-[#F68949] text-white p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Target className="h-12 w-12" />
              </div>
              <h2 className="text-2xl font-bold text-[#00393C] mb-4">Our Vision</h2>
              <p className="text-[#303E3F] leading-relaxed">
                To be a leading educational institution that empowers students to become 
                confident, creative, and compassionate global citizens who contribute 
                positively to society.
              </p>
            </div>

            {/* Mission */}
            <div className="text-center">
              <div className="bg-[#00393C] text-white p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Heart className="h-12 w-12" />
              </div>
              <h2 className="text-2xl font-bold text-[#00393C] mb-4">Our Mission</h2>
              <p className="text-[#303E3F] leading-relaxed">
                To provide excellent education in a nurturing environment that fosters 
                intellectual curiosity, moral integrity, and social responsibility while 
                celebrating diversity and individual potential.
              </p>
            </div>

            {/* Values */}
            <div className="text-center">
              <div className="bg-[#946F5C] text-white p-6 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Star className="h-12 w-12" />
              </div>
              <h2 className="text-2xl font-bold text-[#00393C] mb-4">Core Values</h2>
              <p className="text-[#303E3F] leading-relaxed">
                Excellence, Integrity, Respect, Innovation, and Community. These values 
                guide everything we do and help shape the character of our students 
                and school community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-[#FFE8D2]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg"
                alt="Principal"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#00393C] mb-6">
                Message from the Principal
              </h2>
              <div className="space-y-4 text-[#303E3F] leading-relaxed">
                <p>
                  "Welcome to ROOH International School, where every child's journey of 
                  discovery begins. As an educator with over 15 years of experience, I 
                  believe that education is not just about academic achievement, but about 
                  nurturing the whole child."
                </p>
                <p>
                  "At ROOH, we are committed to creating an environment where students feel 
                  safe, supported, and inspired to reach their full potential. Our dedicated 
                  team of educators works tirelessly to ensure that each student receives 
                  personalized attention and guidance."
                </p>
                <p>
                  "We believe in the power of collaboration between school, parents, and 
                  community to create meaningful learning experiences that prepare our 
                  students for the challenges and opportunities of tomorrow."
                </p>
              </div>
              <div className="mt-6">
                <h4 className="font-bold text-[#00393C]">Dr. Aminul Islam</h4>
                <p className="text-[#946F5C]">Principal, ROOH International School</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#00393C] mb-4">
              School Overview
            </h2>
            <p className="text-xl text-[#303E3F] max-w-3xl mx-auto">
              A comprehensive look at what makes ROOH International School 
              a unique and excellent choice for your child's education.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#F68949] mb-2">10+</div>
              <div className="text-[#303E3F]">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#F68949] mb-2">500+</div>
              <div className="text-[#303E3F]">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#F68949] mb-2">25+</div>
              <div className="text-[#303E3F]">Qualified Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#F68949] mb-2">8</div>
              <div className="text-[#303E3F]">Grade Levels</div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#FFE8D2] p-8 rounded-2xl text-center">
              <Users className="h-12 w-12 text-[#F68949] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-[#00393C] mb-4">Small Class Sizes</h3>
              <p className="text-[#303E3F]">
                Optimal student-teacher ratios ensure personalized attention and 
                better learning outcomes for every student.
              </p>
            </div>

            <div className="bg-[#F68949] text-white p-8 rounded-2xl text-center">
              <BookOpen className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Modern Curriculum</h3>
              <p>
                International standards curriculum combined with local cultural 
                values to provide well-rounded education.
              </p>
            </div>

            <div className="bg-[#00393C] text-white p-8 rounded-2xl text-center">
              <Award className="h-12 w-12 text-[#FFE8D2] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Excellence Awards</h3>
              <p className="text-[#FFE8D2]">
                Recognized for academic excellence and innovative teaching 
                methodologies by educational authorities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-[#00393C] text-white mb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-[#FFE8D2] max-w-3xl mx-auto">
              A decade of growth, achievement, and commitment to educational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#F68949] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">2014</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Foundation</h3>
              <p className="text-[#FFE8D2] text-sm">
                ROOH International School was established with a vision to provide quality education.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#946F5C] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">2017</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Expansion</h3>
              <p className="text-[#FFE8D2] text-sm">
                New campus facilities and increased grade levels to serve more students.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#F68949] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">2020</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Innovation</h3>
              <p className="text-[#FFE8D2] text-sm">
                Introduction of modern technology and digital learning platforms.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#946F5C] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">2024</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Excellence</h3>
              <p className="text-[#FFE8D2] text-sm">
                Celebrating 10 years of educational excellence and community impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;