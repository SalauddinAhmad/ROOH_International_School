import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, Filter, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const newsItems = [
    {
      id: 1,
      title: "New Science Laboratory Inaugurated with State-of-the-Art Equipment",
      excerpt: "ROOH International School proudly announces the opening of our new science laboratory, equipped with modern instruments and technology to enhance practical learning experiences for our students.",
      content: "The new science laboratory at ROOH International School represents a significant milestone in our commitment to providing world-class education. Equipped with the latest scientific instruments, interactive displays, and safety equipment, this facility will enable our students to conduct hands-on experiments and develop a deeper understanding of scientific concepts.\n\nThe laboratory includes dedicated spaces for biology, chemistry, and physics experiments, with each station designed to accommodate small groups for collaborative learning. Advanced microscopes, digital measuring instruments, and interactive whiteboards create an environment where theoretical knowledge meets practical application.\n\nOur science teachers have undergone specialized training to maximize the potential of these new resources, ensuring that students receive the best possible guidance in their scientific journey. The laboratory also features safety protocols and equipment that meet international standards, providing a secure learning environment for all students.\n\nThis investment in our facilities demonstrates our ongoing commitment to excellence in education and our belief in the importance of hands-on learning in developing critical thinking and problem-solving skills.",
      image: "https://images.pexels.com/photos/8613067/pexels-photo-8613067.jpeg",
      date: "2024-01-15",
      category: "Facilities",
      readTime: "4 min read",
      author: "Dr. Aminul Islam",
      featured: true,
      views: 245
    },
    {
      id: 2,
      title: "Annual Sports Day 2024 - Celebrating Athletic Excellence",
      excerpt: "Our students showcased remarkable athletic talents and sportsmanship during the Annual Sports Day, with record participation from all grade levels.",
      content: "The Annual Sports Day 2024 was a spectacular display of athletic prowess, teamwork, and school spirit. Students from Playgroup to Grade 5 participated in various events including track and field, relay races, football, and traditional games.\n\nThe event emphasized participation over competition, with every student receiving recognition for their efforts. Parents and teachers cheered enthusiastically as young athletes demonstrated not only their physical abilities but also values of fair play and mutual respect.\n\nHighlights of the day included the 100-meter dash finals, the exciting relay races, and the creative march-past presentations by each class. The event concluded with an awards ceremony where medals and certificates were distributed to all participants.\n\nThis annual tradition continues to be one of our most anticipated events, fostering a love for sports and physical fitness among our students while building confidence and team spirit.",
      image: "https://images.pexels.com/photos/8613059/pexels-photo-8613059.jpeg",
      date: "2024-01-12",
      category: "Events",
      readTime: "3 min read",
      author: "Ms. Sarah Johnson",
      featured: false,
      views: 189
    },
    {
      id: 3,
      title: "Parent-Teacher Meeting Schedule for February 2024",
      excerpt: "We invite all parents to attend the upcoming parent-teacher meetings to discuss student progress and academic development plans.",
      content: "The Parent-Teacher Meetings for February 2024 provide an excellent opportunity for parents to engage directly with teachers and understand their child's academic progress, social development, and areas for improvement.\n\nIndividual consultation slots are available for detailed discussions about each student's learning journey. These meetings are crucial for maintaining strong home-school partnerships that support student success.\n\nDuring these sessions, teachers will share insights about your child's strengths, areas for growth, and strategies for continued improvement. Parents are encouraged to discuss any concerns and collaborate on plans to support their child's development.\n\nScheduling information and time slots will be shared via our parent portal and school communication channels.",
      image: "https://images.pexels.com/photos/8612986/pexels-photo-8612986.jpeg",
      date: "2024-01-10",
      category: "Notices",
      readTime: "2 min read",
      author: "Administrative Office",
      featured: false,
      views: 156
    },
    {
      id: 4,
      title: "Student Art Exhibition Showcases Creative Talents",
      excerpt: "Grade 4 students display their artistic creations in a colorful exhibition celebrating creativity and imagination.",
      content: "The Student Art Exhibition features an impressive collection of paintings, drawings, sculptures, and mixed-media artwork created by our talented Grade 4 students.\n\nThe exhibition showcases the diverse artistic abilities and creative thinking fostered through our comprehensive arts curriculum. Visitors can explore themes ranging from nature and family to abstract expressions of emotion and dreams.\n\nEach piece reflects the unique perspective and developing skills of our young artists, demonstrating the importance of creative expression in holistic education. The exhibition will remain open for viewing throughout the month, with guided tours available for interested families.\n\nThis celebration of creativity highlights our commitment to nurturing all aspects of student development, recognizing that artistic expression plays a vital role in building confidence and communication skills.",
      image: "https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg",
      date: "2024-01-08",
      category: "Arts",
      readTime: "3 min read",
      author: "Ms. Emily Davis",
      featured: false,
      views: 134
    },
    {
      id: 5,
      title: "Digital Learning Initiative Launches New Online Platform",
      excerpt: "ROOH International School introduces innovative digital learning tools to enhance classroom instruction and student engagement.",
      content: "Our new digital learning platform integrates seamlessly with classroom instruction to provide students with interactive educational content, virtual field trips, and collaborative projects.\n\nTeachers can now assign multimedia homework, track student progress in real-time, and provide personalized feedback. Parents also have access to monitor their child's learning journey through dedicated dashboards.\n\nThe platform includes educational games, interactive simulations, and digital resources that make learning more engaging and effective. Students can access materials from home, enabling continuous learning beyond school hours.\n\nThis initiative represents our commitment to preparing students for a digital future while maintaining the personal touch that defines quality education.",
      image: "https://images.pexels.com/photos/8613074/pexels-photo-8613074.jpeg",
      date: "2024-01-05",
      category: "Technology",
      readTime: "4 min read",
      author: "IT Department",
      featured: false,
      views: 198
    },
    {
      id: 6,
      title: "Community Service Project: Helping Local Elderly Care Center",
      excerpt: "Students and teachers collaborate in a heartwarming community service initiative to support elderly residents.",
      content: "Our community service project brought together students, teachers, and families to support the local elderly care center through donations, entertainment programs, and companionship visits.\n\nThis initiative teaches students the importance of social responsibility and caring for community members while developing empathy and leadership skills. Students prepared songs, dances, and art projects to share with the elderly residents.\n\nThe project also included collecting essential items and organizing fundraising activities. Through these experiences, our students learn that education extends beyond academic achievement to include service to others.\n\nSuch initiatives are integral to our mission of developing well-rounded individuals who contribute positively to society.",
      image: "https://images.pexels.com/photos/8613069/pexels-photo-8613069.jpeg",
      date: "2024-01-03",
      category: "Community",
      readTime: "3 min read",
      author: "Student Council",
      featured: false,
      views: 167
    }
  ];

  const categories = ['All', 'Facilities', 'Events', 'Notices', 'Arts', 'Technology', 'Community'];

  const filteredNews = newsItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredNews = newsItems.find(item => item.featured);
  const regularNews = filteredNews.filter(item => !item.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFE8D2] to-[#F68949] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#00393C] mb-6">
              News & Blog
            </h1>
            <p className="text-xl text-[#303E3F] max-w-3xl mx-auto">
              Stay informed with the latest updates, events, and important announcements 
              from ROOH International School community.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#303E3F] h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search news and announcements..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-[#303E3F]" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews && (selectedCategory === 'All' || selectedCategory === featuredNews.category) && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#00393C] mb-2">Featured Article</h2>
              <div className="w-20 h-1 bg-[#F68949]"></div>
            </div>
            
            <div className="bg-[#FFE8D2] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="order-2 lg:order-1 p-8 lg:p-12">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-[#F68949] text-white px-3 py-1 rounded-full text-sm font-medium">
                      {featuredNews.category}
                    </span>
                    <div className="flex items-center text-[#303E3F] text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(featuredNews.date)}
                    </div>
                    <div className="flex items-center text-[#303E3F] text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredNews.readTime}
                    </div>
                    <div className="flex items-center text-[#303E3F] text-sm">
                      <Eye className="h-4 w-4 mr-1" />
                      {featuredNews.views} views
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-[#00393C] mb-4">
                    {featuredNews.title}
                  </h3>
                  
                  <p className="text-[#303E3F] mb-6 text-lg leading-relaxed">
                    {featuredNews.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[#946F5C] font-medium">
                      By {featuredNews.author}
                    </span>
                    <Link 
                      to={`/article/${featuredNews.id}`}
                      className="flex items-center text-[#F68949] font-medium hover:text-[#946F5C] transition-colors"
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2">
                  <img
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Regular News Grid */}
      <section className="py-12 bg-[#FFE8D2]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-[#00393C] mb-2">
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h2>
            <div className="w-20 h-1 bg-[#F68949]"></div>
          </div>

          {regularNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularNews.map((item) => (
                <article key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="bg-[#00393C] text-white px-2 py-1 rounded text-xs font-medium">
                        {item.category}
                      </span>
                      <span className="text-[#303E3F] text-xs">
                        {formatDate(item.date)}
                      </span>
                      <span className="text-[#303E3F] text-xs">
                        {item.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#00393C] mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-[#303E3F] text-sm mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[#946F5C] text-sm font-medium">
                        By {item.author}
                      </span>
                      <div className="flex items-center text-[#303E3F] text-xs">
                        <Eye className="h-3 w-3 mr-1" />
                        {item.views}
                      </div>
                    </div>
                    
                    <Link 
                      to={`/article/${item.id}`}
                      className="inline-flex items-center text-[#F68949] hover:text-[#946F5C] transition-colors text-sm font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-[#303E3F] text-lg">
                No articles found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsBlog;