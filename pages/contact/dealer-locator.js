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
    revalidate: parseInt(process.env.SEO_REFETCH, 10) || 3600
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