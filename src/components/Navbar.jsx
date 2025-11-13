// src/components/Navbar.jsx

import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, Link } from 'react-router-dom';
import { fadeIn } from '../utils/motion'; 
import logo from '../assets/FadhiHosipital.png'; 
import AppointmentModal from './AppointmentModal';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Care at Fadhi" },
  { href: "/contact", label: "Reach Out" },
];

// Assuming TopBar height is h-12 (48px)
const TOP_BAR_HEIGHT_CLASS = 'top-12';
const NAVBAR_HEIGHT = 'h-20'; // 80px

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); 

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // 1. The threshold for sticking should be the TopBar height (e.g., 48px or h-12)
      // We'll stick when scrolled more than 10px past the initial load position
      setIsScrolled(window.scrollY > 10); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookAppointmentClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        variants={fadeIn('down', 0.3)}
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
        // 2. DYNAMIC 'TOP' POSITION
        className={`z-40 fixed left-0 right-0 transition-all duration-300 ${NAVBAR_HEIGHT}
          ${isScrolled 
            ? 'top-0 bg-white shadow-md border-b border-gray-200' // Sticks to the top
            : `${TOP_BAR_HEIGHT_CLASS} bg-transparent border-b border-transparent` // Sits below the TopBar
          }
        `}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
          
          {/* Left: Logo (Content remains the same) */}
          <Link to="/">
            <motion.div 
              variants={fadeIn('right', 0.5)}
              whileHover={{ scale: 1.05 }}
            >
              {logo ? (
                <img 
                  src={logo} 
                  alt="Fadhi Hospital Logo"
                  className="h-16 w-auto object-contain" 
                  loading="lazy" 
                  decoding="async" 
                  style={{ filter: isScrolled ? 'none' : 'brightness(0) invert(1)' }}
                />
              ) : (
                <span className={`text-3xl font-extrabold 
                  ${isScrolled ? 'text-gray-900' : 'text-white'}`
                }>
                  Fadhi Hospital
                </span>
              )}
            </motion.div>
          </Link>

          {/* Center: Desktop Navigation Links (Content remains the same) */}
          <motion.div 
            variants={fadeIn('down', 0.5)}
            className="hidden md:flex items-center gap-10"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.href}
                className={({ isActive }) =>
                  `text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full 
                  after:bg-emerald-600 after:transition-all hover:text-emerald-600
                  ${isScrolled ? 'text-gray-700' : 'text-white'} 
                  ${isActive ? 'active after:w-full' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </motion.div>

          {/* Right: CTA & Mobile Menu Button (Content remains the same) */}
          <div className="flex items-center gap-4">
            <motion.div variants={fadeIn('left', 0.5)} className="hidden md:block">
              <button onClick={handleBookAppointmentClick}>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-emerald-600 text-white px-8 py-3 rounded-full hover:bg-emerald-700 text-base font-semibold transition-all shadow-md hover:shadow-lg"
                >
                  Book Appointment
                </motion.button>
              </button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button 
              variants={fadeIn('left', 0.4)}
              className="md:hidden w-auto p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <HiX className={`h-7 w-7 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
              ) : (
                <HiMenu className={`h-7 w-7 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
              )}
            </motion.button>
          </div>

        </div>
      </motion.nav>

      {/* 5. MOBILE MENU: Update the top position */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            // 3. CALCULATE NEW TOP POSITION: TopBar (h-12) + Navbar (h-20) = total 32 units
            // We use 'top-32' (h-12 + h-20) to ensure the mobile menu starts below both sticky headers
            className={`md:hidden bg-white shadow-lg fixed top-32 left-0 w-full z-30`} 
          >
            <div className="container mx-auto px-4 py-3 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block text-base font-medium py-2 px-4 rounded-lg 
                    text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors
                    ${isActive ? 'active bg-emerald-50' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              
              <button onClick={handleBookAppointmentClick} className="pt-2 block w-full">
                <motion.button 
                  className="w-full bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 text-sm font-medium transition-all shadow-md"
                >
                  Book Appointment
                </motion.button>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;