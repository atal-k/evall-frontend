/* eslint-disable react/no-unescaped-entities */
// ============================================
// pages/contact/dealer-locator.js
// ============================================

import React, { useEffect, useState } from 'react';
import './DealerLocator.css';
import { dealersData } from '@/data/dealersData';

const DealerCard = ({ dealer, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  const handleCall = () => {
    window.location.href = `tel:${dealer.phone}`;
  };

  const handleWebsite = () => {
    const websiteUrl = `https://${dealer.website}`;
    window.open(websiteUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDirections = () => {
    const query = encodeURIComponent(`${dealer.address}, ${dealer.city}, ${dealer.state} ${dealer.pincode}`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`dealer-card ${isVisible ? 'visible' : ''}`}>
      <div className="dealer-card-header">
        <h3 className="dealer-name">{dealer.name}</h3>
      </div>

      <div className="dealer-info">
        <div className="dealer-info-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 7.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22m0-12" />
          </svg>
          <div>
            <p className="dealer-address">{dealer.address}</p>
            <p className="dealer-city">
              {dealer.city}, {dealer.state} - {dealer.pincode}
            </p>
          </div>
        </div>

        <div className="dealer-info-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path fill="currentColor" d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1" />
          </svg>
          <p className="dealer-phone">{dealer.phone}</p>
        </div>

        <div className="dealer-info-item">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-1 17.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41c0 2.08-.8 3.97-2.1 5.39" />
          </svg>
          <p className="dealer-website">{dealer.website}</p>
        </div>
      </div>

      <div className="dealer-actions">
        <button className="dealer-btn dealer-btn-primary" onClick={handleCall}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1" />
          </svg>
          Call Now
        </button>
        <button className="dealer-btn dealer-btn-secondary" onClick={handleWebsite}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-1 17.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41c0 2.08-.8 3.97-2.1 5.39" />
          </svg>
          Visit
        </button>
        <button className="dealer-btn dealer-btn-outline" onClick={handleDirections}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.437 1.225L12 18.065l-6.495 3.798a1 1 0 0 1-1.437-1.225l7-18l.066-.138A1 1 0 0 1 12 2" />
          </svg>
          Directions
        </button>
      </div>
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path fill="currentColor" d="M18 18.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m1.5-9l1.96 2.5H17V9.5M6 18.5A1.5 1.5 0 0 1 4.5 17A1.5 1.5 0 0 1 6 15.5A1.5 1.5 0 0 1 7.5 17A1.5 1.5 0 0 1 6 18.5M20 8h-3V4H3c-1.11 0-2 .89-2 2v11h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-5z" />
        </svg>
      ),
      title: 'Sales & Financing',
      description: 'Flexible financing options and expert sales support',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 11a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5m-6.5 3c.54 0 1.05.08 1.53.23A6.97 6.97 0 0 0 5 16v6H1v-6a5 5 0 0 1 4.5-5m13 0a5 5 0 0 1 4.5 5v6h-4v-6c0-.69-.13-1.35-.35-1.97c.48-.15.99-.23 1.53-.23M12 1a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m6.5 2a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5m-13 0a2.5 2.5 0 0 1 0 5a2.5 2.5 0 0 1 0-5" />
        </svg>
      ),
      title: 'Test Drives',
      description: 'Experience EVall vehicles with comprehensive test drives',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64z" />
        </svg>
      ),
      title: 'Service & Maintenance',
      description: 'Professional after-sales service and regular maintenance',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path fill="currentColor" d="M16 8h3v5h-3zM2 17h10v2H2zm11.5-9.5L16 13h-4zm0 0L16 13h-4zm0 0L16 13h-4zM22 9v5l-1 3H5l-1-3V9c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2M7 9H4v3h3z" />
        </svg>
      ),
      title: 'Genuine Parts',
      description: 'Authentic EVall parts and accessories',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8m-1 2v6.41l4.29 4.3l1.42-1.42l-3.71-3.7V6z" />
        </svg>
      ),
      title: 'Expert Consultation',
      description: 'Professional guidance on vehicle selection and features',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path fill="currentColor" d="M18 15H6l-3 3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1zm5 1V3a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v15l4-4h13a2 2 0 0 0 2-2m-2 4H6l-4 4V8h2v10h17z" />
        </svg>
      ),
      title: 'Fleet Requirements',
      description: 'Customized solutions for commercial and fleet needs',
    },
  ];

  return (
    <section className="benefits-section">
      <div className="benefits-header">
        <h2 className="benefits-title">Visit, Test, and Drive</h2>
        <p className="benefits-subtitle">
          Each authorized EVall dealer offers comprehensive services to ensure your complete satisfaction
        </p>
      </div>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <div className="benefit-icon">{benefit.icon}</div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// NOTE: Renamed component to DealerLocatorPageComponent for consistency.
const DealerLocatorPageComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDealers, setFilteredDealers] = useState(dealersData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredDealers(dealersData);
    } else {
      const filtered = dealersData.filter((dealer) =>
        dealer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dealer.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dealer.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dealer.pincode.includes(searchTerm)
      );
      setFilteredDealers(filtered);
    }
  }, [searchTerm]);

  return (
    <div className="dealer-locator-page">
      <div className="dealer-hero">
        <div className="dealer-hero-content">
          <h1 className="dealer-hero-title">Dealer Locator</h1>
          <p className="dealer-hero-subtitle">Find Your Nearest EVall Mobility Dealer</p>
          <p className="dealer-hero-description">
            EVall Mobility's expanding network ensures you're never far from expert service, genuine parts, and trusted support.
            Locate your nearest authorized EVall dealer below for sales, service, and vehicle demonstrations.
          </p>

          <div className="dealer-search-bar">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path fill="currentColor" d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.52 6.52 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5" />
            </svg>
            <input
              type="text"
              placeholder="Search by city, dealer name, or pincode..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="dealer-search-input"
            />
            {searchTerm && (
              <button className="dealer-search-clear" onClick={() => setSearchTerm('')}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="dealer-container">
        <div className="dealer-section-header">
          <h2 className="dealer-section-title">Authorized Dealers</h2>
          <p className="dealer-count">
            {filteredDealers.length} {filteredDealers.length === 1 ? 'Dealer' : 'Dealers'} Found
          </p>
        </div>

        {filteredDealers.length > 0 ? (
          <div className="dealer-grid">
            {filteredDealers.map((dealer, index) => (
              <DealerCard key={dealer.id} dealer={dealer} index={index} />
            ))}
          </div>
        ) : (
          <div className="dealer-no-results">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
              <path fill="currentColor" d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.52 6.52 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5" />
            </svg>
            <h3>No dealers found</h3>
            <p>Try adjusting your search terms</p>
          </div>
        )}
      </div>

      <BenefitsSection />

      <div className="dealer-support-section">
        <div className="dealer-support-card">
          <div className="dealer-support-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4c1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10" />
            </svg>
          </div>
          <h2 className="dealer-support-title">Need Help Finding a Dealer?</h2>
          <p className="dealer-support-description">
            If you need assistance locating a dealer or booking a test drive, reach out to us directly
          </p>
          <div className="dealer-support-contacts">
            <a href="tel:+9101724509386" className="dealer-support-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1" />
              </svg>
              <span>Customer Support: +91 0172 450 9386</span>
            </a>
            <a href="mailto:info@evall.co.in" className="dealer-support-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z" />
              </svg>
              <span>Email: info@evall.co.in</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealerLocatorPageComponent;

