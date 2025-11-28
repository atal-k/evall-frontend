// ============================================
// src/pages/ApplyDealership.js
// ============================================

import React from 'react';
import HeaderBanner from '../components/layout/HeaderBanner';
import Callout from '../components/sections/Callout';
import DealershipForm from '../components/sections/forms/DealershipForm';

const ApplyDealership = () => {

    return (
        <div className="apply-dealership-page">
          <HeaderBanner 
            heading="Apply for Dealership"
            subtitle="Experience the future of electric mobility with a test drive."
            backgroundImage = '../images/header-banner-van.webp'
          />
          <section className="apply-dealership-section" aria-labelledby="apply-dealership-heading">
            <main className="apply-dealership-section__form-wrapper">
              <DealershipForm/>
            </main>
          </section>
          <Callout/>
        </div>
      );
    };
  export default ApplyDealership;