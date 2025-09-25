import React from 'react';
import { Baby, Users, BookOpen, GraduationCap } from 'lucide-react';

const ProgramsSection = () => {
  const programs = [
    {
      icon: <Baby className="h-12 w-12" />,
      title: "Playgroup",
      age: "2-3 Years",
      description: "Introduction to learning through play-based activities and social interaction.",
      subjects: ["Basic English", "Numbers", "Colors & Shapes", "Art & Craft"],
      color: "from-[#FFE8D2] to-[#F68949]"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Nursery",
      age: "3-4 Years",
      description: "Building foundation skills through structured learning and creative play.",
      subjects: ["Phonics", "Math Concepts", "Science Basics", "Creative Arts"],
      color: "from-[#F68949] to-[#946F5C]"
    },
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: "KG-1 & KG-2",
      age: "4-6 Years",
      description: "Comprehensive preparation for formal education with focus on core subjects.",
      subjects: ["Reading & Writing", "Mathematics", "General Knowledge", "Physical Education"],
      color: "from-[#946F5C] to-[#303E3F]"
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Grade 1-5",
      age: "6-11 Years",
      description: "Complete primary education following national and international standards.",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Computer"],
      color: "from-[#303E3F] to-[#00393C]"
    }
  ];

  return (
    <section className="py-20 bg-[#FFE8D2]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#00393C] mb-4">
            Our Programs & Curriculum
          </h2>
          <p className="text-xl text-[#303E3F] max-w-3xl mx-auto">
            Comprehensive educational programs designed to nurture every child's potential 
            from early childhood through primary school years.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Header with Gradient */}
              <div className={`bg-gradient-to-r ${program.color} p-6 text-white text-center`}>
                <div className="mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-sm opacity-90">{program.age}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-[#303E3F] mb-6">{program.description}</p>
                
                {/* Subjects */}
                <div>
                  <h4 className="text-sm font-semibold text-[#00393C] mb-3">Key Subjects:</h4>
                  <div className="space-y-2">
                    {program.subjects.map((subject, subIndex) => (
                      <div
                        key={subIndex}
                        className="bg-[#FFE8D2] px-3 py-1 rounded-full text-sm text-[#00393C]"
                      >
                        {subject}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Current Academic Levels */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-[#00393C] mb-8 text-center">
            Current Academic Year Highlights
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#F68949] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">8</span>
              </div>
              <h4 className="font-bold text-[#00393C] mb-2">Levels Available</h4>
              <p className="text-[#303E3F] text-sm">From Playgroup to Grade 5</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#946F5C] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">15</span>
              </div>
              <h4 className="font-bold text-[#00393C] mb-2">Subjects Offered</h4>
              <p className="text-[#303E3F] text-sm">Core and elective subjects</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#00393C] text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1:20</span>
              </div>
              <h4 className="font-bold text-[#00393C] mb-2">Teacher-Student Ratio</h4>
              <p className="text-[#303E3F] text-sm">Personalized attention</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;