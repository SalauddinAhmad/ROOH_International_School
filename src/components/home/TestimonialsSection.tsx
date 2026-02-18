import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Ahmed",
      role: "Parent of Grade 3 Student",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      content: "ROOH International School has exceeded our expectations. The caring environment and quality education have helped our daughter flourish academically and socially. The teachers are dedicated and truly understand each child's needs.",
      rating: 5,
      studentName: "Ayesha Ahmed"
    },
    {
      name: "Dr. Mohammad Rahman",
      role: "Parent of KG-2 Student", 
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      content: "What impressed us most is the school's focus on character development alongside academics. Our son has become more confident and curious about learning. The facilities are excellent and the staff is very professional.",
      rating: 5,
      studentName: "Omar Rahman"
    },
    {
      name: "Fatima Khan",
      role: "Parent of Grade 1 Student",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg", 
      content: "The transition from home to school was seamless thanks to ROOH's nurturing approach. My daughter loves going to school every day. The curriculum is well-balanced and prepares children for future challenges.",
      rating: 5,
      studentName: "Zara Khan"
    },
    {
      name: "Mr. Karim Hassan",
      role: "Parent of Grade 4 Student",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg",
      content: "ROOH provides excellent education with strong values. The teachers are passionate and create a positive learning environment. My son's progress in both academics and extracurricular activities has been remarkable.",
      rating: 5,
      studentName: "Ali Hassan"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-[#00393C]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Parents' Trust & Testimonials
          </h2>
          <p className="text-xl text-[#FFE8D2] max-w-3xl mx-auto">
            Hear what parents have to say about their experience with ROOH International School and how we've positively impacted their children's educational journey and overall development.
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Parent Image */}
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full object-cover shadow-lg"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-[#F68949] mb-4 mx-auto md:mx-0" />
                
                {/* Testimonial Text */}
                <p className="text-lg text-[#303E3F] mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </p>

                {/* Rating */}
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                    <Star key={index} className="h-5 w-5 text-[#F68949] fill-current" />
                  ))}
                </div>

                {/* Parent Info */}
                <div>
                  <h4 className="font-bold text-[#00393C] text-lg">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-[#946F5C] mb-1">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-sm text-[#303E3F]">
                    Parent of {testimonials[currentTestimonial].studentName}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#F68949] hover:bg-[#946F5C] text-white p-3 rounded-full shadow-lg transition-colors duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#F68949] hover:bg-[#946F5C] text-white p-3 rounded-full shadow-lg transition-colors duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentTestimonial ? 'bg-[#F68949]' : 'bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#F68949] mb-2">98%</div>
            <div className="text-[#FFE8D2]">Parent Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#F68949] mb-2">95%</div>
            <div className="text-[#FFE8D2]">Student Retention Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#F68949] mb-2">4.9/5</div>
            <div className="text-[#FFE8D2]">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;