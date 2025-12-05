// ============================================================================
// FILE: pages/contact/dealer-locator.js
// ============================================================================
import { getSEOForPage } from '@/lib/seo/getSEOForPage';
import SEOHead from '@/components/common/SEOHead';
import DealerLocatorPageComponent from '@/components/pages/contact/DealerLocator';

export async function getStaticProps() {
  const { seo } = await getSEOForPage('dealer-locator');
  
  return {
    props: { seo },
    revalidate: process.env.NEXT_PUBLIC_SEO_REFETCH
  };
}

export default function DealerLocatorPage({ seo }) {
  return (
    <>
      <SEOHead seo={seo} />
      <DealerLocatorPageComponent />
    </>
  );
}