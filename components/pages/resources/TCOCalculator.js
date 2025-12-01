// ============================================
// components/pages/resources/TCOCalculator.js
// ============================================

import React, { useState, useEffect } from 'react';
import TCOForm from '@/components/sections/tco-calculator/TCOForm';
import TCOResultPanel from '@/components/sections/tco-calculator/TCOResultPanel';
import TCOCostTable from '@/components/sections/tco-calculator/TCOCostTable';
import { DEFAULT_VALUES, getResultData } from '@/utils/tcoCalculator';
import styles from './TCOCalculator.module.css';

// NOTE: Renamed component function to TCOCalculatorPageComponent for consistency.
const TCOCalculatorPageComponent = () => {
  const [formData, setFormData] = useState(DEFAULT_VALUES);
  const [tcoResults, setTcoResults] = useState(null);

  // Calculate results whenever form data changes
  useEffect(() => {
    const results = getResultData(formData);
    // TODO: CAUSING ERROR
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTcoResults(results);
  }, [formData]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: parseFloat(value) || 0,
    }));
  };

  const handleCalculate = () => {
    const results = getResultData(formData);
    setTcoResults(results);
  };

  return (
    <div className={styles['tco-calculator-page']}>
      <section className={styles['tco-calculator']}>
        <h1 className={styles['tco-calculator__title']}>
          TCO <span className={styles.highlight}>Calculator</span>
        </h1>
        <p className={styles['tco-calculator__subtitle']}>
          Understand why EV is more efficient compared to ICE vehicles
        </p>
  
        <div className={styles['tco-calculator__layout']}>
          <TCOForm
            formData={formData}
            onInputChange={handleInputChange}
            onCalculate={handleCalculate}
          />
          <div className={styles['tco-calculator__results']}>
            {tcoResults && (
              <>
                <TCOResultPanel tcoResults={tcoResults} />
                <div className={styles['results-table-section']}>
                  <h3 className={styles['results-table-title']}>Yearly Cost Breakdown</h3>
                  <TCOCostTable
                    evData={tcoResults.yearlyBreakdown.evData}
                    iceData={tcoResults.yearlyBreakdown.iceData}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );  
};

export default TCOCalculatorPageComponent;