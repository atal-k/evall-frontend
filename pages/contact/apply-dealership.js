// ============================================================================
// FILE: pages/contact/apply-dealership.js
// ============================================================================
import { getSEOForPage } from '@/lib/seo/getSEOForPage';
import SEOHead from '@/components/common/SEOHead';
import ApplyDealershipPageComponent from '@/components/pages/contact/ApplyDealership';

export async function getStaticProps() {
  const { seo } = await getSEOForPage('apply-dealership');
  
  return {
    props: { seo },
    revalidate: process.env.NEXT_PUBLIC_SEO_REFETCH
  };
}

export default function ApplyDealershipPage({ seo }) {
  return (
    <>
      <SEOHead seo={seo} />
      <ApplyDealershipPageComponent />
    </>
  );
}