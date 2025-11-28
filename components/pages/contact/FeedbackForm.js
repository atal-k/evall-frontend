// ============================================
// components/pages/contact/FeedbackForm.js
// ============================================

import React from 'react';
import HeaderBanner from '@/components/layout/HeaderBanner';
import Callout from '@/components/sections/Callout';
import FeedbackForm from '@/components/sections/forms/FeedbackForm';

// NOTE: Renamed component function to FeedbackFormPageComponent for consistency.
const FeedbackFormPageComponent = () => {
  return (
    <div className="feedback-form-page">
      <HeaderBanner
        heading="Customer Feedback Form"
        subtitle="Experience the future of electric mobility with a test drive."
        backgroundImage="/images/header-banner-van.webp"
      />
      <section className="feedback-form-section" aria-labelledby="feedback-form-heading">
        <main className="feedback-form-section__form-wrapper">
          <FeedbackForm />
        </main>
      </section>
      <Callout />
    </div>
  );
};

export default FeedbackFormPageComponent;