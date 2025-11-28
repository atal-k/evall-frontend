// Input sanitization patterns for each field type
export const sanitizePatterns = {
    name: /[^A-Za-z\s]/g,
    mobile: /[^0-9]/g,
    email: /[^A-Za-z0-9@.\-_]/g,
    pincode: /[^0-9]/g,
    message: null // No sanitization for message field
  };
  
  // Key press validation - prevent invalid characters from being typed
  export const handleKeyPress = (e, fieldType) => {
    const char = e.key;
    
    // Allow special keys
    if (['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Enter', 'Escape'].includes(char)) {
      return;
    }
  
    // Prevent default if character doesn't match pattern
    switch (fieldType) {
      case 'name':
        if (!/[A-Za-z\s]/.test(char)) e.preventDefault();
        break;
      case 'mobile':
      case 'pincode':
        if (!/[0-9]/.test(char)) e.preventDefault();
        break;
      case 'email':
        if (!/[A-Za-z0-9@.\-_]/.test(char)) e.preventDefault();
        break;
      default:
        break;
    }
  };
  
  // Validate individual field based on type and value
  export const validateField = (fieldType, value, options = {}) => {
    const trimmedValue = typeof value === 'string' ? value.trim() : value;
  
    switch (fieldType) {
      case 'name':
        if (!trimmedValue) return 'Name is required';
        if (!/^[A-Za-z\s]{2,}$/.test(trimmedValue)) return 'Must be at least 2 letters, alphabets only';
        break;
  
      case 'mobile':
        if (!trimmedValue) return 'Mobile number is required';
        if (options.countryCode === 'IN' && !/^[6-9]\d{9}$/.test(trimmedValue)) {
          return 'Enter valid 10-digit mobile number';
        }
        if (options.countryCode !== 'IN' && (trimmedValue.length < 7 || trimmedValue.length > 15)) {
          return 'Enter valid mobile number';
        }
        break;
  
      case 'email':
        if(!trimmedValue) return 'Email is required'
        if (trimmedValue && !/^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(trimmedValue)) {
          return 'Enter valid email address';
        }
        break;
  
      case 'pincode':
        if (!trimmedValue) return 'Pincode is required';
        if (!/^\d{6}$/.test(trimmedValue)) return 'Enter valid 6-digit pincode';
        break;
      
      case 'company':
      if (options.required && !trimmedValue) {
          return 'Company name is required';
      }
      if (trimmedValue && trimmedValue.length < 2) {
          return 'Company name must be at least 2 characters';
      }
      break;
  
      case 'select':
        if (!value) return 'This field is required';
        break;
  
      case 'message':
        if (options.required && !trimmedValue) return 'This field is required';
        if (options.maxLength && trimmedValue.length > options.maxLength) {
          return `Maximum ${options.maxLength} characters allowed`;
        }
        break;
      
        case 'number':
          if (options.required && !trimmedValue) return 'This field is required';
          const numValue = parseFloat(trimmedValue);
          if (isNaN(numValue)) return 'Enter valid number';
          if (options.min !== undefined && numValue < options.min) {
            return `Minimum value is ${options.min}`;
          }
          if (options.max !== undefined && numValue > options.max) {
            return `Maximum value is ${options.max}`;
          }
          break;
        
        case 'url':
          if (trimmedValue && !/^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/.test(trimmedValue)) {
            return 'Enter valid website URL';
          }
          break;
        
        case 'infrastructure':
          if (options.required && (!value || value.length === 0)) {
            return 'Please select at least one option';
          }
          break;
  
        case 'text':
          if (options.required && !trimmedValue) return 'This field is required';
          if (options.minLength && trimmedValue.length < options.minLength) {
            return `Minimum ${options.minLength} characters required`;
          }
          if (options.maxLength && trimmedValue.length > options.maxLength) {
            return `Maximum ${options.maxLength} characters allowed`;
          }
          break;
        
        case 'rating':
          if (!value) return 'Please select a rating';
          break;
        
        case 'vehicleTypeRadio':
          if (!value) return 'Please select vehicle type';
          if (value === 'Other' && !options.otherValue?.trim()) {
            return 'Please specify vehicle type';
          }
          break;
        
        case 'yesNo':
          if (!value) return 'Please select an option';
          break;      
  
        case 'fullName':
          if (!trimmedValue) return 'Full name is required';
          if (trimmedValue.length < 3) return 'Name must be at least 3 characters';
          if (!/^[A-Za-z\s]+$/.test(trimmedValue)) return 'Only alphabets and spaces allowed';
          break;
        
        case 'designation':
          if (trimmedValue && trimmedValue.length < 2) return 'Designation must be at least 2 characters';
          break;
        
        case 'address':
          if (!trimmedValue) return 'Address is required';
          if (trimmedValue.length < 10) return 'Address must be at least 10 characters';
          if (options.maxLength && trimmedValue.length > options.maxLength) {
            return `Address must not exceed ${options.maxLength} characters`;
          }
          break;
        
        case 'checkboxGroup':
          if (options.required && (!value || value.length === 0)) {
            return 'Please select at least one option';
          }
          // Validate "Others" text when Others is selected
          if (value && value.includes('Others') && !options.otherValue?.trim()) {
            return 'Please specify other option';
          }
          break;
        
        case 'radioGroup':
          if (!value) return 'Please select an option';
          break;
        
        case 'fleetSize':
          if (!value) return 'Fleet requirement is required';
          const num = parseInt(value);
          if (isNaN(num) || num < 1) return 'Enter valid quantity (minimum 1)';
          if (num > 9999) return 'Maximum 9999 vehicles allowed';
          break;
        
        case 'date':
          if (!value) return 'Date is required';
          const date = new Date(value);
          if (isNaN(date.getTime())) return 'Invalid date';
          break;
  
        case 'timeSlot':
          if (!value) return 'Please select a time slot';
          break;
        
        case 'businessSegment':
          if (!value) return 'Please select a business segment';
          if (value === 'Others' && !options.otherValue?.trim()) {
            return 'Please specify business segment';
          }
          break;
        
        case 'consent':
          if (options.required && !value) return 'You must accept to proceed';
          break;
  
      default:
        break;
    }
  
    return '';
  };
  
  const validators = {
    validateField,
    handleKeyPress,
    sanitizePatterns
  };
  export default validators;