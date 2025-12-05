// ============================================================================
// FILE: components/common/SEOHead.jsx
// ============================================================================
/**
 * Optimized SEO Head component
 * Only handles PAGE-SPECIFIC meta tags
 * Global scripts moved to _document.js
 */

import Head from 'next/head';
import Script from 'next/script';

export default function SEOHead({ seo }) {
  // Return null if no SEO data
  if (!seo) {
    console.warn('⚠️ SEOHead: No SEO data provided');
    return null;
  }

  return (
    <>
      <Head>
        {/* ========== Basic SEO Meta Tags ========== */}
        <title>{seo.page_title}</title>
        <meta name="description" content={seo.meta_description} />
        
        {/* Keywords (if provided) */}
        {seo.meta_keywords && (
          <meta name="keywords" content={seo.meta_keywords} />
        )}
        
        {/* Canonical URL (if provided) */}
        {seo.canonical_url && (
          <link rel="canonical" href={seo.canonical_url} />
        )}
        
        {/* Robots */}
        <meta name="robots" content={seo.robots_meta || 'index, follow'} />
        
        {/* ========== Open Graph Meta Tags ========== */}
        <meta property="og:title" content={seo.og_title} />
        <meta property="og:description" content={seo.og_description} />
        <meta property="og:type" content={seo.og_type || 'website'} />
        <meta property="og:url" content={seo.og_url} />
        <meta property="og:image" content={seo.og_image_url} />
        {seo.og_image_alt && (
          <meta property="og:image:alt" content={seo.og_image_alt} />
        )}
        
        {/* ========== Twitter Card Meta Tags ========== */}
        <meta name="twitter:card" content={seo.twitter_card || 'summary_large_image'} />
        <meta name="twitter:title" content={seo.twitter_title} />
        <meta name="twitter:description" content={seo.twitter_description} />
        <meta name="twitter:image" content={seo.twitter_image_url} />
        {seo.twitter_image_alt && (
          <meta name="twitter:image:alt" content={seo.twitter_image_alt} />
        )}
        {seo.twitter_site && (
          <meta name="twitter:site" content={seo.twitter_site} />
        )}
        {seo.twitter_creator && (
          <meta name="twitter:creator" content={seo.twitter_creator} />
        )}
      </Head>

      {/* ========== Page-Specific Structured Data (Schema.org JSON-LD) ========== */}
      {seo.schema && (
        <Script
          id={`schema-${seo.page_id}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seo.schema)
          }}
        />
      )}
    </>
  );
}
