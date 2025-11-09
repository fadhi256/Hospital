import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from "framer-motion";
import { Link, useLocation } from 'react-router-dom';
import { fadeIn } from '../utils/motion'; 
import logo from '../assets/FadhiHosipital.png'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav 
      variants={fadeIn('down', 0.3)} 
      initial="hidden"
      whileInView="show" 
      viewport={{ once: true }}
      className="bg-gray-900 z-40 border-b border-gray-200 shadow-lg"
    >
      
      {/* 🏥 UPPER SECTION: Logo and CTA */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-24 flex justify-between items-center">
          
          {/* Logo (Left Side) */}
          <motion.div 
            variants={fadeIn('right', 0.5)}
            className="flex items-center cursor-pointer"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              {logo ? (
                <img 
                  src={logo} 
                  alt="Fadhi Hospital Logo"
                  className="h-12 w-auto object-contain" 
                  loading="lazy" 
                  decoding="async" 
                />
              ) : (
                <Link to="/" className="text-3xl font-extrabold text-gray-900">
                  Fadhi Hospital
                </Link>
              )}
            </motion.div>
          </motion.div>

          {/* CTA Button & Mobile Menu Toggle (Right Side) */}
          <div className="flex items-center gap-4">
            
            <Link to="/contact">
              <motion.button 
                variants={fadeIn('left', 0.5)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 text-base font-semibold transition-all shadow-md hover:shadow-lg"
              >
                Book Appointment
              </motion.button>
            </Link>

            <motion.button 
              variants={fadeIn('left', 0.4)}
              className="md:hidden w-auto p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <HiX className="h-7 w-7 text-gray-700" />
              ) : (
                <HiMenu className="h-7 w-7 text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* 📑 LOWER SECTION: Navigation Links (Desktop Only) */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-center">
          
          <motion.div 
            variants={fadeIn('down', 0.5)}
            className="flex items-center gap-10"
          >
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`text-md font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full 
                  after:bg-emerald-600 after:transition-all text-gray-200 hover:text-emerald-600 
                  ${activeLink === link.href ? 'active after:w-full' : ''}`}
              >
                <motion.span
                  // Staggered animation for each link
                  variants={fadeIn('down', 0.2 * (index + 1))}
                >
                  {link.label}
                </motion.span>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 📱 Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <motion.div 
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
          className="md:hidden bg-white border-t border-gray-100 py-4 absolute w-full shadow-lg"
        >
          <motion.div 
            className="container mx-auto px-4 space-y-4"
          >
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-base font-medium py-2 px-4 rounded-lg 
                  text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors
                  ${activeLink === link.href ? 'active bg-emerald-50' : ''}`}
              >
                <motion.span
                  variants={fadeIn('right', 0.2 * (index + 1))}
                  initial="hidden"
                  animate="show"
                >
                  {link.label}
                </motion.span>
              </Link>
            ))}
            
            <Link to="/contact" className="pt-2 block">
              <motion.button 
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                animate="show"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 text-sm font-medium transition-all shadow-md"
              >
                Book Appointment
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;