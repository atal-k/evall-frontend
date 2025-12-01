/* eslint-disable react/no-unescaped-entities */
// ============================================
// components/pages/resources/FAQ.js
// ============================================

import React, { useState } from 'react';
import { FAQdata } from '@/data/faqData';
import styles from '@/components/sections/FAQ.module.css'
const ChevronIcon = ({ isOpen }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="1.5em" 
      height="1.5em" 
      viewBox="0 0 1024 1024"
      className={`faq-icon ${isOpen ? 'open' : ''}`}
    >
      <path fill="currentColor" d="M831.872 340.864L512 652.672L192.128 340.864a30.59 30.59 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.59 30.59 0 0 0-42.752 0z" />
    </svg>
  );
  
  const FAQItem = ({ faq, isOpen, onToggle }) => {
    return (
      <div className={styles['faq-item']}>
        <button
          className={styles['faq-question']}
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          <span>{faq.ques}</span>
          <ChevronIcon isOpen={isOpen} />
        </button>
  
        <div
          className={`${styles['faq-answer']} ${
            isOpen ? styles['open'] : ''
          }`}
        >
          <div className={styles['faq-answer-content']}>
            {faq.ans}
          </div>
        </div>
      </div>
    );
  };
  
  export const FAQCategory = ({ category, faqs }) => {
    const [openItems, setOpenItems] = useState({});
  
    const toggleItem = (id) => {
      setOpenItems(prev => ({
        ...prev,
        [id]: !prev[id]
      }));
    };
  
    return (
      <div className={styles['faq-category']}>
        <h3 className={styles['faq-category-title']}>{category}</h3>
        <div className={styles['faq-list']}>
          {faqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openItems[faq.id]}
              onToggle={() => toggleItem(faq.id)}
            />
          ))}
        </div>
      </div>
    );
  };
  
  const FAQPageComponent = () => {
    return (
      <div className={styles['faq-page']}>
        <div className={styles['faq-container']}>
          <header className={styles['faq-header']}>
            <h1 className={styles['faq-title']}>
              Frequently asked <span className={styles.highlight}>questions</span>
            </h1>
            <p className={styles['faq-subtitle']}>
              Do you need some help with something or do you have questions on some features?
            </p>
          </header>
  
          <div className={styles['faq-content']}>
            {FAQdata.map((section) => (
              <FAQCategory
                key={section.id}
                category={section.category}
                faqs={section.faqs}
              />
            ))}
          </div>
  
          <footer className={styles['faq-footer']}>
            <h2 className={styles['faq-footer-title']}>Have any other questions?</h2>
            <p className={styles['faq-footer-text']}>
              Don't hesitate to send us an email with your enquiry or statement at:
            </p>
            <a href="mailto:info@evall.co.in" className={styles['faq-contact-email']}>
              info@evall.co.in
            </a>
          </footer>
        </div>
      </div>
    );
  };
  
  export default FAQPageComponent;  