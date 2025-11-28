// ============================================================================
// FILE: src/components/common/RangeSlider.js
// ============================================================================

import React, { useState, useEffect } from 'react';
import { formatCurrency, formatPercentage, formatNumber } from '../../utils/formatter';
import './RangeSlider.css';

/**
 * Reusable Range Slider Component
 * 
 * @param {string} label - Label text for the slider
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @param {number} step - Step increment
 * @param {number} value - Current value
 * @param {function} onChange - Callback function when value changes
 * @param {string} type - Type of formatting: 'currency', 'percentage', 'number', or 'custom'
 * @param {string} suffix - Suffix text (e.g., 'Months', 'Years')
 * @param {string} displayMin - Custom formatted min value display
 * @param {string} displayMax - Custom formatted max value display
 * @param {function} customFormatter - Custom formatter function for value display
 */
const RangeSlider = ({ 
  label = 'Value',
  min = 0, 
  max = 100, 
  step = 1, 
  value = 0, 
  onChange,
  type = 'number', // 'currency', 'percentage', 'number', 'custom'
  suffix = '',
  displayMin,
  displayMax,
  customFormatter
}) => {
  const [currentValue, setCurrentValue] = useState(value);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const handleChange = (e) => {
    const newValue = Number(e.target.value);
    setCurrentValue(newValue);
    onChange(newValue);
  };

  const handleTrackClick = (e) => {
    // Don't trigger if clicking on the thumb itself
    if (e.target.classList.contains('range-slider__input')) return;
    
    const track = e.currentTarget;
    const rect = track.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    
    // Calculate new value
    let newValue = min + (percentage * (max - min));
    
    // Round to nearest step
    newValue = Math.round(newValue / step) * step;
    
    // Clamp between min and max
    newValue = Math.max(min, Math.min(max, newValue));
    
    setCurrentValue(newValue);
    onChange(newValue);
  };

  // Calculate percentage for slider fill
  const percentage = ((currentValue - min) / (max - min)) * 100;

  // Format the current value based on type
  // Format the current value based on type
  const formatCurrentValue = () => {
    if (customFormatter) {
      return customFormatter(currentValue);
    }

    switch (type) {
      case 'currency':
        return (
          <>
            {formatCurrency(currentValue, 'full')}
          </>
        );
      case 'percentage':
        // Show decimal if step is less than 1
        return step < 1 ? `${currentValue.toFixed(1)}%` : formatPercentage(currentValue);
      case 'number':
        return suffix ? `${formatNumber(currentValue)} ${suffix}` : formatNumber(currentValue);
      default:
        return currentValue;
    }
  };

  // Format min/max labels
  const formatMinMax = (val, isMin = true) => {
    // Use custom display values if provided
    if (isMin && displayMin !== undefined) return displayMin;
    if (!isMin && displayMax !== undefined) return displayMax;

    switch (type) {
      case 'currency':
        return formatCurrency(val, 'short');
      case 'percentage':
        return formatPercentage(val);
      case 'number':
        return suffix ? `${val} ${suffix}` : val;
      default:
        return val;
    }
  };

  return (
    <div className="range-slider">
      <div className="range-slider__header">
        <span className="range-slider__label">{label}</span>
        <span className="range-slider__current-value">
          {formatCurrentValue()}
        </span>
      </div>

      <div className="range-slider__track-container" onClick={handleTrackClick}>
      <div className="range-slider__track">
          <div 
            className="range-slider__fill" 
            style={{ width: `${percentage}%` }}
          />
        </div>
        
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={currentValue}
          onChange={handleChange}
          className="range-slider__input"
        />
      </div>
      
      <div className="range-slider__labels">
        <span className="range-slider__min">{formatMinMax(min, true)}</span>
        <span className="range-slider__max">{formatMinMax(max, false)}</span>
      </div>
    </div>
  );
};

export default RangeSlider;