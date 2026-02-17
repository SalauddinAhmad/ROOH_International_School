import React from 'react';
import { BookOpen, Users, Award, Clock, CheckCircle, Star } from 'lucide-react';

const Academics = () => {
  const curriculumLevels = [
    {
      level: "Playgroup",
      age: "2-3 Years",
      focus: "Play-based Learning",
      subjects: ["Basic English", "Numbers & Counting", "Colors & Shapes", "Art & Craft", "Music & Movement"],
      image: "https://images.pexels.com/photos/8613069/pexels-photo-8613069.jpeg"
    },
    {
      level: "Nursery", 
      age: "3-4 Years",
      focus: "Foundation Building",
      subjects: ["Phonics", "Math Concepts", "Science Basics", "Creative Arts", "Physical Education"],
      image: "https://images.pexels.com/photos/8613067/pexels-photo-8613067.jpeg"
    },
    {
      level: "KG-1 & KG-2",
      age: "4-6 Years", 
      focus: "School Readiness",
      subjects: ["Reading & Writing", "Mathematics", "General Knowledge", "Computer Basics", "Social Skills"],
      image: "https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg"
    },
    {
      level: "Grade 1-5",
      age: "6-11 Years",
      focus: "Academic Excellence", 
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Computer Science", "Physical Education", "Arts"],
      image: "https://images.pexels.com/photos/8613074/pexels-photo-8613074.jpeg"
    }
  ];

  const teachers = [
    {
      name: "Ms. Sarah Johnson",
      position: "Head of Primary",
      qualification: "M.Ed in Elementary Education",
      experience: "12 years",
      specialization: "Early Childhood Development",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg"
    },
    {
      name: "Mr. Ahmed Rahman",
      position: "Mathematics Teacher", 
      qualification: "MSc in Mathematics",
      experience: "8 years",
      specialization: "STEM Education",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
    {
      name: "Ms. Emily Davis",
      position: "English Teacher",
      qualification: "MA in English Literature", 
      experience: "10 years",
      specialization: "Language Arts & Communication",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
    },
    {
      name: "Dr. Mahmud Hassan",
      position: "Science Teacher",
      qualification: "PhD in Biology",
      experience: "15 years", 
      specialization: "Scientific Research & Inquiry",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg"
    }
  ];

  return (
    <div className="pt-[88px]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFE8D2] to-[#F68949] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00393C] mb-6">
            Academic Excellence
          </h1>
          <p className="text-xl text-[#303E3F] max-w-3xl mx-auto">
            Our comprehensive curriculum is designed to challenge, inspire, and prepare 
            students for success in their educational journey and beyond.
          </p>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#00393C] mb-4">
              Curriculum Details
            </h2>
            <p className="text-xl text-[#303E3F] max-w-3xl mx-auto">
              From Playgroup to Grade Five, our curriculum progressively builds 
              knowledge, skills, and character development.
            </p>
          </div>

          <div className="space-y-12">
            {curriculumLevels.map((level, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img
                    src={level.image}
                    alt={level.level}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-[#FFE8D2] p-8 rounded-2xl">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="bg-[#F68949] text-white px-4 py-2 rounded-full font-bold">
                        {level.level}
                      </div>
                      <div className="text-[#303E3F]">{level.age}</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#00393C] mb-4">
                      Focus: {level.focus}
                    </h3>
                    
                    <h4 className="text-lg font-semibold text-[#00393C] mb-4">Key Subjects:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {level.subjects.map((subject, subIndex) => (
                        <div key={subIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-[#F68949]" />
                          <span className="text-[#303E3F]">{subject}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-20 bg-[#00393C] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Teaching Methodology</h2>
            <p className="text-xl text-[#FFE8D2] max-w-3xl mx-auto">
              Our innovative teaching approaches ensure effective learning 
              and holistic development of every student.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <BookOpen className="h-12 w-12 text-[#F68949] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Interactive Learning</h3>
              <p className="text-[#FFE8D2]">
                Engaging classroom activities that encourage active participation 
                and hands-on learning experiences.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Users className="h-12 w-12 text-[#F68949] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Collaborative Learning</h3>
              <p className="text-[#FFE8D2]">
                Group projects and peer learning opportunities that develop 
                teamwork and communication skills.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Award className="h-12 w-12 text-[#F68949] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Achievement-Based</h3>
              <p className="text-[#FFE8D2]">
                Regular assessment and recognition of student progress 
                to maintain motivation and excellence.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Clock className="h-12 w-12 text-[#F68949] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Flexible Pacing</h3>
              <p className="text-[#FFE8D2]">
                Personalized learning pace that accommodates different 
                learning styles and abilities.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <Star className="h-12 w-12 text-[#F68949] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Creative Expression</h3>
              <p className="text-[#FFE8D2]">
                Encouraging creativity through arts, music, and innovative 
                problem-solving approaches.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <CheckCircle className="h-12 w-12 text-[#F68949] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4">Assessment for Learning</h3>
              <p className="text-[#FFE8D2]">
                Continuous assessment methods that focus on learning 
                improvement rather than just grading.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teachers Profile */}
      <section className="py-20 bg-[#FFE8D2]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#00393C] mb-4">
              Our Expert Teachers
            </h2>
            <p className="text-xl text-[#303E3F] max-w-3xl mx-auto">
              Meet our dedicated team of qualified educators who bring passion, 
              experience, and expertise to every classroom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((teacher, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#00393C] mb-2">
                    {teacher.name}
                  </h3>
                  <p className="text-[#F68949] font-medium mb-3">
                    {teacher.position}
                  </p>
                  <div className="space-y-2 text-sm text-[#303E3F]">
                    <p><span className="font-medium">Qualification:</span> {teacher.qualification}</p>
                    <p><span className="font-medium">Experience:</span> {teacher.experience}</p>
                    <p><span className="font-medium">Specialization:</span> {teacher.specialization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Teacher Qualifications Summary */}
          <div className="mt-16 bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#00393C] mb-8 text-center">
              Teacher Qualifications & Standards
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#F68949] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">100%</span>
                </div>
                <h4 className="font-bold text-[#00393C] mb-2">Qualified Teachers</h4>
                <p className="text-[#303E3F] text-sm">All teachers hold relevant degrees and certifications</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#00393C] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">10+</span>
                </div>
                <h4 className="font-bold text-[#00393C] mb-2">Average Experience</h4>
                <p className="text-[#303E3F] text-sm">Years of teaching experience per educator</p>
              </div>
              
              <div className="text-center">
                <div className="bg-[#946F5C] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">1:20</span>
                </div>
                <h4 className="font-bold text-[#00393C] mb-2">Teacher-Student Ratio</h4>
                <p className="text-[#303E3F] text-sm">Ensuring personalized attention for each student</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;