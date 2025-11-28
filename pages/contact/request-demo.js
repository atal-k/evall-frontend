// ============================================
// pages/contact/request-demo.js
// ============================================

import Head from 'next/head';
import RequestDemoPageComponent from '@/components/pages/contact/RequestDemo';

export default function RequestDemoPage() {
  return (
    <>
      <Head>
        <title>Request a Demo | EVALL</title>
        <meta
          name="description"
          content="Experience the future of electric mobility with a test drive. Request a demo of EVALL's smart electric commercial vehicles today."
        />
        <meta property="og:title" content="Request a Demo | EVALL" />
        <meta
          property="og:description"
          content="Test drive EVALL's electric commercial vehicles and discover sustainable mobility solutions for your business."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evall.in/contact/request-demo" />
      </Head>
      <RequestDemoPageComponent />
    </>
  );
}