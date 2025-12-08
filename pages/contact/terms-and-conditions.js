// ============================================================================
// FILE: pages/contact/terms-and-conditions.js
// ============================================================================
import { getSEOForPage } from '@/lib/seo/getSEOForPage';
import SEOHead from '@/components/common/SEOHead';
import TermsConditionsPageComponent from '@/components/pages/contact/TermsConditions';

export async function getStaticProps() {
  const { seo } = await getSEOForPage('terms-and-conditions');
  
  return {
    props: { seo },
    revalidate: parseInt(process.env.SEO_REFETCH, 10) || 3600
  };
}

export default function TermsConditionsPage({ seo }) {
  return (
    <>
      <SEOHead seo={seo} />
      <TermsConditionsPageComponent />
    </>
  );
}