// src/components/AppointmentModal.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { FaCalendarCheck } from 'react-icons/fa6';

// Dropdown options for a simplified booking form
const specialties = [
  "General Practice", "Cardiology", "Pediatrics", 
  "Orthopedics", "Neurology", "General Surgery"
];

const AppointmentModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', specialty: specialties[0], preferredDate: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Request Submitted:', formData);
    alert(`Thank you, ${formData.name}! Your appointment request for ${formData.specialty} on ${formData.preferredDate} has been received.`);
    onClose(); // Close the modal on successful submission
    setFormData({ // Optional: Reset form state
      name: '', email: '', phone: '', specialty: specialties[0], preferredDate: ''
    });
  };

  // --- Animation Variants ---
  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { y: "0", opacity: 1, transition: { type: "spring", stiffness: 100, damping: 20 } },
    exit: { y: "100vh", opacity: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={onClose} // Close when clicking the backdrop
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-gray-100 flex justify-between items-center bg-emerald-600 rounded-t-2xl">
              <h3 className="text-2xl font-bold text-white flex items-center">
                <FaCalendarCheck className="mr-3 h-6 w-6" />
                Book Your Appointment
              </h3>
              <button onClick={onClose} className="text-white hover:text-emerald-100 transition-colors p-1" aria-label="Close modal">
                <HiX className="h-7 w-7" />
              </button>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
              
              <p className="text-gray-700 text-base">
                Fill out this quick form and our team will confirm your preferred booking within 4 hours.
              </p>

              {/* Input: Name */}
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
              />
              
              {/* Input: Email */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
              />

              {/* Input: Phone */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (e.g., +254 7XX XXX XXX)"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
              />

              {/* Input: Specialty & Date (Two Column) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <select
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-emerald-500 focus:border-emerald-500"
                >
                  {specialties.map(spec => (
                    <option key={spec} value={spec}>{spec}</option>
                  ))}
                </select>
                
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-full hover:bg-emerald-700 transition-colors shadow-lg"
              >
                Request Appointment
              </motion.button>
              
              <p className="text-xs text-center text-gray-500">
                A member of our team will call you to confirm within 4 business hours.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppointmentModal;