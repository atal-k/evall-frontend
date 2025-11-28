// ============================================
// pages/technology/vehicle-intelligence.js
// ============================================

import Head from 'next/head';
import VehicleIntelligencePageComponent from '@/components/pages/technology/VehicleIntelligence';

export default function VehicleIntelligencePage() {
  return (
    <>
      <Head>
        <title>Vehicle Intelligence | EVALL</title>
        <meta
          name="description"
          content="Building advanced new age vehicles for the future. EVALL's intelligent cloud-powered platform keeps every vehicle smarter, safer, and stronger with AI-based telematics."
        />
        <meta property="og:title" content="Advanced Vehicle Intelligence | EVALL" />
        <meta
          property="og:description"
          content="Explore EVALL's advanced vehicle intelligence systems with real-time telematics, AI technology, and fleet management solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evall.in/technology/vehicle-intelligence" />
      </Head>
      <VehicleIntelligencePageComponent />
    </>
  );
}