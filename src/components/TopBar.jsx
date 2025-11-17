import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { IoWarning } from 'react-icons/io5';

const contactDetails = {
  phone: "+256741413007",
  whatsapp: "+256741413007",
  email: "info.med@hms.ug",
  emergency: "+256741413007",
};

const socialLinks = [
  { href: "https://www.facebook.com/share/1A5CpcuGkU/?mibextid=wwXIfr", icon: FaFacebookF },
  { href: "https://www.facebook.com/share/1A5CpcuGkU/?mibextid=wwXIfr", icon: FaTwitter },
  { href: "https://www.facebook.com/share/1A5CpcuGkU/?mibextid=wwXIfr", icon: FaYoutube },
  { href: "https://www.facebook.com/share/1A5CpcuGkU/?mibextid=wwXIfr", icon: FaInstagram },
  { href: "https://www.facebook.com/share/1A5CpcuGkU/?mibextid=wwXIfr", icon: FaLinkedinIn },
];

const TopBar = () => {
  return (
    <div className="bg-gray-900 text-white text-sm py-2 sm:py-3">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center gap-4 overflow-x-auto">

          {/* Left/Center: Contact Info */}
          <div className="flex gap-x-4 sm:gap-x-6 items-center">
            
            <ContactItem icon={<FaPhoneAlt />} text={contactDetails.phone} href={`tel:${contactDetails.phone}`} />
            <ContactItem icon={<FaWhatsapp />} text={contactDetails.whatsapp} href={`https://wa.me/${contactDetails.whatsapp}`} />
            <ContactItem icon={<MdEmail />} text={contactDetails.email} href={`mailto:${contactDetails.email}`} />
            
            {/* Emergency Contact - with a different color */}
            <a href={`tel:${contactDetails.emergency}`} className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 font-semibold">
              <IoWarning className="text-lg" />
              <span className="hidden sm:inline">EMERGENCY: {contactDetails.emergency}</span>
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
                <social.icon />
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
    {React.cloneElement(icon, { className: 'text-emerald-500 text-lg' })}
    <span className="hidden sm:inline">{text}</span>
  </a>
);

export default TopBar;