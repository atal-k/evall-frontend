  // ============================================================================
  // FILE: lib/seo/fetchFullSEO.js
  // ============================================================================
  /**
   * Server-side SEO data fetcher
   * Fetches all SEO tags from Django backend in single API call
   */
  
  import api from '@/services/api';
  import { defaultSEOData } from './defaultSEOData';
  import { getCache, setCache, hasCache } from './seoCache';
  
  /**
   * Fetch complete SEO data from backend
   * Uses cache if available, falls back to defaults on error
   * @returns {Promise<Object>} { seoMap, advancedSEO }
   */
  export async function fetchFullSEO() {
    // Return cached data if available (build optimization)
    if (hasCache()) {
      const cached = getCache();
      console.log('✅ Using cached SEO data');
      return {
        seoMap: cached.seoMap,
        advancedSEO: cached.advancedSEO
      };
    }
  
    try {
      console.log('🔄 Fetching SEO data from /seo/full-seo/...');
      
      // Fetch complete SEO data from backend
      const response = await api.get('/seo/full-seo/');
      const { seo_tags, advanced_seo } = response.data;
  
      // Transform array to map for O(1) lookup: { "home": {...}, "e-scv": {...} }
      const seoMap = {};
      seo_tags.forEach(tag => {
        seoMap[tag.page_id] = tag;
      });
  
      console.log(`✅ Fetched SEO data for ${seo_tags.length} pages`);
  
      // Cache for subsequent getStaticProps calls during build
      setCache(seoMap, advanced_seo);
  
      return {
        seoMap,
        advancedSEO: advanced_seo
      };
  
    } catch (error) {
      console.error('❌ SEO fetch failed:', error.message);
      console.log('📋 Falling back to defaultSEOData.js');
      
      // Fallback to local default data
      return {
        seoMap: defaultSEOData.seo_tags_map || {},
        advancedSEO: defaultSEOData.advanced_seo || {}
      };
    }
  }