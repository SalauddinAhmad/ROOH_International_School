import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, Filter, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Shared article data - should match ArticleView component
  const newsItems = [
    {
      id: 1,
      title: "New Science Laboratory Inaugurated with State-of-the-Art Equipment",
      excerpt: "ROOH International School proudly announces the opening of our new science laboratory, equipped with modern instruments and technology to enhance practical learning experiences for our students.",
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