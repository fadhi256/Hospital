// src/components/Specialties.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';
import { FaBrain, FaHeartbeat, FaBone, FaBaby } from 'react-icons/fa';
import { GiStomach } from 'react-icons/gi';
import { LuStethoscope } from 'react-icons/lu';

// --- Our Specialties Data ---
const specialtiesData = [
  {
    icon: FaHeartbeat,
    title: "Cardiology",
    description: "Advanced heart care, from diagnostics to complex bypass surgeries."
  },
  {
    icon: FaBrain,
    title: "Neurology",
    description: "Expert treatment for brain, spine, and nervous system disorders."
  },
  {
    icon: FaBone,
    title: "Orthopedics",
    description: "Comprehensive care for joint replacements, sports injuries, and bone health."
  },
  {
    icon: FaBaby,
    title: "Pediatrics",
    description: "Compassionate, specialized care for infants, children, and adolescents."
  },
  {
    icon: GiStomach,
    title: "Gastroenterology",
    description: "Treating digestive system disorders with advanced endoscopic procedures."
  },
  {
    icon: LuStethoscope,
    title: "General Surgery",
    description: "State-of-the-art minimally invasive and traditional surgical procedures."
  },
];
// ------------------------------

const Specialties = () => {
  return (
    <motion.section
      variants={staggerContainer(0.3, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      // Use the light gray background to separate it from the 'WhyChooseUs' section
      className="section-container bg-gray-50"
    >
      {/* Section Header */}
      <motion.div
        variants={fadeIn('down', 0.5)}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          What We Specialize In
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Our hospital is a center of excellence, providing expert care in a wide range 
          of medical fields.
        </p>
      </motion.div>

      {/* Specialties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {specialtiesData.map((specialty, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', 0.5, 0.2 * index)} // Staggered fade in
            className="bg-white p-8 rounded-lg shadow-lg text-center transform 
                       hover:-translate-y-2 transition-transform duration-300"
          >
            {/* Icon */}
            <div 
              className="inline-block bg-emerald-100 text-emerald-600 p-5 rounded-full mb-6"
            >
              <specialty.icon className="w-10 h-10" />
            </div>
            
            {/* Text Content */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              {specialty.title}
            </h3>
            <p className="text-gray-700">
              {specialty.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export { Specialties };