// ============================================================================
// FILE: pages/resources/tco-calculator.js
// ============================================================================
import { getSEOForPage } from '@/lib/seo/getSEOForPage';
import SEOHead from '@/components/common/SEOHead';
import TCOCalculatorPageComponent from '@/components/pages/resources/TCOCalculator';

export async function getStaticProps() {
  const { seo } = await getSEOForPage('tco-calculator');
  
  return {
    props: { seo },
    revalidate: parseInt(process.env.SEO_REFETCH, 10) || 3600
  };
}

export default function TCOCalculatorPage({ seo }) {
  return (
    <>
      <SEOHead seo={seo} />
      <TCOCalculatorPageComponent />
    </>
  );
}