import React from 'react';
import { motion } from 'framer-motion';

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
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes Our Team <span className="text-emerald-600">Practice Excellent</span>
            </h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full mb-6"></div>
          </div>

          {/* Clean Content Wording */}
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Uncompromising Commitment to Clinical Excellence
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our medical team maintains the highest standards of clinical practice through continuous education, 
                regular training in the latest medical advancements, and adherence to evidence-based treatment protocols. 
                Every team member is board-certified and brings specialized expertise from renowned medical institutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Patient-Centered Collaborative Care
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We practice a multidisciplinary approach where specialists from various fields work together to develop 
                comprehensive treatment plans. This collaborative model ensures that each patient benefits from the collective 
                expertise of our entire medical team, resulting in more accurate diagnoses and effective treatment outcomes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Advanced Technology and Innovative Treatments
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment to excellence extends to investing in state-of-the-art medical technology and equipment. 
                We continuously integrate the latest diagnostic tools and treatment methodologies, ensuring our patients 
                have access to the most advanced healthcare solutions available in modern medicine.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Compassionate Care with Cultural Sensitivity
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Beyond technical expertise, our team is dedicated to providing care with genuine compassion and cultural sensitivity. 
                We understand that healing involves not just treating conditions but supporting patients emotionally and respecting 
                their individual backgrounds, beliefs, and preferences throughout their healthcare journey.
              </p>
            </motion.div>
          </div>

          {/* CTA Section */}
          
        </motion.div>
      </div>
    </section>
  );
};

export default MedicalTeam;