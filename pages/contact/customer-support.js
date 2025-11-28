// ============================================
// src/pages/CustomerSupport.js
// ============================================

import React from 'react';
import HeaderBanner from '../components/layout/HeaderBanner';
import ContactSection from '../components/sections/ContactSection';
import Callout from '../components/sections/Callout';

const CustomerSupport = () => {

    return (
        <div className="customer-support-page">
          <HeaderBanner 
            heading="Customer Support"
            subtitle="The shift to electric mobility is inevitable, and essential."
            backgroundImage = '../images/header-banner-van.webp'
          />
          <ContactSection/>
          <Callout/>
        </div>
      );
    };
  export default CustomerSupport;