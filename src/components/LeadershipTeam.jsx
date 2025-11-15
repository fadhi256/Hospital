// src/components/LeadershipTeam.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';
import { FaGraduationCap, FaEnvelope } from 'react-icons/fa6';

// Placeholder image for leaders 
const placeholderImage = "https://images.unsplash.com/photo-1559135061-ad8194488b39?q=80&w=1974&auto=format&fit=crop";

// Define leadership data
const leaders = [
  {
    name: "Dr. Laila Fadhi",
    title: "Chief Executive Officer (CEO)",
    bio: "Dr. Fadhi is the founder of Hudson Medical Center, leading strategic growth and ensuring the hospital's vision of compassionate excellence is realized.",
    image: placeholderImage,
  },
  {
    name: "Dr. Thomas E. Mutebi",
    title: "Chief Medical Officer (CMO)",
    bio: "With over 20 years in surgical medicine, Dr. Mutebi oversees all clinical practices, guaranteeing the highest standard of patient care.",
    image: placeholderImage,
  },
  {
    name: "Ms. Amina H. Alikhan",
    title: "Director of Nursing & Patient Care",
    bio: "Ms. Alikhan drives patient-centered care initiatives and manages our dedicated nursing staff, focusing on comfort and recovery.",
    image: placeholderImage,
  },
];

const LeadershipTeam = () => {
  return (
    <motion.section
      variants={staggerContainer(0.3, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="section-container py-16 md:py-24 bg-white" 
    >
      <motion.div variants={fadeIn('down', 0.5)} className="text-center mb-12">
        <h2 className="text-sm uppercase tracking-widest text-emerald-600 font-semibold mb-2">
          The People Behind The Care
        </h2>
        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Meet Our Leadership
        </h3>
      </motion.div>

      {/* Leadership Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {leaders.map((leader, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', 0.2 * (index + 1))}
            className="flex flex-col items-center p-6 bg-gray-50 rounded-xl shadow-lg border-t-4 border-emerald-500"
          >
            {/* Image */}
            <div className="mb-4">
              <img 
                src={leader.image} 
                alt={leader.name} 
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
                loading="lazy" 
                decoding="async" 
              />
            </div>

            {/* Details */}
            <h4 className="text-xl font-bold text-gray-900">{leader.name}</h4>
            <p className="text-emerald-600 font-semibold mb-3">{leader.title}</p>
            
            <p className="text-gray-600 text-center mb-4">
              {leader.bio}
            </p>

            {/* Links/Actions (Optional) */}
            <div className="flex space-x-4 text-gray-500">
              <span title="View Credentials" className="hover:text-emerald-600 transition-colors cursor-pointer">
                <FaGraduationCap className="h-5 w-5" />
              </span>
              <span title="Contact" className="hover:text-emerald-600 transition-colors cursor-pointer">
                <FaEnvelope className="h-5 w-5" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default LeadershipTeam;