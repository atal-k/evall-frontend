// ============================================
// pages/what-drives-us/careers.js
// ============================================

import Head from 'next/head';
import CareersPageComponent from '@/components/pages/what-drives-us/Careers';

export default function CareersPage() {
  return (
    <>
      <Head>
        <title>Careers | EVALL</title>
        <meta
          name="description"
          content="Join EVALL's team and be part of the electric mobility revolution. Explore career opportunities and help build the future of sustainable commercial transportation."
        />
        <meta property="og:title" content="Careers at EVALL" />
        <meta
          property="og:description"
          content="Discover exciting career opportunities at EVALL. Join our mission to transform commercial transportation with electric vehicles."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evall.in/what-drives-us/careers" />
      </Head>
      <CareersPageComponent />
    </>
  );
}