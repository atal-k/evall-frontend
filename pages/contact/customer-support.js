// ============================================================================
// FILE: pages/contact/customer-support.js
// ============================================================================
import { getSEOForPage } from '@/lib/seo/getSEOForPage';
import SEOHead from '@/components/common/SEOHead';
import CustomerSupportPageComponent from '@/components/pages/contact/CustomerSupport';

export async function getStaticProps() {
  const { seo } = await getSEOForPage('customer-support');
  
  return {
    props: { seo },
    revalidate: process.env.NEXT_PUBLIC_SEO_REFETCH
  };
}

export default function CustomerSupportPage({ seo }) {
  return (
    <>
      <SEOHead seo={seo} />
      <CustomerSupportPageComponent />
    </>
  );
}