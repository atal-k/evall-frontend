// ============================================================================
// FILE: pages/safety-compliance.js
// ============================================================================
import { getSEOForPage } from '@/lib/seo/getSEOForPage';
import SEOHead from '@/components/common/SEOHead';
import SafetyCompliancePageComponent from '@/components/pages/tech-innovation/SafetyCompliance';

export async function getStaticProps() {
  const { seo } = await getSEOForPage('safety-compliance');
  
  return {
    props: { seo },
    revalidate: process.env.NEXT_PUBLIC_SEO_REFETCH
  };
}

export default function SafetyCompliancePage({ seo }) {
  return (
    <>
      <SEOHead seo={seo} />
      <SafetyCompliancePageComponent />
    </>
  );
}