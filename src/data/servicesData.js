// Data for the Featured Services
import { FaHeartPulse, FaBone, FaChild, FaStethoscope, FaBrain, FaTooth } from 'react-icons/fa6';
import { MdOutlineLocalHospital } from 'react-icons/md';

const allServicesData = [
    {
        id: 1,
        title: "Cardiology",
        icon: FaHeartPulse,
        description: "Comprehensive heart care, diagnostic testing, and advanced interventional procedures.",
        featured: true,
        keywords: ["heart", "cardio", "chest", "blood pressure"]
    },
    {
        id: 2,
        title: "Orthopedics & Trauma",
        icon: FaBone,
        description: "Treatment for bone, joint, and muscle injuries, including total joint replacement surgery.",
        featured: true,
        keywords: ["bones", "joints", "trauma", "surgery", "fractures"]
    },
    {
        id: 3,
        title: "Pediatrics",
        icon: FaChild,
        description: "Specialized care for infants, children, and adolescents, focusing on growth and development.",
        featured: true,
        keywords: ["kids", "children", "baby", "infants", "child health"]
    },
    {
        id: 4,
        title: "General Surgery",
        icon: MdOutlineLocalHospital,
        description: "Expertise in a broad range of surgical procedures, utilizing minimally invasive techniques where possible.",
        featured: true,
        keywords: ["operating room", "gastrointestinal", "appendix", "emergency surgery"]
    },
    {
        id: 5,
        title: "Neurology",
        icon: FaBrain,
        description: "Diagnosis and treatment of disorders affecting the brain, spinal cord, and nervous system.",
        featured: true,
        keywords: ["brain", "spine", "nerves", "headache", "stroke"]
    },
    {
        id: 6,
        title: "Dentistry & Oral Health",
        icon: FaTooth,
        description: "Routine check-ups, cleanings, and complex procedures to maintain optimal dental hygiene.",
        featured: false, // Not featured, but good data for the full list later
        keywords: ["teeth", "gums", "root canal", "fillings"]
    },
    // ... more services would go here
];

export { allServicesData };