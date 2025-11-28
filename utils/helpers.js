// ============================================================================
// HELPER FUNCTIONS
// ============================================================================
import countryCodesData from '../data/countryCodes.json'

// Convert country code to flag emoji
export const getCountryFlag = (countryCode) => {
    const codePoints = countryCode.toUpperCase().split('').map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
  };
  
export const getDialCode = (countryCode) => {
    const countryCodes = getCountryCodesOptions();
    const country = countryCodes.find(c => c.code === countryCode);
    return country ? country.value : '+91'; // fallback to +91
  };
  // Transform country codes data for dropdown
export const getCountryCodesOptions = () => {
    return countryCodesData.map(country => ({
      value: country.dial_code,
      label: `${country.name} (${country.dial_code})`,
      flag: getCountryFlag(country.code),
      code: country.code
    }));
  };

const helpers = {
  getCountryFlag,
  getDialCode,
  getCountryCodesOptions
};
export default helpers;