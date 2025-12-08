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
    revalidate: parseInt(process.env.SEO_REFETCH, 10) || 3600
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