// ============================================================================
// FILE: hooks/useSEO.js
// ============================================================================
/**
 * Custom hook for fetching SEO tags by page_id
 * Usage: const { seo, loading, error } = useSEO('home');
 */
import { useState, useEffect } from 'react';
import seoApi from '@/services/seoApi';

export function useSEO(pageId) {
  const [seo, setSEO] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!pageId) {
      setLoading(false);
      return;
    }

    const fetchSEO = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await seoApi.getByPageId(pageId);
        setSEO(data);
      } catch (err) {
        setError(err);
        setSEO(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSEO();
  }, [pageId]);

  return { seo, loading, error };
}