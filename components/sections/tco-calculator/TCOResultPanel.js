  // ============================================================================
  // FILE: src/components/sections/tco-calculator/TCOResultPanel.js
  // ============================================================================
  
  import React from 'react';
  import { formatCurrency } from '../../../utils/formatter';
  import './TCOResultPanel.css';
import { getIcon } from '../../../data/iconsData';
  
  const TCOResultPanel = ({ tcoResults }) => {
    const { monthlyCosts, savings } = tcoResults;
  
    const resultCards = [
      monthlyCosts.monthlyRunningCost,
      monthlyCosts.monthlyMaintenanceCost,
      monthlyCosts.monthlyDepreciationCost,
      monthlyCosts.monthlyOperatingCost,
    ];
  
    return (
      <div className="results-panel">
        <div className="results-panel__header">
          <h4 className="results-panel__title">Monthly Cost Comparison</h4>
        </div>
  
        <div className="result-output-grid">
          {resultCards.map((card, index) => (
            <div key={index} className="result-output-card">
              <div className="result-output-text">{card.text}</div>
              <div className="result-output-values">
                <div className="result-output-value ice" title="ICE Vehicle">
                  <span className="result-label">ICE</span>
                  <span className="result-amount">{formatCurrency(card.ice)}</span>
                </div>
                <div className="result-output-value ev" title="EV Vehicle">
                  <span className="result-label">EV</span>
                  <span className="result-amount">{formatCurrency(card.ev)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Savings Cards */}
        <div className="savings-section">
        <div className="results-panel__header">
          <h4 className="results-panel__title">Savings with EV</h4>
        </div>
          <div className="savings-cards">
            <div className="savings-card savings-card--1year">
              <div className="savings-card__header">
                <div className="savings-icon">{getIcon('calendar1', 28)}</div>
                <div className="savings-period">1 Year</div>
              </div>
              <div className="savings-amount">{formatCurrency(savings.oneYear)}</div>
              <div className="savings-label">Total Savings</div>
            </div>
  
            <div className="savings-card savings-card--5year">
              <div className="savings-card__header">
                <div className="savings-icon">{getIcon('calendars', 28)}</div>
                <div className="savings-period">5 Years</div>
              </div>
              <div className="savings-amount">{formatCurrency(savings.fiveYear)}</div>
              <div className="savings-label">Cumulative Savings</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TCOResultPanel;