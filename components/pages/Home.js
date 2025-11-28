// ============================================
// components/pages/Home.js
// ============================================

import React from 'react';
import Hero from '@/components/sections/Hero';
import Testimonials from '@/components/sections/Testimonials';
import Comparison from '@/components/sections/Comparison';
import Intelligence from '@/components/sections/Intelligence';
import Features from '@/components/sections/Features';
import About from '@/components/sections/About';
import Callout from '@/components/sections/Callout';
import CoreValues from '@/components/sections/CoreValues';
import TCOCalculator from '@/components/pages/tools/TCOCalculator';

const HomePageComponent = () => {
  return (
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
  );
};

export default HomePageComponent;