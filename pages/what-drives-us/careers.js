// ============================================================================
// FILE: pages/what-drives-us/careers.js
// ============================================================================
import { getSEOForPage } from '@/lib/seo/getSEOForPage';
import SEOHead from '@/components/common/SEOHead';
import CareersPageComponent from '@/components/pages/what-drives-us/Careers';

export async function getStaticProps() {
  const { seo } = await getSEOForPage('careers');
  
  return {
    props: { seo },
    revalidate: parseInt(process.env.SEO_REFETCH, 10) || 3600
  };
}

export default function CareersPage({ seo }) {
  return (
    <>
      <SEOHead seo={seo} />
      <CareersPageComponent />
    </>
  );
}