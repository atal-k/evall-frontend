// ============================================================================
// FILE: lib/seo/seoCache.js
// ============================================================================
/**
 * In-memory singleton cache for SEO data
 * Stores fetched data to avoid multiple API calls during build
 */

let seoCache = {
    seoMap: null,        // Map of page_id → SEO data
    advancedSEO: null,   // Global advanced SEO settings
    timestamp: null      // Cache timestamp
  };
  
  /**
   * Get cached SEO data
   * @returns {Object} Cached SEO data or null
   */
  export function getCache() {
    return seoCache;
  }
  
  /**
   * Set SEO cache
   * @param {Object} seoMap - Map of SEO tags by page_id
   * @param {Object} advancedSEO - Advanced SEO settings
   */
  export function setCache(seoMap, advancedSEO) {
    seoCache = {
      seoMap,
      advancedSEO,
      timestamp: Date.now()
    };
    console.log('✅ SEO cache updated at:', new Date(seoCache.timestamp).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));
  }
  
  /**
   * Check if cache exists
   * @returns {boolean} True if cache has data
   */
  export function hasCache() {
    return seoCache.seoMap !== null;
  }
  
  /**
   * Clear cache (for testing/debugging)
   */
  export function clearCache() {
    seoCache = {
      seoMap: null,
      advancedSEO: null,
      timestamp: null
    };
    console.log('🗑️ SEO cache cleared');
  }
  