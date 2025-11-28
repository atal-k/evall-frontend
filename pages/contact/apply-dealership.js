// ============================================
// pages/contact/apply-dealership.js
// ============================================

import Head from 'next/head';
import ApplyDealershipPageComponent from '@/components/pages/contact/ApplyDealership';

export default function ApplyDealershipPage() {
  return (
    <>
      <Head>
        <title>Apply for Dealership | EVALL</title>
        <meta
          name="description"
          content="Partner with EVALL to bring smart electric commercial vehicles to your market. Submit your dealership application and join our growing network."
        />
        <meta property="og:title" content="Apply for EVALL Dealership" />
        <meta
          property="og:description"
          content="Become an EVALL dealership partner and deliver sustainable mobility solutions to businesses nationwide."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evall.in/contact/apply-dealership" />
      </Head>
      <ApplyDealershipPageComponent />
    </>
  );
}