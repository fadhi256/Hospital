// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn, FaClock } from 'react-icons/fa';
import logo from '../assets/FadhiHosipital.png'; // Assuming you have a logo

const Footer = () => {
  const branches = [
    {
      name: "Main Branch - Kampala",
      address: "123 Health Street, Kampala Central Division",
      phone: "+256 707 234 444",
      hours: "Mon - Sun: 24/7 Emergency Services",
      landmark: "Near City Square"
    },
    {
      name: "Entebbe Branch",
      address: "456 Airport Road, Entebbe Municipality",
      phone: "+256 707 234 445",
      hours: "Mon - Fri: 8:00 AM - 8:00 PM, Sat - Sun: 9:00 AM - 6:00 PM",
      landmark: "Opposite Entebbe Airport"
    },
    {
      name: "Jinja Branch",
      address: "789 Nile Avenue, Jinja City",
      phone: "+256 707 234 446",
      hours: "Mon - Fri: 8:00 AM - 7:00 PM, Sat: 9:00 AM - 5:00 PM",
      landmark: "Near Source of the Nile"
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="section-container pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* 1. Hospital Info & Logo */}
          <div className="lg:col-span-2">
            {logo ? (
              <img 
                src={logo} 
                alt="Hudson Medical Center" 
                className="h-10 w-auto mb-4"
                // If your logo is dark, you might need a light version for the footer
                // Or add a style like: style={{ filter: 'brightness(0) invert(1)' }}
              />
            ) : (
              <h2 className="text-2xl font-bold text-white mb-4">Hudson Medical Center</h2>
            )}
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Providing compassionate, patient-centered healthcare to our community for over 15 years. 
              With three convenient locations across Uganda, we're committed to making quality healthcare accessible to all.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <FaPhoneAlt className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                <a href="tel:+256707234444" className="hover:text-emerald-500 transition-colors text-lg">+256 707 234 444</a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@hudsonmedical.org" className="hover:text-emerald-500 transition-colors text-lg">info@hudsonmedical.org</a>
              </div>
            </div>
          </div>

          {/* 2. Hospital Branches */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-semibold text-white mb-6">Our Hospital Branches</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {branches.map((branch, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-300">
                  <h4 className="text-lg font-semibold text-white mb-3">{branch.name}</h4>
                  
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <FaMapMarkerAlt className="w-4 h-4 text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-300">{branch.address}</p>
                        <p className="text-xs text-emerald-400 mt-1">{branch.landmark}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <FaPhoneAlt className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                      <a href={`tel:${branch.phone}`} className="text-sm hover:text-emerald-500 transition-colors">
                        {branch.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-start">
                      <FaClock className="w-4 h-4 text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                      <p className="text-xs text-gray-400">{branch.hours}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Second Row: Quick Links & Specialties */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700">
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-emerald-500 transition-colors text-lg">Home</Link></li>
              <li><Link to="/about" className="hover:text-emerald-500 transition-colors text-lg">About Us</Link></li>
              <li><Link to="/services" className="hover:text-emerald-500 transition-colors text-lg">Services</Link></li>
              <li><Link to="/doctors" className="hover:text-emerald-500 transition-colors text-lg">Our Doctors</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-500 transition-colors text-lg">Contact</Link></li>
            </ul>
          </div>

          {/* Our Specialties */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Our Specialties</h3>
            <ul className="space-y-3">
              <li><Link to="/services/cardiology" className="hover:text-emerald-500 transition-colors text-lg">Cardiology</Link></li>
              <li><Link to="/services/neurology" className="hover:text-emerald-500 transition-colors text-lg">Neurology</Link></li>
              <li><Link to="/services/orthopedics" className="hover:text-emerald-500 transition-colors text-lg">Orthopedics</Link></li>
              <li><Link to="/services/pediatrics" className="hover:text-emerald-500 transition-colors text-lg">Pediatrics</Link></li>
              <li><Link to="/services/emergency" className="hover:text-emerald-500 transition-colors text-lg">Emergency Care</Link></li>
            </ul>
          </div>

          {/* Emergency Info */}
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
                <a href="mailto:info@hudsonmedicalcenter.com" className="hover:text-emerald-500 transition-colors">info@hudsonmedicalcenter.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright & Socials */}
      <div className="bg-gray-800 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Hudson Medical Center. All rights reserved.
          </p>
          <div className="flex justify-center gap-5 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors transform hover:scale-110">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors transform hover:scale-110">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors transform hover:scale-110">
              <FaLinkedinIn size={18} />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-500 transition-colors transform hover:scale-110">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;