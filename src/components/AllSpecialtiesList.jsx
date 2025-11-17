// src/components/AllSpecialtiesList.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { Link } from 'react-router-dom';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

// Mock data (Assuming this is imported from '../data/servicesData' or defined here)
// For demonstration, let's include the full data here, but in production, keep it separate.
import { allServicesData } from '../data/servicesData'; // Assuming you created this file

// Function to categorize services
const categorizeServices = (services) => {
  const categories = {
    'Clinical Medicine': [],
    'Surgical Services': [],
    'Diagnostics & Support': [],
    'Wellness & Prevention': []
  };

  services.forEach(service => {
    // Simple logic for categorization based on title/keywords
    const title = service.title.toLowerCase();
    if (title.includes('surgery') || title.includes('ortho') || title.includes('trauma')) {
      categories['Surgical Services'].push(service);
    } else if (title.includes('lab') || title.includes('x-ray') || title.includes('imaging')) {
      categories['Diagnostics & Support'].push(service);
    } else if (title.includes('physio') || title.includes('dentistry') || title.includes('wellness')) {
      categories['Wellness & Prevention'].push(service);
    } else {
      // Default for general medicine, cardiology, pediatrics, etc.
      categories['Clinical Medicine'].push(service);
    }
  });

  return categories;
};


const AllSpecialtiesList = ({ searchTerm }) => {
  // 1. Filtering Logic
  const normalizedSearchTerm = searchTerm.toLowerCase().trim();

  const filteredData = allServicesData.filter(service => 
    service.title.toLowerCase().includes(normalizedSearchTerm) ||
    service.description.toLowerCase().includes(normalizedSearchTerm) ||
    service.keywords.some(keyword => keyword.includes(normalizedSearchTerm))
  );

  // 2. Categorization after filtering
  const categorizedServices = categorizeServices(filteredData);
  const hasResults = Object.values(categorizedServices).some(list => list.length > 0);
  
  // 3. Render Logic
  return (
    <motion.section
      variants={staggerContainer(0.3, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="full-list"
      className="section-container py-16 md:py-24 bg-white"
    >
      <motion.div variants={fadeIn('down', 0.5)} className="text-center mb-12">
        <h3 className="text-4xl font-extrabold text-gray-900">
          Complete List of Our Expertise
        </h3>
        <p className="text-lg text-gray-600 mt-2">
          Browse all departments available at Hudson Medical Center.
        </p>
      </motion.div>

      {!hasResults && (
        <motion.p 
          initial="hidden"
          animate="show"
          variants={fadeIn('down', 0.2)}
          className="text-xl text-center text-gray-700 p-8 border border-dashed rounded-lg"
        >
          No specialties match your search for: <span className="font-semibold text-emerald-600">"{searchTerm}"</span>.
        </motion.p>
      )}

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {Object.keys(categorizedServices).map((category, catIndex) => {
          const services = categorizedServices[category];
          
          if (services.length === 0) return null; // Hide empty categories after search

          return (
            <motion.div
              key={catIndex}
              variants={fadeIn('up', 0.2 * (catIndex + 1))}
              className="bg-gray-50 p-6 rounded-xl shadow-md"
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2 border-emerald-100">
                {category}
              </h4>
              <ul className="space-y-4">
                {services.map((service, svcIndex) => (
                  <li 
                    key={svcIndex} 
                    className="flex justify-between items-center text-gray-700 text-lg hover:bg-emerald-50 p-2 rounded-lg transition-colors"
                  >
                    <div className="flex items-center">
                        <IoCheckmarkCircleOutline className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                        <span>{service.title}</span>
                    </div>
                    <Link 
                      to={`/services/${service.title.toLowerCase().replace(/\s/g, '-')}`}
                      className="text-sm font-semibold text-emerald-600 hover:text-emerald-700"
                    >
                      Details &rarr;
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

    </motion.section>
  );
};

export default AllSpecialtiesList;