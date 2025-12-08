// ============================================================================
// FILE: pages/resources/blogs/index.js
// ============================================================================
import { getSEOForPage } from '@/lib/seo/getSEOForPage';
import SEOHead from '@/components/common/SEOHead';
import BlogsHomePageComponent from '@/components/pages/resources/blogs/BlogsHome';

export async function getStaticProps() {
  const { seo } = await getSEOForPage('blogs');
  
  return {
    props: { seo },
    revalidate: parseInt(process.env.SEO_REFETCH, 10) || 3600
  };
}

export default function BlogsHomePage({ seo }) {
  return (
    <>
      <SEOHead seo={seo} />
      <BlogsHomePageComponent />
    </>
  );
}