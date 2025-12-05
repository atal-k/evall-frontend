// ============================================================================
// FILE: pages/network/charging-infrastructure.js
// ============================================================================
import { getSEOForPage } from '@/lib/seo/getSEOForPage';
import SEOHead from '@/components/common/SEOHead';
import ChargingInfrastructurePageComponent from '@/components/pages/network/ChargingInfrastructure';

export async function getStaticProps() {
  const { seo } = await getSEOForPage('charging-infrastructure');
  
  return {
    props: { seo },
    revalidate: process.env.NEXT_PUBLIC_SEO_REFETCH
  };
}

export default function ChargingInfrastructurePage({ seo }) {
  return (
    <>
      <SEOHead seo={seo} />
      <ChargingInfrastructurePageComponent />
    </>
  );
}