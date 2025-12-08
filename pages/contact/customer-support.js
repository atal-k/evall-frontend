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
    revalidate: parseInt(process.env.SEO_REFETCH, 10) || 3600
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