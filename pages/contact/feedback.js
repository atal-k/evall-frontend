// ============================================
// pages/contact/feedback.js
// ============================================

import Head from 'next/head';
import FeedbackFormPageComponent from '@/components/pages/contact/FeedbackForm';

export default function FeedbackFormPage() {
  return (
    <>
      <Head>
        <title>Customer Feedback | EVALL</title>
        <meta
          name="description"
          content="Share your experience with EVALL. We value your feedback to improve our electric commercial vehicle solutions and services."
        />
        <meta property="og:title" content="Customer Feedback | EVALL" />
        <meta
          property="og:description"
          content="Help us serve you better. Submit your feedback about EVALL's electric vehicles and services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evall.in/contact/feedback" />
      </Head>
      <FeedbackFormPageComponent />
    </>
  );
}