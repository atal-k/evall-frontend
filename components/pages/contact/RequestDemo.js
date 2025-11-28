// ============================================
// components/pages/contact/RequestDemo.js
// ============================================

import React from 'react';
import HeaderBanner from '@/components/layout/HeaderBanner';
import Callout from '@/components/sections/Callout';
import RequestDemoForm from '@/components/sections/forms/RequestDemoForm';

// NOTE: Renamed component function to RequestDemoPageComponent for consistency.
const RequestDemoPageComponent = () => {
  return (
    <div className="request-demo-page">
      <HeaderBanner
        heading="Request a Demo"
        subtitle="Experience the future of electric mobility with a test drive."
        backgroundImage="/images/header-banner-van.webp"
      />
      <section className="product-enquiry-section" aria-labelledby="product-enquiry-heading">
        <main className="product-enquiry-section__form-wrapper">
          <RequestDemoForm />
        </main>
      </section>
      <Callout />
    </div>
  );
};

export default RequestDemoPageComponent;