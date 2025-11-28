// ============================================
// pages/resources/faqs.js
// ============================================

import Head from 'next/head';
import FAQPageComponent from '@/components/pages/resources/FAQ';

export default function FAQPage() {
  return (
    <>
      <Head>
        <title>Frequently Asked Questions | EVALL</title>
        <meta
          name="description"
          content="Find answers to common questions about EVALL electric commercial vehicles, charging, financing, maintenance, and more."
        />
        <meta property="og:title" content="FAQs | EVALL" />
        <meta
          property="og:description"
          content="Get answers to frequently asked questions about EVALL's electric vehicles and services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evall.in/resources/faqs" />
      </Head>
      <FAQPageComponent />
    </>
  );
}
