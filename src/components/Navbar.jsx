import React, { useState, useEffect, useRef } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from "framer-motion";
import { Link, useLocation } from 'react-router-dom';
import { fadeIn } from '../utils/motion'; 
import logo from '../assets/FadhiHosipital.png'; 

const SCROLL_THRESHOLD = 5; // Pixels to scroll before triggering hide/show

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const prevScroll = useRef(0); // 1. Use useRef instead of state
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  // 2. This useEffect now only runs ONCE on component mount
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const direction = currentScroll > prevScroll.current ? 'down' : 'up';

      // Only trigger if scrolled more than the threshold
      if (Math.abs(currentScroll - prevScroll.current) > SCROLL_THRESHOLD) {
        if (direction === 'down' && currentScroll > 100) {
          setIsHidden(true);
        } else if (direction === 'up') {
          setIsHidden(false);
        }
      }
      
      prevScroll.current = currentScroll; // 3. Update the ref (no re-render)
    };

    window.addEventListener('scroll', handleScroll);
    
    // 4. Cleanup listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // 5. Empty dependency array - THIS IS THE KEY!

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Care At Fadhi Hospital" },
    { href: "/contact", label: "Get In Touch" },
  ];

  return (
    <motion.nav 
      variants={fadeIn('down', 0.3)} 
      initial="hidden"
      whileInView="show" 
      viewport={{ once: true }}
      // This is now the main navigation bar, sticky at the top
      className="bg-gray-900 z-40 border-b border-gray-700 shadow-lg sticky top-0 w-full"
    >
      
      {/* 🏥 UPPER SECTION: Logo and CTA */}
      {/* This section will now animate its height */}
      <div 
        className={`border-b border-gray-700 transition-all duration-300 ease-in-out overflow-hidden ${isHidden ? 'md:h-0' : 'h-24'}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-full">
          
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
                <Link to="/" className="text-3xl font-extrabold text-white">
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
              {/* 6. Fixed icon color to be visible on dark background */}
              {isMenuOpen ? (
                <HiX className="h-7 w-7 text-gray-100" />
              ) : (
                <HiMenu className="h-7 w-7 text-gray-100" />
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
                // Kept your new styles: text-md, text-gray-100
                className={`text-md font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full 
                  after:bg-emerald-600 after:transition-all text-gray-100 hover:text-emerald-600 
                  ${activeLink === link.href ? 'active after:w-full' : ''}`}
              >
                <motion.span
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
          // Switched to bg-gray-800 for better theme consistency
          className="md:hidden bg-gray-800 border-t border-gray-700 py-4 absolute w-full shadow-lg"
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
                // Adjusted mobile link colors for dark theme
                className={`block text-base font-medium py-2 px-4 rounded-lg 
                  text-gray-100 hover:bg-gray-700 hover:text-emerald-500 transition-colors
                  ${activeLink === link.href ? 'active bg-gray-700 !text-emerald-500' : ''}`}
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