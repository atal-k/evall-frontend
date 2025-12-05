// ============================================================================
// FILE: pages/resources/customer-stories.js
// ============================================================================
import { getSEOForPage } from '@/lib/seo/getSEOForPage';
import SEOHead from '@/components/common/SEOHead';
import CustomerStoriesPageComponent from '@/components/pages/what-drives-us/CustomerStories';

export async function getStaticProps() {
  const { seo } = await getSEOForPage('customer-stories');
  
  return {
    props: { seo },
    revalidate: process.env.NEXT_PUBLIC_SEO_REFETCH
  };
}

export default function CustomerStoriesPage({ seo }) {
  return (
    <>
      <SEOHead seo={seo} />
      <CustomerStoriesPageComponent />
    </>
  );
}