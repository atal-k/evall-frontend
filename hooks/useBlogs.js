// ============================================================================
// FILE: /src/hooks/useBlogs.js
// ============================================================================

import { useState, useEffect } from 'react';
import localBlogApi from '@/services/localBlogApi';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api';
const USE_LOCAL_DATA = process.env.NEXT_PUBLIC_USE_LOCAL_DATA === 'true';

// Generic fetch hook with local data support
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Use local data if flag is enabled
        if (USE_LOCAL_DATA) {
          // Simulate network delay for realistic UX
          await new Promise(resolve => setTimeout(resolve,0));
          const result = localBlogApi.handleRequest(url);
          setData(result);
          setError(null);
        } else {
          // Use remote API
          const response = await fetch(`${API_BASE}${url}`);
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          const result = await response.json();
          setData(result);
          setError(null);
        }
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

// Hook: Get all blogs
export const useBlogs = () => {
  return useFetch('/blogs/');
};

// Hook: Get blog by slug
export const useBlogBySlug = (slug) => {
  return useFetch(slug ? `/blogs/${slug}/` : null);
};

// Hook: Get featured blogs
export const useFeaturedBlogs = () => {
  return useFetch('/blogs/featured/');
};

// Hook: Get latest blogs
export const useLatestBlogs = () => {
  return useFetch('/blogs/latest/');
};

// Hook: Get blogs by category
export const useBlogsByCategory = (category) => {
  return useFetch(category ? `/blogs/by_category/?category=${category}` : null);
};