import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import vac1 from "../assets/vac1.jpeg";
import paed from "../assets/paed.jpeg";

const MedicalServices = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      title: "Cardiology",
      description: "Comprehensive heart care including ECG, echocardiography, and cardiac stress testing.",
      color: "from-emerald-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "General Medicine",
      description: "Primary healthcare services for diagnosis, treatment, and prevention of diseases.",
      color: "from-emerald-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Pediatrics",
      description: "Specialized care for infants, children, and adolescents with expert pediatricians.",
      color: "from-emerald-500 to-teal-500",
      image: paed },
    {
      title: "Ophthalmology",
      description: "Complete eye care services including examinations, treatments, and surgeries.",
      color: "from-teal-500 to-green-500",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Orthopedics",
      description: "Treatment of musculoskeletal conditions, injuries, and joint replacements.",
      color: "from-emerald-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Neurology",
      description: "Diagnosis and treatment of nervous system disorders and neurological conditions.",
      color: "from-emerald-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    
    {
      title: "Laboratory Services",
      description: "State-of-the-art diagnostic testing with accurate and timely results.",
      color: "from-emerald-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Vaccination",
      description: "Comprehensive immunization services for all age groups and travel vaccines.",
      color: "from-emerald-500 to-teal-500",
      image: vac1
    },
    {
      title: "Family Medicine",
      description: "Holistic healthcare for the entire family with continuity of care.",
      color: "from-emerald-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">
            Our Clinical Services
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Providing comprehensive healthcare solutions with cutting-edge technology and compassionate care
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto mt-6"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 h-[320px]"
            >
              {/* Background Image - Clear by default, subtle blur on hover */}
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    hoveredService === index ? 'scale-105 blur-sm' : 'scale-100 blur-0'
                  }`}
                />
                
                {/* Dark overlay for better text readability */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/20 transition-all duration-300 ${
                  hoveredService === index ? 'from-black/50 via-black/25 to-black/15' : ''
                }`}></div>
              </div>

              {/* Content Container */}
              <div className="relative p-8 h-full flex flex-col justify-end">
                {/* Gradient accent overlay - Only on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-300 ${
                  hoveredService === index ? 'opacity-20' : ''
                }`}></div>
                
                {/* Text Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed mb-4 group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Arrow indicator - Only show on hover */}
                  <div className={`flex items-center text-white font-semibold transition-all duration-300 ${
                    hoveredService === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <span className="text-sm">Learn more</span>
                    <ChevronRight className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                      hoveredService === index ? 'translate-x-1' : ''
                    }`} />
                  </div>
                </div>

                {/* Bottom border accent - Only show on hover */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transition-transform duration-300 ${
                  hoveredService === index ? 'scale-x-100' : 'scale-x-0'
                }`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-green-600 to-green-800 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            View All Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalServices;