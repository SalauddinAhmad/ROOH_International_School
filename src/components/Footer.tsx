import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#00393C] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-[#F68949] p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">ROOH</h3>
                <p className="text-sm text-[#FFE8D2]">International School</p>
              </div>
            </div>
            <p className="text-sm text-[#FFE8D2] mb-4">
              Nurturing young minds with excellence in education, character development, 
              and holistic growth for a brighter future.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 cursor-pointer hover:text-[#F68949] transition-colors" />
              <Twitter className="h-5 w-5 cursor-pointer hover:text-[#F68949] transition-colors" />
              <Instagram className="h-5 w-5 cursor-pointer hover:text-[#F68949] transition-colors" />
              <Youtube className="h-5 w-5 cursor-pointer hover:text-[#F68949] transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-[#FFE8D2] hover:text-[#F68949] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-[#FFE8D2] hover:text-[#F68949] transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/campus-life" className="text-[#FFE8D2] hover:text-[#F68949] transition-colors">
                  Campus Life
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-[#FFE8D2] hover:text-[#F68949] transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#FFE8D2] hover:text-[#F68949] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-[#FFE8D2]">
              <li>Playgroup</li>
              <li>Nursery</li>
              <li>KG-1 & KG-2</li>
              <li>Grade 1 to 5</li>
              <li>Extracurricular Activities</li>
              <li>Summer Programs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-[#F68949] mt-1 flex-shrink-0" />
                <p className="text-[#FFE8D2] text-sm">
                  House 35, Road 05, Sector 13,<br />
                  Uttara, Dhaka-1230, Bangladesh
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-[#F68949]" />
                <p className="text-[#FFE8D2] text-sm">+880 1896-061644</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-[#F68949]" />
                <p className="text-[#FFE8D2] text-sm">info@roohschool.edu.bd</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-[#303E3F] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-[#FFE8D2] text-sm">
                Subscribe to our newsletter for latest news and updates
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-white text-[#303E3F] rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] flex-1 md:w-64"
              />
              <button className="bg-[#F68949] px-6 py-2 rounded-r-lg hover:bg-[#946F5C] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#303E3F] mt-8 pt-8 text-center">
          <p className="text-[#FFE8D2] text-sm">
            © 2024 ROOH International School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;