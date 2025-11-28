// ============================================================================
// FILE: /src/hooks/useCustomerFeedback.js
// Hook for Customer Feedback Form
// ============================================================================

import { getDialCode } from '../utils/helpers';
import { useFormSubmit } from './useFormSubmit';

/**
 * Hook for customer feedback form submission
 * @param {Object} options - Configuration options
 * @returns {Object} - Submit function and state values
 */
export const useCustomerFeedback = (options = {}) => {
  const endpoint = options.endpoint || `${process.env.REACT_APP_API_URL}/feedback/`;

  const transformData = (formData) => {
    return {
      name: formData.name,
      company_name: formData.companyName || null,
      contact_number: `${getDialCode(formData.countryCode)}-${formData.contactNumber}`,
      email: formData.email,
      state: formData.state,
      city: formData.city,
      model_name: formData.modelName,
      vehicle_type: formData.vehicleType || null,
      vehicle_other: formData.vehicleTypeOther || null,
      vehicle_performance: {
        driving_experience: formData.drivingExperience,
        comfort_convenience: formData.comfortConvenience,
        design_build_quality: formData.designBuildQuality,
        load_capacity: formData.loadCapacity,
        battery_performance: formData.batteryPerformance,
        charging_experience: formData.chargingExperience,
        value_for_money: formData.valueForMoney,
      },
      sales_service_experience: {
        sales_team_interaction: formData.salesTeamInteraction,
        clarity_of_info: formData.clarityOfInfo,
        service_support: formData.serviceSupport,
      },
      open_feedback: {
        liked_most: formData.likedMost,
        areas_to_improve: formData.areasToImprove,
        would_recommend: formData.wouldRecommend,
      },
    };
  };

  return useFormSubmit(endpoint, {
    ...options,
    transformData,
  });
};