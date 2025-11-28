// ============================================
// pages/resources/tco-calculator.js
// ============================================

import Head from 'next/head';
import TCOCalculatorPageComponent from '@/components/pages/tools/TCOCalculator';

export default function TCOCalculatorPage() {
  return (
    <>
      <Head>
        <title>TCO Calculator | EVALL</title>
        <meta
          name="description"
          content="Calculate Total Cost of Ownership and understand why electric vehicles are more efficient compared to ICE vehicles. Compare yearly cost breakdown between EV and traditional vehicles."
        />
        <meta property="og:title" content="TCO Calculator | EVALL" />
        <meta
          property="og:description"
          content="Use EVALL's TCO Calculator to compare electric vehicle costs against traditional ICE vehicles and make informed business decisions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evall.in/tools/tco-calculator" />
      </Head>
      <TCOCalculatorPageComponent />
    </>
  );
}
