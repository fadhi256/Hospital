// src/components/ContactFormInfo.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../utils/motion';
import { FaPhone, FaEnvelope, FaClock, FaLocationDot } from 'react-icons/fa6';

const ContactFormInfo = () => {
  // Simple state for form handling (in a real app, this would use a library like Formik or React Hook Form)
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formState);
    alert('Thank you for contacting Fadhi Hospital! We will respond within 24 hours.');
    setFormState({ name: '', email: '', subject: '', message: '' }); // Reset form
  };

  const contactDetails = [
    { icon: FaLocationDot, title: 'Main Campus', info: '123 Health Ave, City, Country' },
    { icon: FaPhone, title: 'Appointments', info: '+254 700 123 456' },
    { icon: FaEnvelope, title: 'General Inquiry', info: 'info@fadhihospital.com' },
    { icon: FaClock, title: 'Hours', info: '24/7 Emergency, 9AM-5PM Clinic' },
  ];

  return (
    <motion.section
      variants={staggerContainer(0.3, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="section-container py-16 md:py-24 bg-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* Left Column: Contact Details */}
        <motion.div variants={fadeIn('right', 0.5)} className="lg:col-span-1">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-6">
            Contact Information
          </h3>
          <p className="text-gray-700 mb-8">
            Our team is ready to assist you. Please reach out via phone, email, or use the form to schedule a non-emergency consultation.
          </p>

          <div className="space-y-6">
            {contactDetails.map((detail, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.1 * (index + 1))}
                className="flex items-start p-4 bg-gray-50 rounded-lg"
              >
                <div className="text-emerald-600 mr-4 mt-1">
                  <detail.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">{detail.title}</h4>
                  <p className="text-gray-600">{detail.info}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div variants={fadeIn('left', 0.5)} className="lg:col-span-2 bg-gray-50 p-8 rounded-xl shadow-lg">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-6">
            Send Us a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject / Appointment Request"
              value={formState.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500"
            />
            <textarea
              name="message"
              placeholder="Your Message or Inquiry Details..."
              rows="4"
              value={formState.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-emerald-500 focus:border-emerald-500 resize-none"
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-emerald-600 text-white font-semibold py-3 rounded-full hover:bg-emerald-700 transition-colors shadow-md"
            >
              Submit Inquiry
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactFormInfo;