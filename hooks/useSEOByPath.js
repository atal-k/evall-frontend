// ============================================================================
// FILE: hooks/useSEOByPath.js
// ============================================================================
/**
 * Custom hook for fetching SEO tags by URL path
 * Usage: const { seo, loading, error } = useSEOByPath('/about');
 */
import { useState, useEffect } from 'react';
import seoApi from '@/services/seoApi';

export function useSEOByPath(path) {
  const [seo, setSEO] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!path) {
      setLoading(false);
      return;
    }

    const fetchSEO = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await seoApi.getByPath(path);
        setSEO(data);
      } catch (err) {
        setError(err);
        setSEO(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSEO();
  }, [path]);

  return { seo, loading, error };
}