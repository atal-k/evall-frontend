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
    revalidate: process.env.NEXT_PUBLIC_SEO_REFETCH
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