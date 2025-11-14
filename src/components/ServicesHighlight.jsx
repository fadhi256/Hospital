// src/components/ServicesHighlight.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';
import ServiceCard from './ServiceCard';
import { assets } from '../assets/assets.js'

// --- Updated Service Data ---
const servicesData = [
  {
    id: 1,
    title: "Emergency Care",
    description: "24/7 Critical Support",
    image: assets.EmergencyCare,
    // ⭐ CHANGE 1: Use the specific service slug for linking
    link: "/services/emergency-care" 
  },
  {
    id: 2,
    title: "Cardiology",
    description: "Expert Heart Health",
    image: assets.ExpertHealth,
    // ⭐ CHANGE 2: Use the specific service slug
    link: "/services/cardiology"
  },
  {
    id: 3,
    title: "Maternity Care",
    description: "For Mothers & Newborns",
    image: assets.Mothers,
    // ⭐ CHANGE 3: Use the specific service slug
    link: "/services/maternity-care"
  },
  {
    id: 4,
    title: "Critical Care",
    description: "Advanced Life Support",
    image: assets.CriticalSupport,
    // ⭐ CHANGE 4: Use the specific service slug
    link: "/services/critical-care"
  },
];
// ------------------------

const ServicesHighlight = () => {
  // ... (rest of the component logic remains the same)
  return (
    <motion.section
      variants={staggerContainer(0.3, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="section-container bg-gray-50" 
    >
      {/* Section Header (omitted for brevity) */}
      <motion.div variants={fadeIn('down', 0.5)} className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our Medical Services
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          We offer a wide range of specialized medical services, all under one roof, 
          delivered with compassionate care.
        </p>
      </motion.div>
      
      {/* Service Cards Grid (no change needed here, it passes 'link' to ServiceCard) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard 
            key={service.id}
            index={index}
            {...service} 
          />
        ))}
      </div>
    </motion.section>
  );
};

export { ServicesHighlight };