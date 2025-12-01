  // ============================================================================
  // FILE: src/components/sections/tco-calculator/TCOCostTable.js
  // ============================================================================
  
  import React, { useRef, useState, useEffect } from 'react';
  import { formatCurrency } from '@/utils/formatter';
  import styles from './TCOCostTable.module.css';
  
  const TCOCostTable = ({ evData, iceData }) => {
    const containerRef = useRef(null);
    const [scrollState, setScrollState] = useState({
      showLeftShadow: false,
      showRightShadow: false,
    });
  
    const hasICE = iceData && iceData.length > 0;
  
    const handleScroll = () => {
      if (!containerRef.current) return;
  
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
  
      setScrollState({
        showLeftShadow: scrollLeft > 10,
        showRightShadow: scrollLeft < scrollWidth - clientWidth - 10,
      });
    };
  
    useEffect(() => {
      handleScroll();
    }, []);
  
    return (
      <div
        className={`${styles['breakdown-table-container']} ${scrollState.showLeftShadow ? styles['shadow-left'] : ''} ${
          scrollState.showRightShadow ? styles['shadow-right'] : ''
        }`}
        ref={containerRef}
        onScroll={handleScroll}
      >
        <table className={styles['breakdown-table']}>
          <thead>
            <tr>
              <th>Year</th>
              <th className={styles['breakdown-table__header--ice']}>ICE Energy</th>
              <th className={styles['breakdown-table__header--ev']}>EV Energy</th>
              <th className={styles['breakdown-table__header--ice']}>ICE Maintenance</th>
              <th className={styles['breakdown-table__header--ev']}>EV Maintenance</th>
              <th className={styles['breakdown-table__header--ice']}>ICE Depreciation</th>
              <th className={styles['breakdown-table__header--ev']}>EV Depreciation</th>
              <th className={styles['breakdown-table__header--ice']}>ICE Total</th>
              <th className={styles['breakdown-table__header--ev']}>EV Total</th>
            </tr>
          </thead>
          <tbody>
            {evData.map((evYear, idx) => {
              const iceYear = hasICE ? iceData[idx] : null;
              return (
                <tr key={idx}>
                  <td className={styles['breakdown-table__year']}>{evYear.year} Year</td>
                  <td className={`${styles['breakdown-table__cell']} ${styles['breakdown-table__cell--ice']}`}>
                    {iceYear ? formatCurrency(iceYear.energyCost) : '—'}
                  </td>
                  <td className={`${styles['breakdown-table__cell']} ${styles['breakdown-table__cell--ev']}`}>
                    {formatCurrency(evYear.energyCost)}
                  </td>
                  <td className={`${styles['breakdown-table__cell']} ${styles['breakdown-table__cell--ice']}`}>
                    {iceYear ? formatCurrency(iceYear.maintenance) : '—'}
                  </td>
                  <td className={`${styles['breakdown-table__cell']} ${styles['breakdown-table__cell--ev']}`}>
                    {formatCurrency(evYear.maintenance)}
                  </td>
                  <td className={`${styles['breakdown-table__cell']} ${styles['breakdown-table__cell--ice']}`}>
                    {iceYear ? formatCurrency(iceYear.depreciation) : '—'}
                  </td>
                  <td className={`${styles['breakdown-table__cell']} ${styles['breakdown-table__cell--ev']}`}>
                    {formatCurrency(evYear.depreciation)}
                  </td>
                  <td className={`${styles['breakdown-table__cell']} ${styles['breakdown-table__cell--total']} ${styles['breakdown-table__cell--ice']}`}>
                    {iceYear ? formatCurrency(iceYear.yearlyTotal) : '—'}
                  </td>
                  <td className={`${styles['breakdown-table__cell']} ${styles['breakdown-table__cell--total']} ${styles['breakdown-table__cell--ev']}`}>
                    {formatCurrency(evYear.yearlyTotal)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TCOCostTable;