// src/components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import logo from '../assets/FadhiHosipital.png'; // Assuming you have a logo

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="section-container pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* 1. Hospital Info & Logo */}
          <div className="md:col-span-2 lg:col-span-1">
            {logo ? (
              <img 
                src={logo} 
                alt="Fadhi Hospital Logo" 
                className="h-10 w-auto mb-4"
                // If your logo is dark, you might need a light version for the footer
                // Or add a style like: style={{ filter: 'brightness(0) invert(1)' }}
              />
            ) : (
              <h2 className="text-2xl font-bold text-white mb-4">Fadhi Hospital</h2>
            )}
            <p className="text-gray-400">
              Providing compassionate, patient-centered healthcare to our community for over 15 years.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-emerald-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-emerald-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-emerald-500 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* 3. Our Specialties */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Our Specialties</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="hover:text-emerald-500 transition-colors">Cardiology</Link></li>
              <li><Link to="/services" className="hover:text-emerald-500 transition-colors">Neurology</Link></li>
              <li><Link to="/services" className="hover:text-emerald-500 transition-colors">Orthopedics</Link></li>
              <li><Link to="/services" className="hover:text-emerald-500 transition-colors">Pediatrics</Link></li>
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Get in Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-5 h-5 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                <span>123 Health St, Medical City, 12345</span>
              </li>
              <li className="flex items-start">
                <FaPhoneAlt className="w-5 h-5 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                <a href="tel:+256707234444" className="hover:text-emerald-500 transition-colors">+256 707 234 444</a>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="w-5 h-5 text-emerald-500 mt-1 mr-3 flex-shrink-0" />
                <a href="mailto:info@fadhihospital.org" className="hover:text-emerald-500 transition-colors">info@fadhihospital.org</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Socials */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Fadhi Hospital. All rights reserved.
          </p>
          <div className="flex justify-center gap-5 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors"><FaTwitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors"><FaFacebookF size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors"><FaLinkedinIn size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors"><FaYoutube size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;