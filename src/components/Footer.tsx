import React from 'react';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ArrowUpIcon
} from '@heroicons/react/24/outline';
import VisitorCounter from './VisitorCounter';
import WhatsAppIcon from './WhatsAppIcon'; // <-- ADDED

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    services: [
      { name: 'Architectural Design', href: '#' },
      { name: 'construction', href: '#' },
      { name: 'JD & Developments', href: '#' },
      
    ],
    company: [
      { name: 'About Us', action: () => scrollToSection('about') },
      { name: 'Our Projects', action: () => scrollToSection('projects') },
      { name: 'Publications', action: () => scrollToSection('publications') },
      { name: 'Contact', action: () => scrollToSection('contact') },
      { name: 'Careers', href: '#' }
    ],
    resources: [
      { name: 'Design Process', href: '#' },
      { name: 'Sustainability', href: '#' },
      { name: 'Awards & Recognition', href: '#' },
      { name: 'Client Testimonials', href: '#' },
      { name: 'FAQ', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'WhatsApp', href: 'https://wa.me/919999999999', icon: 'WA', isWhatsApp: true }, // <-- ADDED
    { name: 'Instagram', href: '#', icon: 'IG' },
    { name: 'LinkedIn', href: '#', icon: 'LI' },
    { name: 'Twitter', href: '#', icon: 'TW' },
    { name: 'Facebook', href: '#', icon: 'FB' },
    { name: 'YouTube', href: '#', icon: 'YT' }
  ];

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Address',
      content: '123 Design District,Banglore 400001, India'
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      content: '+91 98765 43210'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      content: 'hello@impressimagination.com'
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300 relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 hover:scale-110 shadow-lg"
      >
        <ArrowUpIcon className="w-6 h-6 text-white dark:text-black" />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="font-playfair text-2xl font-bold mb-4">
                Impress Imagination
              </h3>
              <p className="font-inter text-gray-300 dark:text-gray-400 leading-relaxed mb-6">
                Transforming visionary concepts into extraordinary architectural experiences 
                that inspire, captivate, and endure.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <IconComponent className="w-5 h-5 text-gray-400 dark:text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-inter text-sm font-medium text-gray-200 dark:text-gray-300 mb-1">
                        {info.title}
                      </p>
                      <p className="font-inter text-sm text-gray-400 dark:text-gray-500">
                        {info.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-inter text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-inter text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-inter text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  {link.action ? (
                    <button
                      onClick={link.action}
                      className="font-inter text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors duration-300 text-sm text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="font-inter text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Newsletter */}
          <div>
            <h4 className="font-inter text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-inter text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Newsletter Signup */}
            <div>
              <h5 className="font-inter text-sm font-semibold mb-3">Stay Updated</h5>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-transparent text-white placeholder-gray-400"
                />
                <button className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links, Awards & Visitor Counter */}
        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Social Links */}
            <div>
              <h5 className="font-inter text-sm font-semibold mb-4 text-center lg:text-left">
                Follow Our Journey
              </h5>
              <div className="flex justify-center lg:justify-start space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-700 dark:border-gray-600"
                  >
                    {social.isWhatsApp ? (
                      <div className="w-5 h-5">
                        <WhatsAppIcon />
                      </div>
                    ) : (
                      <span className="text-white dark:text-gray-200 text-xs font-bold">
                        {social.icon}
                      </span>
                    )}
                  </a>
                ))
                }
              </div>
            </div>

            {/* Visitor Counter */}
            <div className="flex justify-center">
              <VisitorCounter />
            </div>

            {/* Awards & Certifications */}
            <div>
              <h5 className="font-inter text-sm font-semibold mb-4 text-center lg:text-right">
                Recognized Excellence
              </h5>
              <div className="flex space-x-6 justify-center lg:justify-end items-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-600 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2 transform hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">★</span>
                  </div>
                  <p className="text-xs text-gray-400">Design Awards</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-600 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2 transform hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">♻</span>
                  </div>
                  <p className="text-xs text-gray-400">Green Building</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-600 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2 transform hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <p className="text-xs text-gray-400">ISO Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <p>&copy; 2023 Impress Imagination. All rights reserved.</p>
              <div className="flex space-x-4">
                <button className="hover:text-white dark:hover:text-white transition-colors duration-300">
                  Privacy Policy
                </button>
                <button className="hover:text-white dark:hover:text-white transition-colors duration-300">
                  Terms of Service
                </button>
                <button className="hover:text-white dark:hover:text-white transition-colors duration-300">
                  Cookie Policy
                </button>
              </div>
            </div>

            <div className="text-sm text-gray-400">
              <p>Made with ❤️ in India</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;