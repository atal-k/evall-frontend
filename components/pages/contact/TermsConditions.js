/* eslint-disable react/no-unescaped-entities */
// ============================================
// components/pages/contact/TermsConditions.js
// ============================================

import React, { useEffect } from 'react';
import './Legal.css';

// NOTE: Renamed component function to TermsConditionsPageComponent for consistency.
const TermsConditionsPageComponent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      return (
        <div className="legal-page">
          <div className="legal-hero">
            <div className="legal-hero-content">
              <h1 className="legal-title">Terms and Conditions</h1>
              <p className="legal-subtitle">Please read these terms carefully before using our services.</p>
              <div className="legal-updated">Last Updated: November 2025</div>
            </div>
          </div>
    
          <div className="legal-container">
            <div className="legal-intro">
              <p>Welcome to <strong>EVall Mobility Pvt. Ltd.</strong> ("EVall Mobility," "we," "our," or "us"). By accessing or using our website, services, or any content provided by EVall Mobility, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully before using our website.</p>
            </div>
    
            <section className="legal-section">
              <h2 className="legal-section-title">1. Acceptance of Terms</h2>
              <p>By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not access or use our website or services.</p>
            </section>
    
            <section className="legal-section">
              <h2 className="legal-section-title">2. Company Information</h2>
              <p>This website is operated by EVall Mobility Pvt. Ltd., headquartered in Punjab, India. All references to "we," "us," or "our" refer to EVall Mobility Pvt. Ltd.</p>
            </section>
    
            <section className="legal-section">
              <h2 className="legal-section-title">3. Use of Website</h2>
              <p>You agree to use our website only for lawful purposes and in a manner that does not infringe on the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. You must not:</p>
              <ul className="legal-list">
                <li>Use the website to transmit any harmful, offensive, or unlawful content.</li>
                <li>Attempt to gain unauthorized access to any part of the website or related systems.</li>
                <li>Reproduce, duplicate, copy, sell, or exploit any content or part of the website for commercial purposes without written consent from EVall Mobility.</li>
              </ul>
            </section>
    
            <section className="legal-section">
              <h2 className="legal-section-title">4. Intellectual Property Rights</h2>
              <p>All content on this website including text, images, videos, graphics, trademarks, and logos is the property of EVall Mobility Pvt. Ltd. or its licensors and is protected under applicable intellectual property laws. You may view or print content for personal use only. Any unauthorized use, reproduction, or distribution is strictly prohibited.</p>
            </section>
    
            <section className="legal-section">
              <h2 className="legal-section-title">5. Product Information</h2>
              <p>EVall Mobility strives to ensure that all product details, specifications, and features displayed on this website are accurate. However, variations may occur due to continuous product improvements, technological updates, or regional availability. Images and visuals are for illustrative purposes only and may differ from the actual vehicle.</p>
            </section>
    
            <section className="legal-section">
              <h2 className="legal-section-title">6. Pricing and Offers</h2>
              <p>All prices displayed are indicative and subject to change without prior notice. Taxes, registration fees, and additional charges may apply. Any promotional offers or finance schemes are governed by separate terms and may vary by location.</p>
            </section>
    
            <section className="legal-section">
              <h2 className="legal-section-title">7. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites or services. We are not responsible for the content, accuracy, or privacy practices of those external sites. Accessing such sites is at your own risk.</p>
            </section>
    
            <section className="legal-section">
              <h2 className="legal-section-title">8. Limitation of Liability</h2>
              <p>EVall Mobility Pvt. Ltd. is not liable for any direct, indirect, incidental, or consequential damages arising from:</p>
              <ul className="legal-list">
                <li>Your use or inability to use our website or products.</li>
                <li>Unauthorized access or alteration of your data.</li>
                <li>Any other matter related to the use of our website or services.</li>
              </ul>
              <p>We make no warranties regarding the accuracy, reliability, or completeness of website content.</p>
            </section>
    
            <section className="legal-section">
              <h2 className="legal-section-title">9. Warranty and Service</h2>
              <p>Vehicle warranties, maintenance policies, and after-sales support are governed by individual agreements and may vary depending on the product model and region. For more information, please refer to the Warranty & Maintenance section on our website or contact an authorized EVall dealer.</p>
            </section>
    
            <section className="legal-section">
              <h2 className="legal-section-title">10. Privacy and Data Protection</h2>
              <p>Your privacy is important to us. The collection and use of personal information are governed by our Privacy Policy, which forms an integral part of these Terms and Conditions.</p>
            </section>
    
            <section className="legal-section">
              <h2 className="legal-section-title">11. Indemnification</h2>
              <p>You agree to indemnify and hold harmless EVall Mobility Pvt. Ltd., its directors, employees, and partners from any claims, damages, or losses arising from your violation of these Terms or misuse of our website.</p>
            </section>
    
            <section className="legal-section">
              <h2 className="legal-section-title">12. Governing Law and Jurisdiction</h2>
              <p>These Terms and any disputes arising out of or related to them shall be governed by and construed in accordance with the laws of Punjab, India. All disputes shall be subject to the exclusive jurisdiction of the competent courts in Punjab.</p>
            </section>
    
            <section className="legal-section">
              <h2 className="legal-section-title">13. Modifications to Terms</h2>
              <p>EVall Mobility Pvt. Ltd. reserves the right to modify, update, or replace these Terms at any time without prior notice. Changes will be effective immediately upon posting on this page, with an updated "Last Updated" date.</p>
            </section>
    
            <section className="legal-section">
              <h2 className="legal-section-title">14. Contact Information</h2>
              <p>For questions or concerns regarding these Terms and Conditions, please contact:</p>
              <div className="legal-contact-card">
                <h3 className="contact-card-title">EVall Mobility Pvt. Ltd.</h3>
                <div className="contact-info">
                  <div className="contact-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M12 12q.825 0 1.413-.587T14 10t-.587-1.412T12 8t-1.412.588T10 10t.588 1.413T12 12m0 7.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22m0-12" />
                    </svg>
                    <div>
                      <p>D218, Phase 8B, Industrial Area</p>
                      <p>Sector 74, Sahibzada Ajit Singh Nagar</p>
                      <p>Punjab - 160055, India</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.8.8 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.15 15.15 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.4 11.4 0 0 1 8.5 4c0-.55-.45-1-1-1" />
                    </svg>
                    <div>
                      <p>+91 172 450 9386</p>
                      <p>(0172) 4509386</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z" />
                    </svg>
                    <div>
                      <p><a href="mailto:info@evall.co.in">info@evall.co.in</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      );
    };

export default TermsConditionsPageComponent;