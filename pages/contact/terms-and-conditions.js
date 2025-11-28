// ============================================
// pages/contact/terms-and-conditions.js
// ============================================

import Head from 'next/head';
import TermsConditionsPageComponent from '@/components/pages/contact/TermsConditions';

export default function TermsConditionsPage() {
  return (
    <>
      <Head>
        <title>Terms and Conditions | EVALL</title>
        <meta
          name="description"
          content="Review EVALL's terms and conditions for using our website and services. Important legal terms governing your use of our platform."
        />
        <meta property="og:title" content="Terms and Conditions | EVALL" />
        <meta
          property="og:description"
          content="Read the terms and conditions that govern the use of EVALL's website and services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evall.in/contact/terms-and-conditions" />
      </Head>
      <TermsConditionsPageComponent />
    </>
  );
}