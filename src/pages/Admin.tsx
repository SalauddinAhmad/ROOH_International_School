import React, { useState, useEffect } from 'react';
import { Settings, FileText, Image, User, Calendar, MessageSquare, Camera, Phone, Users, Plus, CreditCard as Edit, Trash2, Save, LogOut, Shield, Star, Eye, EyeOff } from 'lucide-react';

  Settings,
  Users,
  FileText,
  MessageSquare,
  Image,
  Phone,
  Save,
  Plus,
  Edit,
  Trash2,
  Star,
  Mail,
  MapPin,
  Clock,
  Shield,
  User,
  Eye,
  EyeOff,
  Home,
  BookOpen,
  Award,
  Bell,
  Download,
  Upload,
  RefreshCw
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
  contactInfo: {
    phone: string;
    email: string;
    address: string;
    officeHours: string;
    emergencyContact: string;
  };
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [activeSection, setActiveSection] = useState('dashboard');
  const [users, setUsers] = useState<User[]>([]);
  const [showPassword, setShowPassword] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [newUser, setNewUser] = useState({
    username: '',
    password: '',
    fullName: '',
    email: '',
    role: 'admin' as 'admin' | 'superadmin'
  });

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
      },
      {
        id: '2',
        name: 'Dr. Mohammad Rahman',
        role: 'Parent of KG-2 Student',
        content: 'What impressed us most is the school\'s focus on character development alongside academics. Our son has become more confident and curious about learning.',
        rating: 5,
        studentName: 'Omar Rahman'
      }
    ],
    gallery: [
      {
        id: '1',
        title: 'Happy Students in Classroom',
        category: 'Academics',
        imageUrl: 'https://images.pexels.com/photos/8613069/pexels-photo-8613069.jpeg'
      },
      {
        id: '2',
        title: 'Science Laboratory',
        category: 'Facilities',
        imageUrl: 'https://images.pexels.com/photos/8613067/pexels-photo-8613067.jpeg'
      },
      {
        id: '3',
        title: 'Art & Craft Activities',
        category: 'Arts',
        imageUrl: 'https://images.pexels.com/photos/8612990/pexels-photo-8612990.jpeg'
      }
    ],
    contactInfo: {
      phone: '+880 1896-061644',
      email: 'info@roohschool.edu.bd',
      address: 'House 35, Road 05, Sector 13, Uttara, Dhaka-1230',
      officeHours: 'Sunday - Thursday: 8:00 AM - 4:00 PM',
      emergencyContact: '+880 1896-061646'
    }
  });

  // Initialize default users and load data
  useEffect(() => {
    const savedAuth = localStorage.getItem('adminAuth');
    const savedUsers = localStorage.getItem('adminUsers');
    const savedData = localStorage.getItem('roohAdminData');

    // Initialize default users if none exist
    if (!savedUsers) {
      const defaultUsers: User[] = [
        {
          id: '1',
          username: 'superadmin',
          password: 'super123',
          fullName: 'Super Administrator',
          email: 'superadmin@roohschool.edu.bd',
          role: 'superadmin',
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString()
        },
        {
          id: '2',
          username: 'admin',
          password: 'admin123',
          fullName: 'Administrator',
          email: 'admin@roohschool.edu.bd',
          role: 'admin',
          createdAt: new Date().toISOString(),
          lastLogin: new Date().toISOString()
        }
      ];
      setUsers(defaultUsers);
      localStorage.setItem('adminUsers', JSON.stringify(defaultUsers));
    } else {
      setUsers(JSON.parse(savedUsers));
    }

    if (savedAuth) {
      const authData = JSON.parse(savedAuth);
      setIsAuthenticated(true);
      setCurrentUser(authData.user);
    }

    if (savedData) {
      try {
        setAdminData(JSON.parse(savedData));
      } catch (error) {
        console.error('Error loading admin data:', error);
      }
    }
  }, []);

  // Auto-save data
  useEffect(() => {
    localStorage.setItem('roohAdminData', JSON.stringify(adminData));
  }, [adminData]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = users.find(u => u.username === loginForm.username && u.password === loginForm.password);
    
    if (user) {
      // Update last login
      const updatedUsers = users.map(u => 
        u.id === user.id ? { ...u, lastLogin: new Date().toISOString() } : u
      );
      setUsers(updatedUsers);
      localStorage.setItem('adminUsers', JSON.stringify(updatedUsers));
      
      setIsAuthenticated(true);
      setCurrentUser(user);
      localStorage.setItem('adminAuth', JSON.stringify({ user, timestamp: Date.now() }));
      setLoginForm({ username: '', password: '' });
    } else {
      alert('Invalid credentials!');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem('adminAuth');
    setActiveSection('dashboard');
    alert('Logged out successfully!');
  };

  const updateAdminData = (section: keyof AdminData, field: string, value: any) => {
    setAdminData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const updateNestedData = (section: keyof AdminData, parent: string, field: string, value: any) => {
    setAdminData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [parent]: {
          ...(prev[section] as any)[parent],
          [field]: value
        }
      }
    }));
  };

  // User Management Functions
  const addUser = () => {
    if (!newUser.username || !newUser.password || !newUser.fullName) {
      alert('Please fill in all required fields');
      return;
    }

    if (users.some(u => u.username === newUser.username)) {
      alert('Username already exists');
      return;
    }

    const user: User = {
      id: Date.now().toString(),
      ...newUser,
      createdAt: new Date().toISOString()
    };

    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    localStorage.setItem('adminUsers', JSON.stringify(updatedUsers));
    setNewUser({ username: '', password: '', fullName: '', email: '', role: 'admin' });
    alert('User added successfully!');
  };

  const updateUser = (updatedUser: User) => {
    const updatedUsers = users.map(u => u.id === updatedUser.id ? updatedUser : u);
    setUsers(updatedUsers);
    localStorage.setItem('adminUsers', JSON.stringify(updatedUsers));
    setEditingUser(null);
    alert('User updated successfully!');
  };

  const deleteUser = (userId: string) => {
    const userToDelete = users.find(u => u.id === userId);
    if (!userToDelete) return;

    if (userToDelete.id === currentUser?.id) {
      alert('You cannot delete your own account');
      return;
    }

    const superAdmins = users.filter(u => u.role === 'superadmin');
    if (userToDelete.role === 'superadmin' && superAdmins.length === 1) {
      alert('Cannot delete the last super admin');
      return;
    }

    if (confirm('Are you sure you want to delete this user?')) {
      const updatedUsers = users.filter(u => u.id !== userId);
      setUsers(updatedUsers);
      localStorage.setItem('adminUsers', JSON.stringify(updatedUsers));
      alert('User deleted successfully!');
    }
  };

  // Testimonial Functions
  const addTestimonial = () => {
    const newTestimonial = {
      id: Date.now().toString(),
      name: 'New Parent',
      role: 'Parent',
      content: 'Great school experience...',
      rating: 5,
      studentName: 'Student Name'
    };
    setAdminData(prev => ({
      ...prev,
      testimonials: [...prev.testimonials, newTestimonial]
    }));
  };

  const updateTestimonial = (id: string, field: string, value: any) => {
    setAdminData(prev => ({
      ...prev,
      testimonials: prev.testimonials.map(t => 
        t.id === id ? { ...t, [field]: value } : t
      )
    }));
  };

  const deleteTestimonial = (id: string) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      setAdminData(prev => ({
        ...prev,
        testimonials: prev.testimonials.filter(t => t.id !== id)
      }));
    }
  };

  // Gallery Functions
  const addGalleryItem = () => {
    const newItem = {
      id: Date.now().toString(),
      title: 'New Image',
      category: 'Academics',
      imageUrl: 'https://images.pexels.com/photos/8613069/pexels-photo-8613069.jpeg'
    };
    setAdminData(prev => ({
      ...prev,
      gallery: [...prev.gallery, newItem]
    }));
  };

  const updateGalleryItem = (id: string, field: string, value: any) => {
    setAdminData(prev => ({
      ...prev,
      gallery: prev.gallery.map(g => 
        g.id === id ? { ...g, [field]: value } : g
      )
    }));
  };

  const deleteGalleryItem = (id: string) => {
    if (confirm('Are you sure you want to delete this image?')) {
      setAdminData(prev => ({
        ...prev,
        gallery: prev.gallery.filter(g => g.id !== id)
      }));
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full">
          <div className="text-center mb-8">
            <div className="bg-[#F68949] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-[#00393C] mb-2">Admin Login</h1>
            <p className="text-[#303E3F]">ROOH International School</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#303E3F] mb-2">Username</label>
              <input
                type="text"
                value={loginForm.username}
                onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                placeholder="Enter username"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#303E3F] mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
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
              Login
            </button>
          </form>
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200">
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-[#F68949] to-[#946F5C] p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Admin Panel</h2>
              <p className="text-gray-600">ROOH International School</p>
            </div>
            <p className="text-xs text-[#303E3F]">Super Admin: superadmin / super123</p>
            <p className="text-xs text-[#303E3F]">Admin: admin / admin123</p>
          </div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
      </div>
    );
  }

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: Settings },
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent transition-all duration-200"
    { id: 'heroSection', name: 'Hero Section', icon: Image },
    { id: 'aboutSection', name: 'About Section', icon: User },
    { id: 'programs', name: 'Programs', icon: Calendar },
    { id: 'news', name: 'News & Events', icon: MessageSquare },
    { id: 'testimonials', name: 'Testimonials', icon: MessageSquare },
    { id: 'gallery', name: 'Gallery', icon: Camera },
                <label className="block text-sm font-semibold text-gray-700 mb-2">
    ...(currentUser?.role === 'superadmin' ? [{ id: 'userManagement', name: 'User Management', icon: Users }] : [])
  ];
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent transition-all duration-200"
                    placeholder="Enter password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
        </div>

        <nav className="p-4">
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#F68949] text-white'
                    : 'text-[#303E3F] hover:bg-gray-100'
                className="w-full bg-gradient-to-r from-[#F68949] to-[#946F5C] text-white py-3 px-4 rounded-lg font-semibold hover:from-[#946F5C] hover:to-[#F68949] focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
              >
                <Icon className="h-5 w-5" />
                <span>{item.name}</span>
              </button>
            );
            
            <div className="mt-6 text-center text-sm text-gray-500">
              <p>Demo Credentials:</p>
              <p><strong>Super Admin:</strong> superadmin / super123</p>
              <p><strong>Admin:</strong> admin / admin123</p>
            </div>
          })}
        </nav>

        {/* User Info & Logout */}
        <div className="absolute bottom-0 left-0 right-0 w-64 p-4 border-t bg-white">
          <div className="bg-gray-50 p-3 rounded-lg mb-3">
            <div className="flex items-center space-x-2 mb-1">
              {currentUser?.role === 'superadmin' ? (
                <Shield className="h-4 w-4 text-yellow-600" />
              ) : (
                <User className="h-4 w-4 text-blue-600" />
              )}
              <span className="font-medium text-sm">{currentUser?.fullName}</span>
            </div>
            <p className={`text-xs ${currentUser?.role === 'superadmin' ? 'text-yellow-600' : 'text-blue-600'}`}>
              {currentUser?.role === 'superadmin' ? 'Super Admin' : 'Admin'}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-[#00393C] capitalize">
                {activeSection.replace(/([A-Z])/g, ' $1').trim()}
              </h2>
              <p className="text-[#303E3F]">Manage your website content</p>
            </div>
            <button
              onClick={() => {
                localStorage.setItem('roohAdminData', JSON.stringify(adminData));
                alert('Changes saved successfully!');
              }}
              className="bg-[#00393C] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#303E3F] transition-colors flex items-center space-x-2"
            >
              <Save className="h-4 w-4" />
              <span>Save Changes</span>
            </button>
          </div>

          {/* Content Sections */}
          {activeSection === 'dashboard' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-[#00393C] mb-2">Total Users</h3>
                <p className="text-3xl font-bold text-[#F68949]">{users.length}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-[#00393C] mb-2">News Articles</h3>
                <p className="text-3xl font-bold text-[#F68949]">{adminData.news.length}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-[#00393C] mb-2">Testimonials</h3>
                <p className="text-3xl font-bold text-[#F68949]">{adminData.testimonials.length}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-[#00393C] mb-2">Gallery Images</h3>
                <p className="text-3xl font-bold text-[#F68949]">{adminData.gallery.length}</p>
              </div>
            </div>
          )}

          {activeSection === 'siteInfo' && (
            <div className="bg-white p-6 rounded-lg shadow space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">School Name</label>
                <input
                  type="text"
                  value={adminData.siteInfo.schoolName}
                  onChange={(e) => updateAdminData('siteInfo', 'schoolName', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">Phone</label>
                <input
                  type="text"
                  value={adminData.siteInfo.phone}
                  onChange={(e) => updateAdminData('siteInfo', 'phone', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">Email</label>
                <input
                  type="email"
                  value={adminData.siteInfo.email}
                  onChange={(e) => updateAdminData('siteInfo', 'email', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">Address</label>
                <textarea
                  value={adminData.siteInfo.address}
                  onChange={(e) => updateAdminData('siteInfo', 'address', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                  rows={3}
                />
              </div>
            </div>
          )}

          {activeSection === 'heroSection' && (
            <div className="bg-white p-6 rounded-lg shadow space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">Hero Title</label>
                <input
                  type="text"
                  value={adminData.heroSection.title}
                  onChange={(e) => updateAdminData('heroSection', 'title', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">Description</label>
                <textarea
                  value={adminData.heroSection.description}
                  onChange={(e) => updateAdminData('heroSection', 'description', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                  rows={4}
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#303E3F] mb-2">Students</label>
                  <input
                    type="text"
                    value={adminData.heroSection.stats.students}
                    onChange={(e) => updateNestedData('heroSection', 'stats', 'students', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#303E3F] mb-2">Teachers</label>
                  <input
                    type="text"
                    value={adminData.heroSection.stats.teachers}
                    onChange={(e) => updateNestedData('heroSection', 'stats', 'teachers', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#303E3F] mb-2">Years</label>
                  <input
                    type="text"
                    value={adminData.heroSection.stats.years}
                    onChange={(e) => updateNestedData('heroSection', 'stats', 'years', e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                  />
                </div>
              </div>
            </div>
          )}

          {activeSection === 'aboutSection' && (
            <div className="bg-white p-6 rounded-lg shadow space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">Vision</label>
                <textarea
                  value={adminData.aboutSection.vision}
                  onChange={(e) => updateAdminData('aboutSection', 'vision', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">Mission</label>
                <textarea
                  value={adminData.aboutSection.mission}
                  onChange={(e) => updateAdminData('aboutSection', 'mission', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">Principal Name</label>
                <input
                  type="text"
                  value={adminData.aboutSection.principalName}
                  onChange={(e) => updateAdminData('aboutSection', 'principalName', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                />
              </div>
            </div>
          )}

          {activeSection === 'testimonials' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-[#00393C]">Testimonials</h3>
                <button
                  onClick={addTestimonial}
                  className="bg-[#F68949] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#946F5C] transition-colors flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Testimonial</span>
                </button>
              </div>

              <div className="grid gap-6">
                {adminData.testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-[#303E3F] mb-2">Parent Name</label>
                        <input
                          type="text"
                          value={testimonial.name}
                          onChange={(e) => updateTestimonial(testimonial.id, 'name', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#303E3F] mb-2">Role</label>
                        <input
                          type="text"
                          value={testimonial.role}
                          onChange={(e) => updateTestimonial(testimonial.id, 'role', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-[#303E3F] mb-2">Student Name</label>
                        <input
                          type="text"
                          value={testimonial.studentName}
                          onChange={(e) => updateTestimonial(testimonial.id, 'studentName', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#303E3F] mb-2">Rating</label>
                        <select
                          value={testimonial.rating}
                          onChange={(e) => updateTestimonial(testimonial.id, 'rating', parseInt(e.target.value))}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                        >
                          {[1, 2, 3, 4, 5].map(rating => (
                            <option key={rating} value={rating}>{rating} Star{rating > 1 ? 's' : ''}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-[#303E3F] mb-2">Testimonial Content</label>
                      <textarea
                        value={testimonial.content}
                        onChange={(e) => updateTestimonial(testimonial.id, 'content', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                        rows={3}
                      />
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={() => deleteTestimonial(testimonial.id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center space-x-2"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'gallery' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-[#00393C]">Gallery</h3>
                <button
                  onClick={addGalleryItem}
                  className="bg-[#F68949] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#946F5C] transition-colors flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add Image</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {adminData.gallery.map((item) => (
                  <div key={item.id} className="bg-white p-4 rounded-lg shadow">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-[#303E3F] mb-1">Title</label>
                        <input
                          type="text"
                          value={item.title}
                          onChange={(e) => updateGalleryItem(item.id, 'title', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-[#303E3F] mb-1">Category</label>
                        <select
                          value={item.category}
                          onChange={(e) => updateGalleryItem(item.id, 'category', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                        >
                          <option value="Academics">Academics</option>
                          <option value="Facilities">Facilities</option>
                          <option value="Arts">Arts</option>
                          <option value="Sports">Sports</option>
                          <option value="Events">Events</option>
                          <option value="Technology">Technology</option>
                          <option value="Recreation">Recreation</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-[#303E3F] mb-1">Image URL</label>
                        <input
                          type="url"
                          value={item.imageUrl}
                          onChange={(e) => updateGalleryItem(item.id, 'imageUrl', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                        />
                      </div>
                      
                      <button
                        onClick={() => deleteGalleryItem(item.id)}
                        className="w-full bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center space-x-2"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'contactInfo' && (
            <div className="bg-white p-6 rounded-lg shadow space-y-6">
              <h3 className="text-xl font-semibold text-[#00393C] mb-4">Contact Information</h3>
              
              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">Phone Number</label>
                <input
                  type="text"
                  value={adminData.contactInfo.phone}
                  onChange={(e) => updateAdminData('contactInfo', 'phone', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">Email Address</label>
                <input
                  type="email"
                  value={adminData.contactInfo.email}
                  onChange={(e) => updateAdminData('contactInfo', 'email', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">Address</label>
                <textarea
                  value={adminData.contactInfo.address}
                  onChange={(e) => updateAdminData('contactInfo', 'address', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                  rows={3}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">Office Hours</label>
                <input
                  type="text"
                  value={adminData.contactInfo.officeHours}
                  onChange={(e) => updateAdminData('contactInfo', 'officeHours', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">Emergency Contact</label>
                <input
                  type="text"
                  value={adminData.contactInfo.emergencyContact}
                  onChange={(e) => updateAdminData('contactInfo', 'emergencyContact', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                />
              </div>
            </div>
          )}

          {activeSection === 'userManagement' && currentUser?.role === 'superadmin' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-[#00393C]">User Management</h3>
                <div className="text-sm text-[#303E3F]">Total Users: {users.length}</div>
              </div>

              {/* Add New User Form */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-lg font-semibold text-[#00393C] mb-4">Add New User</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-[#303E3F] mb-2">Username *</label>
                    <input
                      type="text"
                      value={newUser.username}
                      onChange={(e) => setNewUser({...newUser, username: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                      placeholder="Enter username"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#303E3F] mb-2">Password *</label>
                    <input
                      type="password"
                      value={newUser.password}
                      onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                      placeholder="Enter password"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-[#303E3F] mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={newUser.fullName}
                      onChange={(e) => setNewUser({...newUser, fullName: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                      placeholder="Enter full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#303E3F] mb-2">Email</label>
                    <input
                      type="email"
                      value={newUser.email}
                      onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                      placeholder="Enter email"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-[#303E3F] mb-2">Role</label>
                  <select
                    value={newUser.role}
                    onChange={(e) => setNewUser({...newUser, role: e.target.value as 'admin' | 'superadmin'})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                  >
                    <option value="admin">Admin</option>
                    <option value="superadmin">Super Admin</option>
                  </select>
                </div>
                
                <button
                  onClick={addUser}
                  className="bg-[#F68949] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#946F5C] transition-colors flex items-center space-x-2"
                >
                  <Plus className="h-4 w-4" />
                  <span>Add User</span>
                </button>
              </div>

              {/* Users Table */}
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {user.role === 'superadmin' ? (
                              <Shield className="h-5 w-5 text-yellow-600 mr-2" />
                            ) : (
                              <User className="h-5 w-5 text-blue-600 mr-2" />
                            )}
                            <div>
                              <div className="text-sm font-medium text-gray-900">{user.fullName}</div>
                              <div className="text-sm text-gray-500">@{user.username}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            user.role === 'superadmin' 
                              ? 'bg-yellow-100 text-yellow-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {user.role === 'superadmin' ? 'Super Admin' : 'Admin'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {user.email || 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(user.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                          <button
                            onClick={() => setEditingUser(user)}
                            className="text-[#F68949] hover:text-[#946F5C] transition-colors"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
        <div className="flex min-h-screen">
                            onClick={() => deleteUser(user.id)}
          <div className="w-72 bg-white shadow-xl border-r border-gray-200">
            <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-[#F68949] to-[#946F5C]">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">Admin Panel</h1>
                  <p className="text-white/80 text-sm">ROOH International School</p>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  {currentUser?.role === 'superadmin' ? (
                    <Shield className="h-4 w-4 text-white" />
                  ) : (
                    <User className="h-4 w-4 text-white" />
                  )}
                  <span className="text-white font-medium">{currentUser?.fullName || currentUser?.username}</span>
                </div>
                <p className="text-white/70 text-xs mt-1 capitalize">{currentUser?.role}</p>
              </div>
                        </td>
                      </tr>
            <nav className="p-4 space-y-2">
                  </tbody>
                </table>
                className={`w-full text-left p-3 rounded-xl flex items-center space-x-3 transition-all duration-200 ${
                  activeSection === 'dashboard' 
                    ? 'bg-gradient-to-r from-[#F68949] to-[#946F5C] text-white shadow-lg' 
                    : 'hover:bg-gray-50 text-gray-700 hover:text-[#F68949]'
              {/* Edit User Modal */}
              {editingUser && (
                <Home className="h-5 w-5" />
                  <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mx-4">
                    <h4 className="text-lg font-semibold text-[#00393C] mb-4">Edit User</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-[#303E3F] mb-2">Username</label>
                className={`w-full text-left p-3 rounded-xl flex items-center space-x-3 transition-all duration-200 ${
                  activeSection === 'site-info' 
                    ? 'bg-gradient-to-r from-[#F68949] to-[#946F5C] text-white shadow-lg' 
                    : 'hover:bg-gray-50 text-gray-700 hover:text-[#F68949]'
                          value={editingUser.username}
                          onChange={(e) => setEditingUser({...editingUser, username: e.target.value})}
                <Settings className="h-5 w-5" />
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#303E3F] mb-2">Full Name</label>
                        <input
                className={`w-full text-left p-3 rounded-xl flex items-center space-x-3 transition-all duration-200 ${
                  activeSection === 'testimonials' 
                    ? 'bg-gradient-to-r from-[#F68949] to-[#946F5C] text-white shadow-lg' 
                    : 'hover:bg-gray-50 text-gray-700 hover:text-[#F68949]'
                          onChange={(e) => setEditingUser({...editingUser, fullName: e.target.value})}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                <MessageSquare className="h-5 w-5" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#303E3F] mb-2">Email</label>
                        <input
                          type="email"
                className={`w-full text-left p-3 rounded-xl flex items-center space-x-3 transition-all duration-200 ${
                  activeSection === 'gallery' 
                    ? 'bg-gradient-to-r from-[#F68949] to-[#946F5C] text-white shadow-lg' 
                    : 'hover:bg-gray-50 text-gray-700 hover:text-[#F68949]'
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949]"
                        />
                <Image className="h-5 w-5" />
                      <div>
                        <label className="block text-sm font-medium text-[#303E3F] mb-2">Role</label>
                        <select
                          value={editingUser.role}
                          onChange={(e) => setEditingUser({...editingUser, role: e.target.value as 'admin' | 'superadmin'})}
                className={`w-full text-left p-3 rounded-xl flex items-center space-x-3 transition-all duration-200 ${
                  activeSection === 'contact-info' 
                    ? 'bg-gradient-to-r from-[#F68949] to-[#946F5C] text-white shadow-lg' 
                    : 'hover:bg-gray-50 text-gray-700 hover:text-[#F68949]'
                          <option value="admin">Admin</option>
                          <option value="superadmin">Super Admin</option>
                <Phone className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="flex justify-end space-x-4 mt-6">
                      <button
                        onClick={() => setEditingUser(null)}
                        className="px-4 py-2 text-[#303E3F] border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  className={`w-full text-left p-3 rounded-xl flex items-center space-x-3 transition-all duration-200 ${
                    activeSection === 'user-management' 
                      ? 'bg-gradient-to-r from-[#F68949] to-[#946F5C] text-white shadow-lg' 
                      : 'hover:bg-gray-50 text-gray-700 hover:text-[#F68949]'
                      </button>
                      <button
                  <Users className="h-5 w-5" />
                        className="px-4 py-2 bg-[#F68949] text-white rounded-lg hover:bg-[#946F5C] transition-colors"
                      >
                        Update
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <button
                  onClick={() => {
                    exportData();
                    alert('Data exported successfully!');
                  }}
                  className="w-full text-left p-3 rounded-xl flex items-center space-x-3 text-gray-700 hover:bg-gray-50 hover:text-[#F68949] transition-all duration-200"
                >
                  <Download className="h-5 w-5" />
                  <span>Export Data</span>
                </button>
                
                <button
                  onClick={() => {
                    if (confirm('Are you sure you want to logout?')) {
                      setIsLoggedIn(false);
                      setCurrentUser(null);
                      setActiveSection('dashboard');
                    }
                  }}
                  className="w-full text-left p-3 rounded-xl flex items-center space-x-3 text-red-600 hover:bg-red-50 transition-all duration-200 mt-2"
                >
                  <RefreshCw className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </div>
                      </button>
                    </div>
                  </div>
                </div>
          <div className="flex-1 bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 capitalize">
                    {activeSection.replace('-', ' ')}
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    {activeSection === 'dashboard' && 'Overview of your website'}
                    {activeSection === 'site-info' && 'Manage basic site information'}
                    {activeSection === 'testimonials' && 'Manage parent testimonials'}
                    {activeSection === 'gallery' && 'Manage image gallery'}
                    {activeSection === 'contact-info' && 'Update contact information'}
                    {activeSection === 'user-management' && 'Manage admin users'}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => {
                      saveData();
                      alert('Data saved successfully!');
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="bg-gradient-to-r from-[#F68949] to-[#946F5C] p-3 rounded-xl">
            <Phone className="h-6 w-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">Contact Information</h3>
            <p className="text-gray-600 text-sm">Update school contact details</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Users className="h-6 w-6 text-white" />
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Phone className="inline h-4 w-4 mr-2 text-[#F68949]" />
                </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200">
          <div className="flex items-center justify-between">
              value={adminData?.siteInfo?.phone || ''}
              <h3 className="text-sm font-medium text-gray-600 mb-1">Testimonials</h3>
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent transition-all duration-200"
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 rounded-xl">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
          </div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Mail className="inline h-4 w-4 mr-2 text-[#F68949]" />
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-1">Gallery Images</h3>
              value={adminData?.siteInfo?.email || ''}
            </div>
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent transition-all duration-200"
              <Image className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-1">News Articles</h3>
              <p className="text-3xl font-bold text-blue-600">{adminData.news?.length || 0}</p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-xl">
              <FileText className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <button
            onClick={() => setActiveSection('testimonials')}
            className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl border border-green-200 hover:from-green-100 hover:to-green-200 transition-all duration-200 text-left"
          >
            <MessageSquare className="h-8 w-8 text-green-600 mb-2" />
        <div className="mt-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <MapPin className="inline h-4 w-4 mr-2 text-[#F68949]" />
          
          <button
            onClick={() => setActiveSection('gallery')}
            value={adminData?.siteInfo?.address || ''}
          >
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent transition-all duration-200"
            <h4 className="font-semibold text-gray-800">Upload Image</h4>
            <p className="text-sm text-gray-600">Add new gallery image</p>
          </button>
          
          <button
        <div className="mt-6 bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
            <Clock className="h-5 w-5 mr-2 text-[#F68949]" />
            <Phone className="h-8 w-8 text-blue-600 mb-2" />
            <h4 className="font-semibold text-gray-800">Update Contact</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-3 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-800">Sunday - Thursday</p>
              <p className="text-gray-600">8:00 AM - 4:00 PM</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-800">Friday</p>
              <p className="text-gray-600">8:00 AM - 12:00 PM</p>
            </div>
            <div className="bg-white p-3 rounded-lg border border-gray-200">
              <p className="font-medium text-gray-800">Saturday</p>
              <p className="text-gray-600">8:00 AM - 2:00 PM</p>
            </div>
      
      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <div className="mt-6 bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
          <h4 className="font-semibold text-red-800 mb-2 flex items-center">
            <Bell className="h-5 w-5 mr-2" />
            Emergency Contact
          </h4>
          <p className="text-red-700">For urgent matters outside office hours: +880 1896-061646</p>
            <span className="text-gray-600">Last Login</span>
            <span className="font-medium text-gray-800">{new Date().toLocaleString()}</span>
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => {
              saveData();
              alert('Contact information saved successfully!');
            }}
            className="bg-gradient-to-r from-[#F68949] to-[#946F5C] text-white px-6 py-3 rounded-lg hover:from-[#946F5C] hover:to-[#F68949] flex items-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Save className="h-4 w-4" />
            <span>Save Contact Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;