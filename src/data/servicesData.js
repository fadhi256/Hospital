// src/data/servicesData.js

import { FaHeartPulse, FaBone, FaChild, FaStethoscope, FaBrain, FaTooth } from 'react-icons/fa6';
import { MdOutlineLocalHospital } from 'react-icons/md';
import { assets } from '../assets/assets.js';

// --- Data for Featured/Overview Sections (Icons, Descriptions) ---
const baseServices = [
    {
        id: 1,
        slug: "cardiology",
        title: "Cardiology",
        icon: FaHeartPulse,
        description: "Comprehensive heart care, diagnostic testing, and advanced interventional procedures.",
        featured: true,
        keywords: ["heart", "cardio", "chest", "blood pressure"]
    },
    {
        id: 2,
        slug: "orthopedics",
        title: "Orthopedics & Trauma",
        icon: FaBone,
        description: "Treatment for bone, joint, and muscle injuries, including total joint replacement surgery.",
        featured: true,
        keywords: ["bones", "joints", "trauma", "surgery", "fractures"]
    },
    {
        id: 3,
        slug: "pediatrics",
        title: "Pediatrics",
        icon: FaChild,
        description: "Specialized care for infants, children, and adolescents, focusing on growth and development.",
        featured: true,
        keywords: ["kids", "children", "baby", "infants", "child health"]
    },
    {
        id: 4,
        slug: "general-surgery", // Use hyphenated slug for URLs
        title: "General Surgery",
        icon: MdOutlineLocalHospital,
        description: "Expertise in a broad range of surgical procedures, utilizing minimally invasive techniques where possible.",
        featured: true,
        keywords: ["operating room", "gastrointestinal", "appendix", "emergency surgery"]
    },
    {
        id: 5,
        slug: "neurology",
        title: "Neurology",
        icon: FaBrain,
        description: "Diagnosis and treatment of disorders affecting the brain, spinal cord, and nervous system.",
        featured: true,
        keywords: ["brain", "spine", "nerves", "headache", "stroke"]
    },
    {
        id: 6,
        slug: "dentistry",
        title: "Dentistry & Oral Health",
        icon: FaTooth,
        description: "Routine check-ups, cleanings, and complex procedures to maintain optimal dental hygiene.",
        featured: false, 
        keywords: ["teeth", "gums", "root canal", "fillings"]
    },
    // Add all services here
];

// --- Detailed Data for Service Detail Pages (/services/:slug) ---
// Note: This detailed content should be maintained separately and associated via the 'slug'.

const detailedContent = [
    {
        slug: "cardiology",
        tagline: "Expert care for your heart, powered by advanced diagnostic technology.",
        image: assets.CardiologyHero,
        overview: "Our Cardiology department provides comprehensive evaluation and treatment for a full range of heart conditions, from preventative checkups to complex interventions.",
        keyFeatures: [
            "24/7 Emergency Cardiac Care",
            "Non-Invasive Diagnostics (Echo, Stress Testing)",
            "Interventional Cardiology Procedures (Angioplasty, Stenting)",
            "Dedicated Cardiac Rehabilitation Program"
        ],
        details: [
            { heading: "Advanced Diagnostic Technology", content: "We utilize the latest equipment..." },
            { heading: "Interventional Procedures", content: "Our team of board-certified interventional..." },
        ],
        doctors: [
            { name: "Dr. Evelyn Reed", specialty: "Interventional Cardiologist" },
        ]
    },
    {
        slug: "orthopedics",
        tagline: "Restoring mobility and improving life through specialized bone and joint care.",
        image: "/assets/orthopedics-hero.jpg",
        overview: "Specializing in the diagnosis and treatment of disorders of the musculoskeletal system...",
        keyFeatures: [
            "Joint Replacement Surgery (Hip, Knee, Shoulder)",
            "Sports Medicine and Rehabilitation",
            "Spinal Surgery and Non-Surgical Pain Management",
            "Pediatric Orthopedics"
        ],
        details: [ /* ... details content ... */ ],
        doctors: [
            { name: "Dr. Marcus Cole", specialty: "Orthopedic Surgeon" },
        ]
    },
    // ... add detailed content for all other services
];

// --- FINAL MERGED LIST ---
// This merges the simple 'baseServices' data with the 'detailedContent' data.
export const servicesData = baseServices.map(baseService => {
    const detail = detailedContent.find(d => d.slug === baseService.slug) || {};
    return { ...baseService, ...detail };
});

// For backward compatibility, you can still export the base services if needed:
export { baseServices as allServicesData };