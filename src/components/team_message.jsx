import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets.js'

const MedicalTeam = () => {
  const teamStats = [
    { number: "50+", label: "Medical Professionals" },
    { number: "15+", label: "Specialties" },
    { number: "25+", label: "Years Experience" },
    { number: "10k+", label: "Patients Treated" }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-emerald-600">Professional Medical Team</span>
          </h1>
          <div className="w-24 h-1 bg-emerald-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated healthcare professionals committed to providing exceptional medical care with compassion and expertise.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Group Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={assets.imgx}
                alt="Our Medical Team"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="grid grid-cols-2 gap-4">
                  
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team Message Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Message from Our Team</h2>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "At our hospital, we believe that exceptional healthcare begins with a team of dedicated professionals 
                who are not only experts in their fields but also compassionate caregivers. Our multidisciplinary team 
                works collaboratively to ensure every patient receives personalized, comprehensive care."
              </p>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "With decades of combined experience and ongoing training in the latest medical advancements, 
                we are committed to delivering the highest standard of medical excellence while treating each 
                patient with the dignity and respect they deserve."
              </p>

              <div className="pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Our Commitment</h4>
                <p className="text-gray-600">Excellence in healthcare, compassion in service</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What Makes Our Team Practice Excellent - Clean Wording Version */}
        
      </div>
    </section>
  );
};

export default MedicalTeam;