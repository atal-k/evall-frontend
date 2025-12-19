// ============================================================================
// FILE: components/sections/forms/DownloadBrochureForm.js
// ============================================================================

import React, { useState } from 'react';
import { 
  PhoneField,
  TextField
} from '@/components/common/FormFields';
import styles from '@/components/common/DownloadBrochureModal.module.css';
import { validateField } from '@/utils/validators';
import { useDownloadBrochure } from '@/hooks';
import { useToast } from '@/components/common/Toast';

const DownloadBrochureForm = ({ isModal, onSuccess }) => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    contactNumber: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toast = useToast();
  const { submitForm, isLoading } = useDownloadBrochure({
    onSuccess: () => {
      toast.success('Downloading brochure...');
      // Trigger brochure download
      const link = document.createElement('a');
      link.href = '/assets/evall-mobility-brochure-1.5T.pdf';
      link.download = 'EVall-Mobility-Brochure-1.5T.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      if (onSuccess) onSuccess();
      handleReset();
    },
    onError: (msg) => toast.error(msg || 'Failed to submit form. Please try again.')
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
        // Company name is optional, no validation needed
        break;
      case 'contactNumber':
        error = validateField('mobile', value, { countryCode: formData.countryCode });
        break;
      case 'email':
        error = validateField('email', value);
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
    
    const nameError = validateField('name', formData.name);
    if (nameError) newErrors.name = nameError;
    
    const contactError = validateField('mobile', formData.contactNumber, { 
      countryCode: formData.countryCode 
    });
    if (contactError) newErrors.contactNumber = contactError;
    
    const emailError = validateField('email', formData.email);
    if (emailError) newErrors.email = emailError;
    
    return newErrors;
  };

  const handleReset = () => {
    setFormData({
      name: '',
      companyName: '',
      contactNumber: '',
      email: '',
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
      
      return;
    }
    
    // Set submitting state
    setIsSubmitting(true);
    await submitForm(formData);
    setIsSubmitting(false);
  };

  return (
    <div className={`${styles['download-brochure-form']} ${isModal ? styles['download-brochure-form--modal'] : ''}`}>
      <form onSubmit={handleSubmit}>
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

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting || isLoading}
          className={styles['download-brochure-form__submit']}
        >
          {isSubmitting || isLoading ? 'Submitting...' : 'Download Brochure'}
        </button>
      </form>
    </div>
  );
};

export default DownloadBrochureForm;