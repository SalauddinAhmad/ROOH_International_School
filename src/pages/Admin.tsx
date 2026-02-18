import React, { useState, useEffect } from 'react';
import { Settings, Users, FileText, Image, Calendar, Phone, Mail, MapPin, Save, CreditCard as Edit, Plus, Trash2, Eye, EyeOff, Upload, Download, Shield, User, AlertTriangle, CheckCircle } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

type UserRole = 'superadmin' | 'admin';

interface User {
  username: string;
  password: string;
  role: UserRole;
  name: string;
}

const defaultUsers: User[] = [
  {
    username: 'superadmin',
    password: 'rooh2024super',
    role: 'superadmin',
    name: 'Super Administrator'
  },
  {
    username: 'admin',
    password: 'rooh2024',
    role: 'admin',
    name: 'Administrator'
  }
];

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const {
    adminData,
    updateSiteInfo,
    updateHeroSection,
    updateAboutSection,
    addNewsItem,
    updateNewsItem,
    deleteNewsItem,
    saveData,
    exportData
  } = useAdmin();

  // Check permissions
  const canEdit = (section: string) => {
    if (!currentUser) return false;
    if (currentUser.role === 'superadmin') return true;
    
    // Normal admin restrictions
    const restrictedSections = ['siteinfo', 'hero', 'about'];
    return !restrictedSections.includes(section);
  };

  // Authentication
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = defaultUsers.find(u => 
      u.username === loginData.username && u.password === loginData.password
    );
    
    if (user) {
      setIsAuthenticated(true);
      setCurrentUser(user);
      localStorage.setItem('adminAuth', JSON.stringify(user));
      showNotification('success', `Welcome ${user.name}!`);
    } else {
      showNotification('error', 'Invalid credentials!');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem('adminAuth');
    setActiveTab('dashboard');
    showNotification('success', 'Logged out successfully');
  };

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000);
  };

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    if (auth) {
      try {
        const user = JSON.parse(auth);
        setIsAuthenticated(true);
        setCurrentUser(user);
      } catch (error) {
        localStorage.removeItem('adminAuth');
      }
    }
  }, []);

  // Listen for auto-save events
  useEffect(() => {
    const handleAutoSave = () => {
      showNotification('success', 'Changes saved automatically!');
    };

    window.addEventListener('adminDataSaved', handleAutoSave);
    return () => window.removeEventListener('adminDataSaved', handleAutoSave);
  }, []);

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
            <p className="text-sm text-[#303E3F] mb-2">
              <strong>Demo Credentials:</strong>
            </p>
            <div className="space-y-1 text-xs">
              <p><strong>Super Admin:</strong> superadmin / rooh2024super</p>
              <p><strong>Normal Admin:</strong> admin / rooh2024</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Notification */}
      {notification && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg flex items-center space-x-2 ${
          notification.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}>
          {notification.type === 'success' ? 
            <CheckCircle className="h-5 w-5" /> : 
            <AlertTriangle className="h-5 w-5" />
          }
          <span>{notification.message}</span>
        </div>
      )}

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
              <div className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-lg">
                {currentUser?.role === 'superadmin' ? 
                  <Shield className="h-4 w-4 text-yellow-400" /> : 
                  <User className="h-4 w-4 text-blue-400" />
                }
                <span className="text-sm">{currentUser?.name}</span>
              </div>
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
                  { id: 'dashboard', label: 'Dashboard', icon: Settings, restricted: false },
                  { id: 'siteinfo', label: 'Site Information', icon: FileText, restricted: true },
                  { id: 'hero', label: 'Hero Section', icon: Image, restricted: true },
                  { id: 'about', label: 'About Section', icon: Users, restricted: true },
                  { id: 'programs', label: 'Programs', icon: FileText, restricted: false },
                  { id: 'news', label: 'News & Events', icon: Calendar, restricted: false },
                  { id: 'testimonials', label: 'Testimonials', icon: Users, restricted: false },
                  { id: 'gallery', label: 'Gallery', icon: Image, restricted: false },
                  { id: 'contact', label: 'Contact Info', icon: Phone, restricted: false }
                ].map((item) => {
                  const isRestricted = item.restricted && !canEdit(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => !isRestricted && setActiveTab(item.id)}
                      disabled={isRestricted}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === item.id
                          ? 'bg-[#F68949] text-white'
                          : isRestricted
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-[#303E3F] hover:bg-[#FFE8D2]'
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                      {isRestricted && <Shield className="h-4 w-4 ml-auto" />}
                    </button>
                  );
                })}
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
                  
                  {/* Role Info */}
                  <div className="mb-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                    <div className="flex items-center space-x-3">
                      {currentUser?.role === 'superadmin' ? 
                        <Shield className="h-6 w-6 text-yellow-500" /> : 
                        <User className="h-6 w-6 text-blue-500" />
                      }
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {currentUser?.role === 'superadmin' ? 'Super Administrator' : 'Administrator'}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {currentUser?.role === 'superadmin' 
                            ? 'Full access to all sections and settings'
                            : 'Limited access - Cannot edit Site Info, Hero, or About sections'
                          }
                        </p>
                      </div>
                    </div>
                  </div>

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
                      <h3 className="text-lg font-bold text-[#00393C] mb-4">System Info</h3>
                      <div className="space-y-2 text-sm text-[#303E3F]">
                        <p>• Auto-save enabled</p>
                        <p>• Real-time updates active</p>
                        <p>• Role-based permissions</p>
                        <p>• Data backup available</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Site Information */}
              {activeTab === 'siteinfo' && (
                <div>
                  <h2 className="text-2xl font-bold text-[#00393C] mb-6">Site Information</h2>
                  {!canEdit('siteinfo') && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                      <span className="text-red-700">You don't have permission to edit this section.</span>
                    </div>
                  )}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-[#303E3F] mb-2">School Name</label>
                      <input
                        type="text"
                        value={adminData.siteInfo.schoolName}
                        onChange={(e) => updateSiteInfo('schoolName', e.target.value)}
                        disabled={!canEdit('siteinfo')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#303E3F] mb-2">Tagline</label>
                      <input
                        type="text"
                        value={adminData.siteInfo.tagline}
                        onChange={(e) => updateSiteInfo('tagline', e.target.value)}
                        disabled={!canEdit('siteinfo')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] disabled:bg-gray-100"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#303E3F] mb-2">Phone</label>
                        <input
                          type="text"
                          value={adminData.siteInfo.phone}
                          onChange={(e) => updateSiteInfo('phone', e.target.value)}
                          disabled={!canEdit('siteinfo')}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] disabled:bg-gray-100"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#303E3F] mb-2">Email</label>
                        <input
                          type="email"
                          value={adminData.siteInfo.email}
                          onChange={(e) => updateSiteInfo('email', e.target.value)}
                          disabled={!canEdit('siteinfo')}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] disabled:bg-gray-100"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#303E3F] mb-2">Address</label>
                      <textarea
                        value={adminData.siteInfo.address}
                        onChange={(e) => updateSiteInfo('address', e.target.value)}
                        disabled={!canEdit('siteinfo')}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#303E3F] mb-2">Established Year</label>
                      <input
                        type="text"
                        value={adminData.siteInfo.establishedYear}
                        onChange={(e) => updateSiteInfo('establishedYear', e.target.value)}
                        disabled={!canEdit('siteinfo')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] disabled:bg-gray-100"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Hero Section */}
              {activeTab === 'hero' && (
                <div>
                  <h2 className="text-2xl font-bold text-[#00393C] mb-6">Hero Section</h2>
                  {!canEdit('hero') && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                      <span className="text-red-700">You don't have permission to edit this section.</span>
                    </div>
                  )}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-[#303E3F] mb-2">Main Title</label>
                      <input
                        type="text"
                        value={adminData.heroSection.title}
                        onChange={(e) => updateHeroSection('title', e.target.value)}
                        disabled={!canEdit('hero')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#303E3F] mb-2">Subtitle</label>
                      <input
                        type="text"
                        value={adminData.heroSection.subtitle}
                        onChange={(e) => updateHeroSection('subtitle', e.target.value)}
                        disabled={!canEdit('hero')}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#303E3F] mb-2">Description</label>
                      <textarea
                        value={adminData.heroSection.description}
                        onChange={(e) => updateHeroSection('description', e.target.value)}
                        disabled={!canEdit('hero')}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] disabled:bg-gray-100"
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
                            disabled={!canEdit('hero')}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] disabled:bg-gray-100"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#303E3F] mb-2">Teachers</label>
                          <input
                            type="text"
                            value={adminData.heroSection.stats.teachers}
                            onChange={(e) => updateHeroSection('stats.teachers', e.target.value)}
                            disabled={!canEdit('hero')}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] disabled:bg-gray-100"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#303E3F] mb-2">Years</label>
                          <input
                            type="text"
                            value={adminData.heroSection.stats.years}
                            onChange={(e) => updateHeroSection('stats.years', e.target.value)}
                            disabled={!canEdit('hero')}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] disabled:bg-gray-100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* About Section */}
              {activeTab === 'about' && (
                <div>
                  <h2 className="text-2xl font-bold text-[#00393C] mb-6">About Section</h2>
                  {!canEdit('about') && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-red-500" />
                      <span className="text-red-700">You don't have permission to edit this section.</span>
                    </div>
                  )}
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-[#303E3F] mb-2">Vision</label>
                      <textarea
                        value={adminData.aboutSection.vision}
                        onChange={(e) => updateAboutSection('vision', e.target.value)}
                        disabled={!canEdit('about')}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#303E3F] mb-2">Mission</label>
                      <textarea
                        value={adminData.aboutSection.mission}
                        onChange={(e) => updateAboutSection('mission', e.target.value)}
                        disabled={!canEdit('about')}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#303E3F] mb-2">Core Values</label>
                      <textarea
                        value={adminData.aboutSection.coreValues}
                        onChange={(e) => updateAboutSection('coreValues', e.target.value)}
                        disabled={!canEdit('about')}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] disabled:bg-gray-100"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#303E3F] mb-2">Principal's Message</label>
                      <textarea
                        value={adminData.aboutSection.principalMessage}
                        onChange={(e) => updateAboutSection('principalMessage', e.target.value)}
                        disabled={!canEdit('about')}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] disabled:bg-gray-100"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#303E3F] mb-2">Principal Name</label>
                        <input
                          type="text"
                          value={adminData.aboutSection.principalName}
                          onChange={(e) => updateAboutSection('principalName', e.target.value)}
                          disabled={!canEdit('about')}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] disabled:bg-gray-100"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#303E3F] mb-2">Principal Title</label>
                        <input
                          type="text"
                          value={adminData.aboutSection.principalTitle}
                          onChange={(e) => updateAboutSection('principalTitle', e.target.value)}
                          disabled={!canEdit('about')}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] disabled:bg-gray-100"
                        />
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
                  updateNewsItem(editingItem.id, editingItem);
                  setEditingItem(null);
                  showNotification('success', 'Article updated successfully!');
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