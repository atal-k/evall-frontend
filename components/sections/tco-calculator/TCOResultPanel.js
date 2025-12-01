  // ============================================================================
  // FILE: src/components/sections/tco-calculator/TCOResultPanel.js
  // ============================================================================
  
  import React from 'react';
  import { formatCurrency } from '@/utils/formatter';
  import styles from './TCOResultPanel.module.css';
import { getIcon } from '@/data/iconsData';
  
  const TCOResultPanel = ({ tcoResults }) => {
    const { monthlyCosts, savings } = tcoResults;
  
    const resultCards = [
      monthlyCosts.monthlyRunningCost,
      monthlyCosts.monthlyMaintenanceCost,
      monthlyCosts.monthlyDepreciationCost,
      monthlyCosts.monthlyOperatingCost,
    ];
  
    return (
      <div className={styles['results-panel']}>
        <div className={styles['results-panel__header']}>
          <h4 className={styles['results-panel__title']}>Monthly Cost Comparison</h4>
        </div>
  
        <div className={styles['result-output-grid']}>
          {resultCards.map((card, index) => (
            <div key={index} className={styles['result-output-card']}>
              <div className={styles['result-output-text']}>{card.text}</div>
              <div className={styles['result-output-values']}>
                <div className={`${styles['result-output-value']} ${styles.ice}`} title="ICE Vehicle">
                  <span className={styles['result-label']}>ICE</span>
                  <span className={styles['result-amount']}>{formatCurrency(card.ice)}</span>
                </div>
                <div className={`${styles['result-output-value']} ${styles.ev}`} title="EV Vehicle">
                  <span className={styles['result-label']}>EV</span>
                  <span className={styles['result-amount']}>{formatCurrency(card.ev)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Savings Cards */}
        <div className={styles['savings-section']}>
        <div className={styles['results-panel__header']}>
          <h4 className={styles['results-panel__title']}>Savings with EV</h4>
        </div>
          <div className={styles['savings-cards']}>
            <div className={`${styles['savings-card']} ${styles['savings-card--1year']}`}>
              <div className={styles['savings-card__header']}>
                <div className={styles['savings-icon']}>{getIcon('calendar1', 28)}</div>
                <div className={styles['savings-period']}>1 Year</div>
              </div>
              <div className={styles['savings-amount']}>{formatCurrency(savings.oneYear)}</div>
              <div className={styles['savings-label']}>Total Savings</div>
            </div>
  
            <div className={`${styles['savings-card']} ${styles['savings-card--5year']}`}>
              <div className={styles['savings-card__header']}>
                <div className={styles['savings-icon']}>{getIcon('calendars', 28)}</div>
                <div className={styles['savings-period']}>5 Years</div>
              </div>
              <div className={styles['savings-amount']}>{formatCurrency(savings.fiveYear)}</div>
              <div className={styles['savings-label']}>Cumulative Savings</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TCOResultPanel;