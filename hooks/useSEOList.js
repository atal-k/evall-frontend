// ============================================================================
// FILE: hooks/useSEOList.js
// ============================================================================
/**
 * Custom hook for fetching list of SEO tags
 * Usage: const { seoList, loading, error, refetch } = useSEOList({ page: 1 });
 */
import { useState, useEffect, useCallback } from 'react';
import seoApi from '@/services/seoApi';

export function useSEOList(params = {}) {
  const [seoList, setSEOList] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSEOList = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await seoApi.getAll(params);
      setSEOList(data.results || []);
      setCount(data.count || 0);
    } catch (err) {
      setError(err);
      setSEOList([]);
      setCount(0);
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    fetchSEOList();
  }, [fetchSEOList]);

  return { seoList, count, loading, error, refetch: fetchSEOList };
}