// ============================================================================
// FILE: /src/hooks/useRequestDemo.js
// Hook for Product Enquiry Form
// ============================================================================

import { getDialCode } from '../utils/helpers';
import { useFormSubmit } from './useFormSubmit';

/**
 * Hook for product enquiry form submission
 * @param {Object} options - Configuration options
 * @returns {Object} - Submit function and state values
 */
export const useRequestDemo = (options = {}) => {
  const endpoint = options.endpoint || `${process.env.NEXT_PUBLIC_API_URL}/request-demo/`;

  const transformData = (formData) => {
    return {
      name: formData.name,
      company_name: formData.companyName,
      designation: formData.designation,
      contact_number: `${getDialCode(formData.countryCode)}-${formData.contactNumber}`,
      alternate_number: formData.alternateNumber 
        ? `${getDialCode(formData.countryCode)}-${formData.alternateNumber}` 
        : null,
      email: formData.email,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      vehicle_types: Array.isArray(formData.vehicleTypes) ? formData.vehicleTypes : [],
      vehicle_other: formData.vehicleOther || null,
      applications: Array.isArray(formData.applications) ? formData.applications : [],
      application_other: formData.applicationOther || null,
      fleet_size: formData.fleetSize,
      timeline: formData.timeline,
      procurement_mode: formData.procurementMode,
      additional_info: formData.additionalInfo || null,
      consent: Boolean(formData.consent),
      requested_date: formData.date,
    };
  };

  return useFormSubmit(endpoint, {
    ...options,
    transformData,
  });
};