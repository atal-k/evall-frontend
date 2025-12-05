// ============================================================================
// FILE: pages/contact/disclaimers.js
// ============================================================================
import { getSEOForPage } from '@/lib/seo/getSEOForPage';
import SEOHead from '@/components/common/SEOHead';
import DisclaimersPageComponent from '@/components/pages/contact/Disclaimers';

export async function getStaticProps() {
  const { seo } = await getSEOForPage('disclaimers');
  
  return {
    props: { seo },
    revalidate: process.env.NEXT_PUBLIC_SEO_REFETCH
  };
}

export default function DisclaimersPage({ seo }) {
  return (
    <>
      <SEOHead seo={seo} />
      <DisclaimersPageComponent />
    </>
  );
}