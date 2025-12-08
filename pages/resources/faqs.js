// ============================================================================
// FILE: pages/resources/faqs.js
// ============================================================================
import { getSEOForPage } from '@/lib/seo/getSEOForPage';
import SEOHead from '@/components/common/SEOHead';
import FAQPageComponent from '@/components/pages/resources/FAQ';

export async function getStaticProps() {
  const { seo } = await getSEOForPage('faqs');
  
  return {
    props: { seo },
    revalidate: parseInt(process.env.SEO_REFETCH, 10) || 3600
  };
}

export default function FAQPage({ seo }) {
  return (
    <>
      <SEOHead seo={seo} />
      <FAQPageComponent />
    </>
  );
}