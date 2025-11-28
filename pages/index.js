// ============================================
// pages/index.js
// ============================================

import Head from 'next/head';
import HomePageComponent from '@/components/pages/Home';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>EVALL - Smart Electric Commercial Vehicles for India</title>
        <meta
          name="description"
          content="India's leading electric commercial vehicle manufacturer. Discover EVALL's smart SCVs for last-mile delivery with advanced vehicle intelligence, sustainable mobility solutions, and comprehensive after-sales support."
        />
        <meta property="og:title" content="EVALL - Electric Commercial Vehicles" />
        <meta
          property="og:description"
          content="Revolutionizing last-mile delivery with smart electric commercial vehicles. Experience sustainable, efficient, and intelligent mobility solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evall.in" />
        <meta property="og:image" content="https://www.evall.in/images/og-home.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EVALL - Electric Commercial Vehicles" />
        <meta
          name="twitter:description"
          content="India's leading electric SCV manufacturer for sustainable last-mile delivery."
        />
        <meta name="twitter:image" content="https://www.evall.in/images/og-home.jpg" />
      </Head>
      <HomePageComponent />
    </>
  );
}