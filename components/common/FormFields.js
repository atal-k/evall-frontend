// ============================================================================
// FILE: src/components/common/FormFields.js
// Reusable form field components with validation and state management
// ============================================================================

import React, { useState, useRef, useEffect } from 'react';
import CustomSelect from './CustomSelect';
import citiesData from '../../data/cities.json';
import styles from './FormFields.module.css';
import { getProducts } from '../../data/vansData';
import { handleKeyPress, sanitizePatterns } from '../../utils/validators';

import { getCountryCodesOptions } from '../../utils/helpers';

// ============================================================================
// FIELD COMPONENTS
// ============================================================================

/**
 * TextField - Generic single-line text input
 * @param {boolean} required - Make field required (default: false)
 * @param {number} minLength - Minimum character length
 * @param {number} maxLength - Maximum character length
 */
export const TextField = ({ 
  name,
  value, 
  onChange, 
  onBlur, 
  error, 
  label = 'Enter text',
  placeholder = '',
  required = false,
  minLength,
  maxLength,
  disabled = false,
  fieldType = 'text', // For validation: 'text', 'name', 'email', etc.
  className = ''
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (maxLength && newValue.length > maxLength) return;
    onChange(name, newValue);
  };

  const handleBlurEvent = (e) => {
    setIsFocused(false);
    if (onBlur) onBlur(name, e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };
  const isLabelActive = isFocused || value.length > 0;

  return (
    <div className={`form-field form-field--floating ${className}`}>
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        onKeyDown={(e) => handleKeyPress(e, fieldType)}
        onBlur={handleBlurEvent}
        onFocus={handleFocus}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        className={`form-field__input ${error ? 'form-field__input--error' : ''}`}
      />
      <label 
        className={`form-field__label ${isLabelActive ? 'form-field__label--active' : ''} ${error ? 'form-field__label--error' : ''}`}
      >
        {label}{required ? '*' : ''}
      </label>
      {error && <span className="form-field__error">{error}</span>}
    </div>
  );
};

/**
 * MessageField - Textarea with character limit
 * @param {number} maxLength - Maximum character limit (default: 200)
 */
export const MessageField = ({ 
  name, 
  value, 
  onChange, 
  onBlur,
  error, 
  label = 'Message',
  placeholder = '',
  required = false,
  maxLength = 200,
  disabled = false,
  rows = 3,
  className = ''
}) => {
  const [charCount, setCharCount] = useState(value.length);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue.length <= maxLength) {
      onChange(name, newValue);
      setCharCount(newValue.length);
    }
  };
  const handleBlurEvent = (e) => {
    setIsFocused(false);
    if (onBlur) onBlur(name, e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  useEffect(() => {
    setCharCount(value.length);
  }, [value]);

  const isLabelActive = isFocused || value.length > 0;

  return (
    <div className={`${styles['form-field']} ${styles['form-field--floating']} ${styles[className]}`}>
      <textarea
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlurEvent}
        onFocus={handleFocus}
        placeholder={placeholder}
        rows={rows}
        maxLength={maxLength}
        disabled={disabled}
        className={`${styles['form-field__textarea']} ${error ? styles['form-field__textarea--error'] : ''}`}
      />
      <label 
        className={`${styles['form-field__label']} ${isLabelActive ? styles['form-field__label--active'] : ''} ${error ? styles['form-field__label--error'] : ''}`}
      >
        {label}{required ? '*' : ''}
      </label>
      <div className={styles['form-field__textarea-footer']}>
        {error && <span className={styles['form-field__error']}>{error}</span>}
        <span className={styles['form-field__char-count']}>{charCount}/{maxLength}</span>
      </div>
    </div>
  );
  
};

/**
 * NumberField - Generic number input with optional prefix/suffix
 * @param {string} prefix - Optional prefix (e.g., '₹' for currency)
 * @param {string} suffix - Optional suffix (e.g., 'years')
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @param {number} step - Step increment (default: 1)
 */
export const NumberField = ({ 
  name, 
  value, 
  onChange, 
  onBlur, 
  error, 
  label = 'Enter number',
  placeholder = '',
  prefix,
  suffix,
  min,
  max,
  step = 1,
  required = false,
  disabled = false,
  className = ''
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    const sanitized = e.target.value.replace(/[^0-9.]/g, '');
    const parts = sanitized.split('.');
    const cleanValue = parts.length > 2 ? parts[0] + '.' + parts.slice(1).join('') : sanitized;
    onChange(name, cleanValue);
  };

  const handleBlurEvent = (e) => {
    setIsFocused(false);
    if (onBlur) onBlur(name, e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const isLabelActive = isFocused || value.length > 0;
  const hasPrefix = !!prefix;
  const hasSuffix = !!suffix;

  return (
    <div className={`${styles['form-field']} ${styles['form-field--floating']} ${styles[className]}`}>
      <div className={hasPrefix || hasSuffix ? styles['form-field__number-wrapper'] : ''}>
        {hasPrefix && <span className={`${styles['form-field__number-prefix']} currency-sign`}>{prefix}</span>}
        
        <input
          type="text"
          inputMode="decimal"
          name={name}
          value={value}
          onChange={handleChange}
          onKeyDown={(e) => handleKeyPress(e, 'mobile')}
          onBlur={handleBlurEvent}
          onFocus={handleFocus}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          className={`
            ${styles['form-field__input']} 
            ${styles['form-field__input--number']} 
            ${hasPrefix ? styles['form-field__input--with-prefix'] : ''} 
            ${hasSuffix ? styles['form-field__input--with-suffix'] : ''} 
            ${error ? styles['form-field__input--error'] : ''}
          `}
        />
        
        {hasSuffix && <span className={styles['form-field__number-suffix']}>{suffix}</span>}
      </div>
      
      <label 
        className={`
          ${styles['form-field__label']} 
          ${isLabelActive ? styles['form-field__label--active'] : ''} 
          ${error ? styles['form-field__label--error'] : ''} 
          ${hasPrefix ? styles['form-field__label--with-prefix'] : ''}
        `}
      >
        {label}{required ? '*' : ''}
      </label>
      
      {error && <span className={styles['form-field__error']}>{error}</span>}
    </div>
  );
  
};

/**
 * EmailField - Reusable email input
 */
export const EmailField = ({ 
  name, 
  value, 
  onChange, 
  onBlur, 
  error, 
  placeholder = 'Email',
  disabled = false,
  required = false,
  className = ''
}) => {
  // Handle input change with sanitization
  const handleChange = (e) => {
    const sanitized = e.target.value.replace(sanitizePatterns.email, '');
    onChange(name, sanitized);
  };

  // Handle blur event for validation
  const handleBlurEvent = (e) => {
    if (onBlur) onBlur(name, e.target.value);
  };

  return (
    <div className={`form-field ${className}`}>
      <input
        type="email"
        name={name}
        value={value}
        onChange={handleChange}
        onKeyDown={(e) => handleKeyPress(e, 'email')}
        onBlur={handleBlurEvent}
        placeholder={required ? `${placeholder}*` : placeholder}
        disabled={disabled}
        className={`form-field__input ${error ? 'form-field__input--error' : ''}`}
      />
      {error && <span className="form-field__error">{error}</span>}
    </div>
  );
};

/**
 * PhoneField - Phone input with country code dropdown
 * @param {string} countryCode - Selected country code (e.g., 'IN')
 * @param {function} onCountryChange - Country change handler (code)
 */
export const PhoneField = ({ 
  name, 
  value, 
  onChange, 
  onBlur,
  error,
  countryCode = 'IN',
  onCountryChange,
  placeholder = 'Mobile Number*',
  disabled = false,
  maxLength = 15,
  className = ''
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const countryCodes = getCountryCodesOptions();
  const selectedCountry = countryCodes.find(c => c.code === countryCode) || countryCodes[0];

  // Handle input change with sanitization
  const handleChange = (e) => {
    const sanitized = e.target.value.replace(sanitizePatterns.mobile, '');
    onChange(name, sanitized);
  };

  // Handle blur event for validation
  const handleBlurEvent = (e) => {
    if (onBlur) onBlur(name, e.target.value);
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

  // Select country and close dropdown
  const selectCountry = (code) => {
    if (onCountryChange) onCountryChange(code);
    setIsDropdownOpen(false);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isDropdownOpen && !e.target.closest('.form-field__phone-wrapper')) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isDropdownOpen]);

  // Scroll to selected country when dropdown opens
  useEffect(() => {
    if (isDropdownOpen && dropdownRef.current) {
      const selectedOption = dropdownRef.current.querySelector('.form-field__country-option--active');
      if (selectedOption) {
        selectedOption.scrollIntoView({ block: 'center', behavior: 'auto' });
      }
    }
  }, [isDropdownOpen]);

  return (
    <div className={`form-field ${className}`}>
      <div className="form-field__phone-wrapper">
        {/* Country Code Dropdown */}
        <div className="form-field__country-dropdown-wrapper">
          <button
            type="button"
            className="form-field__country-button"
            onClick={toggleDropdown}
            disabled={disabled}
          >
            <span className="form-field__country-flag">{selectedCountry.flag}</span>
            <span className="form-field__country-code">{selectedCountry.value}</span>
            <span className="form-field__country-arrow">▾</span>
          </button>
          
          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="form-field__country-dropdown" ref={dropdownRef}>
              {countryCodes.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  className={`form-field__country-option ${
                    countryCode === country.code ? 'form-field__country-option--active' : ''
                  }`}
                  onClick={() => selectCountry(country.code)}
                >
                  <span className="form-field__country-label">{country.label}</span>
                  <span className="form-field__country-flag">{country.flag}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Mobile Input */}
        <input
          type="tel"
          name={name}
          value={value}
          onChange={handleChange}
          onKeyDown={(e) => handleKeyPress(e, 'mobile')}
          onBlur={handleBlurEvent}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={disabled}
          className={`form-field__input form-field__input--with-country ${
            error ? 'form-field__input--error' : ''
          }`}
        />
      </div>
      {error && <span className="form-field__error">{error}</span>}
    </div>
  );
};

/**
 * StateCityFields - Combined state and city selection with dependency
 * @param {object} citiesDataProp - Cities data object (optional, uses default if not provided)
 */
export const StateCityFields = ({
  stateName,
  stateValue,
  onStateChange,
  stateError,
  cityName,
  cityValue,
  onCityChange,
  cityError,
  citiesDataProp = null,
  statePlaceholder = 'Select State*',
  cityPlaceholder = 'Select City*',
  disabled = false,
  className = ''
}) => {
  const [cities, setCities] = useState([]);
  const statesData = citiesDataProp || citiesData;

  // Update cities when state changes
  useEffect(() => {
    if (stateValue && statesData[stateValue]) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setCities(statesData[stateValue]);
      // Clear city if not in new state's cities
      if (cityValue && !statesData[stateValue].includes(cityValue)) {
        onCityChange(cityName, '');
      }
    } else {
      setCities([]);
    }
  }, [stateValue, statesData, cityValue, cityName, onCityChange]);

  // Prepare options for CustomSelect
  const stateOptions = Object.keys(statesData).map(state => ({
    value: state,
    label: state
  }));

  const cityOptions = cities.map(city => ({
    value: city,
    label: city
  }));

  // Handle state change
  const handleStateChange = (e) => {
    onStateChange(stateName, e.target.value);
  };

  // Handle city change
  const handleCityChange = (e) => {
    onCityChange(cityName, e.target.value);
  };

  return (
    <div className={`${styles['form-field__group']} ${styles[className]}`}>
      <div className={styles['form-field']}>
        <CustomSelect
          name={stateName}
          value={stateValue}
          onChange={handleStateChange}
          options={stateOptions}
          placeholder={statePlaceholder}
          disabled={disabled}
          error={!!stateError}
        />
        {stateError && <span className={styles['form-field__error']}>{stateError}</span>}
      </div>
  
      <div className={styles['form-field']}>
        <CustomSelect
          name={cityName}
          value={cityValue}
          onChange={handleCityChange}
          options={cityOptions}
          placeholder={cityPlaceholder}
          disabled={!stateValue || disabled}
          error={!!cityError}
        />
        {cityError && <span className={styles['form-field__error']}>{cityError}</span>}
      </div>
    </div>
  );
};

/**
 * PincodeField - 6-digit pincode input
 */
export const PincodeField = ({ 
  name, 
  value, 
  onChange, 
  onBlur, 
  error, 
  placeholder = 'Pincode*',
  disabled = false,
  className = ''
}) => {
  // Handle input change with sanitization
  const handleChange = (e) => {
    const sanitized = e.target.value.replace(sanitizePatterns.pincode, '');
    onChange(name, sanitized);
  };

  // Handle blur event for validation
  const handleBlurEvent = (e) => {
    if (onBlur) onBlur(name, e.target.value);
  };

  return (
    <div className={`${styles['form-field']} ${styles[className]}`}>
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        onKeyDown={(e) => handleKeyPress(e, 'pincode')}
        onBlur={handleBlurEvent}
        placeholder={placeholder}
        maxLength="6"
        disabled={disabled}
        className={`${styles['form-field__input']} ${error ? styles['form-field__input--error'] : ''}`}
      />
      {error && <span className={styles['form-field__error']}>{error}</span>}
    </div>
  );  
};
/**
 * CompanyField - Company/Organization name input (optional/required)
 * @param {boolean} required - Make field required or optional (default: false)
 */
export const CompanyField = ({ 
    name, 
    value, 
    onChange, 
    onBlur, 
    error, 
    placeholder,
    required = false,
    disabled = false,
    className = ''
  }) => {
    // Handle input change with sanitization (allow alphanumeric + common business chars)
    const handleChange = (e) => {
      const sanitized = e.target.value.replace(/[^A-Za-z0-9\s&.,'-]/g, '');
      onChange(name, sanitized);
    };
  
    // Handle blur event for validation
    const handleBlurEvent = (e) => {
      if (onBlur) onBlur(name, e.target.value);
    };
  
    // Dynamic placeholder based on required prop
    const displayPlaceholder = placeholder || (required ? 'Company Name*' : 'Company Name');
  
    return (
      <div className={`${styles['form-field']} ${styles[className]}`}>
        <input
          type="text"
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlurEvent}
          placeholder={displayPlaceholder}
          disabled={disabled}
          className={`${styles['form-field__input']} ${error ? styles['form-field__input--error'] : ''}`}
        />
        {error && <span className={styles['form-field__error']}>{error}</span>}
      </div>
    );
  };

/**
 * ProductSelectField - Product dropdown using CustomSelect
 * @param {array} products - Array of product objects with id and name
 */
export const ProductSelectField = ({ 
  name, 
  value, 
  onChange, 
  error, 
  placeholder = 'Select a Product*',
  disabled = false,
  className = ''
}) => {
  const products = getProducts();
  const productOptions = products.map(product => ({
    value: product.name,
    label: product.name
  }));

  // Handle change event
  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <div className={`${styles['form-field']} ${styles[className]}`}>
      <CustomSelect
        name={name}
        value={value}
        onChange={handleChange}
        options={productOptions}
        placeholder={placeholder}
        disabled={disabled}
        error={!!error}
      />
      {error && <span className={styles['form-field__error']}>{error}</span>}
    </div>
  );  
};

/**
 * InfrastructureCheckboxField - Multi-select infrastructure options
 */
export const InfrastructureCheckboxField = ({ 
  name, 
  value = [],
  onChange, 
  error,
  disabled = false,
  className = ''
}) => {
  const infrastructureOptions = [
    'Showroom',
    'Workshop',
    'Warehouse'
  ];

  // Handle checkbox toggle
  const handleCheckboxChange = (option) => {
    let newValue;
    if (value.includes(option)) {
      newValue = value.filter(v => v !== option);
    } else {
      newValue = [...value, option];
    }
    onChange(name, newValue);
  };

  return (
    <div className={`form-field ${className}`}>
      <label className="form-field__label-text">Existing Infrastructure:</label>
      <div className="form-field__checkbox-group">
        {infrastructureOptions.map((option) => {
          const checkboxId = `${name}-${option.toLowerCase()}`;
          const isChecked = value.includes(option);
          
          return (
            <div key={option} className={styles['form-field__checkbox']}>
              <input
                type="checkbox"
                id={checkboxId}
                name={name}
                value={option}
                checked={isChecked}
                onChange={() => handleCheckboxChange(option)}
                disabled={disabled}
                className={styles['form-field__checkbox-input']}
              />
              <label htmlFor={checkboxId} className={styles['form-field__checkbox-label']}>
                <span className={styles['form-field__checkbox-box']}>
                  {isChecked && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </span>
                <span className={styles['form-field__checkbox-text']}>{option}</span>
              </label>
            </div>
          );          
        })}
      </div>
      {error && <span className={styles['form-field__error']}>{error}</span>}
    </div>
  );
};

/**
 * FullNameField - Single full name input field
 * @param {string} name - Field identifier
 * @param {string} value - Current value
 * @param {function} onChange - Change handler (name, value)
 * @param {function} onBlur - Blur handler (name, value)
 * @param {string} error - Error message
 * @param {string} placeholder - Placeholder text
 * @param {boolean} disabled - Disable field
 * @param {string} className - Additional CSS classes
 */
export const FullNameField = ({ 
  name, 
  value, 
  onChange, 
  onBlur, 
  error, 
  placeholder = 'Full Name*',
  disabled = false,
  className = ''
}) => {
  // Handle input change with sanitization (alphabets and spaces only)
  const handleChange = (e) => {
    const sanitized = e.target.value.replace(/[^A-Za-z\s]/g, '');
    onChange(name, sanitized);
  };

  // Handle blur event for validation
  const handleBlurEvent = (e) => {
    if (onBlur) onBlur(name, e.target.value);
  };

  return (
    <div className={`${styles['form-field']} ${styles['form-field--floating']} ${styles[className]}`}>
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        onKeyDown={(e) => handleKeyPress(e, 'name')}
        onBlur={handleBlurEvent}
        placeholder={placeholder}
        disabled={disabled}
        className={`${styles['form-field__input']} ${error ? styles['form-field__input--error'] : ''}`}
      />
      {error && <span className={styles['form-field__error']}>{error}</span>}
    </div>
  );
};

/**
 * DesignationField - Job designation/title input (optional)
 */
export const DesignationField = ({ 
  name, 
  value, 
  onChange, 
  onBlur, 
  error, 
  placeholder = 'Designation',
  disabled = false,
  className = ''
}) => {
  // Handle input change with sanitization
  const handleChange = (e) => {
    const sanitized = e.target.value.replace(/[^A-Za-z0-9\s&.,'\-/()]/g, '');
    onChange(name, sanitized);
  };

  // Handle blur event for validation
  const handleBlurEvent = (e) => {
    if (onBlur) onBlur(name, e.target.value);
  };

  return (
    <div className={`${styles['form-field']} ${styles[className]}`}>
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlurEvent}
        placeholder={placeholder}
        disabled={disabled}
        className={`${styles['form-field__input']} ${error ? styles['form-field__input--error'] : ''}`}
      />
      {error && <span className={styles['form-field__error']}>{error}</span>}
    </div>
  );
};

/**
 * AddressField - Single line address input with character limit
 * @param {number} maxLength - Maximum character limit (default: 200)
 */
export const AddressField = ({ 
  name, 
  value, 
  onChange, 
  onBlur,
  error, 
  label = 'Address',
  placeholder = '',
  maxLength = 200,
  required = false,
  disabled = false,
  className = ''
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    if (newValue.length <= maxLength) {
      onChange(name, newValue);
    }
  };

  const handleBlurEvent = (e) => {
    setIsFocused(false);
    if (onBlur) onBlur(name, e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const isLabelActive = isFocused || value.length > 0;

  return (
    <div className={`${styles['form-field']} ${styles[className]}`}>
      <input
        type="text"
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlurEvent}
        onFocus={handleFocus}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
        className={`${styles['form-field__input']} ${error ? styles['form-field__input--error'] : ''}`}
      />
      <label 
        className={`${styles['form-field__label']} ${isLabelActive ? styles['form-field__label--active'] : ''} ${error ? styles['form-field__label--error'] : ''}`}
      >
        {label}{required ? '*' : ''}
      </label>
      {error && <span className={styles['form-field__error']}>{error}</span>}
    </div>
  );
};

/**
 * FleetRequirementField - Integer number input for fleet size
 */
export const FleetRequirementField = ({ 
  name, 
  value, 
  onChange, 
  onBlur, 
  error, 
  placeholder = 'Expected Fleet Requirement (No.)',
  disabled = false,
  className = ''
}) => {
  // Handle input change with sanitization (integers only)
  const handleChange = (e) => {
    const sanitized = e.target.value.replace(/[^0-9]/g, '');
    onChange(name, sanitized);
  };

  // Handle blur event for validation
  const handleBlurEvent = (e) => {
    if (onBlur) onBlur(name, e.target.value);
  };

  return (
    <div className={`${styles['form-field']} ${styles[className]}`}>
      <input
        type="text"
        inputMode="numeric"
        name={name}
        value={value}
        onChange={handleChange}
        onKeyDown={(e) => handleKeyPress(e, 'mobile')}
        onBlur={handleBlurEvent}
        placeholder={placeholder}
        maxLength="4"
        disabled={disabled}
        className={`${styles['form-field__input']} ${error ? styles['form-field__input--error'] : ''}`}
      />
      {error && <span className={styles['form-field__error']}>{error}</span>}
    </div>
  );
};

/**
 * DateField - Date input with auto-fill today's date
 * @param {boolean} autoFillToday - Auto-fill with today's date (default: true)
 */
export const DateField = ({ 
  name, 
  value, 
  onChange, 
  onBlur,
  error, 
  label = 'Date',
  autoFillToday = true,
  disabled = false,
  className = ''
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (autoFillToday && !value) {
      const today = new Date().toISOString().split('T')[0];
      onChange(name, today);
    }
  }, [autoFillToday, value, name, onChange]);

  const handleChange = (e) => onChange(name, e.target.value);
  const handleBlurEvent = (e) => { if (onBlur) onBlur(name, e.target.value); };

  // open picker only from a synchronous user gesture
  const openPicker = () => {
    if (disabled) return;
    try {
      inputRef.current?.showPicker?.();
    } catch (err) {
      // ignore NotAllowedError or unsupported cases
    }
  };

  // Mouse/touch: onMouseDown is a trusted gesture and fires before focus
  const handleMouseDown = (e) => {
    // prevent default so the element doesn't immediately steal focus before picker opens (optional)
    // e.preventDefault();
    openPicker();
  };

  // Keyboard: open on Enter or Space when input has focus
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openPicker();
    }
  };

  return (
    <div className={`${styles['form-field']} ${styles[className]}`}>
      {label && <label className="form-field__label-text">{label}</label>}
      <input
        ref={inputRef}
        type="date"
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlurEvent}
        onMouseDown={handleMouseDown}   // ← use this for trusted mouse/touch gesture
        onKeyDown={handleKeyDown}       // ← keyboard activation (Enter/Space)
        disabled={disabled}
        className={`${styles['form-field__input']} ${styles['form-field__input--date']} ${error ? styles['form-field__input--error'] : ''}`}
      />
      {error && <span className={styles['form-field__error']}>{error}</span>}
    </div>
  );
};

/**
 * RatingField - Rating selection (Excellent/Good/Average/Poor)
 * @param {string} label - Question label
 */
export const RatingField = ({ 
  name, 
  label,
  value,
  onChange, 
  error,
  required = true,
  disabled = false,
  className = ''
}) => {
  const ratingOptions = ['Excellent', 'Good', 'Average', 'Poor'];

  return (
    <RadioGroupField
      name={name}
      label={label}
      options={ratingOptions}
      value={value}
      onChange={onChange}
      error={error}
      disabled={disabled}
      className={`${styles[className]} ${styles['form-field--rating']}`}
      horizontal={true}
    />
  );
};

/**
 * VehicleTypeRadioField - Vehicle type selection with "Other" text input
 */
export const VehicleTypeRadioField = ({ 
  name, 
  value,
  otherValue = '',
  onChange, 
  onOtherChange,
  error,
  disabled = false,
  className = ''
}) => {
  const vehicleOptions = ['eCV', '4W'];

  // Handle radio selection
  const handleRadioChange = (option) => {
    onChange(name, option);
  };

  // Handle "Other" text input
  const handleOtherTextChange = (e) => {
    onOtherChange(e.target.value);
  };

  return (
    <div className={`${styles['form-field']} ${styles[className]}`}>
      <label className="form-field__label-text">Vehicle Type:</label>
      <div className="form-field__radio-group form-field__radio-group--inline">
        {vehicleOptions.map((option) => {
          const radioId = `${name}-${option.toLowerCase()}`;
          
          return (
              <label key={option} className={styles['form-field__radio-item']}>
              <input
                type="radio"
                id={radioId}
                name={name}
                value={option}
                checked={value === option}
                onChange={() => handleRadioChange(option)}
                disabled={disabled}
                className={styles['form-field__radio-input']}
              />
              <span className={styles['form-field__radio-label']}>{option}</span>
            </label>
          );
        })}
        
        {/* Other Option with Text Input */}
        <div className={styles['form-field__radio-other']}>
          <label className={styles['form-field__radio-item']}>
            <input
              type="radio"
              id={`${name}-other`}
              name={name}
              value="Other"
              checked={value === 'Other'}
              onChange={() => handleRadioChange('Other')}
              disabled={disabled}
              className={styles['form-field__radio-input']}
            />
            <span className={styles['form-field__radio-label']}>Other:</span>
          </label>
          <input
            type="text"
            value={otherValue}
            onChange={handleOtherTextChange}
            placeholder="Specify"
            disabled={disabled || value !== 'Other'}
            className={styles['form-field__radio-other-input']}
          />
        </div>
      </div>
      {error && <span className={styles['form-field__error']}>{error}</span>}
    </div>
  );
};

/**
 * YesNoField - Binary Yes/No selection
 */
export const YesNoField = ({ 
  name, 
  label,
  value,
  onChange, 
  error,
  required = true,
  disabled = false,
  className = ''
}) => {
  const yesNoOptions = ['Yes', 'No'];

  return (
    <RadioGroupField
      name={name}
      label={label}
      options={yesNoOptions}
      value={value}
      onChange={onChange}
      error={error}
      disabled={disabled}
      className={`${styles[className]} ${styles['form-field--yesno']}`}
      horizontal={true}
    />
  );
};

// ============================================================================
// 3. CHECKBOX GROUP COMPONENTS
// ============================================================================

/**
 * CheckboxGroupField - Reusable checkbox group with "Others" option
 * @param {array} options - Array of checkbox options
 * @param {array} value - Array of selected values
 * @param {string} otherValue - Text for "Others" option
 * @param {function} onChange - Change handler (name, array)
 * @param {function} onOtherChange - Handler for "Others" text input
 * @param {boolean} hasOther - Show "Others" option with text input
 */
const CheckboxGroupField = ({ 
  name,
  label,
  options = [],
  value = [],
  otherValue = '',
  onChange,
  onOtherChange,
  error,
  hasOther = true,
  disabled = false,
  className = ''
}) => {
  // Handle checkbox toggle
  const handleCheckboxChange = (option) => {
    let newValue;
    if (value.includes(option)) {
      newValue = value.filter(v => v !== option);
    } else {
      newValue = [...value, option];
    }
    onChange(name, newValue);
  };

  // Handle "Others" text input
  const handleOtherTextChange = (e) => {
    onOtherChange(e.target.value);
  };

  return (
    <div className={`${styles['form-field']} ${styles[className]}`}>
      {label && <label className={styles['form-field__label-text']}>{label}</label>}
      <div className={styles['form-field__checkbox-group']}>
        {options.map((option) => {
          const checkboxId = `${name}-${option.replace(/\s+/g, '-').toLowerCase()}`;
          const isChecked = value.includes(option);
          
          return (
            <div key={option} className={styles['form-field__checkbox']}>
              <input
                type="checkbox"
                id={checkboxId}
                name={name}
                value={option}
                checked={isChecked}
                onChange={() => handleCheckboxChange(option)}
                disabled={disabled}
                className={styles['form-field__checkbox-input']}
              />
              <label htmlFor={checkboxId} className={styles['form-field__checkbox-label']}>
                <span className={styles['form-field__checkbox-box']}>
                  {isChecked && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </span>
                <span className={styles['form-field__checkbox-text']}>{option}</span>
              </label>
            </div>
          );
        })}
        
        {hasOther && (
          <div className={styles['form-field__checkbox-other']}>
            <div className={styles['form-field__checkbox']}>
              <input
                type="checkbox"
                id={`${name}-others`}
                name={name}
                value="Others"
                checked={value.includes('Others')}
                onChange={() => handleCheckboxChange('Others')}
                disabled={disabled}
                className={styles['form-field__checkbox-input']}
              />
              <label htmlFor={`${name}-others`} className={styles['form-field__checkbox-label']}>
                <span className={styles['form-field__checkbox-box']}>
                  {value.includes('Others') && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17l-5-5" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </span>
                <span className={styles['form-field__checkbox-text']}>Others</span>
              </label>
            </div>
            {value.includes('Others') && (
              <input
                type="text"
                value={otherValue}
                onChange={handleOtherTextChange}
                placeholder="Please specify"
                disabled={disabled}
                className={styles['form-field__checkbox-other-input']}
              />
            )}
          </div>
        )}
      </div>
      {error && <span className={styles['form-field__error']}>{error}</span>}
    </div>
  );
};
/**
 * VehicleTypeField - Vehicle type selection with checkboxes
 */
export const VehicleTypeField = ({ 
  name, 
  value = [],
  otherValue = '',
  onChange, 
  onOtherChange,
  error,
  disabled = false,
  className = ''
}) => {
  const vehicleOptions = [
    '1.5T e-SCV',
    '2.5T e-SCV',
    '4.5T e-LCV'
  ];

  return (
    <CheckboxGroupField
      name={name}
      label="Type of Vehicle Interested In:*"
      options={vehicleOptions}
      value={value}
      otherValue={otherValue}
      onChange={onChange}
      onOtherChange={onOtherChange}
      error={error}
      hasOther={true}
      disabled={disabled}
      className={className}
    />
  );
};

/**
 * IntendedApplicationField - Application/usage selection with checkboxes
 */
export const IntendedApplicationField = ({ 
  name, 
  value = [],
  otherValue = '',
  onChange, 
  onOtherChange,
  error,
  disabled = false,
  className = ''
}) => {
  const applicationOptions = [
    'Logistics & Cargo',
    'Last Mile Delivery',
    'E-Commerce Deliveries',
    'FMCG / Retail Distribution'
  ];

  return (
    <CheckboxGroupField
      name={name}
      label="Intended Application / Usage:*"
      options={applicationOptions}
      value={value}
      otherValue={otherValue}
      onChange={onChange}
      onOtherChange={onOtherChange}
      error={error}
      hasOther={true}
      disabled={disabled}
      className={className}
    />
  );
};

// ============================================================================
// 4. RADIO GROUP COMPONENTS - INSERT AFTER Checkbox Components
// ============================================================================

/**
 * RadioGroupField - Reusable radio button group
 * @param {array} options - Array of radio options
 * @param {string} value - Selected value
 * @param {function} onChange - Change handler (name, value)
 */
const RadioGroupField = ({ 
  name,
  label,
  options = [],
  value,
  onChange,
  error,
  disabled = false,
  horizontal = false,
  className = ''
}) => {
  // Handle radio selection
  const handleRadioChange = (option) => {
    onChange(name, option);
  };

  const groupClass = horizontal 
    ? `${styles['form-field__radio-group']} ${styles['form-field__radio-group--horizontal']}`
    : `${styles['form-field__radio-group']}`;

  return (
    <div className={`${styles['form-field']} ${styles[className]}`}>
      {label && <label className={styles['form-field__label-text']}>{label}</label>}
      <div className={groupClass}>
        {options.map((option) => {
          const radioId = `${name}-${option.replace(/\s+/g, '-').toLowerCase()}`;
          
          return (
            <label key={option} className={styles['form-field__radio-item']}>
              <input
                type="radio"
                id={radioId}
                name={name}
                value={option}
                checked={value === option}
                onChange={() => handleRadioChange(option)}
                disabled={disabled}
                className={styles['form-field__radio-input']}
              />
              <span className={styles['form-field__radio-label']}>{option}</span>
            </label>
          );
        })}
      </div>
      {error && <span className={styles['form-field__error']}>{error}</span>}
    </div>
  );
};


/**
 * TimelineField - Purchase timeline selection with radio buttons
 */
export const TimelineField = ({ 
  name, 
  value,
  onChange, 
  error,
  disabled = false,
  className = ''
}) => {
  const timelineOptions = [
    'Immediate',
    '3–6 Months',
    '6–12 Months',
    'More than 12 Months'
  ];

  return (
    <RadioGroupField
      name={name}
      label="Expected Purchase Timeline:*"
      options={timelineOptions}
      value={value}
      onChange={onChange}
      error={error}
      disabled={disabled}
      className={className}
    />
  );
};

/**
 * ProcurementModeField - Procurement mode selection with radio buttons
 */
export const ProcurementModeField = ({ 
  name, 
  value,
  onChange, 
  error,
  disabled = false,
  className = ''
}) => {
  const procurementOptions = [
    'Outright Purchase',
    'Lease / Rental',
    'Fleet Operator Partnership'
  ];

  return (
    <RadioGroupField
      name={name}
      label="Preferred Mode of Procurement:*"
      options={procurementOptions}
      value={value}
      onChange={onChange}
      error={error}
      disabled={disabled}
      className={className}
    />
  );
};

/**
 * TimeSlotField - Time slot selection (Morning/Afternoon/Evening)
 */
export const TimeSlotField = ({ 
  name, 
  label = 'Preferred Time Slot:*',
  value,
  onChange, 
  error,
  disabled = false,
  className = ''
}) => {
  const timeSlotOptions = [
    'Morning (10 AM – 1 PM)',
    'Afternoon (1 PM – 4 PM)',
    'Evening (4 PM – 7 PM)'
  ];

  return (
    <RadioGroupField
      name={name}
      label={label}
      options={timeSlotOptions}
      value={value}
      onChange={onChange}
      error={error}
      disabled={disabled}
      className={className}
      horizontal={false}
    />
  );
};

/**
 * BusinessSegmentField - Business segment selection with "Others" text input
 */
export const BusinessSegmentField = ({ 
  name, 
  value,
  otherValue = '',
  onChange, 
  onOtherChange,
  error,
  disabled = false,
  className = ''
}) => {
  const segmentOptions = [
    'Logistics & Last Mile Delivery',
    'Retail & FMCG',
    'E-Commerce',
    'Utilities & Services'
  ];

  // Handle radio selection
  const handleRadioChange = (option) => {
    onChange(name, option);
  };

  // Handle "Others" text input
  const handleOtherTextChange = (e) => {
    onOtherChange(e.target.value);
  };

  return (
    <div className={`${styles['form-field']} ${styles[className]}`}>
      <label className={styles['form-field__label-text']}>Business Segment:</label>
      <div className={styles['form-field__radio-group']}>
        {segmentOptions.map((option) => {
          const radioId = `${name}-${option.replace(/\s+/g, '-').toLowerCase()}`;
          
          return (
            <label key={option} className={styles['form-field__radio-item']}>
              <input
                type="radio"
                id={radioId}
                name={name}
                value={option}
                checked={value === option}
                onChange={() => handleRadioChange(option)}
                disabled={disabled}
                className={styles['form-field__radio-input']}
              />
              <span className={styles['form-field__radio-label']}>{option}</span>
            </label>
          );
        })}
        
        {/* Others Option with Text Input */}
        <div className={styles['form-field__radio-other']}>
          <label className={styles['form-field__radio-item']}>
            <input
              type="radio"
              id={`${name}-others`}
              name={name}
              value="Others"
              checked={value === 'Others'}
              onChange={() => handleRadioChange('Others')}
              disabled={disabled}
              className={styles['form-field__radio-input']}
            />
            <span className={styles['form-field__radio-label']}>Others:</span>
          </label>
          <input
            type="text"
            value={otherValue}
            onChange={handleOtherTextChange}
            placeholder="Specify"
            disabled={disabled || value !== 'Others'}
            className={styles['form-field__radio-other-input']}
          />
        </div>
      </div>
      {error && <span className={styles['form-field__error']}>{error}</span>}
    </div>
  );
};
/**
 * ConsentCheckboxField - Single consent/agreement checkbox with long label
 * @param {string} id - Unique checkbox ID (not used, kept for API compatibility)
 * @param {string} label - Checkbox label text
 * @param {boolean} value - Checked state
 * @param {function} onChange - Change handler (name, boolean)
 */
export const ConsentCheckboxField = ({ 
  name,
  id,
  label,
  value = false,
  onChange,
  error,
  disabled = false,
  className = ''
}) => {
  // Convert boolean to array format for CheckboxGroupField
  const arrayValue = value ? [label] : [];
  
  // Convert array format back to boolean for parent
  const handleChange = (fieldName, newArrayValue) => {
    onChange(name, newArrayValue.length > 0);
  };

  return (
    <CheckboxGroupField
      name={name}
      options={[label]}
      value={arrayValue}
      onChange={handleChange}
      error={error}
      hasOther={false}
      disabled={disabled}
      className={`${styles['form-field--consent']} ${styles[className]}`}
    />
  );
};
// ============================================================================
// EXPORTS
// ============================================================================

const FormFields = {
  EmailField,
  PhoneField,
  StateCityFields,
  PincodeField,
  CompanyField,
  ProductSelectField,
  MessageField,
  NumberField,
  InfrastructureCheckboxField,
  // Product Enquiry Fields
  FullNameField,
  DesignationField,
  AddressField,
  FleetRequirementField,
  DateField,
  VehicleTypeField,
  IntendedApplicationField,
  TimelineField,
  ProcurementModeField,
  // Feedback Form Fields
  TextField,
  RatingField,
  VehicleTypeRadioField,
  YesNoField,
  // Test Ride Form Fields
  TimeSlotField,
  BusinessSegmentField,
  ConsentCheckboxField,
};

export default FormFields;