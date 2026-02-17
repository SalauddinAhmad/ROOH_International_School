import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  User,
  MessageCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('sending');
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "School Address",
      details: ["Campus 01 - House 35, Road 05, Sector 13, Uttara, Dhaka." , "Campus 02 - House 11, Road 05, Sector 12, Uttara, Dhaka 1230."],
      action: "Get Directions"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Numbers",
      details: ["+880 1896-061644", "+880 1896-061644", "Emergency: +880 1896-061644"],
      action: "Call Now"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Addresses",
      details: ["info@roohschool.edu.bd", "admissions@roohschool.edu.bd", "principal@roohschool.edu.bd"],
      action: "Send Email"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Office Hours",
      details: ["Monday - Thursday: 8:00 AM - 4:00 PM", "Friday: 8:00 AM - 12:00 PM", "Saturday: 8:00 AM - 2:00 PM"],
      action: "View Calendar"
    }
  ];

  const departments = [
    { name: "General Inquiry", email: "info@roohschool.edu.bd" },
    { name: "Admissions", email: "admissions@roohschool.edu.bd" },
    { name: "Principal's Office", email: "principal@roohschool.edu.bd" },
    { name: "Academic Affairs", email: "academic@roohschool.edu.bd" },
    { name: "Student Affairs", email: "students@roohschool.edu.bd" },
    { name: "Finance Office", email: "finance@roohschool.edu.bd" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FFE8D2] to-[#F68949] py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00393C] mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-[#303E3F] max-w-3xl mx-auto">
            Get in touch with ROOH International School. We're here to answer your questions 
            and provide information about our programs and admission process.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#00393C] mb-4">
              Get In Touch
            </h2>
            <p className="text-[#303E3F] text-lg">
              Multiple ways to reach us for all your inquiries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-[#FFE8D2] rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-[#F68949] mb-4">{info.icon}</div>
                <h3 className="text-lg font-bold text-[#00393C] mb-4">{info.title}</h3>
                <div className="space-y-2 mb-4">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-[#303E3F] text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
                <button className="text-[#F68949] font-medium hover:text-[#946F5C] transition-colors text-sm">
                  {info.action} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-[#FFE8D2]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#00393C] mb-4">
                  Send Us a Message
                </h2>
                <p className="text-[#303E3F]">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#303E3F] mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#303E3F] h-5 w-5" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#303E3F] mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#303E3F] h-5 w-5" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#303E3F] mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#303E3F] h-5 w-5" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#303E3F] mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="admission">Admission Information</option>
                    <option value="academic">Academic Programs</option>
                    <option value="tour">Campus Tour Request</option>
                    <option value="complaint">Complaint/Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#303E3F] mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent"
                    placeholder="Brief subject of your message"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#303E3F] mb-2">
                    Message *
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 text-[#303E3F] h-5 w-5" />
                    <textarea
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F68949] focus:border-transparent resize-none"
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitStatus === 'sending'}
                  className="w-full bg-[#F68949] text-white py-4 rounded-lg font-medium hover:bg-[#946F5C] transition-colors duration-300 flex items-center justify-center disabled:opacity-50"
                >
                  {submitStatus === 'sending' ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </div>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    Thank you for your message! We'll get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    Sorry, there was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Interactive Google Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.5441234567!2d90.3742!3d23.8759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDUyJzMzLjIiTiA5MMKwMjInMjcuMSJF!5e0!3m2!1sen!2sbd!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0, filter: 'hue-rotate(20deg) saturate(0.8)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ROOH International School Location"
                ></iframe>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="h-5 w-5 text-[#F68949] mr-2" />
                    <h3 className="text-lg font-bold text-[#00393C]">Visit Our Campus</h3>
                  </div>
                  <p className="text-[#303E3F] mb-4 font-medium">
                    House 35, Road 05, Sector 13, Uttara, Dhaka
                  </p>
                  <h4 className="text-md font-semibold text-[#00393C] mb-3">How to Reach Us:</h4>
                  <ul className="space-y-2 text-[#303E3F] text-sm">
                    <li>• 5 minutes walk from Uttara Metro Station</li>
                    <li>• Bus routes: 15, 25, 35 stop nearby</li>
                    <li>• Ample parking available on campus</li>
                    <li>• Main entrance on Education Street</li>
                  </ul>
                </div>
              </div>

              {/* Department Contact List */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-[#00393C] mb-6">Direct Contact by Department</h3>
                <div className="space-y-3">
                  {departments.map((dept, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-[#FFE8D2] rounded-lg hover:bg-[#F68949] hover:text-white transition-colors duration-200 group">
                      <span className="font-medium">{dept.name}</span>
                      <a 
                        href={`mailto:${dept.email}`}
                        className="text-[#F68949] group-hover:text-white font-medium text-sm"
                      >
                        {dept.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media and Quick Contact */}
      <section className="py-16 bg-[#00393C] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Connect With Us</h2>
              <p className="text-[#FFE8D2] text-lg mb-8">
                Follow us on social media for daily updates, photos, and announcements 
                from the ROOH International School community.
              </p>
              
              <div className="flex space-x-6">
                <a href="#" className="bg-[#F68949] p-4 rounded-full hover:bg-[#946F5C] transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="bg-[#F68949] p-4 rounded-full hover:bg-[#946F5C] transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="bg-[#F68949] p-4 rounded-full hover:bg-[#946F5C] transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="bg-[#F68949] p-4 rounded-full hover:bg-[#946F5C] transition-colors">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[#F68949]" />
                  <span>+880 1XXX-XXXXXX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[#F68949]" />
                  <span>info@roohschool.edu.bd</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageSquare className="h-5 w-5 text-[#F68949]" />
                  <span>WhatsApp: +880 1XXX-XXXXXX</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-[#FFE8D2] text-sm">
                  <strong>Emergency Contact:</strong> For urgent matters outside office hours, 
                  call +880 1XXX-XXXXXX
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#00393C] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#303E3F] text-lg">
              Quick answers to common questions about ROOH International School
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-[#FFE8D2] rounded-2xl p-6">
              <h3 className="text-lg font-bold text-[#00393C] mb-2">
                What are your admission requirements?
              </h3>
              <p className="text-[#303E3F]">
                We accept students from age 2 (Playgroup) to Grade 5. Required documents include 
                birth certificate, previous academic records, medical certificate, and completed application form.
              </p>
            </div>

            <div className="bg-[#FFE8D2] rounded-2xl p-6">
              <h3 className="text-lg font-bold text-[#00393C] mb-2">
                What are your school hours?
              </h3>
              <p className="text-[#303E3F]">
                School hours vary by grade level. Early childhood programs (Playgroup-KG2) have flexible 
                morning and afternoon sessions. Primary grades (1-5) run from 8:00 AM to 2:00 PM.
              </p>
            </div>

            <div className="bg-[#FFE8D2] rounded-2xl p-6">
              <h3 className="text-lg font-bold text-[#00393C] mb-2">
                Do you provide transportation?
              </h3>
              <p className="text-[#303E3F]">
                Yes, we provide safe and reliable school bus services covering major areas of Dhaka. 
                Transportation fees are separate from tuition fees.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;