// ============================================================================
// FILE: pages/resources/finance-ownership.js
// ============================================================================
import { getSEOForPage } from '@/lib/seo/getSEOForPage';
import SEOHead from '@/components/common/SEOHead';
import FinanceOwnershipPageComponent from '@/components/pages/resources/FinanceOwnership';

export async function getStaticProps() {
  const { seo } = await getSEOForPage('finance-ownership');
  
  return {
    props: { seo },
    revalidate: process.env.NEXT_PUBLIC_SEO_REFETCH
  };
}

export default function FinanceOwnershipPage({ seo }) {
  return (
    <>
      <SEOHead seo={seo} />
      <FinanceOwnershipPageComponent />
    </>
  );
}