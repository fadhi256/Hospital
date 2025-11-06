// src/components/AboutBrief.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeIn, staggerContainer } from '../utils/motion'; // Ensure staggerContainer is imported
import Counter from './Counter'; // Import our new Counter component

const AboutBrief = () => {
  // Hospital specific data
  const hospitalName = "Fadhi Hospital"; // Using the name from your logo
  const foundingYear = 2005; // Example: Set your hospital's founding year
  const currentYear = new Date().getFullYear();
  const yearsOfOperation = currentYear - foundingYear;

  const stats = [
    { label: "Specialists", value: 75, prefix: "+" },
    { label: "Patient Satisfaction", value: 98, suffix: "%" },
    { label: "Modern Facilities", value: 15, prefix: "+" },
    { label: "Years of Operation", value: yearsOfOperation, prefix: "" },
  ];

  return (
    // We use the 'section-container' custom class from index.css for consistent padding
    <motion.section
      variants={staggerContainer(0.3, 0.2)} // Stagger children animations
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="section-container bg-white" // Use a light background for contrast
    >
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        
        {/* Left Side: About Us Brief (2/3 width on desktop) */}
        <motion.div 
          variants={fadeIn('right', 0.5)}
          className="w-full md:w-2/3 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Welcome to <span className="text-emerald-600">{hospitalName}</span>
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto md:mx-0">
            For over {yearsOfOperation} years, {hospitalName} has been dedicated to providing compassionate, 
            patient-centered care. Our commitment to excellence, advanced technology, 
            and a team of highly-skilled specialists ensures you receive the best possible treatment. 
            We are more than just a hospital; we are a community focused on health and well-being.
          </p>
          <Link to="/about">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
            >
              Learn More About Us
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Side: Animated Statistics (1/3 width on desktop) */}
        <motion.div 
          variants={fadeIn('left', 0.5)}
          className="w-full md:w-1/3 grid grid-cols-2 gap-8 mt-10 md:mt-0"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={fadeIn('up', 0.5, 0.2 * (index + 1))} // Staggered delay for each stat
              className="text-center p-4 bg-gray-50 rounded-lg shadow-sm transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-4xl font-bold text-emerald-600 mb-2">
                <Counter 
                  from={0} 
                  to={stat.value} 
                  duration={2.5} 
                  delay={0.8 + 0.2 * index} // Longer delay for visual effect
                  suffix={stat.suffix} 
                  prefix={stat.prefix} 
                />
              </h3>
              <p className="text-md text-gray-800 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.section>
  );
};

export { AboutBrief };