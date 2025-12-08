// ============================================================================
// FILE: pages/network/after-sales.js
// ============================================================================
import { getSEOForPage } from '@/lib/seo/getSEOForPage';
import SEOHead from '@/components/common/SEOHead';
import AfterSalesServicePageComponent from '@/components/pages/network/AfterSalesService';

export async function getStaticProps() {
  const { seo } = await getSEOForPage('after-sales');
  
  return {
    props: { seo },
    revalidate: parseInt(process.env.SEO_REFETCH, 10) || 3600
  };
}

export default function AfterSalesServicePage({ seo }) {
  return (
    <>
      <SEOHead seo={seo} />
      <AfterSalesServicePageComponent />
    </>
  );
}