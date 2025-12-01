// ============================================
// pages/resources/customer-stories.js
// ============================================

import Head from 'next/head';
import CustomerStoriesPageComponent from '@/components/pages/what-drives-us/CustomerStories';

export default function CustomerStoriesPage() {
  return (
    <>
      <Head>
        <title>Customer Stories | EVALL</title>
        <meta
          name="description"
          content="Discover real customer journeys with EVALL electric commercial vehicles. Read testimonials from business owners who transformed their operations with sustainable mobility solutions."
        />
        <meta property="og:title" content="Customer Stories | EVALL" />
        <meta
          property="og:description"
          content="Celebrating journeys that drive EVALL forward. Read how businesses across India are succeeding with our electric commercial vehicles."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evall.in/resources/customer-stories" />
      </Head>
      <CustomerStoriesPageComponent />
    </>
  );
}