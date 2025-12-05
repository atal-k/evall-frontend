// ============================================
// pages/what-drives-us/index.js
// ============================================

import Head from 'next/head';
import WhatDrivesUsPageComponent from '@/components/pages/what-drives-us/CompanyOverview';

export default function WhatDrivesUsPage() {
  return (
    <>
      <Head>
        <title>What Drives Us | EVALL</title>
        <meta
          name="description"
          content="Learn about EVALL's mission, vision, values, and leadership team. Discover what drives us to revolutionize electric commercial mobility in India."
        />
        <meta property="og:title" content="What Drives Us | EVALL" />
        <meta
          property="og:description"
          content="Explore EVALL's story, mission, and the team leading India's electric commercial vehicle revolution."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evall.in/what-drives-us" />
      </Head>
      <WhatDrivesUsPageComponent />
    </>
  );
}