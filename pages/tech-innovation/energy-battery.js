// ============================================================================
// FILE: pages/technology/energy-battery.js
// ============================================================================
import { getSEOForPage } from '@/lib/seo/getSEOForPage';
import SEOHead from '@/components/common/SEOHead';
import EnergyBatteryPageComponent from '@/components/pages/tech-innovation/EnergyBattery';

export async function getStaticProps() {
  const { seo } = await getSEOForPage('energy-battery');
  
  return {
    props: { seo },
    revalidate: process.env.NEXT_PUBLIC_SEO_REFETCH
  };
}

export default function EnergyBatteryPage({ seo }) {
  return (
    <>
      <SEOHead seo={seo} />
      <EnergyBatteryPageComponent />
    </>
  );
}