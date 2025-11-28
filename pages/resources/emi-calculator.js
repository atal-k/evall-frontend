// ============================================================================
// FILE: src/pages/EMICalculator.jsx
// ============================================================================

import React, { useState } from 'react';
import './EMICalculator.css';
import DonutChart from '../components/common/DonutChart';
import RangeSlider from '../components/common/RangeSlider';
import Button from '../components/common/Button';
import { formatCurrency } from '../utils/formatter';
import { calculateEMI } from '../utils/emiCalculator';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [results, setResults] = useState({
    monthlyEMI: 0,
    principalAmount: 0,
    totalInterest: 0,
    totalAmount: 0
  });
  const [showResults, setShowResults] = useState(true);
  const [calculationKey, setCalculationKey] = useState(0);
  const [error, setError] = useState('');

  // Calculate EMI on submit
  const handleCalculate = () => {
    // Validation
    if (loanAmount === 0 || tenure === 0 || interestRate === 0) {
      setError('Please fill in all the details to calculate EMI');
      // setShowResults(false);
      return;
    }

    setError('');
    const calculatedResults = calculateEMI(loanAmount, interestRate, tenure);
    setResults(calculatedResults);
    setShowResults(true);
    setCalculationKey(prev => prev + 1); 
  };

  // Reset form
  const handleReset = () => {
    setLoanAmount(0);
    setTenure(0);
    setInterestRate(0);
    setResults({
      monthlyEMI: 0,
      principalAmount: 0,
      totalInterest: 0,
      totalAmount: 0
    });
    setError('');
    setCalculationKey(0);
  };

  // Prepare chart data
  const chartData = showResults ? [
    {
      label: 'Principal',
      value: results.principalAmount || 90,
      color: '#00b300'
    },
    {
      label: 'Interest',
      value: results.totalInterest || 10,
      color: '#066F29'
    }
  ] : [];

  return (
    <div className="emi-calculator-page">
      <div className="emi-calculator">
        <div className="emi-calculator__header">
          <h1 className="emi-calculator__title">EMI <span className="highlight">Calculator</span></h1>
          <p className="emi-calculator__subtitle">
            Calculate your monthly EMI and plan your vehicle financing
          </p>
        </div>

        <div className="emi-calculator__container">
          {/* Input Section */}
          <div className="emi-calculator__inputs">
            <h2 className="emi-calculator__section-title">
              Please fill in the details below to calculate your EMI.
            </h2>
            <RangeSlider
              label="Loan Amount"
              min={0}
              max={6000000}
              step={50000}
              value={loanAmount}
              onChange={setLoanAmount}
              type="currency"
              displayMin={<><span className="currency-sign">₹</span>0</>}
              displayMax={<><span className="currency-sign">₹</span>60 lacs</>}
            />

            <RangeSlider
              label="Loan Tenure (In Months)"
              min={0}
              max={120}
              step={1}
              value={tenure}
              onChange={setTenure}
              type="number"
              suffix="Months"
            />

            <RangeSlider
              label="Interest Rate (% per annum)"
              min={0}
              max={15}
              step={0.1}
              value={interestRate}
              onChange={setInterestRate}
              type="percentage"
            />
            {error && (
              <div className="emi-calculator__error">
                {error}
              </div>
            )}

            <div className="emi-calculator__actions">
              <Button variant="primary" onClick={handleCalculate}>
                Calculate EMI
              </Button>
              <Button variant="outline" onClick={handleReset}>
                Reset
              </Button>
            </div>
          </div>

          {/* Results Section */}
          <div className={`emi-calculator__results ${showResults ? 'emi-calculator__results--visible' : ''}`}>
            <div className="emi-calculator__metrics">
              <div className="emi-calculator__metric-card">
                <div className="emi-calculator__metric-value">
                  {showResults ? formatCurrency(results.principalAmount) : '₹0'}
                </div>
                <div className="emi-calculator__metric-label">Principal Amount</div>
              </div>

              <div className="emi-calculator__metric-card">
                <div className="emi-calculator__metric-value">
                  {showResults ? formatCurrency(results.totalInterest) : '₹0'}
                </div>
                <div className="emi-calculator__metric-label">Total Interest</div>
              </div>

              <div className="emi-calculator__metric-card">
                <div className="emi-calculator__metric-value">
                  {showResults ? formatCurrency(results.totalAmount) : '₹0'}
                </div>
                <div className="emi-calculator__metric-label">Total Amount</div>
              </div>

              <div className="emi-calculator__metric-card emi-calculator__metric-card--highlight">
                <div className="emi-calculator__metric-value">
                  {showResults ? formatCurrency(results.monthlyEMI) : '₹0'}
                </div>
                <div className="emi-calculator__metric-label">Monthly EMI</div>
              </div>
            </div>

            {showResults && chartData.length > 0 && (
              <div className="emi-calculator__chart-wrapper">
                <DonutChart
                  key={calculationKey} 
                  data={chartData}
                  width={250}
                  height={250}
                  donutThickness={50}
                  showLegend={true}
                  animate={true}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMICalculator;