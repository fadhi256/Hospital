// src/pages/Services.jsx

import React, { useState } from 'react'; 
import PageHeader from '../components/PageHeader'; 
import ServicesOverview from '../components/ServicesOverview';
import FeaturedServices from '../components/FeaturedServices'; 
import AllSpecialtiesList from '../components/AllSpecialtiesList';
import CTABanner from '../components/CTABanner'; 

const headerImage = "https://images.unsplash.com/photo-1594247514755-a4b5ff58622c?q=80&w=2070&auto=format&fit=crop"; 

const Services = () => {
  const [currentSearchTerm, setCurrentSearchTerm] = useState(''); 

  return (
    <div className="bg-white">
      
      {/* 1. Page Header */}
      <PageHeader 
        title="Our Medical Services" 
        image={headerImage} 
      />

      {/* 2. Services Overview and Search */}
      <ServicesOverview 
        onSearchChange={setCurrentSearchTerm} 
      />
      <FeaturedServices 
        searchTerm={currentSearchTerm} 
      />

     {/* 4. Full List of Specialties */}
      <AllSpecialtiesList 
        searchTerm={currentSearchTerm} 
      />
    
      {/* 5. Final CTA Banner */}
      <CTABanner />
      
    </div>
  );
};

export default Services;