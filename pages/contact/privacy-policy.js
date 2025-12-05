// ============================================================================
// FILE: pages/contact/privacy-policy.js
// ============================================================================
import { getSEOForPage } from '@/lib/seo/getSEOForPage';
import SEOHead from '@/components/common/SEOHead';
import PrivacyPolicyPageComponent from '@/components/pages/contact/PrivacyPolicy';

export async function getStaticProps() {
  const { seo } = await getSEOForPage('privacy-policy');
  
  return {
    props: { seo },
    revalidate: process.env.NEXT_PUBLIC_SEO_REFETCH
  };
}

export default function PrivacyPolicyPage({ seo }) {
  return (
    <>
      <SEOHead seo={seo} />
      <PrivacyPolicyPageComponent />
    </>
  );
}