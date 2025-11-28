/* eslint-disable react/no-unescaped-entities */
// ============================================
// components/pages/resources/WarrantyMaintenance.js
// ============================================

import React, { useEffect } from 'react';
import './WarrantyMaintenance.css';

// NOTE: Renamed component function to WarrantyMaintenancePageComponent for consistency.
const WarrantyMaintenancePageComponent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      const warrantyTerms = [
        {
          id: 1,
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm-1 6h2v2h-2zm0 4h2v6h-2z" />
            </svg>
          ),
          title: "Warranty Coverage",
          description: (
            <>
              <b>Vehicle Warranty:</b> <b>2 years</b> or <b>50,000 km</b>, whichever occurs first.<br />
              <b>Battery Warranty:</b> <b>5 years</b> or <b>200,000 km</b>, whichever occurs first.
            </>
          )
        },
        {
          id: 2,
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
              <path fill="currentColor" d="M9 11H7v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V9h14z" />
            </svg>
          ),
          title: 'Warranty Start Date',
          description: 'The warranty period starts on the day the vehicle is sold to the first owner. The warranty period begins on the date of sale.'
        },
        {
          id: 3,
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
              <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z" />
            </svg>
          ),
          title: 'Service Center Contact',
          description: 'Vehicle owners should get in touch with the nearest EVall Mobility authorized service center or dealer for warranty-related assistance.'
        },
        {
          id: 4,
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
              <path fill="currentColor" d="M21 5c-1.11-.35-2.33-.5-3.5-.5c-1.95 0-4.05.4-5.5 1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5c.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5c1.35-.85 3.8-1.5 5.5-1.5c1.65 0 3.35.3 4.75 1.05c.1.05.15.05.25.05c.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1m0 13.5c-1.1-.35-2.3-.5-3.5-.5c-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5c1.2 0 2.4.15 3.5.5z" />
            </svg>
          ),
          title: 'Owner\'s Manual Reference',
          description: 'Please consult the owner\'s manual that came with your vehicle for a comprehensive list of warranty terms and conditions.'
        },
        {
          id: 5,
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97s-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1s.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64z" />
            </svg>
          ),
          title: 'Original Parts Warranty',
          description: 'Original EVall Mobility parts are guaranteed for six months or 10,000 kilometers, whichever comes first, after they are purchased and installed on the vehicle.'
        },
        {
          id: 6,
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z" />
            </svg>
          ),
          title: 'Authorized Installation Required',
          description: 'To be eligible for warranty assistance, original parts must be purchased and installed through authorized dealers or service centers of EVall Mobility.'
        },
        {
          id: 7,
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
              <path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5zM8 15.01l1.41 1.41L11 14.84V19h2v-4.16l1.59 1.59L16 15.01L12.01 11z" />
            </svg>
          ),
          title: 'Receipt Retention',
          description: 'For all future warranty references, keep a copy of the original repair bill from the customer.'
        },
        {
          id: 8,
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 15h-2v-2h2zm0-4h-2V7h2z" />
            </svg>
          ),
          title: 'Warranty Exclusions',
          description: 'If a part fails as a result of misuse, abuse, alteration, accident, improper lubrication, or repair, it is not covered under warranty.'
        },
        {
          id: 9,
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
              <path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8s-3.58 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8S14 8.67 14 9.5s.67 1.5 1.5 1.5m-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8S7 8.67 7 9.5S7.67 11 8.5 11m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5" />
            </svg>
          ),
          title: 'Normal Wear and Tear',
          description: 'The parts warranty does not cover normal wear and tear items or routine maintenance services.'
        },
        {
          id: 10,
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
              <path fill="currentColor" d="M1 21h22L12 2zm12-3h-2v-2h2zm0-4h-2v-4h2z" />
            </svg>
          ),
          title: 'Consequential Damages',
          description: 'Incidental or consequential damages, such as lost time, inconvenience, or business loss, are not covered by this warranty.'
        },
        {
          id: 11,
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
              <path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z" />
            </svg>
          ),
          title: 'Final Decision Authority',
          description: 'EVall Mobility reserves the right to make the final decision on all warranty-related matters.'
        },
        {
            id: 12,
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2m1 15h-2v-2h2Zm0-4h-2V7h2Z" />
              </svg>
            ),
            title: 'Owner Responsibility',
            description: 'To maintain warranty validity, owners are responsible for following the recommended service schedule and using genuine parts and approved lubricants.'
          }      
      ];
    
      return (
        <div className="warranty-page">
          {/* Hero Section */}
          <section className="warranty-hero">
            <div className="warranty-hero-content">
              <h1 className="warranty-hero-title">Warranty & Maintenance</h1>
              <p className="warranty-hero-subtitle">
                Comprehensive warranty coverage for your EVall Mobility commercial vehicle
              </p>
            </div>
          </section>
    
          {/* Introduction Section */}
          <section className="warranty-intro">
            <div className="warranty-container">
              <div className="warranty-intro-card">
                <h2 className="warranty-intro-title">Information on Warranty</h2>
                <p className="warranty-intro-text">
                  Subject to the terms and conditions outlined in the owner's manual, every EVall Mobility 
                  commercial vehicle and its components are guaranteed to be free from material and workmanship defects. 
                  The warranty period starts on the day the vehicle is sold to the first owner.
                </p>
                <p className="warranty-intro-text">
                  Vehicle owners should get in touch with the nearest EVall Mobility authorized service center 
                  or dealer for warranty-related assistance. Please consult the owner's manual that came with 
                  your vehicle for a comprehensive list of warranty terms and conditions.
                </p>
              </div>
            </div>
          </section>
    
          {/* Warranty Terms Section */}
          <section className="warranty-terms">
            <div className="warranty-container">
              <h2 className="warranty-terms-title">Warranty Terms & Conditions</h2>
              <div className="warranty-terms-grid">
                {warrantyTerms.map((term) => (
                  <div key={term.id} className="warranty-term-card">
                    <div className="warranty-term-header">
                      <div className="warranty-term-icon">{term.icon}</div>
                      <span className="warranty-term-number">{String(term.id).padStart(2, '0')}</span>
                    </div>
                    <h3 className="warranty-term-title">{term.title}</h3>
                    <p className="warranty-term-description">{term.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
    
          {/* Contact Section */}
          <section className="warranty-contact">
            <div className="warranty-container">
              <div className="warranty-contact-card">
                <div className="warranty-contact-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z" />
                  </svg>
                </div>
                <h2 className="warranty-contact-title">Need Warranty Assistance?</h2>
                <p className="warranty-contact-text">
                  Contact your nearest authorized EVall Mobility service center for warranty-related queries 
                  and support.
                </p>
                <a href="/dealers" className="warranty-contact-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5" />
                  </svg>
                  Find Service Center
                </a>
              </div>
            </div>
          </section>
        </div>
      );
    };

export default WarrantyMaintenancePageComponent;