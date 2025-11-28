// ============================================================================
// FILE: src/pages/ChargingInfrastructure.js
// ============================================================================
import React from 'react';
import HeaderBanner from '../components/layout/HeaderBanner';

import Callout from '../components/sections/Callout';

const ChargingInfrastructure = () => {
  return (
    <div className="charging-infra-page">
      <HeaderBanner
        variant="intelligence-banner"
        title="Charging Infrastructure"
        heading="Accessible and Reliable Charging for Every Journey "
        backgroundImage="/images/charging-infra-banner1.webp"
      />


      {/* other sections here */}

        <HeaderBanner
            variant='intelligence-banner adv-intelligence-banner'
            heading="Charging Infrastructure and Partnerships"
            subtitle="Our strong charging infrastructure at EVall Mobility guarantees that your electric car is always prepared for use. Our quickly growing network meets your mobility needs, whether you're making deliveries in cities or traveling long distances."
        backgroundImage="/images/charging-infra-banner2.webp"

          />

      <Callout />
    </div>
  );
};

export default ChargingInfrastructure;