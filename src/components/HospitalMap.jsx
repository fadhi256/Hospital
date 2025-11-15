// src/components/HospitalMap.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { FaMapMarkerAlt, FaDirections } from 'react-icons/fa';

// Placeholder image for the map area.
// In a real application, this would be replaced by an actual map library component.
const mapPlaceholderImage = "https://images.unsplash.com/photo-1596700877918-c2b621e264ee?q=80&w=2070&auto=format&fit=crop"; 
const hospitalAddress = "123 Health Ave, City, Country";
const mapLink = "https://www.google.com/maps/search/?api=1&query=Hudson+Medical+Center+123+Health+Ave+City"; 

const HospitalMap = () => {
  return (
    <motion.section
      variants={fadeIn('up', 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="section-container bg-gray-50 py-16 md:py-24"
    >
      <div className="text-center mb-12">
        <h3 className="text-sm uppercase tracking-widest text-emerald-600 font-semibold mb-2">
          Find Our Location
        </h3>
        <h4 className="text-4xl font-extrabold text-gray-900">
          Hospital Main Campus
        </h4>
      </div>

      <div className="relative rounded-xl overflow-hidden shadow-2xl h-96">
        {/* Map Placeholder Image */}
        <img 
          src={mapPlaceholderImage}
          alt="Map of Hudson Medical Center Location"
          className="w-full h-full object-cover grayscale opacity-70"
          loading="lazy"
          decoding="async"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center p-8">
          
          <motion.div variants={fadeIn('down', 0.5)} className="text-center">
            <FaMapMarkerAlt className="w-12 h-12 text-white mx-auto mb-3" />
            <p className="text-xl md:text-2xl font-bold text-white mb-6">
              {hospitalAddress}
            </p>
          </motion.div>
          
          <motion.a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeIn('up', 0.6)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all shadow-lg"
          >
            <FaDirections className="mr-3 w-5 h-5" />
            Get Directions
          </motion.a>
        </div>
      </div>
      
    </motion.section>
  );
};

export default HospitalMap;