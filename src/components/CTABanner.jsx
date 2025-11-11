// src/components/CTABanner.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeIn } from '../utils/motion';

const CTABanner = () => {
  return (
    <motion.section
      variants={fadeIn('up', 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      // Full-width, vibrant section for high visibility
      className="bg-emerald-700 py-16 md:py-20 text-white" 
    >
      <div className="container mx-auto px-4 text-center">
        
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          Ready to Experience Our Compassionate Care?
        </h2>
        
        <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
          Take the next step towards better health with a team dedicated to your well-being and recovery.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          
          {/* Primary CTA Button: Book Appointment */}
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-emerald-700 px-10 py-4 rounded-full text-lg font-bold shadow-xl transition-all w-full sm:w-auto"
            >
              Book Your Appointment
            </motion.button>
          </Link>
          
          {/* Secondary CTA Button: Find a Doctor */}
          <Link to="/services"> 
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // Inverted style to keep it visible but secondary
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-emerald-600 transition-all w-full sm:w-auto"
            >
              View All Services
            </motion.button>
          </Link>
        </div>

      </div>
    </motion.section>
  );
};

export default CTABanner;