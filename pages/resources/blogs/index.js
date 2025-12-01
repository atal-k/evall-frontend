// ============================================
// pages/resources/blogs/index.js
// ============================================

import Head from 'next/head';
import BlogsHomePageComponent from '@/components/pages/resources/blogs/BlogsHome';

export default function BlogsHomePage() {
  return (
    <>
      <Head>
        <title>Blogs | EVALL</title>
        <meta
          name="description"
          content="Explore EVALL's latest insights on electric vehicles, technological advancements, industry events, news, and expert reviews. Stay informed about the future of sustainable commercial mobility."
        />
        <meta property="og:title" content="EVALL Blogs - EV News & Insights" />
        <meta
          property="og:description"
          content="Read the latest articles on electric vehicles, technology, and sustainable transportation from EVALL."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.evall.in/resources/blogs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="EVALL Blogs" />
        <meta
          name="twitter:description"
          content="Stay updated with EVALL's insights on electric commercial vehicles and sustainable mobility."
        />
      </Head>
      <BlogsHomePageComponent />
    </>
  );
}