// src/components/ServiceCard.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { fadeIn } from '../utils/motion';

const ServiceCard = ({ id, title, description, image, link, index }) => {
  return (
    // Staggered fade in from bottom
    <motion.div
      variants={fadeIn('up', 0.5, 0.2 * index)} 
    >
      {/* This is the main card link. 
        - 'group' enables hover effects on child elements
        - 'h-96' sets a fixed height
      */}
      <Link 
        to={link} 
        className="block relative rounded-lg overflow-hidden shadow-lg group h-80"
      >
        {/* Background Image */}
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
        />
        
        {/* Bottom Gradient Overlay (like your example) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        
        {/* Text Content (like your example) */}
        <div 
          className="absolute bottom-0 left-0 p-6 text-white" 
          style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.5)' }}
        >
          <h3 className="text-3xl font-bold flex items-center">
            {title}
            {/* The arrow icon appears and moves on hover */}
            <FaChevronRight 
              className="ml-2 text-2xl transform opacity-0 -translate-x-2 
                         group-hover:opacity-100 group-hover:translate-x-0 
                         transition-all duration-300" 
            />
          </h3>
          <p className="text-lg text-gray-100 mt-1">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;