// src/components/Navbar.jsx

import React, { useState } from 'react';
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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookAppointmentClick = (e) => {
    e.preventDefault(); // Prevent default link action
    setIsModalOpen(true); // Open the modal
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <>
      <motion.nav 
        variants={fadeIn('down', 0.3)}
        initial="hidden"
        animate="show"
        viewport={{ once: true }}

        className="bg-white z-40 border-b border-gray-200 shadow-md sticky top-0"
      >
        {/* 3. A SINGLE, UNIFIED HEADER ROW */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">

          {/* Left: Logo */}
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
                />
              ) : (
                <span className="text-3xl font-extrabold text-gray-900">
                  Fadhi Hospital
                </span>
              )}
            </motion.div>
          </Link>

          {/* Center: Desktop Navigation Links */}
          <motion.div 
            variants={fadeIn('down', 0.5)}
            className="hidden md:flex items-center gap-10"
          >
            {navLinks.map((link) => (
              // 4. USING NAVLINK: It automatically gets an 'active' class
              <NavLink
                key={link.label}
                to={link.href}
                // 'active' class is in src/index.css
                className={({ isActive }) =>
                  `text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full 
                  after:bg-emerald-600 after:transition-all text-gray-700 hover:text-emerald-600
                  ${isActive ? 'active after:w-full' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </motion.div>

          {/* Right: CTA & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <motion.div variants={fadeIn('left', 0.5)} className="hidden md:block">
              {/* 3. CHANGE LINK TO BUTTON AND ADD CLICK HANDLER */}
              <button 
                onClick={handleBookAppointmentClick}
                // Removed Link component wrapper
                >
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
                <HiX className="h-7 w-7 text-gray-700" />
              ) : (
                <HiMenu className="h-7 w-7 text-gray-700" />
              )}
            </motion.button>
          </div>

        </div>
      </motion.nav>

      {/* 5. MOBILE MENU: This is now separate and animates cleanly */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            // Full-screen overlay
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="md:hidden bg-white shadow-lg fixed top-[128px] left-0 w-full z-30" // Sits just below both bars
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
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