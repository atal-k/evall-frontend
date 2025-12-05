// ============================================================================
// FILE: pages/what-drives-us/company-overview.js
// ============================================================================
import { getSEOForPage } from '@/lib/seo/getSEOForPage';
import SEOHead from '@/components/common/SEOHead';
import CompanyOverviewPageComponent from '@/components/pages/what-drives-us/CompanyOverview';

export async function getStaticProps() {
  const { seo } = await getSEOForPage('company-overview');
  
  return {
    props: { seo },
    revalidate: process.env.NEXT_PUBLIC_SEO_REFETCH
  };
}

export default function CompanyOverviewPage({ seo }) {
  return (
    <>
      <SEOHead seo={seo} />
      <CompanyOverviewPageComponent />
    </>
  );
}