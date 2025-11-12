// src/components/AppointmentFAQ.jsx

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import { FaChevronDown } from 'react-icons/fa6';

// Define FAQ data
const faqs = [
  {
    question: "Do I need a referral to see a specialist?",
    answer: "For most primary care physicians, a referral is not required. However, many specialists (like cardiologists or neurologists) may require a referral from your general practitioner, depending on your insurance plan. Please confirm when booking.",
  },
  {
    question: "What insurance plans does Fadhi Hospital accept?",
    answer: "We accept a wide range of national and international insurance providers. A full list can be viewed on our Billing page. We recommend calling our Billing Department at (254) 700 888 999 to verify your specific coverage before your visit.",
  },
  {
    question: "What documents should I bring to my first appointment?",
    answer: "Please bring a valid photo ID, your insurance card, and any relevant medical records, lab results, or imaging scans from the past year. Arriving 15 minutes early will give you time to complete any necessary paperwork.",
  },
  {
    question: "How can I access my medical records?",
    answer: "You can securely access your records, test results, and appointment history through our online Patient Portal. You can sign up for the portal at your next visit or contact our Records Department for assistance.",
  },
];

const AppointmentFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.section
      variants={staggerContainer(0.3, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="section-container py-16 md:py-24 bg-white"
    >
      <motion.div variants={fadeIn('down', 0.5)} className="text-center mb-12">
        <h3 className="text-sm uppercase tracking-widest text-emerald-600 font-semibold mb-2">
          Quick Answers
        </h3>
        <h4 className="text-4xl font-extrabold text-gray-900">
          Frequently Asked Questions
        </h4>
        <p className="text-lg text-gray-600 mt-2">
          Find instant answers about appointments, billing, and patient portals.
        </p>
      </motion.div>

      {/* Accordion Container */}
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', 0.1 * (index + 1))}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-lg"
          >
            {/* Question Button (Accordion Header) */}
            <button
              onClick={() => toggleFAQ(index)}
              className={`flex justify-between items-center w-full p-5 text-left transition-colors duration-300 ${
                openIndex === index ? 'bg-emerald-50 text-emerald-700' : 'bg-white hover:bg-gray-50 text-gray-800'
              }`}
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              <FaChevronDown 
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180 text-emerald-600' : 'text-gray-500'
                }`} 
              />
            </button>

            {/* Answer Content (Accordion Body) */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 py-4 bg-white border-t border-gray-200"
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default AppointmentFAQ;