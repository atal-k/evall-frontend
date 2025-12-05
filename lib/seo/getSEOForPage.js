  // ============================================================================
  // FILE: lib/seo/getSEOForPage.js
  // ============================================================================
  /**
   * Get SEO data for a specific page
   * Fetches full SEO data (uses cache) and returns page-specific data
   */
  
  import { fetchFullSEO } from './fetchFullSEO';
  import { defaultSEOData } from './defaultSEOData';
  
  /**
   * Get SEO data for a specific page by page_id
   * @param {string} pageId - Page identifier (e.g., 'home', 'company-overview')
   * @returns {Promise<Object>} { seo, advancedSEO }
   */
  export async function getSEOForPage(pageId) {
    // Fetch complete SEO data (uses cache after first call)
    const { seoMap, advancedSEO } = await fetchFullSEO();
    
    // Get page-specific SEO data
    let seo = seoMap[pageId];
    
    // Fallback to default if not found in API response
    if (!seo && defaultSEOData.seo_tags_map) {
      console.warn(`⚠️ SEO not found for page_id: ${pageId}, using default`);
      seo = defaultSEOData.seo_tags_map[pageId];
    }
    
    // Final fallback with minimal data
    if (!seo) {
      console.error(`❌ No SEO data found for page_id: ${pageId}`);
      seo = {
        page_id: pageId,
        page_title: 'EVALL - Electric Commercial Vehicles',
        meta_description: 'Leading electric vehicle manufacturer in India',
        og_title: 'EVALL',
        og_description: 'Electric Commercial Vehicles',
        og_type: 'website',
        og_url: 'https://www.evall.in',
        og_image_url: 'https://www.evall.in/images/og-default.jpg',
        twitter_card: 'summary_large_image',
        twitter_title: 'EVALL',
        twitter_description: 'Electric Commercial Vehicles',
        twitter_image_url: 'https://www.evall.in/images/og-default.jpg',
        robots_meta: 'index, follow'
      };
    }
    
    return { seo, advancedSEO };
  }