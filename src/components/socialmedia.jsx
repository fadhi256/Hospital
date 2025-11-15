import { useState, useEffect } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react";

const SocialMedia = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, url: "https://facebook.com", color: "from-blue-600 to-blue-700", bgColor: "bg-blue-600" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, url: "https://twitter.com", color: "from-sky-500 to-sky-600", bgColor: "bg-sky-500" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, url: "https://instagram.com", color: "from-pink-600 to-purple-600", bgColor: "bg-gradient-to-br from-pink-600 to-purple-600" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, url: "https://linkedin.com", color: "from-blue-700 to-blue-800", bgColor: "bg-blue-700" },
    { name: "YouTube", icon: <Youtube className="w-5 h-5" />, url: "https://youtube.com", color: "from-red-600 to-red-700", bgColor: "bg-red-600" },
    { name: "Email", icon: <Mail className="w-5 h-5" />, url: "mailto:info@hudsonmedical.com", color: "from-green-600 to-green-700", bgColor: "bg-green-600" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // User scrolling down → hide
        setVisible(false);
      } else {
        // Scrolling up → show
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-500 ${
        visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      }`}
    >
      <div className="flex flex-col gap-4">
        {socialLinks.map((social, index) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${social.color} text-white shadow-lg hover:scale-110 transform transition-all duration-300 relative overflow-hidden`}
            aria-label={social.name}
            style={{
              animation: `float ${3 + index * 0.2}s ease-in-out infinite`,
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {social.icon}
            <span className={`absolute inset-0 rounded-full ${social.bgColor} opacity-75 animate-ping`}></span>
          </a>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SocialMedia;
