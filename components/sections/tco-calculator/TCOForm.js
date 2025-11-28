// ============================================================================
  // FILE: src/components/sections/tco-calculator/TCOForm.js
  // ============================================================================
  
  import React from 'react';
  import './TCOForm.css';
  import RangeSlider from '../../common/RangeSlider';
  
  const TCOForm = ({ formData, onInputChange, onCalculate }) => {
    const {
      dailyRunningKm,
      runningDays,
      electricityRate,
      fuelRate,
      iceMaintenanceCost,
      evMaintenanceCost,
      iceDepreciationCost,
      evDepreciationCost,
    } = formData;
  
    const iceTotalCost = fuelRate + iceMaintenanceCost + iceDepreciationCost;
    const evTotalCost = electricityRate + evMaintenanceCost + evDepreciationCost;
  
    return (
      <form className="calculator-form">
        <div className="form-section">
        <h3 className="form-section__title">Please fill in the details below</h3>
          <div className="form-group">
            <RangeSlider
              label="Avg Daily Running (km)"
              min={0}
              max={250}
              step={10}
              value={dailyRunningKm}
              onChange={(value) => onInputChange('dailyRunningKm', value)}
              type="number"
              suffix="Km"
            />
            <RangeSlider
              label="Avg Running Days in Month"
              min={0}
              max={30}
              step={1}
              value={runningDays}
              onChange={(value) => onInputChange('runningDays', value)}
              type="number"
              suffix="Days"
            />
  
            <div className="form-group-double">
              <div className="form-group">
                <label className="form-label">
                  Fuel Price (<span className="currency-sign">₹</span>/Km)
                </label>
                <input
                  type="number"
                  value={fuelRate}
                  onChange={(e) => onInputChange('fuelRate', e.target.value)}
                  placeholder="Enter Amount"
                  className="form-input"
                  min="0"
                  max="20"
                  step="0.5"
                />
              </div>
              <div className="form-group">
                <label className="form-label">
                  Electricity Cost (<span className="currency-sign">₹</span>/Km)
                </label>
                <input
                  type="number"
                  value={electricityRate}
                  onChange={(e) => onInputChange('electricityRate', e.target.value)}
                  placeholder="Enter Amount"
                  className="form-input"
                  min="1"
                  max="20"
                  step="0.5"
                />
              </div>
            </div>
  
            <div className="form-group-double">
              <div className="form-group">
                <label className="form-label">
                  ICE Maintenance (<span className="currency-sign">₹</span>/Km)
                </label>
                <input
                  type="number"
                  value={iceMaintenanceCost}
                  onChange={(e) => onInputChange('iceMaintenanceCost', e.target.value)}
                  placeholder="Enter Amount"
                  className="form-input"
                  min="0"
                  max="10"
                  step="0.1"
                />
              </div>
              <div className="form-group">
                <label className="form-label">
                  EV Maintenance (<span className="currency-sign">₹</span>/Km)
                </label>
                <input
                  type="number"
                  value={evMaintenanceCost}
                  onChange={(e) => onInputChange('evMaintenanceCost', e.target.value)}
                  placeholder="Enter Amount"
                  className="form-input"
                  min="0"
                  max="10"
                  step="0.1"
                />
              </div>
            </div>
  
            <div className="form-group-double">
              <div className="form-group">
                <label className="form-label">
                  ICE Depreciation (<span className="currency-sign">₹</span>/Km)
                </label>
                <input
                  type="number"
                  value={iceDepreciationCost}
                  onChange={(e) => onInputChange('iceDepreciationCost', e.target.value)}
                  placeholder="Enter Amount"
                  className="form-input"
                  min="0"
                  max="10"
                  step="0.1"
                />
              </div>
              <div className="form-group">
                <label className="form-label">
                  EV Depreciation (<span className="currency-sign">₹</span>/Km)
                </label>
                <input
                  type="number"
                  value={evDepreciationCost}
                  onChange={(e) => onInputChange('evDepreciationCost', e.target.value)}
                  placeholder="Enter Amount"
                  className="form-input"
                  min="0"
                  max="10"
                  step="0.1"
                />
              </div>
            </div>
  
            <div className="form-group-double">
            <div className="form-group-double">
              <div className="form-group static">
                <label className="form-label">
                  ICE Total Cost (<span className="currency-sign">₹</span>/Km)
                </label>
                <input
                  type="text"
                  value={iceTotalCost.toFixed(2)}
                  disabled
                  className="form-input"
                  readOnly
                />
              </div>
              <div className="form-group static">
                <label className="form-label">
                  EV Total Cost (<span className="currency-sign">₹</span>/Km)
                </label>
                <input
                  type="text"
                  value={evTotalCost.toFixed(2)}
                  disabled
                  className="form-input"
                  readOnly
                />
              </div>
            </div>
            </div>
          </div>
        </div>
  
        <button type="button" onClick={onCalculate} className="btn btn--primary form-button">
          Calculate TCO
        </button>
      </form>
    );
  };
  
  export default TCOForm;