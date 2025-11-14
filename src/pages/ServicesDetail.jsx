// src/pages/ServicesDetail.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../data/servicesData'; // Import your data source
import { fadeIn, staggerContainer } from '../utils/motion';

const ServicesDetail = () => {

  const { slug } = useParams();

  // 2. Find the corresponding service data
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-[60vh] text-center container mx-auto">
        <h1 className="text-4xl font-bold text-red-600">404 - Service Not Found</h1>
        <p className="mt-4 text-lg text-gray-700">The service you are looking for does not exist.</p>
        <Link to="/services" className="text-emerald-600 hover:underline mt-2 inline-block">
          Go to All Services
        </Link>
      </div>
    );
  }

  return (
    <motion.section 
      variants={staggerContainer(0.3, 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="pb-16 md:pb-24" // pt-32 ensures content starts below the fixed header
    >
      {/* Service Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div variants={fadeIn('down', 0.5)} className="relative z-10 text-center p-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
            {service.title}
          </h1>
          <p className="text-xl italic font-light" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
            {service.tagline}
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content (2/3 width on large screens) */}
          <motion.div variants={fadeIn('up', 0.8)} className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-emerald-600 mb-4">Overview</h2>
            <p className="text-lg text-gray-700 mb-8">{service.overview}</p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Treatment Areas</h3>
            <ul className="list-disc list-inside space-y-2 mb-10 text-gray-700">
              {service.keyFeatures.map((feature, index) => (
                <li key={index} className="text-lg flex items-start">
                  <svg className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Detailed Sections */}
            {service.details.map((detail, index) => (
              <div key={index} className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{detail.heading}</h3>
                <p className="text-gray-700">{detail.content}</p>
              </div>
            ))}
          </motion.div>

          {/* Sidebar (1/3 width on large screens) */}
          <motion.aside variants={fadeIn('left', 1.0)} className="lg:w-1/3 space-y-8">
            <div className="p-6 bg-emerald-50 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-emerald-800 mb-4">Book a Consultation</h3>
              <p className="text-gray-700 mb-4">
                Ready to schedule your appointment? Contact our dedicated service coordinator today.
              </p>
              <Link to="/contact">
                <button className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
                  Contact Department
                </button>
              </Link>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Specialists</h3>
              <ul className="space-y-3">
                {service.doctors.map((doctor, index) => (
                  <li key={index} className="border-b pb-2 last:border-b-0 last:pb-0">
                    <p className="font-semibold text-gray-800">{doctor.name}</p>
                    <p className="text-sm text-emerald-600">{doctor.specialty}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.aside>

        </div>
      </div>
    </motion.section>
  );
};

export default ServicesDetail;