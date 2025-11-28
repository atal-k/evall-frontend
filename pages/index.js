// pages/index.js
import Head from 'next/head'; // ✅ NEW: Next.js Head component

// ✅ KEEP AS-IS: All component imports (update paths with @)
import Hero from '@/components/sections/Hero';
import Testimonials from '@/components/sections/Testimonials';
import Comparison from '@/components/sections/Comparison';
import Intelligence from '@/components/sections/Intelligence';
import Features from '@/components/sections/Features';
import About from '@/components/sections/About';
import Callout from '@/components/sections/Callout';
import CoreValues from '@/components/sections/CoreValues';
import TCOCalculator from '@/components/pages/TCOCalculator';

// ✅ NEW: Next.js page export with SEO
export default function HomePage() {
  return (
    <>
      <Head>
        <title>EVALL - Electric Vehicles for Last Mile Delivery</title>
        <meta name="description" content="India's leading electric SCV manufacturer" />
        <meta property="og:title" content="EVALL - Electric Vehicles" />
        <meta property="og:image" content="/images/og-home.jpg" />
      </Head>
      
      {/* ✅ KEEP AS-IS: All JSX structure */}
      <div className="app">
        <main>
          <Hero />
          <About />
          <Intelligence />
          <CoreValues />
          <Features />
          <TCOCalculator />
          <Comparison />
          <Testimonials />
          <Callout />
        </main>
      </div>
    </>
  );
}