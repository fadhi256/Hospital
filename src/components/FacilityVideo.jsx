// src/components/FacilityVideo.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

const FacilityVideo = () => {
  // 1. IMPORTANT: Replace this with your actual YouTube video ID or URL
  const videoId = "XXXXXXXXXXX"; // Example: "dQw4w9WgXcQ" for a sample video
  const videoTitle = "A Tour of Hudson Medical Centre State-of-the-Art Facilities";

  return (
    <motion.section
      variants={staggerContainer(0.3, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="section-container py-16 md:py-24 bg-gray-100"
    >
      <div className="container mx-auto px-4 text-center">
        
        {/* Header */}
        <motion.div 
          variants={fadeIn('down', 0.5)}
          className="mb-12"
        >
          <h2 className="text-4xl font-extrabold text-gray-900">
            See Our Facilities in <span className="text-emerald-600">Action</span>
          </h2>
          <p className="mt-2 text-lg text-gray-600 max-w-3xl mx-auto">
            Experience a virtual tour of our modern operating theaters, comfortable patient rooms, and cutting-edge diagnostic labs.
          </p>
        </motion.div>

        {/* Video Player Container */}
        <motion.div 
          variants={fadeIn('up', 0.8)}
          className="relative w-full max-w-5xl mx-auto shadow-2xl rounded-xl overflow-hidden"
          // This padding technique maintains a 16:9 aspect ratio for the video
          style={{ paddingTop: '56.25%' }} 
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/nMex3AU3eec?si=yr7YRMMY9wA4zXHQ`}
            title={videoTitle}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
        
      </div>
    </motion.section>
  );
};

export default FacilityVideo;