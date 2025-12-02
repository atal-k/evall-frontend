// ============================================
// components/pages/technology/EnergyBattery.js
// ============================================

import React from 'react';
import EnergyHero from '@/components/sections/energy/EnergyHero';
import FutureClosingSection from '@/components/sections/energy/FutureClosingSection';
import StandoutBenefitsSection from '@/components/sections/energy/StandoutBenefitSection';
import TechnologyFeaturesSection from '@/components/sections/energy/TechnologyFeaturesSection';

// NOTE: Renamed component function to EnergyBatteryPageComponent for consistency.
const EnergyBatteryPageComponent = () => {
  return (
    <div className="energy-battery-page">
      <EnergyHero />
      <TechnologyFeaturesSection />
      <StandoutBenefitsSection />
      <FutureClosingSection />
    </div>
  );
};

export default EnergyBatteryPageComponent;