// ============================================================================
// FILE: /@hooks/useTestDriveBooking.js
// Hook for Test Drive Booking Form
// ============================================================================

import { getDialCode } from '../utils/helpers';
import { useFormSubmit } from './useFormSubmit';

/**
 * Hook for test drive booking form submission
 * @param {Object} options - Configuration options
 * @returns {Object} - Submit function and state values
 */
export const useTestDriveBooking = (options = {}) => {
  const endpoint = options.endpoint || `${process.env.NEXT_PUBLIC_API_URL}/testdrive-booking/`;

  const transformData = (formData) => {
    return {
      name: formData.name,
      company_name: formData.companyName || null,
      contact_number: `${getDialCode(formData.countryCode)}-${formData.contactNumber}`,
      email: formData.email,
      state: formData.state,
      city: formData.city,
      vehicle_types: Array.isArray(formData.vehicleTypes) ? formData.vehicleTypes : [],
      vehicle_other: formData.vehicleOther || null,
      time_slot: formData.timeSlot,
      business_segment: formData.businessSegment,
      business_segment_other: formData.businessSegmentOther || null,
      consent: Boolean(formData.consent),
      test_drive_date: formData.testDriveDate,
    };
  };

  return useFormSubmit(endpoint, {
    ...options,
    transformData,
  });
};
