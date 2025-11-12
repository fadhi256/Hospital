// src/components/EmergencyNotice.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { FaPhoneVolume, FaTriangleExclamation } from 'react-icons/fa6';

const EmergencyNotice = () => {
  return (
    <motion.section
      variants={fadeIn('up', 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      // Highly visible, contrasting color for emergency contact
      className="bg-red-700 py-12 md:py-16 text-white" 
    >
      <div className="container mx-auto px-4 text-center">
        
        <motion.div variants={fadeIn('down', 0.5)} className="flex items-center justify-center mb-4">
            <FaTriangleExclamation className="w-8 h-8 md:w-10 md:h-10 mr-4" />
            <h2 className="text-3xl md:text-4xl font-extrabold">
                EMERGENCY NOTICE
            </h2>
        </motion.div>
        
        <p className="text-xl mb-6 opacity-90 max-w-4xl mx-auto">
          **For immediate life-threatening situations, DO NOT use the form above.** Call our dedicated Emergency Line immediately.
        </p>

        <motion.a
          href="tel:+254700999000" // Use the 'tel:' protocol for one-click calling
          variants={fadeIn('up', 0.7)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center bg-white text-red-700 px-10 py-4 rounded-full text-2xl md:text-3xl font-bold shadow-2xl transition-all"
        >
          <FaPhoneVolume className="w-6 h-6 mr-4" />
          +254 700 999 000
        </motion.a>
        
        <p className="text-sm mt-4 opacity-70">
            Emergency Department is open 24 hours a day, 7 days a week.
        </p>

      </div>
    </motion.section>
  );
};

export default EmergencyNotice;