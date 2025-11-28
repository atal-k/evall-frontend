// ============================================
// pages/resources/downloads.js
// ============================================

import Head from 'next/head';
import DownloadsPageComponent from '@/components/pages/resources/Downloads';

export default function DownloadsPage() {
  return (
    <>
      <Head>
        <title>Downloads | EVALL</title>
        <meta
          name="description"
          content="Download brochures, technical specifications, user manuals, and other resources for EVALL electric commercial vehicles."
        />
        <meta property="og:title" content="Downloads | EVALL" />
        <meta
          property="og:description"
          content="Access downloadable resources including product brochures, specifications, and documentation for EVALL vehicles."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evall.in/resources/downloads" />
      </Head>
      <DownloadsPageComponent />
    </>
  );
}