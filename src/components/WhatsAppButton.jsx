import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
    
  const phoneNumber = '+256751329693';
  // Pre-filled message for the WhatsApp chat
  const message = 'Hello, I’m interested in Ponder Machinery and Construction’s services. Can you assist me?';
  // WhatsApp API URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-orange-400 text-white rounded-full shadow-lg hover:bg-orange-500 transition-all duration-300"
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FaWhatsapp className="w-8 h-8" />
    </motion.a>
    
  );
};

export default WhatsAppButton;