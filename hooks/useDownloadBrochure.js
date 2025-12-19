// ============================================================================
// FILE: hooks/useDownloadBrochure.js
// ============================================================================

import { getDialCode } from '../utils/helpers';
import { useFormSubmit } from './useFormSubmit';

/**
 * Hook for download brochure form submission
 * @param {Object} options - Configuration options
 * @returns {Object} - Submit function and state values
 */
export const useDownloadBrochure = (options = {}) => {
  const endpoint = options.endpoint || `${process.env.NEXT_PUBLIC_API_URL}/download-brochure/`;

  const transformData = (formData) => {
    return {
      name: formData.name,
      company_name: formData.companyName || null,
      contact_number: `${getDialCode(formData.countryCode)}-${formData.contactNumber}`,
      email: formData.email,
    };
  };

  return useFormSubmit(endpoint, {
    ...options,
    transformData,
  });
};