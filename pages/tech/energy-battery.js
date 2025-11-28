// ============================================================================
// FILE: src/pages/EnergyBatteryPage.js
// ============================================================================

import EnergyHero from "../components/sections/energy/EnergyHero";
import FutureClosingSection from "../components/sections/energy/FutureClosingSection";
import StandoutBenefitsSection from "../components/sections/energy/StandoutBenefitSection";
import TechnologyFeaturesSection from "../components/sections/energy/TechnologyFeaturesSection";

const EnergyBatteryPage = () => {
    return (
      <div className="energy-battery-page">
        <EnergyHero />
        <TechnologyFeaturesSection />
        <StandoutBenefitsSection />
        <FutureClosingSection />
      </div>
    );
  };

export default EnergyBatteryPage;