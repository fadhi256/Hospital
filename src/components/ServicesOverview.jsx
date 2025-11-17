// src/components/ServicesOverview.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { IoSearch } from 'react-icons/io5';

const ServicesOverview = ({ onSearchChange }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearchChange(term); 
  };

  return (
    <motion.section
      variants={fadeIn('down', 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="section-container bg-white pt-16 pb-12"
    >
      <div className="text-center max-w-4xl mx-auto">
        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Find the Right Specialty for You
        </h3>
        <p className="text-lg text-gray-600 mb-10">
          Hudson Medical Center offers a comprehensive range of medical services, from routine check-ups to advanced surgical procedures. Use the search bar below to quickly locate the department you need.
        </p>
      </div>

      {/* Search Bar */}
      <motion.div 
        variants={fadeIn('up', 0.4)}
        className="max-w-3xl mx-auto flex items-center bg-gray-100 rounded-full shadow-lg p-3"
      >
        <IoSearch className="h-6 w-6 text-gray-400 ml-4" />
        <input
          type="text"
          placeholder="Search for a specialty (e.g., Cardiology, Pediatrics, X-Ray)"
          value={searchTerm}
          onChange={handleSearch}
          className="w-full bg-transparent p-3 text-lg text-gray-800 focus:outline-none placeholder-gray-500"
        />
        <button className="bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-emerald-700 transition-colors hidden sm:block">
          Search
        </button>
      </motion.div>
    </motion.section>
  );
};

export default ServicesOverview;