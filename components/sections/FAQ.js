import React, { useState } from 'react';
import { FAQdata } from '../../data/faqData';
import './FAQ.css'

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
    <div className="faq-item">
      <button 
        className="faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{faq.ques}</span>
        <ChevronIcon isOpen={isOpen} />
      </button>
      <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
        <div className="faq-answer-content">
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
    <div className="faq-category">
      <h3 className="faq-category-title">{category}</h3>
      <div className="faq-list">
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

export default function FAQ() {
  return (
    <div className="faq-page">
      <div className="faq-container">
        <header className="faq-header">
          <h1 className="faq-title">
            Frequently asked <span className="highlight">questions</span>
          </h1>
          <p className="faq-subtitle">
            Do you need some help with something or do you have questions on some features?
          </p>
        </header>

        <div className="faq-content">
          {FAQdata.map((section) => (
            <FAQCategory
              key={section.id}
              category={section.category}
              faqs={section.faqs}
            />
          ))}
        </div>

        <footer className="faq-footer">
          <h2 className="faq-footer-title">Have any other questions?</h2>
          <p className="faq-footer-text">
            Don't hesitate to send us an email with your enquiry or statement at:
          </p>
          <a href="mailto:info@evall.co.in" className="faq-contact-email">
            info@evall.co.in
          </a>
        </footer>
      </div>
    </div>
  );
}