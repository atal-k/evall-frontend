// ============================================================================
// FILE: /src/hooks/useCustomerSupport.js
// Hook for Customer Support Form
// ============================================================================

import { getDialCode } from '../utils/helpers';
import { useFormSubmit } from './useFormSubmit';

/**
 * Hook for customer support form submission
 * @param {Object} options - Configuration options
 * @returns {Object} - Submit function and state values
 */
export const useCustomerSupport = (options = {}) => {
  const endpoint = options.endpoint || `${process.env.NEXT_PUBLIC_API_URL}/customer-support/`;

  const transformData = (formData) => {
    return {
      name: formData.name,
      email: formData.email,
      contact_number: `${getDialCode(formData.countryCode)}-${formData.contactNumber}`,
      company_name: formData.companyName || null,
      state: formData.state,
      city: formData.city,
      vehicle_type: formData.vehicleType,
      message: formData.message,
      consent1: Boolean(formData.consent1),
      consent2: Boolean(formData.consent2),
    };
  };  

  return useFormSubmit(endpoint, {
    ...options,
    transformData,
  });
};