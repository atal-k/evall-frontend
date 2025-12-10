/* eslint-disable react/no-unescaped-entities */
// ============================================
// components/pages/resources/FinanceOwnership.js
// ============================================

import React, { useEffect } from 'react';
import TabView from '@/components/common/TabView';
import { FAQCategory } from '@/components/sections/FAQ';
import styles from './FinanceOwnership.module.css';
import Link from 'next/link';
import Image from 'next/image';
// ============================================================================
// DATA STRUCTURES
// ============================================================================

// Ownership Models Data for TabView
const ownershipModelsData = [
    {
      id: 1,
      tabName: 'Loan-Based Ownership',
      title: 'Own Your Fleet, Build Your Assets',
      img: { 
        src: '/images/finance-ownership/loan-ownership.webp', 
        alt: 'Loan-Based Ownership - Build long-term fleet assets' 
      },
      paragraphs: [
        'Best suited for organizations with long-term fleet goals. Pay in structured loan tranches against the purchase value of the vehicle.',
        'Gain ownership of the asset, the benefits of depreciation, and continue to attain value as time passes.'
      ],
      bullets: [
        { title: 'Asset Ownership', text: 'Full vehicle ownership upon loan completion' },
        { title: 'Depreciation Benefits', text: 'Tax advantages through asset depreciation' },
        { title: 'Flexible Tenure', text: 'Choose repayment terms that match your business cycle' },
        { title: 'Long-term Value', text: 'Build fleet equity over time' }
      ],
      cta: { text: 'Calculate EMI', link: '/emi-calculator' }
    },
    {
      id: 2,
      tabName: 'Leasing Programs',
      title: 'Focus on Operations, Not Ownership',
      img: { 
        src: '/images/finance-ownership/leasing-programs.webp', 
        alt: 'Leasing Programs - Predictable monthly costs' 
      },
      paragraphs: [
        'Best suited for businesses oriented towards a focus on uptime and predictability. Use the vehicle without concern of resale value.',
        'Have predictable operational costs every month and leave capital free for core business operations.'
      ],
      bullets: [
        { title: 'No Resale Concern', text: 'Return the vehicle at lease end without hassle' },
        { title: 'Predictable Costs', text: 'Fixed monthly payments for better budgeting' },
        { title: 'Capital Preservation', text: 'Keep working capital for business growth' },
        { title: 'Upgrade Flexibility', text: 'Access to newer models at lease renewal' }
      ],
      cta: { text: 'Explore Leasing Benefits', link: '/leasing' }
    },
    {
      id: 3,
      tabName: 'Subscription Model',
      title: 'Ultimate Flexibility for Modern Fleets',
      img: { 
        src: '/images/finance-ownership/subscription-model.webp', 
        alt: 'Subscription Model - All-inclusive mobility' 
      },
      paragraphs: [
        'This flexible model suits businesses that need hassle-free mobility without long-term commitment. One monthly payment that covers usage, service, and support.',
        'Perfect for trial fleets, emerging routes, or seasonal operations that require adaptable transportation solutions.'
      ],
      bullets: [
        { title: 'All-Inclusive', text: 'Vehicle, service, and support in one payment' },
        { title: 'No Commitment', text: 'Flexible terms with easy scaling options' },
        { title: 'Zero Maintenance Worry', text: 'Complete service coverage included' },
        { title: 'Trial Ready', text: 'Test electric mobility before full commitment' }
      ],
      cta: { text: 'View Flexible Plans', link: '/subscription' }
    }
  ];
  
  // FAQ Data
  const financeOwnshipFAQs = {
    category: 'Financing & Ownership',
    faqs: [
      {
        id: 'faq-1',
        ques: 'What is the procedure for applying for financing?',
        ans: 'You can request a consultation through our website or contact our advisors directly. Our team will help you understand financing options, gather necessary documentation, and guide you through plan selection. The entire process is designed for speed and transparency, with digital KYC and fast approval timelines.'
      },
      {
        id: 'faq-2',
        ques: 'Is leasing applicable to logistics operations?',
        ans: 'Yes, leasing is highly suitable for logistics operations. It reduces upfront capital expenditure and makes operational costs more predictable with fixed monthly payments. This allows you to allocate resources to core business activities while maintaining a modern, efficient fleet.'
      },
      {
        id: 'faq-3',
        ques: 'What are the benefits of businesses switching to an electric fleet?',
        ans: 'Businesses gain significant advantages including substantial fuel cost savings (up to 70% compared to diesel), reduced maintenance expenses due to fewer mechanical components, lower downtime, compliance with sustainability regulations, and enhanced brand reputation through environmental responsibility.'
      },
      {
        id: 'faq-4',
        ques: 'What type of documentation is necessary for approval?',
        ans: 'Documentation varies based on applicant type. Businesses typically need KYC documents, bank statements, and GST certificates. Individuals require identification proof, address verification, and income documentation. Our team assists throughout the process to ensure smooth and quick approval.'
      }
    ]
  };
  
  // ============================================================================
  // FINANCE OWNERSHIP PAGE COMPONENT
  // ============================================================================
const FinanceOwnershipPageComponent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      return (
        <div className={styles['finance-ownership-page']}>
          {/* Hero Section */}
          <section className={styles['finance-hero']}>
            <div className={styles['finance-hero-content']}>
              <h1 className={styles['finance-hero-title']}>Own Your EVall. Drive Smarter. Pay Your Way.</h1>
              <p className={styles['finance-hero-subtitle']}>
                Flexible ownership and financing solutions designed to make electric transportation easier, affordable, 
                and future-ready for businesses of all sizes.
              </p>
              <div className={styles['finance-hero-ctas']}>
                <Link href="/contact/customer-support" className={`${styles['finance-btn']} ${styles['finance-btn-primary']}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z" />
                  </svg>
                  Request Financing Consultation
                </Link>
                <Link href="/resources/tco-calculator" className={`${styles['finance-btn']} ${styles['finance-btn-secondary']}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m2 14H7v-2h7zm3-4H7v-2h10zm0-4H7V7h10z" />
                  </svg>
                  TCO Calculator
                </Link>
              </div>
            </div>
          </section>
    
          {/* Benefits Section */}
          <section className={styles['finance-benefits']}>
            <div className={styles['finance-container']}>
              <div className={styles['finance-section-header']}>
                <h2 className={styles['finance-section-title']}>Simple, Transparent, and Business-Oriented Financing</h2>
                <p className={styles['finance-section-subtitle']}>
                  Switching to electric vehicles should never be difficult. Our financing ecosystem is designed to aid 
                  in a seamless transition with complete transparency.
                </p>
              </div>
    
              <div className={styles['finance-benefits-grid']}>
                <div className={styles['finance-benefit-card']}>
                  <div className={styles['finance-benefit-icon']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-1.41 16.09L6 13.5l1.41-1.41l3.18 3.18l6.89-6.89l1.41 1.41z" />
                    </svg>
                  </div>
                  <h3 className={styles['finance-benefit-title']}>Flexible Down Payments</h3>
                  <p className={styles['finance-benefit-description']}>
                    Choose down payment options that align with your cash flow and business requirements.
                  </p>
                </div>
    
                <div className={styles['finance-benefit-card']}>
                  <div className={styles['finance-benefit-icon']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01L12.01 11z" />
                    </svg>
                  </div>
                  <h3 className={styles['finance-benefit-title']}>Fast Documentation</h3>
                  <p className={styles['finance-benefit-description']}>
                    Simple documentation process with digital KYC and quick approval timelines.
                  </p>
                </div>
    
                <div className={styles['finance-benefit-card']}>
                  <div className={styles['finance-benefit-icon']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm-1 6h2v2h-2zm0 4h2v6h-2z" />
                    </svg>
                  </div>
                  <h3 className={styles['finance-benefit-title']}>Transparent Pricing</h3>
                  <p className={styles['finance-benefit-description']}>
                    No hidden costs or surprise fees. Clear, upfront pricing for complete peace of mind.
                  </p>
                </div>
    
                <div className={styles['finance-benefit-card']}>
                  <div className={styles['finance-benefit-icon']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3m-4.4 15.55l-.1.1l-.1-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05" />
                    </svg>
                  </div>
                  <h3 className={styles['finance-benefit-title']}>Trusted Partners</h3>
                  <p className={styles['finance-benefit-description']}>
                    Support from reputable financial institutions ensuring reliability and credibility.
                  </p>
                </div>
              </div>
            </div>
          </section>
    
          {/* Ownership Models - TabView */}
          <section className={styles['finance-ownership-models']}>
            <div className={styles['finance-container']}>
              <div className={styles['finance-section-header']}>
                <h2 className={styles['finance-section-title']}>Choose the Ownership Model That Works for Your Business</h2>
                <p className={styles['finance-section-subtitle']}>
                  Select from three flexible models designed to match your operational needs and financial strategy.
                </p>
              </div>
            </div>
            <TabView data={ownershipModelsData} />
          </section>
    
          {/* Finance Options */}
          <section className={styles['finance-options']}>
            <div className={styles['finance-container']}>
              <div className={styles['finance-options-content']}>
                <div className={styles['finance-options-text']}>
                  <h2 className={styles['finance-section-title']}>Finance Options That Work for You</h2>
                  <p className={styles['finance-options-description']}>
                    Our finance ecosystem adapts to varied business profiles. EVall Mobility works with leading lending 
                    partners to provide comprehensive financing solutions tailored to your needs.
                  </p>
                  <ul className={styles['finance-options-list']}>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-1.41 16.09L6 13.5l1.41-1.41l3.18 3.18l6.89-6.89l1.41 1.41z" />
                      </svg>
                      <span>Varied tenure options matching revenue cycles</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-1.41 16.09L6 13.5l1.41-1.41l3.18 3.18l6.89-6.89l1.41 1.41z" />
                      </svg>
                      <span>Interest rates representing business profiles</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-1.41 16.09L6 13.5l1.41-1.41l3.18 3.18l6.89-6.89l1.41 1.41z" />
                      </svg>
                      <span>Tailor-made solutions that support growth</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-1.41 16.09L6 13.5l1.41-1.41l3.18 3.18l6.89-6.89l1.41 1.41z" />
                      </svg>
                      <span>Digital KYC and streamlined approval process</span>
                    </li>
                  </ul>
                  <Link href="/contact/customer-support" className={`${styles['finance-btn']} ${styles['finance-btn-primary']}`}>
                    Talk to a Finance Advisor
                  </Link>
                </div>
                <div className={styles['finance-options-visual']}>
                  <Image src="/images/evall-team.webp" alt="Finance partners ecosystem" width={940} height={624} />
                </div>
              </div>
            </div>
          </section>
    
          {/* TCO Advantage */}
          <section className={styles['finance-tco']}>
            <div className={styles['finance-container']}>
              <div className={styles['finance-section-header']}>
                <h2 className={styles['finance-section-title']}>The Total Cost of Ownership Advantage</h2>
                <p className={styles['finance-section-subtitle']}>
                  The economics of operating electric vehicles is fundamentally different. Experience measurable profit 
                  through operating savings over time.
                </p>
              </div>
    
              <div className={styles['finance-tco-comparison']}>
                <div className={`${styles['finance-tco-card']} ${styles['finance-tco-card--diesel']}`}>
                  <div className={styles['finance-tco-header']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M19.77 7.23l.01-.01l-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33a2.5 2.5 0 0 0 2.5 2.5c.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14a2 2 0 0 0-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5a2.5 2.5 0 0 0 5 0V9c0-.69-.28-1.32-.73-1.77M12 10H6V5h6z" />
                    </svg>
                    <h3>Diesel Vehicle</h3>
                  </div>
                  <div className={styles['finance-tco-metrics']}>
                    <div className={styles['finance-tco-metric']}>
                      <span className={styles['finance-tco-label']}>Fuel Cost</span>
                      <span className={`${styles['finance-tco-value']} ${styles['finance-tco-value--high']}`}>High</span>
                    </div>
                    <div className={styles['finance-tco-metric']}>
                      <span className={styles['finance-tco-label']}>Maintenance</span>
                      <span className={`${styles['finance-tco-value']} ${styles['finance-tco-value--high']}`}>Frequent</span>
                    </div>
                    <div className={styles['finance-tco-metric']}>
                      <span className={styles['finance-tco-label']}>Downtime</span>
                      <span className={`${styles['finance-tco-value']} ${styles['finance-tco-value--high']}`}>Higher</span>
                    </div>
                    <div className={styles['finance-tco-metric']}>
                      <span className={styles['finance-tco-label']}>Operating Cost</span>
                      <span className={`${styles['finance-tco-value']} ${styles['finance-tco-value--high']} currency-sign`}>₹12-15/km</span>
                    </div>
                  </div>
                </div>
    
                <div className={styles['finance-tco-vs']}>
                  <span>VS</span>
                </div>
    
                <div className={`${styles['finance-tco-card']} ${styles['finance-tco-card--ev']}`}>
                  <div className={styles['finance-tco-header']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M18.92 2.01C18.72 1.42 18.16 1 17.5 1h-11c-.66 0-1.21.42-1.42 1.01L3 8v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V8zM6.85 3h10.29l1.08 3.11H5.77zM6 13c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m12 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1M7 20h4v-2l6 3h-4v2z" />
                    </svg>
                    <h3>EVall Electric</h3>
                  </div>
                  <div className={styles['finance-tco-metrics']}>
                    <div className={styles['finance-tco-metric']}>
                      <span className={styles['finance-tco-label']}>Charging Cost</span>
                      <span className={`${styles['finance-tco-value']} ${styles['finance-tco-value--low']}`}>70% Lower</span>
                    </div>
                    <div className={styles['finance-tco-metric']}>
                      <span className={styles['finance-tco-label']}>Maintenance</span>
                      <span className={`${styles['finance-tco-value']} ${styles['finance-tco-value--low']}`}>Minimal</span>
                    </div>
                    <div className={styles['finance-tco-metric']}>
                      <span className={styles['finance-tco-label']}>Downtime</span>
                      <span className={`${styles['finance-tco-value']} ${styles['finance-tco-value--low']}`}>Lower</span>
                    </div>
                    <div className={styles['finance-tco-metric']}>
                      <span className={styles['finance-tco-label']}>Operating Cost</span>
                      <span className={`${styles['finance-tco-value']} ${styles['finance-tco-value--low']} currency-sign`}>₹3-4/km</span>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className={styles['finance-tco-savings']}>
                <h3 className={styles['finance-tco-savings-title']}>Key Factors in Savings</h3>
                <div className={styles['finance-tco-savings-grid']}>
                  <div className={styles['finance-tco-saving-item']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 2v2h2l3.6 7.59l-1.35 2.45c-.16.28-.25.61-.25.96c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12l.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2" />
                    </svg>
                    <span>Lower cost of charging compared to diesel fuel</span>
                  </div>
                  <div className={styles['finance-tco-saving-item']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64z" />
                    </svg>
                    <span>Fewer mechanical components requiring service</span>
                  </div>
                  <div className={styles['finance-tco-saving-item']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4M13 18h-2v-2h2zm0-4h-2V9h2z" />
                    </svg>
                    <span>Longer battery life with comprehensive warranty protection</span>
                  </div>
                  <div className={styles['finance-tco-saving-item']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m.5-13H11v6l5.25 3.15l.75-1.23l-4.5-2.67z" />
                    </svg>
                    <span>Less downtime resulting in increased route productivity</span>
                  </div>
                </div>
                <div className={styles['finance-tco-cta']}>
                  <Link href="/resources/tco-calculator" className={`${styles['finance-btn']} ${styles['finance-btn-primary']}`}>
                    Use TCO Calculator
                  </Link>
                </div>
              </div>
            </div>
          </section>
    
          {/* Eligibility Section */}
          <section className={styles['finance-eligibility']}>
            <div className={styles['finance-container']}>
              <div className={styles['finance-section-header']}>
                <h2 className={styles['finance-section-title']}>Eligibility and Documentation</h2>
                <p className={styles['finance-section-subtitle']}>
                  Minimal documentation required for faster vehicle delivery. We support you every step of the way.
                </p>
              </div>
    
              <div className={styles['finance-eligibility-grid']}>
                <div className={styles['finance-eligibility-card']}>
                  <div className={styles['finance-eligibility-icon']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 7V3H2v18h20V7zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8zm-2-8h-2v2h2zm0 4h-2v2h2z" />
                    </svg>
                  </div>
                  <h3 className={styles['finance-eligibility-title']}>For Businesses</h3>
                  <ul className={styles['finance-eligibility-list']}>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z" />
                      </svg>
                      <span>GST Certificate</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z" />
                      </svg>
                      <span>Business Registration Documents</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z" />
                      </svg>
                      <span>Requirements aligned with financial institutions/banks.</span>
                    </li>
                  </ul>
                </div>
    
                <div className={styles['finance-eligibility-card']}>
                  <div className={styles['finance-eligibility-icon']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4" />
                    </svg>
                  </div>
                  <h3 className={styles['finance-eligibility-title']}>For Individuals</h3>
                  <ul className={styles['finance-eligibility-list']}>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z" />
                      </svg>
                      <span>Government-issued ID Proof</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z" />
                      </svg>
                      <span>Address Verification Documents</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z" />
                      </svg>
                      <span>Income Proof (Salary slips/ITR)</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z" />
                      </svg>
                      <span>Bank Account Details</span>
                    </li>
                    <li>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z" />
                      </svg>
                      <span>Requirements aligned with financial institutions/banks.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
    
          {/* Post-Ownership Support */}
          <section className={styles['finance-support']}>
            <div className={styles['finance-container']}>
              <div className={styles['finance-section-header']}>
                <h2 className={styles['finance-section-title']}>Complete Ownership Experience from Day One</h2>
                <p className={styles['finance-section-subtitle']}>
                  Your experience with EVall Mobility doesn&apos;t end with ownership. We support your operations comprehensively.
                </p>
              </div>
    
              <div className={styles['finance-support-grid']}>
                <div className={styles['finance-support-card']}>
                    <div className={styles['finance-support-icon']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64z" />
                    </svg>
                    </div>
                    <h3 className={styles['finance-support-title']}>Scheduled Service</h3>
                    <p className={styles['finance-support-description']}>Regular maintenance and assistance to keep your fleet running smoothly.</p>
                    </div>
                    <div className={styles['finance-support-card']}>
                  <div className={styles['finance-support-icon']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.67-1.43a.993.993 0 0 0-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2" />
                    </svg>
                  </div>
                  <h3 className={styles['finance-support-title']}>Charging Partnerships</h3>
                  <p className={styles['finance-support-description']}>On-route and depot charging solutions for seamless operations.</p>
                </div>
    
                <div className={styles['finance-support-card']}>
                  <div className={styles['finance-support-icon']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5" />
                    </svg>
                  </div>
                  <h3 className={styles['finance-support-title']}>Dealer Network</h3>
                  <p className={styles['finance-support-description']}>Expanding service centers across regions for convenient access.</p>
                </div>
    
                <div className={styles['finance-support-card']}>
                  <div className={styles['finance-support-icon']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm-1 6h2v2h-2zm0 4h2v6h-2z" />
                    </svg>
                  </div>
                  <h3 className={styles['finance-support-title']}>Warranty Support</h3>
                  <p className={styles['finance-support-description']}>Comprehensive coverage for vehicle and battery systems.</p>
                </div>
              </div>
            </div>
          </section>
    
          {/* FAQ Section */}
          <section className={styles['finance-faq']}>
            <div className={styles['finance-container']}>
              <div className={styles['finance-section-header']}>
                <h2 className={styles['finance-section-title']}>Frequently Asked Questions</h2>
                <p className={styles['finance-section-subtitle']}>
                  Get answers to common questions about financing and ownership
                </p>
              </div>
              <FAQCategory
                category={financeOwnshipFAQs.category} 
                faqs={financeOwnshipFAQs.faqs} 
              />
            </div>
          </section>
    
          {/* Final CTA Section */}
          <section className={styles['finance-final-cta']}>
            <div className={styles['finance-container']}>
              <div className={styles['finance-final-cta-card']}>
                <div className={styles['finance-final-cta-icon']}>
                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" stroke-width="1.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m12 6l.954 3.86A1.5 1.5 0 0 0 14.41 11H20" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2 6h11.069c1.549 0 2.323 0 2.98.346c.656.346 1.094.985 1.97 2.262c.613.896 1.258 1.546 2.164 2.125c.912.582 1.346.867 1.586 1.324c.231.437.231.955.231 1.992c0 1.367 0 2.05-.413 2.484l-.054.054C21.1 17 20.416 17 19.05 17M5 17c-.32 0-.615 0-.77-.033c-.156-.034-.302-.1-.595-.231L2 16c0-3.194.479-5.038 1.106-6.55c.41-.992.616-1.488.53-1.93C3.553 7.08 2.5 6 2.5 6M9 17h6" />
                    <circle cx="17" cy="17" r="2" />
                    <circle cx="7" cy="17" r="2" />
                  </g>
                </svg>
                </div>
                <h2 className={styles['finance-final-cta-title']}>Ready to Move Your Business Forward?</h2>
                <p className={styles['finance-final-cta-description']}>
                  Let our experts help you choose the best financing plan for your route structure, load profile, 
                  and operational goals. Get personalized guidance from our finance advisors.
                </p>
                <Link href="/contact/customer-support" className={`${styles['finance-btn']} ${styles['finance-btn-large']}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z" />
                  </svg>
                  Request Finance Consultation
                </Link>
              </div>
            </div>
          </section>
        </div>
      );
    };
export default FinanceOwnershipPageComponent;