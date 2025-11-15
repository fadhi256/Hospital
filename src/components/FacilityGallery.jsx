// src/components/FacilityGallery.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';
import { IoCheckmarkCircleOutline } from 'react-icons/io5';

// Placeholder images for the gallery 
const galleryImages = [
  "https://images.unsplash.com/photo-1599818816827-046fa493f0b2?q=80&w=1932&auto=format&fit=crop", // Patient room
  "https://images.unsplash.com/photo-1551076800-ec529977017e?q=80&w=1964&auto=format&fit=crop", // Operating room
  "https://images.unsplash.com/photo-1559223700-d86f9175d794?q=80&w=1928&auto=format&fit=crop", // Lab equipment
  "https://images.unsplash.com/photo-1579737402801-6b07c89422a0?q=80&w=2070&auto=format&fit=crop", // MRI or scanner room
];

const stats = [
  { value: '25+', label: 'Specialized Departments' },
  { value: '150', label: 'Comfortable Patient Beds' },
  { value: '99%', label: 'Infection Control Rate' },
];

const FacilityGallery = () => {
  return (
    <motion.section
      variants={staggerContainer(0.3, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="section-container py-16 md:py-24 bg-gray-50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text and Stats */}
        <motion.div variants={fadeIn('right', 0.5)} className="order-2 lg:order-1">
          <h2 className="text-sm uppercase tracking-widest text-emerald-600 font-semibold mb-2">
            The Environment of Care
          </h2>
          <h3 className="text-4xl font-extrabold text-gray-900 mb-6">
            Modern Facilities & Advanced Technology
          </h3>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            At Hudson Medical Centre, we believe that the environment is crucial for healing. 
            Our modern campus is designed for patient comfort and safety, equipped 
            with cutting-edge diagnostic and treatment technology.
          </p>

          {/* Key Features */}
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-gray-700">
              <IoCheckmarkCircleOutline className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
              <span>State-of-the-art operating theatres.</span>
            </li>
            <li className="flex items-center text-gray-700">
              <IoCheckmarkCircleOutline className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
              <span>Advanced imaging (MRI, CT, Ultrasound).</span>
            </li>
            <li className="flex items-center text-gray-700">
              <IoCheckmarkCircleOutline className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
              <span>Comfortable private patient suites.</span>
            </li>
          </ul>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 border-t pt-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center border-l first:border-l-0 pl-4">
                <p className="text-3xl font-extrabold text-emerald-600">{stat.value}</p>
                <p className="text-sm text-gray-500 uppercase font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Image Gallery */}
        <motion.div variants={fadeIn('left', 0.5)} className="order-1 lg:order-2 grid grid-cols-2 gap-4">
          {galleryImages.map((src, index) => (
            <motion.div 
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className={`rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition duration-300 ${
                index === 0 ? 'col-span-2 h-64' : 'h-48' 
              }`}
            >
              <img 
                src={src} 
                alt={`Hudson medical centre ${index + 1}`} 
                className="w-full h-full object-cover" 
                loading="lazy" 
                decoding="async"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export default FacilityGallery;