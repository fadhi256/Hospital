// src/components/WhyChooseUs.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';
import { FaUserMd, FaLaptopMedical, FaHandHoldingHeart, FaBriefcaseMedical } from 'react-icons/fa';

// --- Our "Why Choose Us" Data ---
const featuresData = [
  {
    icon: FaUserMd,
    title: "Expert Medical Team",
    description: "Our team of highly-skilled doctors, nurses, and specialists are leaders in their fields, dedicated to providing you with the best care."
  },
  {
    icon: FaLaptopMedical,
    title: "Advanced Technology",
    description: "We invest in the latest medical technology for more accurate diagnoses and effective, minimally invasive treatments."
  },
  {
    icon: FaHandHoldingHeart,
    title: "Patient-Centered Care",
    description: "Your health and comfort are our top priority. We treat every patient with compassion, dignity, and respect."
  },
  {
    icon: FaBriefcaseMedical,
    title: "Comprehensive Services",
    description: "From 24/7 emergency care to specialized treatments and rehabilitation, we offer a complete healthcare journey under one roof."
  },
];
// ------------------------------

const WhyChooseUs = () => {
  return (
    <motion.section
      variants={staggerContainer(0.3, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      // We use 'bg-white' here to contrast with the gray 'Services' section
      className="section-container bg-white" 
    >
      {/* Section Header */}
      <motion.div 
        variants={fadeIn('down', 0.5)}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Why Choose <span className="text-emerald-600">Hudson Medical Center?</span>
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Your health is our mission. We are committed to providing exceptional, 
          compassionate care every single day.
        </p>
      </motion.div>
      
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {featuresData.map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', 0.5, 0.2 * index)} // Staggered fade in
            className="flex items-start gap-5 p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-100 transform hover:shadow-lg transition-all duration-300"
          >
            {/* Icon */}
            <div className="flex-shrink-0 bg-emerald-100 text-emerald-600 p-4 rounded-full">
              <feature.icon className="w-8 h-8" />
            </div>
            
            {/* Text Content */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export { WhyChooseUs };