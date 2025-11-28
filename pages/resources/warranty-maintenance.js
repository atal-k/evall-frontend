// ============================================
// pages/resources/warranty-maintenance.js
// ============================================

import Head from 'next/head';
import WarrantyMaintenancePageComponent from '@/components/pages/resources/WarrantyMaintenance';

export default function WarrantyMaintenancePage() {
  return (
    <>
      <Head>
        <title>Warranty & Maintenance | EVALL</title>
        <meta
          name="description"
          content="Learn about EVALL's comprehensive warranty coverage and maintenance programs for electric commercial vehicles. Ensure optimal performance and longevity."
        />
        <meta property="og:title" content="Warranty & Maintenance | EVALL" />
        <meta
          property="og:description"
          content="Discover EVALL's warranty terms and maintenance services to keep your electric vehicles running smoothly."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evall.in/resources/warranty-maintenance" />
      </Head>
      <WarrantyMaintenancePageComponent />
    </>
  );
}