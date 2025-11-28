// ============================================
// pages/resources/finance-ownership.js
// ============================================

import Head from 'next/head';
import FinanceOwnershipPageComponent from '@/components/pages/resources/FinanceOwnership';

export default function FinanceOwnershipPage() {
  return (
    <>
      <Head>
        <title>Finance & Ownership | EVALL</title>
        <meta
          name="description"
          content="Explore financing options and ownership benefits for EVALL electric vehicles. Learn about flexible payment plans, insurance, and ownership advantages."
        />
        <meta property="og:title" content="Finance & Ownership | EVALL" />
        <meta
          property="og:description"
          content="Discover financing solutions and ownership benefits for EVALL electric commercial vehicles."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evall.in/resources/finance-ownership" />
      </Head>
      <FinanceOwnershipPageComponent />
    </>
  );
}