// ============================================================================
// FILE: pages/technology/vehicle-intelligence.js
// ============================================================================
import { getSEOForPage } from '@/lib/seo/getSEOForPage';
import SEOHead from '@/components/common/SEOHead';
import VehicleIntelligencePageComponent from '@/components/pages/tech-innovation/VehicleIntelligence';

export async function getStaticProps() {
  const { seo } = await getSEOForPage('vehicle-intelligence');
  
  return {
    props: { seo },
    revalidate: process.env.NEXT_PUBLIC_SEO_REFETCH
  };
}

export default function VehicleIntelligencePage({ seo }) {
  return (
    <>
      <SEOHead seo={seo} />
      <VehicleIntelligencePageComponent />
    </>
  );
}