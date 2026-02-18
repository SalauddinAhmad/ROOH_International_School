import React from 'react';
import { Clock, Users, Calendar } from 'lucide-react';

const ClassStructureSection = () => {
  const classStructure = [
    {
      level: "Playgroup",
      age: "2-3 years",
      duration: "2.5 hours",
      students: "15",
      schedule: "Morning & Afternoon",
      subjects: 4
    },
    {
      level: "Nursery",
      age: "3-4 years", 
      duration: "3 hours",
      students: "18",
      schedule: "Morning & Afternoon",
      subjects: 5
    },
    {
      level: "KG-1",
      age: "4-5 years",
      duration: "4 hours", 
      students: "20",
      schedule: "Morning & Afternoon",
      subjects: 6
    },
    {
      level: "KG-2",
      age: "5-6 years",
      duration: "4 hours",
      students: "20", 
      schedule: "Morning & Afternoon",
      subjects: 7
    },
    {
      level: "Grade 1",
      age: "6-7 years",
      duration: "5 hours",
      students: "25",
      schedule: "Morning",
      subjects: 8
    },
    {
      level: "Grade 2",
      age: "7-8 years",
      duration: "5 hours", 
      students: "25",
      schedule: "Morning",
      subjects: 9
    },
    {
      level: "Grade 3-5",
      age: "8-11 years",
      duration: "6 hours",
      students: "30",
      schedule: "Morning", 
      subjects: 10
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#00393C] mb-4">
            Class Structure & Age Groups
          </h2>
          <p className="text-xl text-[#303E3F] max-w-3xl mx-auto">
            Well-organized class structure ensuring appropriate learning environments for different age groups with optimal student-teacher ratios and age-appropriate curriculum.
          </p>
        </div>

        {/* Table */}
        <div className="bg-[#FFE8D2] rounded-2xl overflow-hidden shadow-lg">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#00393C] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Level</th>
                  <th className="px-6 py-4 text-left font-semibold">Age Group</th>
                  <th className="px-6 py-4 text-left font-semibold">Duration</th>
                  <th className="px-6 py-4 text-left font-semibold">Class Size</th>
                  <th className="px-6 py-4 text-left font-semibold">Schedule</th>
                  <th className="px-6 py-4 text-left font-semibold">Subjects</th>
                </tr>
              </thead>
              <tbody>
                {classStructure.map((item, index) => (
                  <tr 
                    key={index} 
                    className={`${index % 2 === 0 ? 'bg-white' : 'bg-[#FFE8D2]'} hover:bg-[#F68949]/10 transition-colors`}
                  >
                    <td className="px-6 py-4 font-semibold text-[#00393C]">{item.level}</td>
                    <td className="px-6 py-4 text-[#303E3F]">{item.age}</td>
                    <td className="px-6 py-4 text-[#303E3F]">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-[#F68949]" />
                        {item.duration}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[#303E3F]">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-[#F68949]" />
                        {item.students} students
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[#303E3F]">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-[#F68949]" />
                        {item.schedule}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-[#F68949] text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.subjects} subjects
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-[#00393C] text-white p-8 rounded-2xl text-center">
            <Clock className="h-12 w-12 mx-auto mb-4 text-[#FFE8D2]" />
            <h3 className="text-xl font-bold mb-4">Flexible Timing</h3>
            <p className="text-[#FFE8D2]">
              Morning and afternoon shifts available for early childhood programs to accommodate working parents.
            </p>
          </div>
          
          <div className="bg-[#F68949] text-white p-8 rounded-2xl text-center">
            <Users className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Small Class Sizes</h3>
            <p>
              Optimal student-teacher ratios ensure personalized attention and better learning outcomes for every child.
            </p>
          </div>
          
          <div className="bg-[#946F5C] text-white p-8 rounded-2xl text-center">
            <Calendar className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Structured Learning</h3>
            <p>
              Age-appropriate curriculum progression ensuring smooth transition between different academic levels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassStructureSection;