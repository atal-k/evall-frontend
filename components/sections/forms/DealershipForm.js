// ============================================================================
// /src/componentes/sections/forms/DealershipForm.js
// DEALERSHIP ENQUIRY FORM - Complete Implementation
// ============================================================================

import React, { useState } from 'react';
import { 
  StateCityFields,
  PhoneField,
  TextField,
  NumberField,
  InfrastructureCheckboxField,
  MessageField,
} from '@/components/common/FormFields';
import styles from '@/components/common/FormFields.module.css';
import { validateField } from '@/utils/validators';
import { useDealershipEnquiry } from '@/hooks';
import { useToast } from '@/components/common/Toast';

const DealershipForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    contactNumber: '',
    alternateNumber: '',
    email: '',
    website: '',
    currentBusiness: '',
    experience: '',
    proposedTerritory: '',
    firmTurnover: '',
    investmentCapacity: '',
    infrastructure: [],
    reasonForInterest: '',
    otherInfo: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toast = useToast();
  const { submitForm, isLoading } = useDealershipEnquiry({
    onSuccess: () => toast.success('Dealership enquiry submitted successfully!'),
    onError: (msg) => toast.error(msg)
  });
  // Handle field change
  const handleFieldChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Handle country code changes
  const handleCountryChange = (code) => {
    setFormData(prev => ({ ...prev, countryCode: code }));
  };

  const handleAlternateCountryChange = (code) => {
    setFormData(prev => ({ ...prev, alternateCountryCode: code }));
  };

  // Handle field blur
  const handleFieldBlur = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'name':
        error = validateField('name', value);
        break;
      case 'companyName':
        error = validateField('company', value, { required: true });
        break;
      case 'address':
        error = validateField('address', value, { maxLength: 200 });
        break;
      case 'pincode':
        error = validateField('pincode', value);
        break;
      case 'contactNumber':
        error = validateField('mobile', value, { countryCode: formData.countryCode });
        break;
      case 'alternateNumber':
        if (value.trim()) {
          error = validateField('mobile', value, { countryCode: formData.alternateCountryCode });
        }
        break;
      case 'email':
        error = validateField('email', value);
        break;
      case 'website':
        error = validateField('url', value);
        break;
      case 'currentBusiness':
      case 'proposedTerritory':
      case 'reasonForInterest':
        error = validateField('text', value, { required: true, minLength: 3 });
        break;
      case 'experience':
        error = validateField('number', value, { required: true, min: 0, max: 50 });
        break;
      case 'firmTurnover':
      case 'investmentCapacity':
        error = validateField('number', value, { required: true, min: 0 });
        break;
      case 'otherInfo':
        error = validateField('text', value, { required: false });
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
    
    // Personal Details
    const fullNameError = validateField('name', formData.name);
    if (fullNameError) newErrors.name = fullNameError;
    
    const companyError = validateField('company', formData.companyName, { required: true });
    if (companyError) newErrors.companyName = companyError;
    
    const addressError = validateField('address', formData.address, { maxLength: 200 });
    if (addressError) newErrors.address = addressError;
    
    const stateError = validateField('select', formData.state);
    if (stateError) newErrors.state = stateError;
    
    const cityError = validateField('select', formData.city);
    if (cityError) newErrors.city = cityError;
    
    const pincodeError = validateField('pincode', formData.pincode);
    if (pincodeError) newErrors.pincode = pincodeError;
    
    const contactError = validateField('mobile', formData.contactNumber, { 
      countryCode: formData.countryCode 
    });
    if (contactError) newErrors.contactNumber = contactError;
    
    if (formData.alternateNumber.trim()) {
      const alternateError = validateField('mobile', formData.alternateNumber, { 
        countryCode: formData.alternateCountryCode 
      });
      if (alternateError) newErrors.alternateNumber = alternateError;
    }
    
    const emailError = validateField('email', formData.email);
    if (emailError) newErrors.email = emailError;
    
    // Website (optional)
    if (formData.website.trim()) {
      const websiteError = validateField('url', formData.website);
      if (websiteError) newErrors.website = websiteError;
    }
    
    // Business Details
    const currentBusinessError = validateField('text', formData.currentBusiness, { 
      required: true, 
      minLength: 3 
    });
    if (currentBusinessError) newErrors.currentBusiness = currentBusinessError;
    
    const experienceError = validateField('number', formData.experience, { 
      required: true, 
      min: 0, 
      max: 50 
    });
    if (experienceError) newErrors.experience = experienceError;
    
    const territoryError = validateField('text', formData.proposedTerritory, { 
      required: true, 
      minLength: 3 
    });
    if (territoryError) newErrors.proposedTerritory = territoryError;
    
    const turnoverError = validateField('number', formData.firmTurnover, { 
      required: true, 
      min: 0 
    });
    if (turnoverError) newErrors.firmTurnover = turnoverError;
    
    const investmentError = validateField('number', formData.investmentCapacity, { 
      required: true, 
      min: 0 
    });
    if (investmentError) newErrors.investmentCapacity = investmentError;
    
    const infrastructureError = validateField('infrastructure', formData.infrastructure, { 
      required: true 
    });
    if (infrastructureError) newErrors.infrastructure = infrastructureError;
    
    const reasonError = validateField('text', formData.reasonForInterest, { 
      required: true, 
      minLength: 3 
    });
    if (reasonError) newErrors.reasonForInterest = reasonError;
    
    return newErrors;
  };

  const handleReset = () => {
    setFormData({
      name: '',
      companyName: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      contactNumber: '',
      alternateNumber: '',
      email: '',
      website: '',
      currentBusiness: '',
      experience: '',
      proposedTerritory: '',
      firmTurnover: '',
      investmentCapacity: '',
      infrastructure: [],
      reasonForInterest: '',
      otherInfo: ''
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
    console.log('Dealership Enquiry Submission:', formData);
    await submitForm(formData);
    setIsSubmitting(false);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '1.25rem 2rem', background: 'var(--color-off-white)', borderRadius: '16px', border: '1px solid var(--color-gray-outline)' }}>
    {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>
          Dealership Enquiry Form
        </h1>
        <p style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', lineHeight: 1.6 }}>
          Please fill in the details below. Our team will get in touch with you regarding 
          dealership opportunities for Electric Commercial Vehicles.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Personal & Company Details */}
        <h2 style={{ fontSize: '1.125rem', marginBottom: '1rem', color: 'var(--color-dark)' }}>
          Personal & Company Details
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
            required={true}
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
            required={true}
          />

          <PhoneField
            name="alternateNumber"
            value={formData.alternateNumber}
            onChange={handleFieldChange}
            onBlur={handleFieldBlur}
            error={errors.alternateNumber}
            countryCode={formData.alternateCountryCode}
            onCountryChange={handleAlternateCountryChange}
            placeholder="Alternate Contact Number"
          />
        </div>

        <div className={styles['form__row']}>
        <TextField
            name="email"
            value={formData.email}
            onChange={handleFieldChange}
            onBlur={handleFieldBlur}
            error={errors.email}
            label="Email"
            fieldType="email"
            required={true}
          />

          <TextField
            name="website"
            value={formData.website}
            onChange={handleFieldChange}
            onBlur={handleFieldBlur}
            error={errors.website}
            label="Website (optional)"
            fieldType="website"
            required={false}
          />
          </div>

          <TextField
          name="address"
          value={formData.address}
          onChange={handleFieldChange}
          onBlur={handleFieldBlur}
          error={errors.address}
          label="Address"
          fieldType="address"
          maxLength={200}
          required={true}
        />

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

        <NumberField
          name="pincode"
          fieldType="pincode"
          value={formData.pincode}
          onChange={handleFieldChange}
          onBlur={handleFieldBlur}
          error={errors.pincode}
          label="Pincode"
          min={6}
          max={6}
          required={true}
        />

        {/* Business Details */}
        <h2 style={{ fontSize: '1.125rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-dark)' }}>
          Business Details
        </h2>

        <TextField
          name="currentBusiness"
          fieldType="currentBusiness"
          value={formData.currentBusiness}
          onChange={handleFieldChange}
          onBlur={handleFieldBlur}
          error={errors.currentBusiness}
          label="Current Business (if any)"
          required={true}
          maxLength={100}
        />

        <NumberField
          name="experience"
          fieldType="experience"
          value={formData.experience}
          onChange={handleFieldChange}
          onBlur={handleFieldBlur}
          error={errors.experience}
          label="Experience in Automobile / Commercial Vehicle Business"
          suffix="years"
          min={0}
          max={3}
          required={true}
        />

        <TextField
          name="proposedTerritory"
          fieldType="proposedTerritory"
          value={formData.proposedTerritory}
          onChange={handleFieldChange}
          onBlur={handleFieldBlur}
          error={errors.proposedTerritory}
          label="Proposed Area / Territory of Dealership"
          required={true}
          maxLength={100}
        />

        <NumberField
          name="firmTurnover"
          fieldType="firmTurnover"
          value={formData.firmTurnover}
          onChange={handleFieldChange}
          onBlur={handleFieldBlur}
          error={errors.firmTurnover}
          label="Existing Firm Turnover"
          prefix="₹"
          min={0}
          required={true}
          className="currency-sign"
        />

        <NumberField
          name="investmentCapacity"
          fieldType="investmentCapacity"
          value={formData.investmentCapacity}
          onChange={handleFieldChange}
          onBlur={handleFieldBlur}
          error={errors.investmentCapacity}
          label="Investment Capacity (in INR)"
          prefix="₹"
          min={0}
          required={true}
          className="currency-sign"
        />

        <InfrastructureCheckboxField
          name="infrastructure"
          value={formData.infrastructure}
          onChange={handleFieldChange}
          error={errors.infrastructure}
          required={true}
        />

        <TextField
          name="reasonForInterest"
          value={formData.reasonForInterest}
          onChange={handleFieldChange}
          onBlur={handleFieldBlur}
          error={errors.reasonForInterest}
          label="Reason for Interest in Electric Commercial Vehicle Dealership"
          required={true}
          maxLength={200}
        />

        <MessageField
          name="otherInfo"
          value={formData.otherInfo}
          onChange={handleFieldChange}
          onBlur={handleFieldBlur}
          error={errors.otherInfo}
          label="Any Other Information"
          required={false}
          maxLength={200}
          rows={3}
        />

        {/* Submit Button */}
        <button
            type="submit"
            disabled={isSubmitting || isLoading}
            className={styles['btn-form-submit']}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>

        {/* Footer Note */}
        <p style={{ 
          marginTop: '0.75rem', 
          fontSize: '0.875rem', 
          color: 'var(--color-gray-700)', 
          textAlign: 'center',
          fontStyle: 'italic'
        }}>
          Thank you for your interest in partnering with us for Electric Commercial Vehicle dealership opportunities.
        </p>
      </form>
    </div>
  );
};

export default DealershipForm;