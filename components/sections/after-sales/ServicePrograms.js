// ============================================================================
// FILE: src/components/sections/ServicePrograms.js
// ============================================================================
import React from 'react';
import './ServicePrograms.css';

const ServicePrograms = () => {
  const services = [
    'Online Service Appointment Scheduling',
    'Doorstep Services',
    'Clear Service Value Packages',
    'Electric Vehicle Checks',
    'Fleet Support Programs',
    'More Services'
  ];

  return (
    <section className="service-programs">
      <div className="service-programs__container">
        <div className="service-programs__header">
          <h2 className="service-programs__tagline">EVall Mobility: Aapka Bharosa Hamara Waada</h2>
          <h3 className="service-programs__title">After Sales Services</h3>
        </div>

        <div className="service-programs__content">
          <p className="service-programs__description">
            Our clients are at the center of every innovation and service. With around 40 years of 
            automotive experience and a commitment to a cleaner future, we have launched a comprehensive 
            range of support programs that prioritize dependability, convenience, and transparency.
          </p>
          <p className="service-programs__description">
            Our skilled professionals and cutting-edge diagnostics guarantee a flawless EVall experience 
            on every drive, long after delivery, regardless of how many vehicles you drive or how many 
            you manage.
          </p>
        </div>

        <div className="service-programs__list">
          {services.map((service, index) => (
            <div key={index} className="service-programs__item">
              <div className="service-programs__item-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-1.41 16.09L6 13.5l1.41-1.41l3.18 3.18l6.89-6.89l1.41 1.41z" />
                </svg>
              </div>
              <span className="service-programs__item-text">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicePrograms;