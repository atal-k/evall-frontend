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
    revalidate: parseInt(process.env.SEO_REFETCH, 10) || 3600
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