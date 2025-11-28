// ============================================================================
// DISCLAIMERS COMPONENT
// ============================================================================

import React, { useEffect } from 'react';
import './Legal.css';

const Disclaimers = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return (
      <div className="legal-page">
        <div className="legal-hero">
          <div className="legal-hero-content">
            <h1 className="legal-title">Disclaimers</h1>
            <p className="legal-subtitle">Important information about using our website and services.</p>
            <div className="legal-updated">Last Updated: November 2025</div>
          </div>
        </div>
  
        <div className="legal-container">
          <div className="legal-intro">
            <p>This disclaimer governs your use of the EVall Mobility Pvt. Ltd. website. By using our website, you accept this disclaimer in full. If you disagree with any part of this disclaimer, do not use our website.</p>
          </div>
  
          <section className="legal-section">
            <h2 className="legal-section-title">1. General Disclaimer</h2>
            <p>The information provided on this website is for general informational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information, products, services, or related graphics contained on the website.</p>
          </section>
  
          <section className="legal-section">
            <h2 className="legal-section-title">2. No Professional Advice</h2>
            <p>The content on our website does not constitute professional advice. You should not rely on the information on this website as an alternative to professional advice from qualified professionals. If you have specific questions about any matter, you should consult an appropriate professional.</p>
          </section>
  
          <section className="legal-section">
            <h2 className="legal-section-title">3. Product Information and Specifications</h2>
            <p>All product information, specifications, features, and images displayed on this website are subject to change without notice. EVall Mobility reserves the right to:</p>
            <ul className="legal-list">
              <li>Modify product specifications and features at any time.</li>
              <li>Update or discontinue any product model without prior notification.</li>
              <li>Vary product availability based on region and market conditions.</li>
            </ul>
            <p>Images shown are for illustrative purposes only and may differ from the actual product. Colors, finishes, and features may vary. Actual products may differ from images displayed.</p>
          </section>
  
          <section className="legal-section">
            <h2 className="legal-section-title">4. Pricing Disclaimer</h2>
            <p>All prices displayed on this website are indicative and subject to change without notice. The final price may vary based on:</p>
            <ul className="legal-list">
              <li>Location and regional taxes.</li>
              <li>Registration fees and government charges.</li>
              <li>Optional accessories and customizations.</li>
              <li>Financing terms and conditions.</li>
              <li>Promotional offers and incentives available at the time of purchase.</li>
            </ul>
            <p>Please contact your nearest authorized EVall dealer for accurate and current pricing information.</p>
          </section>
  
          <section className="legal-section">
            <h2 className="legal-section-title">5. Performance and Range Estimates</h2>
            <p>Performance figures, range estimates, and efficiency claims mentioned on this website are based on standardized testing conditions and may not reflect real-world usage. Actual performance may vary depending on:</p>
            <ul className="legal-list">
              <li>Driving conditions and road terrain.</li>
              <li>Weather and temperature.</li>
              <li>Vehicle load and passenger weight.</li>
              <li>Driving style and habits.</li>
              <li>Battery age and condition.</li>
              <li>Use of climate control and other accessories.</li>
            </ul>
          </section>
  
          <section className="legal-section">
            <h2 className="legal-section-title">6. Third-Party Content and Links</h2>
            <p>Our website may contain links to third-party websites or resources. These links are provided for your convenience only. EVall Mobility has no control over the content of those sites or resources and accepts no responsibility for them or for any loss or damage that may arise from your use of them.</p>
          </section>
  
          <section className="legal-section">
            <h2 className="legal-section-title">7. Availability and Service</h2>
            <p>We do not guarantee that our website will be available at all times or that it will be free from errors, viruses, or other harmful components. EVall Mobility reserves the right to suspend, withdraw, or restrict access to all or part of our website for business and operational reasons.</p>
          </section>
  
          <section className="legal-section">
            <h2 className="legal-section-title">8. No Warranty</h2>
            <p>This website and its content are provided on an "as is" basis without any warranties of any kind. EVall Mobility disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
          </section>
  
          <section className="legal-section">
            <h2 className="legal-section-title">9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, EVall Mobility shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the website, including but not limited to:</p>
            <ul className="legal-list">
              <li>Loss of profits or revenue.</li>
              <li>Loss of data or information.</li>
              <li>Business interruption.</li>
              <li>Personal injury or property damage.</li>
            </ul>
          </section>
  
          <section className="legal-section">
            <h2 className="legal-section-title">10. Regional Variations</h2>
            <p>Information on this website may not be applicable to all regions or markets. Product availability, specifications, features, and services may vary by location. Please contact your local authorized EVall dealer for information specific to your region.</p>
          </section>
  
          <section className="legal-section">
            <h2 className="legal-section-title">11. Calculator Tools Disclaimer</h2>
            <p>Financial calculators (EMI Calculator, TCO Calculator) and other estimation tools provided on this website are for informational purposes only. Results are estimates and should not be considered as financial advice or guaranteed offers. Actual terms may vary based on lender policies, credit approval, and market conditions.</p>
          </section>
  
          <section className="legal-section">
            <h2 className="legal-section-title">12. Changes to Disclaimer</h2>
            <p>EVall Mobility reserves the right to update or modify this disclaimer at any time without prior notice. Your continued use of the website following any changes constitutes acceptance of those changes.</p>
          </section>
  
          <section className="legal-section">
            <h2 className="legal-section-title">13. Contact Us</h2>
            <p>If you have any questions about this disclaimer, please contact us:</p>
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

export default Disclaimers;