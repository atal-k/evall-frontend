/* eslint-disable react/no-unescaped-entities */
// ============================================
// components/pages/legal/PrivacyPolicy.js
// ============================================

import React, { useEffect } from 'react';
import './Legal.css';

// NOTE: Renamed component function to PrivacyPolicyPageComponent for consistency.
const PrivacyPolicyPageComponent = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      return (
        <div className="legal-page">
          <div className="legal-hero">
            <div className="legal-hero-content">
              <h1 className="legal-title">Privacy Policy</h1>
              <p className="legal-subtitle">Your privacy matters to us. Learn how we protect your data.</p>
              <div className="legal-updated">Effective Date: November 2025</div>
            </div>
          </div>
    
          <div className="legal-container">
            <div className="legal-intro">
              <p><strong>Entity Name:</strong> EVall Mobility Pvt. Ltd. ("EVall," "we," "our," "us")</p>
              <p><strong>Headquarters:</strong> Punjab, India</p>
              <p>At EVall Mobility, we value your trust and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website, engage with our services, or interact with our products.</p>
              <p>By accessing or using our website and services, you agree to this Privacy Policy. If you do not agree with our practices, please refrain from using our website.</p>
            </div>
    
            <section className="legal-section">
              <h2 className="legal-section-title">1. Information We Collect</h2>
              <p>We collect information to deliver a personalized and secure user experience. This includes:</p>
              
              <div className="legal-subsection">
                <h3 className="legal-subsection-title">a. Information You Provide Directly</h3>
                <ul className="legal-list">
                  <li><strong>Contact details:</strong> Name, email address, phone number, company name, and location.</li>
                  <li><strong>Inquiry information:</strong> Messages, forms, and requests submitted through "Contact Us," "Request a Demo," or "Dealer Locator."</li>
                  <li><strong>Finance or service-related details:</strong> Information shared while using tools like the EMI Calculator, TCO Calculator, or applying for financing or service support.</li>
                  <li><strong>Feedback and communication data:</strong> Information you share via our feedback forms or surveys.</li>
                </ul>
              </div>
    
              <div className="legal-subsection">
                <h3 className="legal-subsection-title">b. Information Collected Automatically</h3>
                <p>When you visit our website, we may automatically collect:</p>
                <ul className="legal-list">
                  <li><strong>Device and usage data:</strong> IP address, browser type, operating system, referral URLs, and pages viewed.</li>
                  <li><strong>Cookies and analytics data:</strong> We use cookies and tracking technologies to enhance website functionality and analyze user engagement. You can manage or disable cookies through your browser settings.</li>
                </ul>
              </div>
    
              <div className="legal-subsection">
                <h3 className="legal-subsection-title">c. Information from Third Parties</h3>
                <p>We may receive limited data from our authorized partners, financing institutions, or service affiliates to process inquiries or fulfill services.</p>
              </div>
            </section>
    
            <section className="legal-section">
              <h2 className="legal-section-title">2. How We Use Your Information</h2>
              <p>We use your personal data for the following purposes:</p>
              <ul className="legal-list">
                <li>To respond to your inquiries, demo requests, or dealer location searches.</li>
                <li>To process financing or service support applications.</li>
                <li>To send updates about products, offers, or events (only if you have opted in).</li>
                <li>To improve website functionality, user experience, and content relevance.</li>
                <li>To fulfill legal obligations and maintain website security.</li>
                <li>To analyze aggregated, non-identifiable data for internal business insights.</li>
              </ul>
            </section>
    
            <section className="legal-section">
              <h2 className="legal-section-title">3. Information Sharing and Disclosure</h2>
              <p>We respect your privacy and do not sell or trade your personal information. However, we may share your data in the following situations:</p>
              <ul className="legal-list">
                <li>With authorized dealers or partners to facilitate test drives, sales, or service requests.</li>
                <li>With financial partners for EMI, loan, or ownership assistance.</li>
                <li>With service providers who help us operate our website, analytics, or communications.</li>
                <li>When required by law or regulatory authorities for compliance purposes.</li>
              </ul>
              <p>All third-party partners are bound by confidentiality and data protection agreements.</p>
            </section>
    
            <section className="legal-section">
              <h2 className="legal-section-title">4. Data Retention</h2>
              <p>We retain your personal information only as long as necessary to fulfill the purposes outlined above or as required by law. Once data is no longer needed, it is securely deleted or anonymized.</p>
            </section>
    
            <section className="legal-section">
              <h2 className="legal-section-title">5. Data Security</h2>
              <p>We implement reasonable technical and organizational measures to protect your data against unauthorized access, alteration, or disclosure. However, please note that no online system is entirely secure, and EVall cannot guarantee absolute protection of transmitted information.</p>
            </section>
    
            <section className="legal-section">
              <h2 className="legal-section-title">6. Your Rights</h2>
              <p>Depending on applicable laws, you may have the right to:</p>
              <ul className="legal-list">
                <li>Access, correct, or update your personal information.</li>
                <li>Withdraw consent for marketing communications.</li>
                <li>Request deletion or restriction of your data (where legally permissible).</li>
                <li>File a complaint with the appropriate data protection authority.</li>
              </ul>
              <p>To exercise these rights, you can contact us at <a href="mailto:info@evall.co.in">info@evall.co.in</a></p>
            </section>
    
            <section className="legal-section">
              <h2 className="legal-section-title">7. Third-Party Links</h2>
              <p>Our website may contain links to third-party sites (e.g., financing partners, dealer portals, or government EV programs). EVall Mobility is not responsible for the content or privacy practices of those websites.</p>
            </section>
    
            <section className="legal-section">
              <h2 className="legal-section-title">8. Children's Privacy</h2>
              <p>Our website and services are intended for adults and business users. We do not knowingly collect personal data from individuals under 18 years of age.</p>
            </section>
    
            <section className="legal-section">
              <h2 className="legal-section-title">9. Policy Updates</h2>
              <p>EVall Mobility reserves the right to update this Privacy Policy periodically to reflect technological, legal, or operational changes. The latest version will always be available on this page, with the revised "Effective Date."</p>
            </section>
    
            <section className="legal-section">
              <h2 className="legal-section-title">10. Contact Us</h2>
              <p>For any questions, concerns, or privacy-related requests, please contact:</p>
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

export default PrivacyPolicyPageComponent;