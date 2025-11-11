// src/components/OurStoryMission.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';

const OurStoryMission = () => {
  return (
    <motion.section
      variants={staggerContainer(0.3, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      // Use the 'section-container' class for consistent padding
      className="section-container bg-white" 
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: Our Story */}
        <motion.div
          variants={fadeIn('right', 0.5)}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Founded in 2005, Fadhi Hospital began as a small community clinic with a 
            simple mission: to provide exceptional, compassionate care to every 
            neighbor who walked through our doors.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Over the years, fueled by a commitment to excellence and the growing needs 
            of our community, we have evolved into a state-of-the-art medical center. 
            While our facilities have grown, our core values of empathy, integrity, 
            and patient-centered care remain unchanged.
          </p>
        </motion.div>

        {/* Right Column: Mission & Vision */}
        <motion.div
          variants={fadeIn('left', 0.5)}
          className="space-y-8"
        >
          {/* Mission */}
          <div className="p-6 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              "To improve the health and well-being of our community by providing 
              world-class, patient-centered healthcare with compassion and respect."
            </p>
          </div>
          
          {/* Vision */}
          <div className="p-6 bg-gray-50 border-l-4 border-gray-400 rounded-r-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Our Vision
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              "To be the most trusted and innovative healthcare partner for life, 
              setting the standard for medical excellence in the region."
            </p>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default OurStoryMission;