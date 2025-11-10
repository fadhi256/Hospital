// src/components/Hero.jsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { assets } from '../assets/assets.js'

// 1. DEFINE YOUR SLIDE DATA
// Add your 4 slides here. Use high-quality, relevant images.
// I'm using placeholder images from Unsplash.
const slideData = [
  {
    id: 1,
    image: assets.Compasionate,
    title: "Compassionate Care, Every Single Day",
    subtitle: "Experience world-class healthcare from a team that truly cares about your well-being.",
  },
  {
    id: 2,
    image: assets.Equipment,
    title: "Advanced Medical Technology",
    subtitle: "We use state-of-the-art technology to provide accurate diagnoses and effective treatments.",
  },
  {
    id: 3,
    image: assets.Trusted,
    title: "Your Trusted Health Partner for Life",
    subtitle: "From preventative care to complex surgeries, we are here for you and your family.",
  },
  {
    id: 4,
    image: assets.Specialists,
    title: "Leading Specialists at Your Service",
    subtitle: "Access a wide network of highly-skilled doctors and medical experts.",
  },
];

// 2. DEFINE ANIMATION VARIANTS
const imageVariants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 1.05, transition: { duration: 0.5, ease: 'easeIn' } }
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.3, ease: 'easeOut' } }
};


const Hero = () => {
  const [index, setIndex] = useState(0);

  // 3. AUTO-SLIDER LOGIC
  useEffect(() => {
    const timer = setTimeout(() => {
      // Go to the next slide
      setIndex((prevIndex) => (prevIndex + 1) % slideData.length);
    }, 7000); // Change slide every 7 seconds

    // Clear timer on component unmount or index change
    return () => clearTimeout(timer);
  }, [index]); // Re-run effect when index changes

  // 4. MANUAL NAVIGATION
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slideData.length);
  };
  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slideData.length) % slideData.length);
  };
  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-gray-900">
      
      {/* 5. ANIMATED BACKGROUND IMAGE */}
      <AnimatePresence initial={false}>
        <motion.div
          key={index} // This is crucial for AnimatePresence
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute inset-0 w-full h-full"
          style={{ 
            backgroundImage: `url(${slideData[index].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      </AnimatePresence>

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* 6. ANIMATED TEXT CONTENT */}
      <div className="relative z-10 h-full flex items-center justify-center text-center">
        {/* We use key={index} again to force re-animation */}
        <motion.div
          key={index} 
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 text-white"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            {slideData[index].title}
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 font-light" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            {slideData[index].subtitle}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
          >
            Book an Appointment
          </motion.button>
        </motion.div>
      </div>

      {/* 7. NAVIGATION ARROWS */}
      <button 
        onClick={prevSlide} 
        className="absolute z-20 top-1/2 left-4 md:left-8 -translate-y-1/2 bg-white/30 p-3 rounded-full text-white hover:bg-white/50 transition-all"
      >
        <FaChevronLeft size={15} />
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute z-20 top-1/2 right-4 md:right-8 -translate-y-1/2 bg-white/30 p-3 rounded-full text-white hover:bg-white/50 transition-all"
      >
        <FaChevronRight size={15} />
      </button>

      {/* 8. NAVIGATION DOTS */}
      <div className="absolute z-20 bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slideData.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`h-3 w-3 rounded-full transition-all ${index === slideIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'}`}
          />
        ))}
      </div>
    </section>
  );
};
export { Hero };