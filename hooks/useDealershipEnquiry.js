// ============================================================================
// FILE: /@hooks/useDealershipEnquiry.js
// Hook for Dealership Enquiry Form
// ============================================================================

import { getDialCode } from '../utils/helpers';
import { useFormSubmit } from './useFormSubmit';

/**
 * Hook for dealership enquiry form submission
 * @param {Object} options - Configuration options
 * @returns {Object} - Submit function and state values
 */
export const useDealershipEnquiry = (options = {}) => {
  const endpoint = options.endpoint || `${process.env.NEXT_PUBLIC_API_URL}/dealership-enquiry/`;

  const transformData = (formData) => {
    return {
      name: formData.name,
      company_name: formData.companyName,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      pincode: formData.pincode,
      contact_number: `${getDialCode(formData.countryCode)}-${formData.contactNumber}`,
      alternate_number: formData.alternateNumber 
        ? `${getDialCode(formData.countryCode)}-${formData.alternateNumber}` 
        : null,
      email: formData.email,
      website: formData.website || null,
      current_business: formData.currentBusiness,
      experience: Number(formData.experience),
      proposed_territory: formData.proposedTerritory,
      firm_turnover: Number(formData.firmTurnover),
      investment_capacity: Number(formData.investmentCapacity),
      infrastructure: Array.isArray(formData.infrastructure) ? formData.infrastructure : [],
      reason_for_interest: formData.reasonForInterest,
      other_info: formData.otherInfo || null,
    };
  };

  return useFormSubmit(endpoint, {
    ...options,
    transformData,
  });
};