import React from 'react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Science Laboratory Inaugurated",
      excerpt: "State-of-the-art science laboratory with modern equipment now open for students to enhance their learning experience.",
      image: "https://images.pexels.com/photos/8613067/pexels-photo-8613067.jpeg",
      date: "2024-01-15",
      category: "Facilities",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "Annual Sports Day 2024",
      excerpt: "Students showcase their athletic talents in various sports competitions. Great participation and sportsmanship displayed.",
      image: "https://images.pexels.com/photos/8613059/pexels-photo-8613059.jpeg",
      date: "2024-01-10",
      category: "Events",
      readTime: "2 min read"
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting Schedule",
      excerpt: "Upcoming parent-teacher meetings scheduled for February. Individual consultations available for academic progress discussion.",
      image: "https://images.pexels.com/photos/8612986/pexels-photo-8612986.jpeg",
      date: "2024-01-08",
      category: "Notices",
      readTime: "1 min read"
    },
    {
      id: 4,
      title: "Art Exhibition by Grade 4 Students",
      excerpt: "Creative artwork by our talented Grade 4 students on display. Showcasing imagination and artistic skills development.",
      image: "https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg",
      date: "2024-01-05",
      category: "Arts",
      readTime: "2 min read"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#00393C] mb-4">
            Latest News & Events
          </h2>
          <p className="text-xl text-[#303E3F] max-w-3xl mx-auto">
            Stay updated with the latest happenings, events, and important announcements 
            from ROOH International School community.
          </p>
        </div>

        {/* Featured News */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Main Featured Article */}
          <div className="lg:col-span-1">
            <div className="bg-[#FFE8D2] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={newsItems[0].image}
                alt={newsItems[0].title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-[#F68949] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {newsItems[0].category}
                  </span>
                  <div className="flex items-center text-[#303E3F] text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {formatDate(newsItems[0].date)}
                  </div>
                  <div className="flex items-center text-[#303E3F] text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {newsItems[0].readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#00393C] mb-4">
                  {newsItems[0].title}
                </h3>
                <p className="text-[#303E3F] mb-6 leading-relaxed">
                  {newsItems[0].excerpt}
                </p>
                <Link 
                  to={`/article/${newsItems[0].id}`}
                  className="flex items-center text-[#F68949] font-medium hover:text-[#946F5C] transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Side Articles */}
          <div className="space-y-6">
            {newsItems.slice(1, 4).map((item) => (
              <div
                key={item.id}
                className="bg-white border border-[#FFE8D2] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-[#00393C] text-white px-2 py-1 rounded text-xs">
                        {item.category}
                      </span>
                      <span className="text-[#303E3F] text-sm">
                        {formatDate(item.date)}
                      </span>
                    </div>
                    <Link 
                      to={`/article/${item.id}`}
                      className="text-lg font-bold text-[#00393C] mb-2 leading-tight hover:text-[#F68949] transition-colors"
                    >
                      {item.title}
                    </Link>
                    <p className="text-[#303E3F] text-sm line-clamp-2">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All News Button */}
        <div className="text-center">
          <Link 
            to="/news"
            className="bg-[#00393C] text-white px-8 py-3 rounded-full font-medium hover:bg-[#303E3F] transition-colors duration-300 flex items-center mx-auto"
          >
            View All News & Events
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        {/* Quick Announcements */}
        <div className="mt-16 bg-[#F68949] rounded-2xl p-8 text-white animate-fade-in">
          <h3 className="text-2xl font-bold mb-6 text-center">Important Announcements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <h4 className="font-semibold mb-2">Admission Open</h4>
              <p className="text-sm opacity-90">Applications for 2024-25 academic year are now open.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <h4 className="font-semibold mb-2">Winter Break</h4>
              <p className="text-sm opacity-90">School will remain closed from Dec 20 to Jan 5.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <h4 className="font-semibold mb-2">Health Checkup</h4>
              <p className="text-sm opacity-90">Annual health checkup scheduled for all students.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;