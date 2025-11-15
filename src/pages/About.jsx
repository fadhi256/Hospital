// src/pages/About.jsx

import React from 'react';
import PageHeader from '../components/PageHeader'; 
import OurStoryMission from '../components/OurStoryMission';
import CoreValues from '../components/CoreValues';
import LeadershipTeam from '../components/LeadershipTeam';
import FacilityGallery from '../components/FacilityGallery';
import CTABanner from '../components/CTABanner';

const headerImage = "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop";

const About = () => {
  return (
    <div className="bg-white">
      {/* 1. Page Header */}
      <PageHeader 
        title="About Hudson Medical Center" 
        image={headerImage} 
      />
      <OurStoryMission />
      <CoreValues />
      <LeadershipTeam />
      <FacilityGallery />
      <CTABanner />

    </div>
  );
};

export default About;