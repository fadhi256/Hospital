// src/components/Hero.jsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { assets } from '../assets/assets.js'
import AnimatedText from './AnimatedText'

// 1. SLIDE DATA
const slideData = [
  {
    id: 1,
    image: assets.img9,
    title: "Compassionate Care, Every Single Day",
    subtitle: "Experience world-class healthcare from a team that truly cares about your well-being.",
  },
  {
    id: 2,
    image: assets.imgx,
    title: "Advanced Medical Technology",
    subtitle: "We use state-of-the-art technology to provide accurate diagnoses and effective treatments.",
  },
  {
    id: 3,
    image: assets.img7,
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

const Hero = () => {
  const [index, setIndex] = useState(0);

  // 3. AUTO-SLIDER LOGIC
  useEffect(() => {
    const timer = setTimeout(() => {

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
    <section className="relative h-[100vh] w-full overflow-hidden bg-gray-900">
      
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
        {/* We use key={index} on AnimatePresence to ensure the text content animates out/in */}
        <AnimatePresence initial={false} mode="wait">
            <motion.div
                key={slideData[index].id} // Use ID as key for stability
                // Fades the container in slightly while the text types
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, y: -10, transition: { duration: 0.3 } }}
                className="container mx-auto px-4 text-white"
            >
                {/* 1. TYPING HEADLINE */}
                <AnimatedText 
                    text={slideData[index].title} 
                    className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight" 
                    delay={0.5} // Delay start of typing after slide transition begins
                />

                {/* 2. TYPING SUBTITLE */}
                <AnimatedText 
                    text={slideData[index].subtitle} 
                    className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 font-light" 
                    delay={1.5} // Start typing after headline is partially visible
                />

                {/* 3. CTA BUTTON (Simple fade-in) */}
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1, transition: { delay: 2.5, duration: 0.5 } }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg"
                >
                    Quick Appointment
                </motion.button>
            </motion.div>
        </AnimatePresence>
      </div>

     /* {/* 7. NAVIGATION ARROWS */}
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
      */

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