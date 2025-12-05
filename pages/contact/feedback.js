// ============================================================================
// FILE: pages/contact/feedback.js
// ============================================================================
import { getSEOForPage } from '@/lib/seo/getSEOForPage';
import SEOHead from '@/components/common/SEOHead';
import FeedbackFormPageComponent from '@/components/pages/contact/FeedbackForm';

export async function getStaticProps() {
  const { seo } = await getSEOForPage('feedback');
  
  return {
    props: { seo },
    revalidate: process.env.NEXT_PUBLIC_SEO_REFETCH
  };
}

export default function FeedbackFormPage({ seo }) {
  return (
    <>
      <SEOHead seo={seo} />
      <FeedbackFormPageComponent />
    </>
  );
}