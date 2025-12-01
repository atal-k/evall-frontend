// ============================================
// pages/technology/energy-battery.js
// ============================================

import Head from 'next/head';
import EnergyBatteryPageComponent from '@/components/pages/tech/EnergyBattery';

export default function EnergyBatteryPage() {
  return (
    <>
      <Head>
        <title>Energy & Battery Technology | EVALL</title>
        <meta
          name="description"
          content="Discover EVALL's advanced energy and battery technology powering the future of electric mobility. Innovative solutions for efficient, sustainable commercial vehicles."
        />
        <meta property="og:title" content="Energy & Battery Technology | EVALL" />
        <meta
          property="og:description"
          content="Explore cutting-edge battery technology and energy solutions that power EVALL's electric commercial vehicles."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evall.in/technology/energy-battery" />
      </Head>
      <EnergyBatteryPageComponent />
    </>
  );
}