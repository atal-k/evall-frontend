// ============================================
// pages/contact/dealer-locator.js
// ============================================

import Head from 'next/head';
import DealerLocatorPageComponent from '@/components/pages/contact/DealerLocator';

export default function DealerLocatorPage() {
  return (
    <>
      <Head>
        <title>Dealer Locator | EVALL</title>
        <meta
          name="description"
          content="Find your nearest EVALL dealership for vehicle demos, financing support, and after-sales service. Search by city, name, or pincode."
        />
        <meta property="og:title" content="EVALL Dealer Locator" />
        <meta
          property="og:description"
          content="Locate authorized EVALL commercial EV dealers across India for sales, service, and fleet solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evall.in/contact/dealer-locator" />
      </Head>
      <DealerLocatorPageComponent />
    </>
  );
}