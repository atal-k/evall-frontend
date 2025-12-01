// ============================================================================
// src/components/sections/forms/FeedbackForm.js
// CUSTOMER FEEDBACK FORM - Complete Implementation
// ============================================================================

import React, { useState } from 'react';
import { 
  PhoneField,
  EmailField,
  StateCityFields,
  TextField,
  VehicleTypeRadioField,
  RatingField,
  YesNoField,
} from '@/components/common/FormFields';
import styles from '@/components/common/FormFields.module.css';
import { validateField } from '@/utils/validators';
import { useCustomerFeedback } from '@/hooks';
import { useToast } from '@/components/common/Toast';

const FeedbackForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    contactNumber: '',
    email: '',
    state: '',
    city: '',
    modelName: '',
    vehicleType: '',
    vehicleTypeOther: '',
    drivingExperience: '',
    comfortConvenience: '',
    designBuildQuality: '',
    loadCapacity: '',
    batteryPerformance: '',
    chargingExperience: '',
    valueForMoney: '',
    salesTeamInteraction: '',
    clarityOfInfo: '',
    serviceSupport: '',
    likedMost: '',
    areasToImprove: '',
    wouldRecommend: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toast = useToast();
  const { submitForm, isLoading } = useCustomerFeedback({
    onSuccess: () => toast.success('Thank you for your feedback!'),
    onError: (msg) => toast.error(msg)
  });

  // Handle field change
  const handleFieldChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Handle country code change
  const handleCountryChange = (code) => {
    setFormData(prev => ({ ...prev, countryCode: code }));
  };

  // Handle field blur
  const handleFieldBlur = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'name':
        error = validateField('fullName', value);
        break;
      case 'companyName':
        error = validateField('company', value);
        break;
      case 'contactNumber':
        error = validateField('mobile', value, { countryCode: formData.countryCode });
        break;
      case 'email':
        error = validateField('email', value);
        break;
      case 'modelName':
        error = validateField('text', value, { required: true });
        break;
      case 'likedMost':
      case 'areasToImprove':
        error = validateField('text', value, { required: true, minLength: 10 });
        break;
      default:
        break;
    }
    
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  // Validate entire form
  const validateForm = () => {
    const newErrors = {};
    
    // Customer Details
    const nameError = validateField('fullName', formData.name);
    if (nameError) newErrors.name = nameError;
    
    const companyError = validateField('company', formData.companyName);
    if (companyError) newErrors.companyName = companyError;
    
    const contactError = validateField('mobile', formData.contactNumber, { 
      countryCode: formData.countryCode 
    });
    if (contactError) newErrors.contactNumber = contactError;
    
    const emailError = validateField('email', formData.email);
    if (emailError) newErrors.email = emailError;
    
    const stateError = validateField('select', formData.state);
    if (stateError) newErrors.state = stateError;
    
    const cityError = validateField('select', formData.city);
    if (cityError) newErrors.city = cityError;
    
    // Vehicle Details
    const modelError = validateField('text', formData.modelName, { required: true });
    if (modelError) newErrors.modelName = modelError;
    
    const vehicleTypeError = validateField('vehicleTypeRadio', formData.vehicleType, {
      otherValue: formData.vehicleTypeOther
    });
    if (vehicleTypeError) newErrors.vehicleType = vehicleTypeError;
    
    // Vehicle Performance Ratings
    const ratingFields = [
      'drivingExperience',
      'comfortConvenience',
      'designBuildQuality',
      'loadCapacity',
      'batteryPerformance',
      'chargingExperience',
      'valueForMoney'
    ];
    
    ratingFields.forEach(field => {
      const error = validateField('rating', formData[field]);
      if (error) newErrors[field] = error;
    });
    
    // Sales & Service Ratings
    const salesFields = [
      'salesTeamInteraction',
      'clarityOfInfo',
      'serviceSupport'
    ];
    
    salesFields.forEach(field => {
      const error = validateField('rating', formData[field]);
      if (error) newErrors[field] = error;
    });
    
    // Open Feedback
    const likedMostError = validateField('text', formData.likedMost, { 
      required: true, 
      minLength: 10 
    });
    if (likedMostError) newErrors.likedMost = likedMostError;
    
    const areasToImproveError = validateField('text', formData.areasToImprove, { 
      required: true, 
      minLength: 10 
    });
    if (areasToImproveError) newErrors.areasToImprove = areasToImproveError;
    
    const recommendError = validateField('yesNo', formData.wouldRecommend);
    if (recommendError) newErrors.wouldRecommend = recommendError;
    
    return newErrors;
  };

  const handleReset = () => {
    setFormData({
      name: '',
      companyName: '',
      contactNumber: '',
      email: '',
      state: '',
      city: '',
      modelName: '',
      vehicleType: '',
      drivingExperience: '',
      comfortConvenience: '',
      designBuildQuality: '',
      loadCapacity: '',
      batteryPerformance: '',
      chargingExperience: '',
      valueForMoney: '',
      salesTeamInteraction: '',
      clarityOfInfo: '',
      serviceSupport: '',
      likedMost: '',
      areasToImprove: '',
      wouldRecommend: ''
    });
    setErrors({});
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      const firstErrorField = document.querySelector('.form-field__input--error, .form-field__error');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);    
    console.log('Customer Feedback Submission:', formData);
    await submitForm(formData);
    setIsSubmitting(false);
  };


  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '1.25rem 2rem', background: 'var(--color-off-white)', borderRadius: '16px', border: '1px solid var(--color-gray-outline)' }}>
    {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ marginBottom: '0.5rem', color: 'var(--color-primary-dark)' }}>
          Customer Feedback Form
        </h1>
        <p style={{ color: 'var(--color-gray-700)' }}>Electric Commercial Vehicle</p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Customer Details */}
        <h2 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-heading)', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.1rem' }}>
          Customer Details
        </h2>
        <div className={styles['form__row']}>
          <TextField
            name="name"
            value={formData.name}
            onChange={handleFieldChange}
            onBlur={handleFieldBlur}
            error={errors.name}
            label="Full Name"
            fieldType="name"
            required={true}
          />
          <TextField
            name="companyName"
            value={formData.companyName}
            onChange={handleFieldChange}
            onBlur={handleFieldBlur}
            error={errors.companyName}
            label="Company Name"
            fieldType="name"
          />
        </div>

        <div className={styles['form__row']}>
          <PhoneField
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleFieldChange}
            onBlur={handleFieldBlur}
            error={errors.contactNumber}
            countryCode={formData.countryCode}
            onCountryChange={handleCountryChange}
            placeholder="Contact Number*"
          />

          <EmailField
            name="email"
            value={formData.email}
            onChange={handleFieldChange}
            onBlur={handleFieldBlur}
            error={errors.email}
            required={true}
          />
        </div>

        <StateCityFields
          stateName="state"
          stateValue={formData.state}
          onStateChange={handleFieldChange}
          stateError={errors.state}
          cityName="city"
          cityValue={formData.city}
          onCityChange={handleFieldChange}
          cityError={errors.city}
        />

        {/* Vehicle Details */}
        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--color-heading)', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.1rem' }}>
          Vehicle Details
        </h2>

        <TextField
          name="modelName"
          value={formData.modelName}
          onChange={handleFieldChange}
          onBlur={handleFieldBlur}
          error={errors.modelName}
          label="Model Tested / Purchased"
          fieldType="text"
          required={true}
        />

        <VehicleTypeRadioField
          name="vehicleType"
          value={formData.vehicleType}
          otherValue={formData.vehicleTypeOther}
          onChange={handleFieldChange}
          onOtherChange={(value) => handleFieldChange('vehicleTypeOther', value)}
          error={errors.vehicleType}
        />

        {/* Feedback on Vehicle Performance */}
        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--color-heading)', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.1rem' }}>
          Feedback on Vehicle Performance
        </h2>

        <RatingField
          name="drivingExperience"
          label="Driving Experience:"
          value={formData.drivingExperience}
          onChange={handleFieldChange}
          error={errors.drivingExperience}
        />

        <RatingField
          name="comfortConvenience"
          label="Comfort & Convenience:"
          value={formData.comfortConvenience}
          onChange={handleFieldChange}
          error={errors.comfortConvenience}
        />

        <RatingField
          name="designBuildQuality"
          label="Design & Build Quality:"
          value={formData.designBuildQuality}
          onChange={handleFieldChange}
          error={errors.designBuildQuality}
        />

        <RatingField
          name="loadCapacity"
          label="Load Carrying Capacity / Utility:"
          value={formData.loadCapacity}
          onChange={handleFieldChange}
          error={errors.loadCapacity}
        />

        <RatingField
          name="batteryPerformance"
          label="Battery Performance & Range:"
          value={formData.batteryPerformance}
          onChange={handleFieldChange}
          error={errors.batteryPerformance}
        />

        <RatingField
          name="chargingExperience"
          label="Charging Experience:"
          value={formData.chargingExperience}
          onChange={handleFieldChange}
          error={errors.chargingExperience}
        />

        <RatingField
          name="valueForMoney"
          label="Overall Value for Money:"
          value={formData.valueForMoney}
          onChange={handleFieldChange}
          error={errors.valueForMoney}
        />

        {/* Sales & Service Experience */}
        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--color-heading)', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.1rem' }}>
          Sales & Service Experience
        </h2>

        <RatingField
          name="salesTeamInteraction"
          label="Interaction with Sales Team:"
          value={formData.salesTeamInteraction}
          onChange={handleFieldChange}
          error={errors.salesTeamInteraction}
        />

        <RatingField
          name="clarityOfInfo"
          label="Clarity of Information Provided:"
          value={formData.clarityOfInfo}
          onChange={handleFieldChange}
          error={errors.clarityOfInfo}
        />

        <RatingField
          name="serviceSupport"
          label="Service Support & Responsiveness:"
          value={formData.serviceSupport}
          onChange={handleFieldChange}
          error={errors.serviceSupport}
        />

        {/* Open Feedback */}
        <h2 style={{ fontSize: '1.25rem', marginTop: '2rem', marginBottom: '0.75rem', color: 'var(--color-heading)', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.1rem' }}>
          Open Feedback
        </h2>

        <TextField
          name="likedMost"
          value={formData.likedMost}
          onChange={handleFieldChange}
          onBlur={handleFieldBlur}
          error={errors.likedMost}
          label="What did you like most about our Electric Commercial Vehicle?"
          fieldType="text"
          required={true}
          minLength={10}
        />

        <TextField
          name="areasToImprove"
          value={formData.areasToImprove}
          onChange={handleFieldChange}
          onBlur={handleFieldBlur}
          error={errors.areasToImprove}
          label="What areas do you think we need to improve?"
          fieldType="text"
          required={true}
          minLength={10}
        />

        <YesNoField
          name="wouldRecommend"
          label="Would you recommend our eCV to others?*"
          value={formData.wouldRecommend}
          onChange={handleFieldChange}
          error={errors.wouldRecommend}
        />

        {/* Submit Button */}
        <button
            type="submit"
            disabled={isSubmitting || isLoading}
            className={styles['btn-form-submit']}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
      </form>
    </div>
  );
};

export default FeedbackForm;