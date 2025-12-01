// ============================================
// pages/safety-compliance.js
// ============================================

import Head from 'next/head';
import SafetyCompliancePageComponent from '@/components/pages/tech/SafetyCompliance';

export default function SafetyCompliancePage() {
  return (
    <>
      <Head>
        <title>Safety & Compliance | EVALL</title>
        <meta
          name="description"
          content="EVALL's commitment to safety and regulatory compliance. Learn about our safety features, certifications, and adherence to industry standards for electric commercial vehicles."
        />
        <meta property="og:title" content="Safety & Compliance | EVALL" />
        <meta
          property="og:description"
          content="Discover EVALL's comprehensive safety features and compliance with automotive industry regulations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evall.in/safety-compliance" />
      </Head>
      <SafetyCompliancePageComponent />
    </>
  );
}