// ============================================================================
// FILE: /@hooks/useFormSubmit.js
// Base hook for all form submissions - handles common logic
// ============================================================================

import { useState, useCallback } from 'react';
import axios from 'axios';

/**
 * Base hook for form submission with loading, error, and success states
 * @param {string} endpoint - API endpoint URL
 * @param {Object} options - Configuration options
 * @returns {Object} - Submit function and state values
 */
export const useFormSubmit = (endpoint, options = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [response, setResponse] = useState(null);

  const {
    onSuccess,
    onError,
    method = 'POST',
    headers = {},
    transformData = (data) => data,
  } = options;

  const submitForm = useCallback(
    async (formData) => {
      setIsLoading(true);
      setError(null);
      setIsSuccess(false);
      setResponse(null);

      try {
        // Transform data if needed
        const transformedData = transformData(formData);

        // Make API request
        const result = await axios({
          method,
          url: endpoint,
          data: transformedData,
          headers: {
            'Content-Type': 'application/json',
            ...headers,
          },
        });

        setResponse(result.data);
        setIsSuccess(true);

        // Call success callback if provided
        if (onSuccess) {
          onSuccess(result.data);
        }

        return { success: true, data: result.data };
      } catch (err) {
        const errorMessage =
          err.response?.data?.message ||
          err.message ||
          'Something went wrong. Please try again.';

        setError(errorMessage);

        // Call error callback if provided
        if (onError) {
          onError(errorMessage, err);
        }

        return { success: false, error: errorMessage };
      } finally {
        setIsLoading(false);
      }
    },
    [endpoint, method, headers, transformData, onSuccess, onError]
  );

  const resetForm = useCallback(() => {
    setIsLoading(false);
    setError(null);
    setIsSuccess(false);
    setResponse(null);
  }, []);

  return {
    submitForm,
    isLoading,
    error,
    isSuccess,
    response,
    resetForm,
  };
};