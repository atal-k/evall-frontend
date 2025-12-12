import React, { useState } from 'react';
import { 
  PhoneField,
  StateCityFields,
  VehicleTypeField,
  IntendedApplicationField,
  TimelineField,
  ProcurementModeField,
  MessageField,
  DateField,
  ConsentCheckboxField,
  TextField,
  NumberField,
} from '@/components/common/FormFields';
import styles from '@/components/common/FormFields.module.css'
import { validateField } from '@/utils/validators';
import { useRequestDemo } from '@/hooks';
import { useToast } from '@/components/common/Toast';

const RequestDemoForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    companyName: '',
    name: '',
    designation: '',
    contactNumber: '',
    alternateNumber: '',
    email: '',
    address: '',
    city: '',
    state: '',
    vehicleTypes: [],
    vehicleOther: '',
    applications: [],
    applicationOther: '',
    fleetSize: '',
    timeline: '',
    procurementMode: '',
    additionalInfo: '',
    // Declaration fields - updated to match TestDriveBookingForm pattern
    consent: false,
    date: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toast = useToast();
  const { submitForm, isLoading } = useRequestDemo({
    onSuccess: () => toast.success('Demo request received! We will contact you shortly.'),
    onError: (msg) => toast.error(msg)
  });

  // Handle field change - universal handler
  const handleFieldChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing / changing
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

  // Handle field blur - validate on blur
  const handleFieldBlur = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'companyName':
        error = validateField('company', value, { required: true });
        break;
      case 'name':
        error = validateField('fullName', value);
        break;
      case 'designation':
        error = validateField('designation', value);
        break;
      case 'contactNumber':
        error = validateField('mobile', value, { countryCode: formData.countryCode });
        break;
      case 'alternateNumber':
        // Optional field, only validate if has value
        if (value.trim()) {
          error = validateField('mobile', value, { countryCode: formData.alternateCountryCode });
        }
        break;
      case 'email':
        error = validateField('email', value);
        break;
      case 'address':
        error = validateField('address', value, { maxLength: 200 });
        break;
      case 'fleetSize':
        error = validateField('fleetSize', value);
        break;
      case 'date':
        error = validateField('date', value);
        break;
      case 'additionalInfo':
        error = validateField('message', value, { required: false, maxLength: 200 });
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
    
    // Company Name
    const companyError = validateField('company', formData.companyName, { required: true });
    if (companyError) newErrors.companyName = companyError;
    
    // Contact Person
    const nameError = validateField('fullName', formData.name);
    if (nameError) newErrors.name = nameError;
    
    // Designation (optional, skip if empty)
    if (formData.designation.trim()) {
      const designationError = validateField('designation', formData.designation);
      if (designationError) newErrors.designation = designationError;
    }
    
    // Contact Number
    const contactNumberError = validateField('mobile', formData.contactNumber, { 
      countryCode: formData.countryCode 
    });
    if (contactNumberError) newErrors.contactNumber = contactNumberError;
    
    // Alternate Number (optional)
    if (formData.alternateNumber.trim()) {
      const alternateNumberError = validateField('mobile', formData.alternateNumber, { 
        countryCode: formData.alternateCountryCode 
      });
      if (alternateNumberError) newErrors.alternateNumber = alternateNumberError;
    }
    
    // Email
    const emailError = validateField('email', formData.email);
    if (emailError) newErrors.email = emailError;
    
    // Address
    const addressError = validateField('address', formData.address, { maxLength: 200 });
    if (addressError) newErrors.address = addressError;
    
    // State
    const stateError = validateField('select', formData.state);
    if (stateError) newErrors.state = stateError;
    
    // City
    const cityError = validateField('select', formData.city);
    if (cityError) newErrors.city = cityError;
    
    // Vehicle Types
    const vehicleTypesError = validateField('checkboxGroup', formData.vehicleTypes, { 
      required: true,
      otherValue: formData.vehicleOther 
    });
    if (vehicleTypesError) newErrors.vehicleTypes = vehicleTypesError;
    
    // Applications
    const applicationsError = validateField('checkboxGroup', formData.applications, { 
      required: true,
      otherValue: formData.applicationOther 
    });
    if (applicationsError) newErrors.applications = applicationsError;
    
    // Fleet Size
    const fleetSizeError = validateField('fleetSize', formData.fleetSize);
    if (fleetSizeError) newErrors.fleetSize = fleetSizeError;
    
    // Timeline
    const timelineError = validateField('radioGroup', formData.timeline);
    if (timelineError) newErrors.timeline = timelineError;
    
    // Procurement Mode
    const procurementError = validateField('radioGroup', formData.procurementMode);
    if (procurementError) newErrors.procurementMode = procurementError;
    
    // Additional Info (optional)
    if (formData.additionalInfo.trim()) {
      const additionalInfoError = validateField('message', formData.additionalInfo, { 
        required: false, 
        maxLength: 200 
      });
      if (additionalInfoError) newErrors.additionalInfo = additionalInfoError;
    }

    // Declaration validations (aligned with TestDriveBookingForm)
    const consentError = validateField('consent', formData.consent, { required: true });
    if (consentError) newErrors.consent = consentError;

    const dateError = validateField('date', formData.date);
    if (dateError) newErrors.date = dateError;
    
    return newErrors;
  };
    // Reset form
  const handleReset = () => {
    setFormData({
      companyName: '',
      name: '',
      designation: '',
      contactNumber: '',
      alternateNumber: '',
      countryCode: 'IN',
      alternateCountryCode: 'IN',
      email: '',
      address: '',
      city: '',
      state: '',
      vehicleTypes: [],
      vehicleOther: '',
      applications: [],
      applicationOther: '',
      fleetSize: '',
      timeline: '',
      procurementMode: '',
      additionalInfo: '',
      consent: false,
      date: ''
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
    const result = await submitForm(formData);
    setIsSubmitting(false);
    // Success/error already handled in hook callbacks above
    // But you can also check result here if needed
    if (!result.success) {
      // Additional error handling if needed
      const firstErrorField = document.querySelector('.form-field__input--error');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };
  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '1.25rem 2rem', background: 'var(--color-off-white)', borderRadius: '16px', border: '1px solid var(--color-gray-outline)' }}>
      <h1 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Request a Demo</h1>
      <p style={{ marginBottom: '1rem', color: 'var(--color-gray-700)' }}>
        Electric Commercial Vehicles
      </p>

      <form onSubmit={handleSubmit}>
        {/* Company Details Section */}
        <h2 style={{ fontSize: 'var(--font-size-lg)', marginBottom: '1rem' }}>Company Details</h2>
        <div className='form__row'>
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
        <div className='form__row'>
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
        <TextField
            name="designation"
            value={formData.designation}
            onChange={handleFieldChange}
            onBlur={handleFieldBlur}
            error={errors.designation}
            label="Designation"
            fieldType="designation"
            required={true}
          />
          </div>
        {/* Contact Details */}
        <div className='form__row'>
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
            placeholder="Alternate Number"
          />
        </div>



        <TextField
          name="address"
          value={formData.address}
          onChange={handleFieldChange}
          onBlur={handleFieldBlur}
          error={errors.address}
          label="Office Address"
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

        {/* Product Interest Details */}
        <h2 style={{ fontSize: 'var(--font-size-xlg)', marginTop: '1rem 0' }}>
          Product Interest Details
        </h2>

        <VehicleTypeField
          name="vehicleTypes"
          value={formData.vehicleTypes}
          otherValue={formData.vehicleOther}
          onChange={handleFieldChange}
          onOtherChange={(value) => handleFieldChange('vehicleOther', value)}
          error={errors.vehicleTypes}
        />

        <IntendedApplicationField
          name="applications"
          value={formData.applications}
          otherValue={formData.applicationOther}
          onChange={handleFieldChange}
          onOtherChange={(value) => handleFieldChange('applicationOther', value)}
          error={errors.applications}
        />

        <NumberField
          name="fleetSize"
          value={formData.fleetSize}
          onChange={handleFieldChange}
          onBlur={handleFieldBlur}
          label="Expected Fleet Requirement (No.)"
          fieldType="fleetSize"
          error={errors.fleetSize}
          required={true}
        />

        <TimelineField
          name="timeline"
          value={formData.timeline}
          onChange={handleFieldChange}
          error={errors.timeline}
        />

        <ProcurementModeField
          name="procurementMode"
          value={formData.procurementMode}
          onChange={handleFieldChange}
          error={errors.procurementMode}
        />

        <MessageField
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleFieldChange}
          onBlur={handleFieldBlur}
          error={errors.additionalInfo}
          placeholder="Additional Requirements (if any)"
          required={false}
          maxLength={200}
          rows={2}
        />

        {/* Declaration - updated to use reusable ConsentCheckboxField + declaration date */}
        <h2 style={{ fontSize: 'var(--font-size-lg)', margin: '0.25rem 0' }}>
          Declaration
        </h2>
        <ConsentCheckboxField
          name="consent"
          id="product-enquiry-consent"
          label="I/We confirm that the above details are true and request the company to contact us 
          with suitable product information and commercial details."
          value={formData.consent}
          onChange={handleFieldChange}
          error={errors.consent}
        />

        <DateField
          name="date"
          value={formData.date}
          onChange={handleFieldChange}
          onBlur={handleFieldBlur}
          error={errors.date}
          autoFillToday={true}
        />

        {/* {apiError && (
          <div className="form-field__error" style={{marginBottom: '1rem'}}>
            {apiError}
          </div>
        )} */}

        <button
          type="submit"
          disabled={isSubmitting || isLoading}
          className={styles['btn-form-submit']}
        >
          {(isSubmitting || isLoading) ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default RequestDemoForm;