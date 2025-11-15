// src/components/FounderMessage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
// Placeholder image for the founder's photo
import founderPhoto from '../assets/doctor.jpeg'; 
// You will need to replace this path with your actual image path

const FounderMessage = () => {
  const founderName = "Dr. Arshiraf Mukasa"; // Replace with actual name
  const founderTitle = "Founder & Chief Medical Officer"; // Replace with actual title
  const messageText = 
    "Our mission is simple: to treat every patient with the same compassion and dedication we would offer our own family. Since 2005, we have committed ourselves to clinical excellence and holistic care, building a center where advanced medicine meets genuine human warmth. We are honored to be your partners in health.";

  return (
    <motion.section
      variants={staggerContainer(0.3, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="section-container py-16 md:py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <motion.div 
          variants={fadeIn('down', 0.5)}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900">
            A Message From Our <span className="text-emerald-600">Founder</span>
          </h2>
        </motion.div>

        {/* Content Card Layout */}
        <div className="flex flex-col lg:flex-row items-center bg-white rounded-xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
          
          {/* Left: Founder's Image with Animated Border */}
          <motion.div 
            variants={fadeIn('right', 0.8)}
            className="w-full lg:w-1/3 h-[450px] lg:h-[550px] overflow-hidden flex-shrink-0 relative p-4"
          >
            {/* Animated zoom in/out border */}
            <motion.div
              className="absolute inset-0 p-4 flex items-center justify-center"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full rounded-lg border-[6px] border-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
            </motion.div>

            {/* Pulsing glow effect */}
            <motion.div
              className="absolute inset-0 p-4"
              animate={{
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full rounded-lg shadow-[0_0_35px_rgba(16,185,129,0.7)]" />
            </motion.div>

            {/* Static border base */}
            <div className="relative w-full h-full border-[6px] border-emerald-500 rounded-lg overflow-hidden z-10">
              <img 
                src={founderPhoto}
                alt={`Photo of ${founderName}`}
                className="w-full h-full object-cover transform transition duration-500 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right: Message Content */}
          <motion.div 
            variants={fadeIn('left', 0.8)}
            className="w-full lg:w-2/3 p-8 md:p-12 flex flex-col justify-center"
          >
            <blockquote className="text-xl md:text-2xl italic font-serif text-gray-700 leading-relaxed mb-6 border-l-4 border-emerald-600 pl-4">
              "{messageText}"
            </blockquote>
            
            <div className="mt-4">
              <p className="text-xl font-bold text-gray-900 mb-1">{founderName}</p>
              <p className="text-md text-emerald-600 font-semibold">{founderTitle}</p>
            </div>
            
            {/* Signature Placeholder */}
            {/* If you have a signature image, you can place it here */}
            <motion.div 
              variants={fadeIn('up', 1.2)}
              className="mt-6"
            >
              <p className="text-gray-400 italic">Signature of {founderName} (AM)</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FounderMessage;