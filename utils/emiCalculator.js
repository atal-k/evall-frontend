// ============================================================================
// FILE: src/utils/emiCalculator.js
// ============================================================================

/**
 * Calculate EMI using standard formula
 * EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]
 * @param {number} principal - Loan amount
 * @param {number} annualRate - Annual interest rate (percentage)
 * @param {number} tenureMonths - Loan tenure in months
 * @returns {object} EMI calculation results
 */
export const calculateEMI = (principal, annualRate, tenureMonths) => {
    if (!principal || !annualRate || !tenureMonths) {
      return {
        monthlyEMI: 0,
        principalAmount: 0,
        totalInterest: 0,
        totalAmount: 0
      };
    }
  
    // Convert annual rate to monthly rate
    const monthlyRate = annualRate / 12 / 100;
    
    // Calculate EMI
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / 
                (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    
    const totalAmount = emi * tenureMonths;
    const totalInterest = totalAmount - principal;
  
    return {
      monthlyEMI: Math.round(emi),
      principalAmount: Math.round(principal),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount)
    };
  };