// ============================================
// pages/contact/disclaimers.js
// ============================================

import Head from 'next/head';
import DisclaimersPageComponent from '@/components/pages/contact/Disclaimers';

export default function DisclaimersPage() {
  return (
    <>
      <Head>
        <title>Disclaimers | EVALL</title>
        <meta
          name="description"
          content="Read EVALL's disclaimers regarding the use of our website and services. Important legal information for users."
        />
        <meta property="og:title" content="Disclaimers | EVALL" />
        <meta
          property="og:description"
          content="Legal disclaimers and important information about EVALL's website and services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evall.in/contact/disclaimers" />
      </Head>
      <DisclaimersPageComponent />
    </>
  );
}