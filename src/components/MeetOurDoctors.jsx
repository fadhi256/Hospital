// src/components/MeetOurDoctors.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';
import { Link } from 'react-router-dom';
import DoctorCard from './DoctorCard';

// --- Our Featured Doctors Data ---
// (Using high-quality, professional placeholder images)
const doctorsData = [
  {
    name: "Dr. Evelyn Reed",
    specialty: "Head of Cardiology",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1770&auto=format&fit=crop",
    social: {
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Dr. Marcus Chen",
    specialty: "Senior Neurosurgeon",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=1770&auto=format&fit=crop",
    social: {
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Dr. Sarah Kim",
    specialty: "Lead Pediatrician",
    image: "https-://images.unsplash.com/photo-1622253692010-333f2f628f11?q=80&w=1887&auto=format&fit=crop",
    social: {
      twitter: "#",
      linkedin: "#"
    }
  },
];
// ---------------------------------

const MeetOurDoctors = () => {
  return (
    <motion.section
      variants={staggerContainer(0.3, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      // Use the light gray background
      className="section-container bg-gray-50"
    >
      {/* Section Header */}
      <motion.div
        variants={fadeIn('down', 0.5)}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Meet Our Specialists
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Our dedicated and experienced team of doctors is here to provide you 
          with the highest quality of care.
        </p>
      </motion.div>

      {/* Doctors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctorsData.map((doctor, index) => (
          <DoctorCard 
            key={index}
            doctor={doctor}
            index={index} // For staggering animation
          />
        ))}
      </div>

      {/* "View All" Button */}
      <motion.div 
        variants={fadeIn('up', 0.5)}
        className="text-center mt-12"
      >
        <Link to="/about"> {/* Or a future '/doctors' page */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
          >
            Meet The Full Team
          </motion.button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export { MeetOurDoctors };