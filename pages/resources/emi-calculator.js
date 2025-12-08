// ============================================================================
// FILE: pages/resources/emi-calculator.js
// ============================================================================
import { getSEOForPage } from '@/lib/seo/getSEOForPage';
import SEOHead from '@/components/common/SEOHead';
import EMICalculatorPageComponent from '@/components/pages/resources/EMICalculator';

export async function getStaticProps() {
  const { seo } = await getSEOForPage('emi-calculator');
  
  return {
    props: { seo },
    revalidate: parseInt(process.env.SEO_REFETCH, 10) || 3600
  };
}

export default function EMICalculatorPage({ seo }) {
  return (
    <>
      <SEOHead seo={seo} />
      <EMICalculatorPageComponent />
    </>
  );
}