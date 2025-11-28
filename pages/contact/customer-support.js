// ============================================
// pages/contact/customer-support.js
// ============================================

import Head from 'next/head';
import CustomerSupportPageComponent from '@/components/pages/contact/CustomerSupport';

export default function CustomerSupportPage() {
  return (
    <>
      <Head>
        <title>Customer Support | EVALL</title>
        <meta
          name="description"
          content="Need assistance with EVALL commercial EVs? Connect with our customer support team for service help, product details, and ownership guidance."
        />
        <meta property="og:title" content="EVALL Customer Support" />
        <meta
          property="og:description"
          content="Get personalized assistance from EVALL specialists for products, services, and electric fleet transition."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evall.in/contact/customer-support" />
      </Head>
      <CustomerSupportPageComponent />
    </>
  );
}