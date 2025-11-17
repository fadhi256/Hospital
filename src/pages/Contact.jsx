// src/pages/Contact.jsx

import React from 'react';
import PageHeader from '../components/PageHeader';
import ContactFormInfo from '../components/ContactFormInfo';
import HospitalMap from '../components/HospitalMap';
import AppointmentFAQ from '../components/AppointmentFAQ';
import EmergencyNotice from '../components/EmergencyNotice';

const headerImage = "https://images.unsplash.com/photo-1549414571-55c32c02931a?q=80&w=2070&auto=format&fit=crop"; 

const Contact = () => {
  return (
    <div className="bg-white">
      
      {/* 1. Page Header */}
      <PageHeader 
        title="Get in Touch with Hudson Medical Center" 
        image={headerImage} 
      />
      <ContactFormInfo />
      <HospitalMap />
      <AppointmentFAQ />
      <EmergencyNotice />
      
    </div>
  );
};

export default Contact;