// ============================================================================
// FILE: pages/resources/downloads.js
// ============================================================================
import { getSEOForPage } from '@/lib/seo/getSEOForPage';
import SEOHead from '@/components/common/SEOHead';
import DownloadsPageComponent from '@/components/pages/resources/Downloads';

export async function getStaticProps() {
  const { seo } = await getSEOForPage('downloads');
  
  return {
    props: { seo },
    revalidate: process.env.NEXT_PUBLIC_SEO_REFETCH
  };
}

export default function DownloadsPage({ seo }) {
  return (
    <>
      <SEOHead seo={seo} />
      <DownloadsPageComponent />
    </>
  );
}