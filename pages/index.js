// ============================================================================
// FILE: pages/index.js
// ============================================================================
/**
 * Homepage - Simple, clean implementation
 * Only passes page-specific SEO (advancedSEO handled by _app.js)
 */

import { getSEOForPage } from '@/lib/seo/getSEOForPage';
import SEOHead from '@/components/common/SEOHead';
import HomePageComponent from '@/components/pages/Home';

export async function getStaticProps() {
  // Fetch only page-specific SEO (uses cache)
  const { seo } = await getSEOForPage('home');
  
  return {
    props: { seo },
    revalidate: 3600
  };
}

export default function HomePage({ seo }) {
  return (
    <>
      <SEOHead seo={seo} />
      <HomePageComponent />
    </>
  );
}