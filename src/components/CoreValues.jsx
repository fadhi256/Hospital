// src/components/CoreValues.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';
import { FaHeartPulse, FaHandshakeAngle, FaLightbulb } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";

// Define the values data
const values = [
  {
    icon: FaHeartPulse,
    title: "Compassion",
    description: "We treat every patient and family member with genuine empathy, dignity, and respect, ensuring a comforting experience.",
  },
  {
    icon: IoShieldCheckmark,
    title: "Excellence",
    description: "We are committed to the highest standards of clinical quality and safety, driving continuous improvement in all we do.",
  },
  {
    icon: FaHandshakeAngle,
    title: "Integrity",
    description: "We build trust by operating transparently, adhering to the highest ethical standards, and honoring our commitments.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    description: "We embrace new medical technologies and techniques to provide advanced, effective, and future-proof healthcare solutions.",
  },
];

const CoreValues = () => {
  return (
    <motion.section
      variants={staggerContainer(0.3, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="section-container bg-gray-50 py-16 md:py-24" // Use light gray background for contrast
    >
      <motion.div variants={fadeIn('down', 0.5)} className="text-center mb-12">
        <h2 className="text-sm uppercase tracking-widest text-emerald-600 font-semibold mb-2">
          Our Foundation
        </h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Core Values
        </h3>
      </motion.div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            // Staggered animation for each card
            variants={fadeIn('up', 0.2 * (index + 1))}
            className="flex flex-col items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="p-4 bg-emerald-100 rounded-full text-emerald-600 mb-4">
              <value.icon className="h-8 w-8" />
            </div>
            
            {/* Title */}
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              {value.title}
            </h4>
            
            {/* Description */}
            <p className="text-gray-600">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default CoreValues;