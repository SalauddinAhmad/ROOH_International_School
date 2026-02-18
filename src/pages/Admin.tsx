import React, { useState, useEffect } from 'react';
import { Settings, Users, FileText, Image, Phone, Shield, User, Save, Download, LogOut, Eye, EyeOff, Star, Plus, Edit, Trash2, Mail, MapPin, Clock, BookOpen } from 'lucide-react';
import { useAdmin } from '../contexts/AdminContext';

interface AdminUser {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'superadmin';
  lastLogin: string;
}

const Admin = () => {
  const { adminData, updateSiteInfo, updateHeroSection, updateAboutSection, saveData, exportData } = useAdmin();
  
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // UI state
  const [activeSection, setActiveSection] = useState('dashboard');
  const [saveStatus, setSaveStatus] = useState('');

  // Demo users
  const demoUsers: AdminUser[] = [
    {
      id: '1',
      username: 'superadmin',
      email: 'superadmin@roohschool.edu.bd',
      role: 'superadmin',
      lastLogin: '2024-01-15 10:30 AM'
    },
    {
      id: '2',
      username: 'admin',
      email: 'admin@roohschool.edu.bd',
      role: 'admin',
      lastLogin: '2024-01-14 2:15 PM'
    }
  ];

  // Check authentication on mount
  useEffect(() => {
    const savedAuth = localStorage.getItem('adminAuth');
    if (savedAuth) {
      try {
        const authData = JSON.parse(savedAuth);
        setIsAuthenticated(true);
        setCurrentUser(authData);
      } catch (error) {
        console.error('Error parsing auth data:', error);
        localStorage.removeItem('adminAuth');
      }
    }
  }, []);

  // Login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    const user = demoUsers.find(u => u.username === loginForm.username);
    
    if (!user) {
      setLoginError('Invalid username or password');
      return;
    }

    // Demo password validation
    const validPasswords: { [key: string]: string } = {
      'superadmin': 'super123',
      'admin': 'admin123'
    };

    if (validPasswords[user.username] !== loginForm.password) {
      setLoginError('Invalid username or password');
      return;
    }

    // Update last login
    user.lastLogin = new Date().toLocaleString();
    
    setIsAuthenticated(true);
    setCurrentUser(user);
    localStorage.setItem('adminAuth', JSON.stringify(user));
    setLoginForm({ username: '', password: '' });
  };

  // Logout handler
  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem('adminAuth');
    setActiveSection('dashboard');
  };

  // Save handler with notification
  const handleSave = () => {
    saveData();
    setSaveStatus('saved');
    setTimeout(() => setSaveStatus(''), 2000);
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#FFE8D2] to-[#F68949] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="bg-[#F68949] p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-[#00393C] mb-2">Admin Login</h1>
            <p className="text-[#303E3F]">ROOH International School</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#303E3F] mb-2">
                Username
              </label>
              <input
                type="text"
                required
                value={loginForm.username}
                onChange={(e) => setLoginForm({...loginForm, username: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#303E3F] mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#303E3F] hover:text-[#F68949]"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-sm">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#F68949] text-white py-3 rounded-lg font-medium hover:bg-[#946F5C] transition-colors"
            >
              Login
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-8 p-4 bg-[#FFE8D2] rounded-lg">
            <h3 className="font-semibold text-[#00393C] mb-2">Demo Credentials:</h3>
            <div className="text-sm text-[#303E3F] space-y-1">
              <p><strong>Super Admin:</strong> superadmin / super123</p>
              <p><strong>Admin:</strong> admin / admin123</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Admin Panel
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#F68949] to-[#946F5C] p-6 text-white">
          <div className="flex items-center space-x-3 mb-4">
            {currentUser?.role === 'superadmin' ? (
              <Shield className="h-8 w-8" />
            ) : (
              <User className="h-8 w-8" />
            )}
            <div>
              <h2 className="font-bold">{currentUser?.username}</h2>
              <p className="text-sm opacity-90 capitalize">{currentUser?.role}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          <button
            onClick={() => setActiveSection('dashboard')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeSection === 'dashboard' 
                ? 'bg-[#F68949] text-white' 
                : 'text-[#303E3F] hover:bg-[#FFE8D2]'
            }`}
          >
            <Settings className="h-5 w-5" />
            <span>Dashboard</span>
          </button>

          <button
            onClick={() => setActiveSection('siteInfo')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeSection === 'siteInfo' 
                ? 'bg-[#F68949] text-white' 
                : 'text-[#303E3F] hover:bg-[#FFE8D2]'
            }`}
          >
            <Settings className="h-5 w-5" />
            <span>Site Information</span>
          </button>

          <button
            onClick={() => setActiveSection('heroSection')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeSection === 'heroSection' 
                ? 'bg-[#F68949] text-white' 
                : 'text-[#303E3F] hover:bg-[#FFE8D2]'
            }`}
          >
            <FileText className="h-5 w-5" />
            <span>Hero Section</span>
          </button>

          <button
            onClick={() => setActiveSection('aboutSection')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeSection === 'aboutSection' 
                ? 'bg-[#F68949] text-white' 
                : 'text-[#303E3F] hover:bg-[#FFE8D2]'
            }`}
          >
            <Users className="h-5 w-5" />
            <span>About Section</span>
          </button>

          <button
            onClick={() => setActiveSection('contactInfo')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeSection === 'contactInfo' 
                ? 'bg-[#F68949] text-white' 
                : 'text-[#303E3F] hover:bg-[#FFE8D2]'
            }`}
          >
            <Phone className="h-5 w-5" />
            <span>Contact Info</span>
          </button>
        </nav>

        {/* Quick Actions */}
        <div className="p-4 border-t">
          <button
            onClick={exportData}
            className="w-full flex items-center space-x-3 px-4 py-2 text-[#303E3F] hover:bg-[#FFE8D2] rounded-lg transition-colors mb-2"
          >
            <Download className="h-4 w-4" />
            <span>Export Data</span>
          </button>
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#00393C]">
              {activeSection === 'dashboard' && 'Dashboard'}
              {activeSection === 'siteInfo' && 'Site Information'}
              {activeSection === 'heroSection' && 'Hero Section'}
              {activeSection === 'aboutSection' && 'About Section'}
              {activeSection === 'contactInfo' && 'Contact Information'}
            </h1>
            <p className="text-[#303E3F] mt-1">
              {activeSection === 'dashboard' && 'Overview of your website management'}
              {activeSection === 'siteInfo' && 'Manage basic school information'}
              {activeSection === 'heroSection' && 'Edit homepage hero section content'}
              {activeSection === 'aboutSection' && 'Update about page content'}
              {activeSection === 'contactInfo' && 'Manage contact details and information'}
            </p>
          </div>
          
          {activeSection !== 'dashboard' && (
            <button
              onClick={handleSave}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                saveStatus === 'saved' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-[#F68949] text-white hover:bg-[#946F5C]'
              }`}
            >
              <Save className="h-5 w-5" />
              <span>{saveStatus === 'saved' ? 'Saved!' : 'Save Changes'}</span>
            </button>
          )}
        </div>

        {/* Content Sections */}
        {activeSection === 'dashboard' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-r from-[#F68949] to-[#946F5C] text-white p-6 rounded-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Total Students</p>
                    <p className="text-2xl font-bold">{adminData?.heroSection?.stats?.students || '650+'}</p>
                  </div>
                  <Users className="h-8 w-8 opacity-80" />
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#00393C] to-[#303E3F] text-white p-6 rounded-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Total Teachers</p>
                    <p className="text-2xl font-bold">{adminData?.heroSection?.stats?.teachers || '35+'}</p>
                  </div>
                  <User className="h-8 w-8 opacity-80" />
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#946F5C] to-[#00393C] text-white p-6 rounded-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Years of Excellence</p>
                    <p className="text-2xl font-bold">{adminData?.heroSection?.stats?.years || '11+'}</p>
                  </div>
                  <Shield className="h-8 w-8 opacity-80" />
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#FFE8D2] to-[#F68949] text-[#00393C] p-6 rounded-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Active Sections</p>
                    <p className="text-2xl font-bold">5</p>
                  </div>
                  <Settings className="h-8 w-8 opacity-80" />
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-[#00393C] mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <button
                  onClick={() => setActiveSection('siteInfo')}
                  className="p-4 bg-[#FFE8D2] rounded-lg hover:bg-[#F68949] hover:text-white transition-colors text-left"
                >
                  <Settings className="h-6 w-6 mb-2" />
                  <h3 className="font-semibold">Site Info</h3>
                  <p className="text-sm opacity-75">Update school details</p>
                </button>

                <button
                  onClick={() => setActiveSection('heroSection')}
                  className="p-4 bg-[#FFE8D2] rounded-lg hover:bg-[#F68949] hover:text-white transition-colors text-left"
                >
                  <FileText className="h-6 w-6 mb-2" />
                  <h3 className="font-semibold">Hero Section</h3>
                  <p className="text-sm opacity-75">Edit homepage content</p>
                </button>

                <button
                  onClick={() => setActiveSection('aboutSection')}
                  className="p-4 bg-[#FFE8D2] rounded-lg hover:bg-[#F68949] hover:text-white transition-colors text-left"
                >
                  <Users className="h-6 w-6 mb-2" />
                  <h3 className="font-semibold">About Section</h3>
                  <p className="text-sm opacity-75">Update about content</p>
                </button>

                <button
                  onClick={() => setActiveSection('contactInfo')}
                  className="p-4 bg-[#FFE8D2] rounded-lg hover:bg-[#F68949] hover:text-white transition-colors text-left"
                >
                  <Phone className="h-6 w-6 mb-2" />
                  <h3 className="font-semibold">Contact Info</h3>
                  <p className="text-sm opacity-75">Manage contact details</p>
                </button>
              </div>
            </div>

            {/* System Information */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-[#00393C] mb-6">System Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-[#303E3F] mb-3">Current User</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Username:</span> {currentUser?.username}</p>
                    <p><span className="font-medium">Email:</span> {currentUser?.email}</p>
                    <p><span className="font-medium">Role:</span> <span className="capitalize">{currentUser?.role}</span></p>
                    <p><span className="font-medium">Last Login:</span> {currentUser?.lastLogin}</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-[#303E3F] mb-3">Website Status</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Status:</span> <span className="text-green-600">Active</span></p>
                    <p><span className="font-medium">Last Updated:</span> {new Date().toLocaleDateString()}</p>
                    <p><span className="font-medium">Version:</span> 1.0.0</p>
                    <p><span className="font-medium">Environment:</span> Production</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'siteInfo' && (
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">
                  School Name
                </label>
                <input
                  type="text"
                  value={adminData?.siteInfo?.schoolName || ''}
                  onChange={(e) => updateSiteInfo('schoolName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                  placeholder="Enter school name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">
                  Tagline
                </label>
                <input
                  type="text"
                  value={adminData?.siteInfo?.tagline || ''}
                  onChange={(e) => updateSiteInfo('tagline', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                  placeholder="Enter school tagline"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={adminData?.siteInfo?.phone || ''}
                  onChange={(e) => updateSiteInfo('phone', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                  placeholder="Enter phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={adminData?.siteInfo?.email || ''}
                  onChange={(e) => updateSiteInfo('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                  placeholder="Enter email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">
                  Address
                </label>
                <textarea
                  value={adminData?.siteInfo?.address || ''}
                  onChange={(e) => updateSiteInfo('address', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                  placeholder="Enter school address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">
                  Established Year
                </label>
                <input
                  type="text"
                  value={adminData?.siteInfo?.establishedYear || ''}
                  onChange={(e) => updateSiteInfo('establishedYear', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                  placeholder="Enter established year"
                />
              </div>
            </div>
          </div>
        )}

        {activeSection === 'heroSection' && (
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">
                  Hero Title
                </label>
                <input
                  type="text"
                  value={adminData?.heroSection?.title || ''}
                  onChange={(e) => updateHeroSection('title', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                  placeholder="Enter hero title"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">
                  Hero Description
                </label>
                <textarea
                  value={adminData?.heroSection?.description || ''}
                  onChange={(e) => updateHeroSection('description', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                  placeholder="Enter hero description"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#303E3F] mb-2">
                    Students Count
                  </label>
                  <input
                    type="text"
                    value={adminData?.heroSection?.stats?.students || ''}
                    onChange={(e) => updateHeroSection('stats.students', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                    placeholder="e.g., 650+"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#303E3F] mb-2">
                    Teachers Count
                  </label>
                  <input
                    type="text"
                    value={adminData?.heroSection?.stats?.teachers || ''}
                    onChange={(e) => updateHeroSection('stats.teachers', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                    placeholder="e.g., 35+"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#303E3F] mb-2">
                    Years of Excellence
                  </label>
                  <input
                    type="text"
                    value={adminData?.heroSection?.stats?.years || ''}
                    onChange={(e) => updateHeroSection('stats.years', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                    placeholder="e.g., 11+"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'aboutSection' && (
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">
                  Vision Statement
                </label>
                <textarea
                  value={adminData?.aboutSection?.vision || ''}
                  onChange={(e) => updateAboutSection('vision', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                  placeholder="Enter school vision"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">
                  Mission Statement
                </label>
                <textarea
                  value={adminData?.aboutSection?.mission || ''}
                  onChange={(e) => updateAboutSection('mission', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                  placeholder="Enter school mission"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">
                  Core Values
                </label>
                <textarea
                  value={adminData?.aboutSection?.coreValues || ''}
                  onChange={(e) => updateAboutSection('coreValues', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                  placeholder="Enter core values"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#303E3F] mb-2">
                  Principal's Message
                </label>
                <textarea
                  value={adminData?.aboutSection?.principalMessage || ''}
                  onChange={(e) => updateAboutSection('principalMessage', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                  placeholder="Enter principal's message"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#303E3F] mb-2">
                    Principal's Name
                  </label>
                  <input
                    type="text"
                    value={adminData?.aboutSection?.principalName || ''}
                    onChange={(e) => updateAboutSection('principalName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                    placeholder="Enter principal's name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#303E3F] mb-2">
                    Principal's Title
                  </label>
                  <input
                    type="text"
                    value={adminData?.aboutSection?.principalTitle || ''}
                    onChange={(e) => updateAboutSection('principalTitle', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                    placeholder="Enter principal's title"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === 'contactInfo' && (
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="space-y-8">
              {/* Basic Contact Information */}
              <div>
                <h3 className="text-lg font-semibold text-[#00393C] mb-4 flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-[#F68949]" />
                  Basic Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#303E3F] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      value={adminData?.siteInfo?.phone || ''}
                      onChange={(e) => updateSiteInfo('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#303E3F] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={adminData?.siteInfo?.email || ''}
                      onChange={(e) => updateSiteInfo('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-[#303E3F] mb-2">
                    School Address
                  </label>
                  <textarea
                    value={adminData?.siteInfo?.address || ''}
                    onChange={(e) => updateSiteInfo('address', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                    placeholder="Enter complete school address"
                  />
                </div>
              </div>

              {/* Office Hours */}
              <div>
                <h3 className="text-lg font-semibold text-[#00393C] mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-[#F68949]" />
                  Office Hours
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-[#FFE8D2] p-4 rounded-lg">
                    <h4 className="font-medium text-[#00393C] mb-2">Weekdays</h4>
                    <p className="text-[#303E3F] text-sm">Sunday - Thursday</p>
                    <p className="text-[#303E3F] text-sm">8:00 AM - 4:00 PM</p>
                  </div>
                  <div className="bg-[#F68949] text-white p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Friday</h4>
                    <p className="text-sm opacity-90">8:00 AM - 12:00 PM</p>
                  </div>
                  <div className="bg-[#00393C] text-white p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Saturday</h4>
                    <p className="text-sm opacity-90">8:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div>
                <h3 className="text-lg font-semibold text-[#00393C] mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-red-500" />
                  Emergency Contact
                </h3>
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <p className="text-red-800 font-medium">Emergency Hotline: +880 1896-061646</p>
                  <p className="text-red-600 text-sm mt-1">Available 24/7 for urgent matters</p>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-lg font-semibold text-[#00393C] mb-4 flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-[#F68949]" />
                  Department Contacts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-medium text-[#00393C] mb-2">Admissions Office</h4>
                    <p className="text-[#303E3F] text-sm">admissions@roohschool.edu.bd</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-medium text-[#00393C] mb-2">Principal's Office</h4>
                    <p className="text-[#303E3F] text-sm">principal@roohschool.edu.bd</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-medium text-[#00393C] mb-2">Academic Affairs</h4>
                    <p className="text-[#303E3F] text-sm">academic@roohschool.edu.bd</p>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-medium text-[#00393C] mb-2">Finance Office</h4>
                    <p className="text-[#303E3F] text-sm">finance@roohschool.edu.bd</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;