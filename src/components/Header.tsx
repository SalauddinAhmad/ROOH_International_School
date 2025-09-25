import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Campus Life', path: '/campus-life' },
    { name: 'News', path: '/news' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#00393C] text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Phone className="h-4 w-4 mr-1" />
              +880 1XXX-XXXXXX
            </span>
            <span>Email: info@roohschool.edu.bd</span>
          </div>
          <div className="hidden md:block">
            <span>Admissions Open for 2025 - Apply Now!</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-[#F68949] p-2 rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#00393C]">ROOH</h1>
                <p className="text-sm text-[#303E3F]">International School</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-colors duration-200 hover:text-[#F68949] ${
                    location.pathname === item.path
                      ? 'text-[#F68949]'
                      : 'text-[#303E3F]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Admission Button */}
            <div className="hidden md:block">
              <button className="bg-[#F68949] text-white px-6 py-2 rounded-full font-medium hover:bg-[#946F5C] transition-colors duration-200">
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6 text-[#303E3F]" />
              ) : (
                <Menu className="h-6 w-6 text-[#303E3F]" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <nav className="md:hidden pb-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block py-2 px-4 font-medium transition-colors duration-200 hover:text-[#F68949] ${
                    location.pathname === item.path
                      ? 'text-[#F68949]'
                      : 'text-[#303E3F]'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <button className="w-full bg-[#F68949] text-white px-6 py-2 rounded-full font-medium hover:bg-[#946F5C] transition-colors duration-200">
                  Apply Now
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;