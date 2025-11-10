import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoWarning } from 'react-icons/io5';

const contactDetails = {
  phone: "+256(0) 700000000",
  whatsapp: "+256(0) 700000000",
  email: "customercare@fadhihospital.org",
  emergency: "+256(0) 300099999",
};

const socialLinks = [
  { href: "#", icon: FaFacebookF },
  { href: "#", icon: FaTwitter },
  { href: "#", icon: FaYoutube },
  { href: "#", icon: FaInstagram },
  { href: "#", icon: FaLinkedinIn },
];

const TopBar = () => {
  return (
    <div className="bg-gray-900 text-white text-sm py-2 md:py-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center gap-4">

          {/* Left/Center: Contact Info */}
          <div className="flex flex-wrap gap-x-3 md:gap-x-6 gap-y-2 items-center">
            
            <ContactItem icon={<FaPhoneAlt />} text={contactDetails.phone} href={`tel:${contactDetails.phone}`} />
            <ContactItem icon={<FaWhatsapp />} text={contactDetails.whatsapp} href={`https://wa.me/${contactDetails.whatsapp}`} />
            <ContactItem icon={<MdEmail />} text={contactDetails.email} href={`mailto:${contactDetails.email}`} />
            
            {/* Emergency Contact - with a different color */}
            <a href={`tel:${contactDetails.emergency}`} className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold">
              <IoWarning className="text-base md:text-lg" />
              <span>EMERGENCY: {contactDetails.emergency}</span>
            </a>
          </div>

          {/* Right: Social Media Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-500 transition-colors"
              >
                <social.icon className="text-base" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, text, href }) => (
  <a href={href} className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
    {React.cloneElement(icon, { className: 'text-emerald-500 text-base' })} {/* Colors and sizes the icon */}
    <span className="hidden md:inline">{text}</span>
  </a>
);

export default TopBar;