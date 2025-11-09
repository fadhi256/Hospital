// src/components/WorkingHours.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';
import { FaClock, FaPhoneAlt, FaCalendarCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// --- Our Schedule Data ---
const scheduleData = [
  {
    department: "Emergency Care",
    hours: "24 Hours / 7 Days a Week",
    isAlwaysOpen: true
  },
  {
    department: "Outpatient (OPD)",
    hours: "Mon - Fri: 8:00 AM - 6:00 PM | Sat: 9:00 AM - 1:00 PM"
  },
  {
    department: "Patient Visiting Hours",
    hours: "Every Day: 10:00 AM - 12:00 PM & 4:00 PM - 7:00 PM"
  },
  {
    department: "Pharmacy",
    hours: "24 Hours / 7 Days a Week",
    isAlwaysOpen: true
  },
  {
    department: "Radiology & Labs",
    hours: "Mon - Sat: 7:00 AM - 8:00 PM"
  },
];
// ------------------------

const WorkingHours = () => {
  return (
    <motion.section
      variants={staggerContainer(0.3, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      // Use 'bg-white' to contrast with the light gray 'Specialties' section
      className="section-container bg-white"
    >
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Side: Schedule List */}
        <motion.div
          variants={fadeIn('right', 0.5)}
          className="w-full lg:w-3/5"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Our Schedule
          </h2>
          <div className="space-y-5">
            {scheduleData.map((item, index) => (
              <div 
                key={index} 
                className={`p-5 rounded-lg border-l-4 ${item.isAlwaysOpen ? 'border-emerald-500 bg-emerald-50' : 'border-gray-300 bg-gray-50'}`}
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.department}
                </h3>
                <p className={`mt-1 text-lg ${item.isAlwaysOpen ? 'text-emerald-700 font-medium' : 'text-gray-700'}`}>
                  <FaClock className="inline -mt-1 mr-2" />
                  {item.hours}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: CTA Block */}
        <motion.div
          variants={fadeIn('left', 0.5, 0.3)}
          className="w-full lg:w-2/5"
        >
          <div className="bg-gray-900 text-white p-8 rounded-lg shadow-2xl text-center">
            <FaCalendarCheck className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-3">Book an Appointment</h3>
            <p className="text-gray-300 mb-6 text-lg">
              Our team is ready to help you. Schedule your visit today for 
              consultation and expert care.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                Book Now
              </motion.button>
            </Link>
            <div className="border-t border-gray-700 mt-8 pt-6">
              <h4 className="text-xl font-semibold text-white">For Emergencies</h4>
              <p className="text-2xl font-bold text-yellow-400 mt-2">
                <FaPhoneAlt className="inline -mt-1 mr-2" />
                +256 707 998 888
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export { WorkingHours };