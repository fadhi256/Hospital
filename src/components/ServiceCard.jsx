// src/components/ServiceCard.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // ⭐ Import Link
import { fadeIn } from '../utils/motion';

const ServiceCard = ({ id, title, description, image, link, index }) => {
  return (
    <motion.div
      variants={fadeIn('up', 0.5, 0.2 * (index + 1))} // Staggered animation
      // The Link component wraps the entire card
      className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
    >
      <Link to={link}> {/* ⭐ Use the 'link' prop here */}
        <div className="relative h-64">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {/* Optional overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-end p-6">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-1">{title}</h3>
              <p className="text-lg font-light">{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;