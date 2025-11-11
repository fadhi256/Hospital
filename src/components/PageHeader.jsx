// src/components/PageHeader.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';

const PageHeader = ({ title, image }) => {
  return (
    <motion.section 
      variants={fadeIn('down', 0.3)} 
      initial="hidden"
      animate="show"
      className="relative h-[40vh] md:h-[50vh] w-full"
    >
      {/* 1. Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* 2. Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* 3. Title Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        <motion.h1 
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
          className="text-4xl md:text-6xl font-extrabold text-white" 
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.5)' }}
        >
          {title}
        </motion.h1>
      </div>
    </motion.section>
  );
};

export default PageHeader;