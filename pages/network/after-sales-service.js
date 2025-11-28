// ============================================
// pages/services/after-sales.js
// ============================================

import Head from 'next/head';
import AfterSalesServicePageComponent from '@/components/pages/services/AfterSalesService';

export default function AfterSalesServicePage() {
  return (
    <>
      <Head>
        <title>After Sales Service | EVALL</title>
        <meta
          name="description"
          content="Experience 24/7 customer support and reliable after-sales service for EVALL electric vehicles. Ensuring a seamless ownership experience with comprehensive maintenance and support programs."
        />
        <meta property="og:title" content="After Sales Service | EVALL" />
        <meta
          property="og:description"
          content="24/7 customer support and comprehensive after-sales service for EVALL electric commercial vehicles."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evall.in/services/after-sales" />
      </Head>
      <AfterSalesServicePageComponent />
    </>
  );
}