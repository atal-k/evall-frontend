// ============================================
// src/pages/Careers.js
// ============================================

import React from 'react';
import Callout from '../components/sections/Callout';
import CareersHero from '../components/sections/careers/CareersHero';
import JobOpeningSection from '../components/sections/careers/JobOpeningSection';
import CoreValuesSection from '../components/sections/careers/CoreValuesSection';

const Careers = () => {

  
    return (
        <div className="careers-culture-page">
        <CareersHero />
        <JobOpeningSection />
        <CoreValuesSection />
        <Callout />
      </div>
    );
  };
export default Careers;


