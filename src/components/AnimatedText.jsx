// src/components/AnimatedText.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, characterAppear } from '../utils/motion'; // Ensure paths are correct

const AnimatedText = ({ text, className, delay = 0.5 }) => {
  // Split the text into an array of characters
  const characters = Array.from(text);

  // Stagger container variant for the whole text block
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03, // Small delay between each character
        delayChildren: delay, // Delay before the whole string starts typing
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className={className}
    >
      {characters.map((char, index) => (
        <motion.span 
          key={index} 
          variants={characterAppear} 
          className="inline-block" // Crucial for framer-motion to animate each span separately
        >
          {/* Render actual space or non-breaking space */}
          {char === " " ? "\u00A0" : char} 
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;