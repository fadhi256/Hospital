// src/components/ServicesHighlight.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';
import ServiceCard from './ServiceCard';
import { assets } from '../assets/assets.js'

// --- Our Service Data ---
// (Using high-quality placeholder images)
const servicesData = [
  {
    id: 1,
    title: "Emergency Care",
    description: "24/7 Critical Support",
    image: assets.EmergencyCare,
    link: "/services" // We'll link all to the main services page for now
  },
  {
    id: 2,
    title: "Cardiology",
    description: "Expert Heart Health",
    image: assets.ExpertHealth,
    link: "/services"
  },
  {
    id: 3,
    title: "Maternity Care",
    description: "For Mothers & Newborns",
    image: assets.Mothers,
    link: "/services"
  },
  {
    id: 4,
    title: "Critical Care",
    description: "Advanced Life Support",
    image: assets.CriticalSupport,
    link: "/services"
  },
];
// ------------------------

const ServicesHighlight = () => {
  return (
    <motion.section
      variants={staggerContainer(0.3, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      // Use the 'section-container' class from index.css and a light gray background
      className="section-container bg-gray-50" 
    >
      {/* Section Header */}
      <motion.div 
        variants={fadeIn('down', 0.5)}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Medical Services
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We offer a wide range of specialized medical services, all under one roof, 
          delivered with compassionate care.
        </p>
      </motion.div>
      
      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard 
            key={service.id}
            index={index} // Used for staggering the animation
            {...service} 
          />
        ))}
      </div>
    </motion.section>
  );
};

export { ServicesHighlight };