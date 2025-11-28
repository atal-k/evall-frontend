// ============================================
// components/pages/services/AfterSalesService.js
// ============================================

import React from 'react';
import HeaderBanner from '@/components/layout/HeaderBanner';
import ServiceOverview from '@/components/sections/after-sales/ServiceOverview';
import ServicePrograms from '@/components/sections/after-sales/ServicePrograms';
import SupportContact from '@/components/sections/after-sales/SupportContact';
import Callout from '@/components/sections/Callout';

// NOTE: Renamed component function to AfterSalesServicePageComponent for consistency.
const AfterSalesServicePageComponent = () => {
  return (
    <div className="after-sales-page">
      <HeaderBanner
        variant="intelligence-banner"
        title="After Sales Services"
        heading="Empowering Our Vehicles with 24/7 Customer Support and Reliable After-Sales Service"
        subtitle="For a seamless ownership experience."
        button="Explore Now"
        backgroundImage="/images/after-sales-person.webp"
      />
      <ServiceOverview />
      <ServicePrograms />
      <SupportContact />
      <Callout />
    </div>
  );
};

export default AfterSalesServicePageComponent;