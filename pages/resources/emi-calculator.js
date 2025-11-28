// ============================================
// pages/resources/emi-calculator.js
// ============================================

import Head from 'next/head';
import EMICalculatorPageComponent from '@/components/pages/resources/EMICalculator';

export default function EMICalculatorPage() {
  return (
    <>
      <Head>
        <title>EMI Calculator | EVALL</title>
        <meta
          name="description"
          content="Calculate your monthly EMI for EVALL electric vehicles. Plan your financing with our easy-to-use EMI calculator and make informed purchase decisions."
        />
        <meta property="og:title" content="EMI Calculator | EVALL" />
        <meta
          property="og:description"
          content="Use EVALL's EMI Calculator to estimate monthly payments and plan your electric vehicle financing."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evall.in/resources/emi-calculator" />
      </Head>
      <EMICalculatorPageComponent />
    </>
  );
}