// ============================================
// pages/contact/privacy-policy.js
// ============================================

import Head from 'next/head';
import PrivacyPolicyPageComponent from '@/components/pages/contact/PrivacyPolicy';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | EVALL</title>
        <meta
          name="description"
          content="EVALL's privacy policy outlines how we collect, use, and protect your personal information. Learn about our commitment to data security."
        />
        <meta property="og:title" content="Privacy Policy | EVALL" />
        <meta
          property="og:description"
          content="Read EVALL's comprehensive privacy policy and understand how we handle your data."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evall.in/contact/privacy-policy" />
      </Head>
      <PrivacyPolicyPageComponent />
    </>
  );
}
