// ============================================================================
// FILE: pages/contact/request-demo.js
// ============================================================================
import { getSEOForPage } from '@/lib/seo/getSEOForPage';
import SEOHead from '@/components/common/SEOHead';
import RequestDemoPageComponent from '@/components/pages/contact/RequestDemo';

export async function getStaticProps() {
  const { seo } = await getSEOForPage('request-demo');
  
  return {
    props: { seo },
    revalidate: process.env.NEXT_PUBLIC_SEO_REFETCH
  };
}

export default function RequestDemoPage({ seo }) {
  return (
    <>
      <SEOHead seo={seo} />
      <RequestDemoPageComponent />
    </>
  );
}