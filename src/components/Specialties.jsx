import { useState, useEffect } from 'react';
import { Heart, Brain, Activity, Baby, Stethoscope, Bone } from 'lucide-react';

const Specialties = () => {
  const [isVisible, setIsVisible] = useState(false);

  const specialtiesData = [
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Cardiology",
      description: "Advanced heart care, from diagnostics to complex bypass surgeries."
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Neurology",
      description: "Expert treatment for brain, spine, and nervous system disorders."
    },
    {
      icon: <Bone className="w-10 h-10" />,
      title: "Orthopedics",
      description: "Comprehensive care for joint replacements, sports injuries, and bone health."
    },
    {
      icon: <Baby className="w-10 h-10" />,
      title: "Pediatrics",
      description: "Compassionate, specialized care for infants, children, and adolescents."
    },
    {
      icon: <Activity className="w-10 h-10" />,
      title: "Gastroenterology",
      description: "Treating digestive system disorders with advanced endoscopic procedures."
    },
    {
      icon: <Stethoscope className="w-10 h-10" />,
      title: "General Surgery",
      description: "State-of-the-art minimally invasive and traditional surgical procedures."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('specialties');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
          setIsVisible(true);
          window.removeEventListener('scroll', handleScroll);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="specialties" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Specialize In
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Our hospital is a center of excellence, providing expert care in a wide range 
            of medical fields.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialtiesData.map((specialty, index) => (
            <div
              key={index}
              /* NOTE: parent has 'group' so child elements can use group-hover:... */
              className={`group relative bg-white p-8 rounded-lg shadow-lg text-center overflow-hidden 
                          transform transition-transform duration-500 ease-out
                          hover:scale-95 /* <-- scale the card itself on hover */
                          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              style={{
                transitionDelay: `${index * 120}ms`,
                animation: isVisible ? `dropCard 0.8s ease-out ${index * 0.12}s both` : 'none'
              }}
            >
              {/* Stronger Green Hover Overlay (child so group-hover works) */}
              <div className="absolute inset-0 bg-emerald-400/30 opacity-0 
                              group-hover:opacity-100 transition-opacity duration-400 
                              backdrop-blur-sm pointer-events-none"></div>

              {/* Icon */}
              <div className="relative z-10 inline-block bg-emerald-100 text-emerald-700 
                              p-5 rounded-full mb-6 
                              group-hover:bg-emerald-300 group-hover:scale-110 
                              transform transition-all duration-300">
                {specialty.icon}
              </div>

              {/* Text */}
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 
                               group-hover:text-emerald-700 transition-colors duration-300">
                  {specialty.title}
                </h3>
                <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  {specialty.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Drop Animation Keyframes */}
      <style jsx>{`
        @keyframes dropCard {
          0% {
            opacity: 0;
            transform: translateY(-60px) scale(0.9);
          }
          50% {
            transform: translateY(10px) scale(1.02);
          }
          70% {
            transform: translateY(-5px) scale(0.99);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export { Specialties };
