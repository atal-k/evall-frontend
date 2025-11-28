// ============================================
// pages/services/charging-infrastructure.js
// ============================================

import Head from 'next/head';
import ChargingInfrastructurePageComponent from '@/components/pages/services/ChargingInfrastructure';

export default function ChargingInfrastructurePage() {
  return (
    <>
      <Head>
        <title>Charging Infrastructure | EVALL</title>
        <meta
          name="description"
          content="Accessible and reliable charging infrastructure for every journey. EVALL's growing network of charging stations ensures your electric vehicle is always ready for urban deliveries and long-distance travel."
        />
        <meta property="og:title" content="Charging Infrastructure | EVALL" />
        <meta
          property="og:description"
          content="Explore EVALL's comprehensive charging infrastructure and partnerships for seamless electric vehicle operations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evall.in/services/charging-infrastructure" />
      </Head>
      <ChargingInfrastructurePageComponent />
    </>
  );
}