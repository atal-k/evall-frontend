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
    revalidate: parseInt(process.env.SEO_REFETCH, 10) || 3600
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