// ============================================
// pages/resources/blogs/[slug].js
// ============================================

import Head from 'next/head';
import { useRouter } from 'next/router';
import BlogPageComponent from '@/components/pages/resources/blogs/BlogsPage';
import { useBlogBySlug } from '@/hooks/useBlogs';

export default function BlogPage() {
  const router = useRouter();
  const { slug } = router.query;
  const { data: blog } = useBlogBySlug(slug);

  // Dynamic SEO based on blog data
  const pageTitle = blog ? `${blog.title} | EVALL Blog` : 'Blog Post | EVALL';
  const pageDescription = blog?.excerpt || blog?.meta_description || 'Read the latest from EVALL.';
  const pageImage = blog?.featured_image_url || 'https://www.evall.in/images/og-blog-default.jpg';
  const pageUrl = `https://www.evall.in/resources/blogs/${slug}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={pageImage} />
        {blog?.published_at && (
          <meta property="article:published_time" content={blog.published_at} />
        )}
        {blog?.author && <meta property="article:author" content={blog.author} />}
        {blog?.tag_list && blog.tag_list.map((tag, idx) => (
          <meta key={idx} property="article:tag" content={tag} />
        ))}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
      </Head>
      <BlogPageComponent slug={slug} />
    </>
  );
}
