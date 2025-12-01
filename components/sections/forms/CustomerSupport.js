// CustomerSupport.js
import React, { useState } from 'react';
import {
  PhoneField,
  StateCityFields,
  ProductSelectField,
  MessageField,
  TextField
} from '@/components/common/FormFields';
import Checkbox from '@/components/common/Checkbox';
import styles from './CustomerSupport.module.css';
import {useCustomerSupport} from '@/hooks'
import { validateField } from '@/utils/validators';
import { useToast } from '@/components/common/Toast';

const CustomerSupport = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    companyName: '',
    state: '',
    city: '',
    vehicleType: '',
    message: '',
    consent1: false,
    consent2: false
  });
  const toast = useToast();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { submitForm, isLoading } = useCustomerSupport({
    onSuccess: () => {
      toast.success('Form submitted successfully!');
      handleReset();
    },
    onError: (errorMsg) => {
      toast.error(errorMsg || 'Failed to submit form');
    }
  });  

  const handleFieldChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleCountryChange = (code) => {
    setFormData(prev => ({ ...prev, countryCode: code }));
    if (errors.contactNumber) setErrors(prev => ({ ...prev, contactNumber: '' }));
  };

  const handleCheckboxChange = (id, valueOrEvent) => {
    const checked =
      typeof valueOrEvent === 'boolean'
        ? valueOrEvent
        : valueOrEvent?.target?.checked ?? false;
  
    setFormData(prev => ({ ...prev, [id]: checked }));
  
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };
  const handleFieldBlur = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        error = validateField('name', value);
        break;
      case 'companyName':
        error = validateField('company', value, { required: true });
        break;
      case 'email':
        error = validateField ? validateField('email', value) : '';
        break;
      case 'contactNumber':
        error = validateField ? validateField('mobile', value, { countryCode: formData.countryCode }) : '';
        break;
        case 'message':
          error = validateField ? validateField('text', value, { required: true, maxLength: 500 }) : '';
          break;
      case 'vehicleType':
        if (!value) error = 'Vehicle Type is required';
        break;
      case 'state':
        if (!value) error = 'State is required';
        break;
      case 'city':
        if (!value) error = 'City is required';
        break;
      default:
        break;
    }

    if (error) setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};

    const nameError = validateField ? validateField('fullName', formData.name) : '';
    if (nameError) newErrors.name = nameError;

    const emailError = validateField('email', formData.email);
    if (emailError) newErrors.email = emailError;

    const contactNumberError = validateField ? validateField('mobile', formData.contactNumber, { countryCode: formData.countryCode }) : '';
    if (contactNumberError) newErrors.contactNumber = contactNumberError;

    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.vehicleType) newErrors.vehicleType = 'Vehicle Type is required';

    const messageError = validateField ? validateField('text', formData.message, { required: true, maxLength: 500 }) : '';
    if (messageError) newErrors.message = messageError;

    if (!formData.consent1) newErrors.consent1 = 'Consent is required';
    if (!formData.consent2) newErrors.consent2 = 'Consent is required';

    return newErrors;
  };

// Add reset method
const handleReset = () => {
  setFormData({
    name: '',
    email: '',
    contactNumber: '',
    companyName: '',
    state: '',
    city: '',
    vehicleType: '',
    message: '',
    consent1: false,
    consent2: false
  });
  setErrors({});
};

// Update handleSubmit
const handleSubmit = async (e) => {
  e.preventDefault();
  const formErrors = validateForm();
  if (Object.keys(formErrors).length > 0) {
    setErrors(formErrors);
    return;
  }
  setIsSubmitting(true);
  await submitForm(formData);
  setIsSubmitting(false);
};
return (
  <div className={styles['contact-form']}>
    <h2 className={styles['contact-form__heading']}>Let&apos;s Get Started</h2>
    <p className={styles['contact-form__subtitle']}>
      Team EVall Mobility is happy to assist. Contact us and we will discuss how we can help you with EV technology. You&apos;ll hear back from us within 24 hours.
    </p>

    <form onSubmit={handleSubmit} noValidate>
      <div className={styles['contact-form__grid']}>
        {/* Fullname */}
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

        {/* Company name */}
        <TextField
          name="companyName"
          value={formData.companyName}
          onChange={handleFieldChange}
          onBlur={handleFieldBlur}
          error={errors.companyName}
          label="Company Name"
          fieldType="companyName"
          required={false}
        />

        {/* contactNumber / Email */}
        <PhoneField
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleFieldChange}
          onBlur={handleFieldBlur}
          error={errors.contactNumber}
          countryCode={formData.countryCode}
          onCountryChange={handleCountryChange}
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

        {/* State / City */}
        <div className={styles['contact-form__full']}>
        <StateCityFields
          stateName="state"
          stateValue={formData.state}
          onStateChange={handleFieldChange}
          stateError={errors.state}
          cityName="city"
          cityValue={formData.city}
          onCityChange={handleFieldChange}
          cityError={errors.city}
          statePlaceholder="Select State*"
          cityPlaceholder="Select City*"
        />
        </div>

        {/* Vehicle Type */}
        <div className={styles['contact-form__full']}>
          <ProductSelectField
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleFieldChange}
            onBlur={handleFieldBlur}
            error={errors.vehicleType}
            placeholder="Select a Product*"
          />
        </div>

        {/* Message */}
        <div className={styles['contact-form__full']}>
          <MessageField
            name="message"
            value={formData.message}
            onChange={handleFieldChange}
            onBlur={handleFieldBlur}
            error={errors.message}
            placeholder="Message"
            required
            maxLength={1000}
          />
        </div>

        {/* Checkboxes */}
        <div className={`${styles['contact-form__full']} ${styles['contact-form__checkboxes']}`}>
          <Checkbox
            id="consent1"
            label="By submitting, you consent to receive a call back from EVall Mobility and its authorized partners regarding your interest in EVall products, adhering to the communication guidelines provided."
            checked={formData.consent1}
            onChange={(checked) => handleCheckboxChange('consent1', checked)}
          />
          {errors.consent1 && <div className={styles['contact-form__error']}>{errors.consent1}</div>}

          <Checkbox
            id="consent2"
            label="You also agree to our Terms of Use and Privacy Policy as listed on the website."
            checked={formData.consent2}
            onChange={(checked) => handleCheckboxChange('consent2', checked)}
          />
          {errors.consent2 && <div className={styles['contact-form__error']}>{errors.consent2}</div>}
        </div>

        {/* Submit */}
        <div className={`${styles['contact-form__full']} ${styles['contact-form__actions']}`}>
          <button
            type="submit"
            className={styles['contact-form__submit']}
            disabled={isSubmitting || isLoading}
            >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </div>
    </form>
  </div>
);
};

export default CustomerSupport;