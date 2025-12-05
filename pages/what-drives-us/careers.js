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
    revalidate: process.env.NEXT_PUBLIC_SEO_REFETCH
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