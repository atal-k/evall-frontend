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
    revalidate: parseInt(process.env.SEO_REFETCH, 10) || 3600
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