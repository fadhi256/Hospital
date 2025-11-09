// src/components/DoctorCard.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { fadeIn } from '../utils/motion';

const DoctorCard = ({ doctor, index }) => {
  return (
    <motion.div
      variants={fadeIn('up', 0.5, 0.2 * index)} // Staggered fade in
      className="bg-white rounded-lg shadow-lg overflow-hidden text-center transform 
                 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      {/* Doctor Image */}
      <div className="h-64 w-full overflow-hidden">
        <img 
          src={doctor.image} 
          alt={doctor.name}
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">
          {doctor.name}
        </h3>
        <p className="text-md font-medium text-emerald-600 mb-4">
          {doctor.specialty}
        </p>
        
        {/* Social Links (Optional) */}
        <div className="flex justify-center gap-4">
          <a 
            href={doctor.social.twitter} 
            className="text-gray-500 hover:text-emerald-600"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaTwitter size={20} />
          </a>
          <a 
            href={doctor.social.linkedin} 
            className="text-gray-500 hover:text-emerald-600"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedinIn size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default DoctorCard;