// ============================================================================
// FILE: TestDriveBookingForm.js - COMPLETE FORM IMPLEMENTATION
// ============================================================================

import React, { useState } from 'react';
import { 
  PhoneField,
  StateCityFields,
  VehicleTypeField,
  DateField,
  TimeSlotField,
  BusinessSegmentField,
  ConsentCheckboxField,
  TextField
} from '@/components/common/FormFields';
import styles from '@/components/common/TestDriveModal.module.css';
import { validateField } from '@/utils/validators';
import { useTestDriveBooking } from '@/hooks';
import { useToast } from '@/components/common/Toast';

const TestDriveBookingForm = (isModal) => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    contactNumber: '',
    email: '',
    city: '',
    state: '',
    vehicleTypes: [],
    vehicleOther: '',
    testRideDate: '',
    timeSlot: '',
    businessSegment: '',
    businessSegmentOther: '',
    consent: false,
    testDriveDate: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toast = useToast();
  const { submitForm, isLoading } = useTestDriveBooking({
    onSuccess: () => toast.success('Test drive booked successfully!'),
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
        error = validateField('name', value);
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
      case 'testRideDate':
      case 'testDriveDate':
        error = validateField('date', value);
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
    const nameError = validateField('name', formData.name);
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
    
    // Vehicle Preference
    const vehicleError = validateField('checkboxGroup', formData.vehicleTypes, {
      required: true,
      otherValue: formData.vehicleOther
    });
    if (vehicleError) newErrors.vehicleTypes = vehicleError;
    
    const timeSlotError = validateField('timeSlot', formData.timeSlot);
    if (timeSlotError) newErrors.timeSlot = timeSlotError;
    
    // Business Segment
    const segmentError = validateField('businessSegment', formData.businessSegment, {
      otherValue: formData.businessSegmentOther
    });
    if (segmentError) newErrors.businessSegment = segmentError;
    
    // Declaration
    const consentError = validateField('consent', formData.consent, { required: true });
    if (consentError) newErrors.consent = consentError;
    
    const testDriveDateError = validateField('date', formData.testDriveDate);
    if (testDriveDateError) newErrors.testDriveDate = testDriveDateError;
    
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
      selectedModels: [],
      otherModel: '',
      preferredTimeSlot: '',
      segment: '',
      otherSegment: '',
      consent: false,
      testDriveDate: ''
    });
    setErrors({});
  };
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const formErrors = validateForm();
    
    // If there are errors, display them and scroll to first error
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      
      // Scroll to first error field
      const firstErrorField = document.querySelector('.form-field__input--error, .form-field__error');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      
      console.log('Form validation failed:', formErrors);
      return;
    }
    
    // Set submitting state
    setIsSubmitting(true);
    // Console log the submission data
    console.log('Submission Data:', formData);
    await submitForm(formData);
    setIsSubmitting(false);
  };

  return (
<div className={`${styles['test-drive-booking-form']} ${isModal ? styles['test-drive-booking-form--modal'] : ''}`}>
      <form onSubmit={handleSubmit}>
        {/* Customer Details */}
        <h2 className={styles['test-drive-booking-form__section-title']}>Customer Details</h2>
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
            required={false}
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

        {/* Vehicle Preference */}
        <h2 style={{ fontSize: '1.125rem', marginTop: '1rem', marginBottom: '0.5rem', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.15rem' }}>
          Vehicle Preference
        </h2>

        <VehicleTypeField
          name="vehicleTypes"
          value={formData.vehicleTypes}
          otherValue={formData.vehicleOther}
          onChange={handleFieldChange}
          onOtherChange={(value) => handleFieldChange('vehicleOther', value)}
          error={errors.vehicleTypes}
        />

        <TimeSlotField
          name="timeSlot"
          value={formData.timeSlot}
          onChange={handleFieldChange}
          error={errors.timeSlot}
        />

        {/* Business Segment */}
        <h2 style={{ fontSize: '1.125rem', marginTop: '1rem', marginBottom: '1rem', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.15rem' }}>
          Business Segment
        </h2>

        <BusinessSegmentField
          name="businessSegment"
          value={formData.businessSegment}
          otherValue={formData.businessSegmentOther}
          onChange={handleFieldChange}
          onOtherChange={(value) => handleFieldChange('businessSegmentOther', value)}
          error={errors.businessSegment}
        />

        {/* Declaration */}
        <h2 style={{ fontSize: '1.125rem', marginTop: '1rem', marginBottom: '1rem', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.15rem' }}>
          Declaration
        </h2>

        <ConsentCheckboxField
          name="consent"
          id="test-ride-consent"
          label="I hereby confirm that the information provided above is true and request a test ride of the selected electric commercial vehicle."
          value={formData.consent}
          onChange={handleFieldChange}
          error={errors.consent}
        />

        <DateField
          name="testDriveDate"
          value={formData.testDriveDate}
          onChange={handleFieldChange}
          onBlur={handleFieldBlur}
          error={errors.testDriveDate}
          autoFillToday={true}
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || isLoading}
          className={styles['test-drive-booking-form__submit']}
        >
          {isSubmitting ? 'Booking Test Ride...' : 'Book Test Ride'}
        </button>
      </form>
    </div>
  );
};

export default TestDriveBookingForm;