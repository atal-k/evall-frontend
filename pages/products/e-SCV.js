// ============================================================================
// FILE: pages/products/e-SCV.js
// ============================================================================
import { getSEOForPage } from '@/lib/seo/getSEOForPage';
import SEOHead from '@/components/common/SEOHead';
import ESCVPageComponent from '@/components/pages/products/ESCV';

export async function getStaticProps() {
  const { seo } = await getSEOForPage('e-scv');
  
  return {
    props: { seo },
    revalidate: parseInt(process.env.SEO_REFETCH, 10) || 3600
  };
}

export default function eSCVPage({ seo }) {
  return (
    <>
      <SEOHead seo={seo} />
      <ESCVPageComponent />
    </>
  );
}