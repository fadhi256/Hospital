// src/components/FeaturedServices.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';
import { Link } from 'react-router-dom';
import { allServicesData } from '../data/servicesData'; 

const featuredServices = allServicesData.filter(service => service.featured);

const FeaturedServices = ({ searchTerm }) => {
  // Logic to filter services based on the search term
  const normalizedSearchTerm = searchTerm.toLowerCase().trim();

  const filteredServices = featuredServices.filter(service => 
    service.title.toLowerCase().includes(normalizedSearchTerm) ||
    service.description.toLowerCase().includes(normalizedSearchTerm) ||
    service.keywords.some(keyword => keyword.includes(normalizedSearchTerm))
  );

  if (normalizedSearchTerm && filteredServices.length === 0) {
      return (
        <motion.section 
          initial="hidden"
          animate="show"
          variants={fadeIn('down', 0.2)}
          className="section-container bg-gray-50 py-16 text-center"
        >
          <p className="text-xl text-gray-700">
            No featured services match your search for: <span className="font-semibold text-emerald-600">"{searchTerm}"</span>.
          </p>
        </motion.section>
      );
  }

  return (
    <motion.section
      variants={staggerContainer(0.3, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="section-container bg-gray-50 py-16 md:py-24"
    >
      <motion.div variants={fadeIn('down', 0.5)} className="text-center mb-12">
        <h2 className="text-sm uppercase tracking-widest text-emerald-600 font-semibold mb-2">
          Our Primary Care
        </h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Featured Specialties
        </h3>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.id}
            variants={fadeIn('up', 0.2 * (index + 1))}
            className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.02] cursor-pointer"
          >
            {/* Icon */}
            <div className="p-4 bg-emerald-100 rounded-full text-emerald-600 mb-4">
              <service.icon className="h-10 w-10" />
            </div>
            
            {/* Title */}
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              {service.title}
            </h4>
            
            {/* Description */}
            <p className="text-gray-600 mb-4 line-clamp-3">
              {service.description}
            </p>

            {/* Link */}
            <Link to={`/services/${service.title.toLowerCase().replace(/\s/g, '-')}`} className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors mt-auto">
                Learn More &rarr;
            </Link>

          </motion.div>
        ))}
      </div>

      {/* Call to action for more services */}
      {filteredServices.length === featuredServices.length && (
          <motion.div variants={fadeIn('up', 0.8)} className="text-center mt-12">
              <Link to="#full-list" className="text-lg text-gray-700 hover:text-emerald-600 font-semibold transition-colors border-b-2 border-transparent hover:border-emerald-600">
                  View All Our 20+ Specialties
              </Link>
          </motion.div>
      )}

    </motion.section>
  );
};

export default FeaturedServices;