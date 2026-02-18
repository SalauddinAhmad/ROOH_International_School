import React, { useState, useEffect } from 'react';
import { 
  Settings, 
  Users, 
  FileText, 
  Image, 
  Calendar, 
  Phone, 
  Mail, 
  MapPin,
  Save,
  Edit,
  Plus,
  Trash2,
  Eye,
  EyeOff,
  Upload,
  Download
} from 'lucide-react';

interface AdminData {
  siteInfo: {
    schoolName: string;
    tagline: string;
    phone: string;
    email: string;
    address: string;
    establishedYear: string;
  };
  heroSection: {
    title: string;
    subtitle: string;
    description: string;
    stats: {
      students: string;
      teachers: string;
      years: string;
    };
  };
  aboutSection: {
    vision: string;
    mission: string;
    coreValues: string;
    principalMessage: string;
    principalName: string;
    principalTitle: string;
    schoolStats: {
      yearsOfExcellence: string;
      happyStudents: string;
      qualifiedTeachers: string;
      gradeLevels: string;
    };
  };
  programs: Array<{
    id: string;
    title: string;
    age: string;
    description: string;
    subjects: string[];
  }>;
  news: Array<{
    id: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    author: string;
    date: string;
    featured: boolean;
  }>;
  testimonials: Array<{
    id: string;
    name: string;
    role: string;
    content: string;
    rating: number;
    studentName: string;
  }>;
  gallery: Array<{
    id: string;
    title: string;
    category: string;
    imageUrl: string;
  }>;
}

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [adminData, setAdminData] = useState<AdminData>({
    siteInfo: {
      schoolName: 'ROOH International School',
      tagline: 'Nurturing Tomorrow\'s Leaders Today',
      phone: '+880 1896-061644',
      email: 'info@roohschool.edu.bd',
      address: 'House 35, Road 05, Sector 13, Uttara, Dhaka-1230',
      establishedYear: '2014'
    },
    heroSection: {
      title: 'Nurturing Tomorrow\'s Leaders Today',
      subtitle: 'Excellence in Education',
      description: 'At ROOH International School, we provide world-class education that nurtures young minds with excellence in education, character development, and holistic growth for a brighter future.',
      stats: {
        students: '650+',
        teachers: '35+',
        years: '11+'
      }
    },
    aboutSection: {
      vision: 'To be a leading educational institution that empowers students to become confident, creative, and compassionate global citizens who contribute positively to society.',
      mission: 'To provide excellent education in a nurturing environment that fosters intellectual curiosity, moral integrity, and social responsibility while celebrating diversity and individual potential.',
      coreValues: 'Excellence, Integrity, Respect, Innovation, and Community. These values guide everything we do and help shape the character of our students and school community.',
      principalMessage: 'Welcome to ROOH International School, where every child\'s journey of discovery begins. As an educator with over 15 years of experience, I believe that education is not just about academic achievement, but about nurturing the whole child.',
      principalName: 'Sadiqun Nahar',
      principalTitle: 'Vice Principal, ROOH International School',
      schoolStats: {
        yearsOfExcellence: '6+',
        happyStudents: '150+',
        qualifiedTeachers: '25+',
        gradeLevels: '5'
      }
    },
    programs: [
      {
        id: '1',
        title: 'Playgroup',
        age: '2-3 Years',
        description: 'Introduction to learning through play-based activities, social interaction and basic skill development.',
        subjects: ['Play Activities', 'Basic Communication', 'Motor Skills', 'Social Skills']
      },
      {
        id: '2',
        title: 'Nursery',
        age: '3-4 Years',
        description: 'Building foundation skills through structured learning, creative play and early academic concepts.',
        subjects: ['Pre-Reading Skills', 'Number Recognition', 'Creative Arts', 'Physical Development']
      }
    ],
    news: [
      {
        id: '1',
        title: 'New Science Laboratory Inaugurated',
        excerpt: 'State-of-the-art science laboratory with modern equipment now open for students.',
        content: 'The new science laboratory at ROOH International School represents a significant milestone...',
        category: 'Facilities',
        author: 'Dr. Aminul Islam',
        date: '2024-01-15',
        featured: true
      }
    ],
    testimonials: [
      {
        id: '1',
        name: 'Sarah Ahmed',
        role: 'Parent of Grade 3 Student',
        content: 'ROOH International School has exceeded our expectations. The caring environment and quality education have helped our daughter flourish.',
        rating: 5,
        studentName: 'Ayesha Ahmed'
      }
    ],
    gallery: [
      {
        id: '1',
        title: 'Happy Students in Classroom',
        category: 'Academics',
        imageUrl: 'https://images.pexels.com/photos/8613069/pexels-photo-8613069.jpeg'
      }
    ]
  });

  const [editingItem, setEditingItem] = useState<any>(null);
  const [showPassword, setShowPassword] = useState(false);

  // Authentication
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.username === 'admin' && loginData.password === 'rooh2024') {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuth', 'true');
    } else {
      alert('Invalid credentials!');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth');
    setActiveTab('dashboard');
  };

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Data Management Functions
  const updateSiteInfo = (field: string, value: string) => {
    setAdminData(prev => ({
      ...prev,
      siteInfo: {
        ...prev.siteInfo,
        [field]: value
      }
    }));
  };

  const updateHeroSection = (field: string, value: string) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setAdminData(prev => ({
        ...prev,
        heroSection: {
          ...prev.heroSection,
          [parent]: {
            ...prev.heroSection[parent as keyof typeof prev.heroSection],
            [child]: value
          }
        }
      }));
    } else {
      setAdminData(prev => ({
        ...prev,
        heroSection: {
          ...prev.heroSection,
          [field]: value
        }
      }));
    }
  };

  const addNewsItem = () => {
    const newItem = {
      id: Date.now().toString(),
      title: 'New Article',
      excerpt: 'Article excerpt...',
      content: 'Article content...',
      category: 'General',
      author: 'Admin',
      date: new Date().toISOString().split('T')[0],
      featured: false
    };
    setAdminData(prev => ({
      ...prev,
      news: [...prev.news, newItem]
    }));
  };

  const deleteNewsItem = (id: string) => {
    setAdminData(prev => ({
      ...prev,
      news: prev.news.filter(item => item.id !== id)
    }));
  };

  const saveData = () => {
    localStorage.setItem('roohAdminData', JSON.stringify(adminData));
    alert('Data saved successfully!');
  };

  const exportData = () => {
    const dataStr = JSON.stringify(adminData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'rooh-website-data.json';
    link.click();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#00393C] to-[#303E3F] flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 shadow-2xl w-full max-w-md">
          <div className="text-center mb-8">
            <div className="bg-[#F68949] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Settings className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-[#00393C] mb-2">Admin Panel</h1>
            <p className="text-[#303E3F]">ROOH International School</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#303E3F] mb-2">
                Username
              </label>
              <input
                type="text"
                value={loginData.username}
                onChange={(e) => setLoginData(prev => ({ ...prev, username: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#303E3F] mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={loginData.password}
                  onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                  placeholder="Enter password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#303E3F]"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#F68949] text-white py-3 rounded-lg font-medium hover:bg-[#946F5C] transition-colors"
            >
              Login to Admin Panel
            </button>
          </form>

          <div className="mt-6 p-4 bg-[#FFE8D2] rounded-lg">
            <p className="text-sm text-[#303E3F]">
              <strong>Demo Credentials:</strong><br />
              Username: admin<br />
              Password: rooh2024
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Header */}
      <header className="bg-[#00393C] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Settings className="h-8 w-8 text-[#F68949]" />
              <div>
                <h1 className="text-xl font-bold">Admin Panel</h1>
                <p className="text-sm text-[#FFE8D2]">ROOH International School</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={saveData}
                className="bg-[#F68949] px-4 py-2 rounded-lg font-medium hover:bg-[#946F5C] transition-colors flex items-center"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <nav className="space-y-2">
                {[
                  { id: 'dashboard', label: 'Dashboard', icon: Settings },
                  { id: 'siteinfo', label: 'Site Information', icon: FileText },
                  { id: 'hero', label: 'Hero Section', icon: Image },
                  { id: 'about', label: 'About Section', icon: Users },
                  { id: 'programs', label: 'Programs', icon: FileText },
                  { id: 'news', label: 'News & Events', icon: Calendar },
                  { id: 'testimonials', label: 'Testimonials', icon: Users },
                  { id: 'gallery', label: 'Gallery', icon: Image },
                  { id: 'contact', label: 'Contact Info', icon: Phone }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? 'bg-[#F68949] text-white'
                        : 'text-[#303E3F] hover:bg-[#FFE8D2]'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Dashboard */}
              {activeTab === 'dashboard' && (
                <div>
                  <h2 className="text-2xl font-bold text-[#00393C] mb-6">Dashboard</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-[#F68949] text-white p-6 rounded-xl">
                      <Users className="h-8 w-8 mb-2" />
                      <div className="text-2xl font-bold">{adminData.heroSection.stats.students}</div>
                      <div className="text-sm opacity-90">Students</div>
                    </div>
                    <div className="bg-[#00393C] text-white p-6 rounded-xl">
                      <Users className="h-8 w-8 mb-2" />
                      <div className="text-2xl font-bold">{adminData.heroSection.stats.teachers}</div>
                      <div className="text-sm opacity-90">Teachers</div>
                    </div>
                    <div className="bg-[#946F5C] text-white p-6 rounded-xl">
                      <Calendar className="h-8 w-8 mb-2" />
                      <div className="text-2xl font-bold">{adminData.heroSection.stats.years}</div>
                      <div className="text-sm opacity-90">Years</div>
                    </div>
                    <div className="bg-green-600 text-white p-6 rounded-xl">
                      <FileText className="h-8 w-8 mb-2" />
                      <div className="text-2xl font-bold">{adminData.news.length}</div>
                      <div className="text-sm opacity-90">News Articles</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-[#FFE8D2] p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-[#00393C] mb-4">Quick Actions</h3>
                      <div className="space-y-3">
                        <button
                          onClick={() => setActiveTab('news')}
                          className="w-full bg-[#F68949] text-white px-4 py-2 rounded-lg hover:bg-[#946F5C] transition-colors"
                        >
                          Add New Article
                        </button>
                        <button
                          onClick={exportData}
                          className="w-full bg-[#00393C] text-white px-4 py-2 rounded-lg hover:bg-[#303E3F] transition-colors flex items-center justify-center"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Export Data
                        </button>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl">
                      <h3 className="text-lg font-bold text-[#00393C] mb-4">Recent Activity</h3>
                      <div className="space-y-2 text-sm text-[#303E3F]">
                        <p>• Site information updated</p>
                        <p>• New testimonial added</p>
                        <p>• Gallery images updated</p>
                        <p>• Contact information modified</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Site Information */}
              {activeTab === 'siteinfo' && (
                <div>
                  <h2 className="text-2xl font-bold text-[#00393C] mb-6">Site Information</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-[#303E3F] mb-2">School Name</label>
                      <input
                        type="text"
                        value={adminData.siteInfo.schoolName}
                        onChange={(e) => updateSiteInfo('schoolName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#303E3F] mb-2">Tagline</label>
                      <input
                        type="text"
                        value={adminData.siteInfo.tagline}
                        onChange={(e) => updateSiteInfo('tagline', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#303E3F] mb-2">Phone</label>
                        <input
                          type="text"
                          value={adminData.siteInfo.phone}
                          onChange={(e) => updateSiteInfo('phone', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#303E3F] mb-2">Email</label>
                        <input
                          type="email"
                          value={adminData.siteInfo.email}
                          onChange={(e) => updateSiteInfo('email', e.target.value)}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#303E3F] mb-2">Address</label>
                      <textarea
                        value={adminData.siteInfo.address}
                        onChange={(e) => updateSiteInfo('address', e.target.value)}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#303E3F] mb-2">Established Year</label>
                      <input
                        type="text"
                        value={adminData.siteInfo.establishedYear}
                        onChange={(e) => updateSiteInfo('establishedYear', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Hero Section */}
              {activeTab === 'hero' && (
                <div>
                  <h2 className="text-2xl font-bold text-[#00393C] mb-6">Hero Section</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-[#303E3F] mb-2">Main Title</label>
                      <input
                        type="text"
                        value={adminData.heroSection.title}
                        onChange={(e) => updateHeroSection('title', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#303E3F] mb-2">Subtitle</label>
                      <input
                        type="text"
                        value={adminData.heroSection.subtitle}
                        onChange={(e) => updateHeroSection('subtitle', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#303E3F] mb-2">Description</label>
                      <textarea
                        value={adminData.heroSection.description}
                        onChange={(e) => updateHeroSection('description', e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#00393C] mb-4">Statistics</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-[#303E3F] mb-2">Students</label>
                          <input
                            type="text"
                            value={adminData.heroSection.stats.students}
                            onChange={(e) => updateHeroSection('stats.students', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#303E3F] mb-2">Teachers</label>
                          <input
                            type="text"
                            value={adminData.heroSection.stats.teachers}
                            onChange={(e) => updateHeroSection('stats.teachers', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#303E3F] mb-2">Years</label>
                          <input
                            type="text"
                            value={adminData.heroSection.stats.years}
                            onChange={(e) => updateHeroSection('stats.years', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* News Management */}
              {activeTab === 'news' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-[#00393C]">News & Events</h2>
                    <button
                      onClick={addNewsItem}
                      className="bg-[#F68949] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#946F5C] transition-colors flex items-center"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Article
                    </button>
                  </div>

                  <div className="space-y-4">
                    {adminData.news.map((article) => (
                      <div key={article.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <h3 className="font-semibold text-[#00393C]">{article.title}</h3>
                            {article.featured && (
                              <span className="bg-[#F68949] text-white px-2 py-1 rounded text-xs">Featured</span>
                            )}
                          </div>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => setEditingItem(article)}
                              className="text-blue-600 hover:text-blue-800"
                            >
                              <Edit className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => deleteNewsItem(article.id)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                        <p className="text-[#303E3F] text-sm mb-2">{article.excerpt}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>By {article.author}</span>
                          <span>{article.date}</span>
                          <span className="bg-gray-100 px-2 py-1 rounded">{article.category}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Other tabs would be implemented similarly */}
              {activeTab === 'about' && (
                <div>
                  <h2 className="text-2xl font-bold text-[#00393C] mb-6">About Section</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-[#303E3F] mb-2">Vision</label>
                      <textarea
                        value={adminData.aboutSection.vision}
                        onChange={(e) => setAdminData(prev => ({
                          ...prev,
                          aboutSection: { ...prev.aboutSection, vision: e.target.value }
                        }))}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#303E3F] mb-2">Mission</label>
                      <textarea
                        value={adminData.aboutSection.mission}
                        onChange={(e) => setAdminData(prev => ({
                          ...prev,
                          aboutSection: { ...prev.aboutSection, mission: e.target.value }
                        }))}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#303E3F] mb-2">Core Values</label>
                      <textarea
                        value={adminData.aboutSection.coreValues}
                        onChange={(e) => setAdminData(prev => ({
                          ...prev,
                          aboutSection: { ...prev.aboutSection, coreValues: e.target.value }
                        }))}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#303E3F] mb-2">Principal's Message</label>
                      <textarea
                        value={adminData.aboutSection.principalMessage}
                        onChange={(e) => setAdminData(prev => ({
                          ...prev,
                          aboutSection: { ...prev.aboutSection, principalMessage: e.target.value }
                        }))}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#303E3F] mb-2">Principal Name</label>
                        <input
                          type="text"
                          value={adminData.aboutSection.principalName}
                          onChange={(e) => setAdminData(prev => ({
                            ...prev,
                            aboutSection: { ...prev.aboutSection, principalName: e.target.value }
                          }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#303E3F] mb-2">Principal Title</label>
                        <input
                          type="text"
                          value={adminData.aboutSection.principalTitle}
                          onChange={(e) => setAdminData(prev => ({
                            ...prev,
                            aboutSection: { ...prev.aboutSection, principalTitle: e.target.value }
                          }))}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {editingItem && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#00393C]">Edit Article</h3>
              <button
                onClick={() => setEditingItem(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">Title</label>
                <input
                  type="text"
                  value={editingItem.title}
                  onChange={(e) => setEditingItem(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">Excerpt</label>
                <textarea
                  value={editingItem.excerpt}
                  onChange={(e) => setEditingItem(prev => ({ ...prev, excerpt: e.target.value }))}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">Content</label>
                <textarea
                  value={editingItem.content}
                  onChange={(e) => setEditingItem(prev => ({ ...prev, content: e.target.value }))}
                  rows={8}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#303E3F] mb-2">Category</label>
                  <select
                    value={editingItem.category}
                    onChange={(e) => setEditingItem(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                  >
                    <option value="General">General</option>
                    <option value="Facilities">Facilities</option>
                    <option value="Events">Events</option>
                    <option value="Notices">Notices</option>
                    <option value="Arts">Arts</option>
                    <option value="Technology">Technology</option>
                    <option value="Community">Community</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#303E3F] mb-2">Author</label>
                  <input
                    type="text"
                    value={editingItem.author}
                    onChange={(e) => setEditingItem(prev => ({ ...prev, author: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={editingItem.featured}
                    onChange={(e) => setEditingItem(prev => ({ ...prev, featured: e.target.checked }))}
                    className="rounded border-gray-300 text-[#F68949] focus:ring-[#F68949]"
                  />
                  <span className="text-sm text-[#303E3F]">Featured Article</span>
                </label>
              </div>
            </div>

            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={() => setEditingItem(null)}
                className="px-6 py-2 border border-gray-300 rounded-lg text-[#303E3F] hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setAdminData(prev => ({
                    ...prev,
                    news: prev.news.map(item => 
                      item.id === editingItem.id ? editingItem : item
                    )
                  }));
                  setEditingItem(null);
                }}
                className="px-6 py-2 bg-[#F68949] text-white rounded-lg hover:bg-[#946F5C] transition-colors"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;