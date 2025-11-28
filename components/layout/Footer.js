/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import './Footer.css'
import Logo from "../common/Logo";
import { useToast } from '../common/Toast';
import { getIcon } from "../../data/iconsData";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState('');
  const toast = useToast();
  
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success(`Subscribed with email: ${email}`);
      setEmail('');
    }
  };
  
  return (      
      <footer className="footer">
        <div className="container">
          <div className="footer__main">
            {/* Brand Section */}
            <div className="footer__brand">
            <div className="footer__logo">
              <Logo size="XLarge" className="logo--light" color="white" />
            </div>
              <p className="footer__tagline">
                Leading the electric revolution with innovative, sustainable, and high-performance 
                electric vehicles designed for the future.
              </p>
              
              <div className="footer__certifications">
                <h4 className="footer__cert-title">Certifications & Partners</h4>
                <div className="footer__cert-icons">
                  <div className="footer__cert-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 20 20">
                      <path fill="currentColor" d="M4.46 5.16L5 7.46l-.54 2.29l2.01 1.24L7.7 13l2.3-.54l2.3.54l1.23-2.01l2.01-1.24L15 7.46l.54-2.3l-2-1.24l-1.24-2.01l-2.3.55l-2.29-.54l-1.25 2zm5.55 6.34a3.999 3.999 0 1 1 0-8c2.2 0 3.99 1.79 3.99 3.99c0 2.22-1.79 4.01-3.99 4.01m-.02-1C8.33 10.5 7 9.16 7 7.5c0-1.65 1.33-3 2.99-3S13 5.85 13 7.5c0 1.66-1.35 3-3.01 3m3.84 1.1l-1.28 2.24l-2.08-.47L13 19.2l1.4-2.2h2.5zm-7.7.07l1.25 2.25l2.13-.51L7 19.2L5.6 17H3.1z" />
                    </svg>
                  </div>
                  <div className="footer__cert-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 48 48">
                      <g fill="none" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M26 36H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2h-8M12 14h24m-24 7h6m-6 7h4" />
                        <path d="M30 33a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="m30 40l4 2V31.472S32.86 33 30 33s-4-1.5-4-1.5V42z" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Quick Links Section */}
            <div className="footer__section">
              <h4 className="footer__section-title">Quick Links</h4>
              <div className="footer__links">
                <Link href="/" className="footer__link">Home</Link>
                <Link href="/about-us" className="footer__link">About Us</Link>
                <Link href="/vehicle-showcase" className="footer__link">Products</Link>
                <Link href="#" className="footer__link">Technology</Link>
                <Link href="#" className="footer__link">Services</Link>
                <Link href="#" className="footer__link">Resources</Link>
                <Link href="/contact-us" className="footer__link">Contact</Link>
              </div>
            </div>
            
            {/* Contact Information Section */}
            <div className="footer__section">
              <h4 className="footer__section-title">Contact Information</h4>
              <div className="footer__contact">
                <div className="footer__contact-item">
                  <div className="footer__contact-icon">
                  {getIcon('location', 24)}
                  </div>
                  <div className="footer__contact-text">
                    <p>D218, Phase 8B,</p>
                    <p>Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab -160055</p>
                    <p>Phone: (0172) 4509386</p>
                  </div>
                </div>
                
                <div className="footer__contact-item">
                  <div className="footer__contact-icon">
                    {getIcon('phone', 24)}
                  </div>
                  <div className="footer__contact-text">
                    <p>0172 450 9386</p>
                  </div>
                </div>
                
                <div className="footer__contact-item">
                  <div className="footer__contact-icon">
                    {getIcon('email', 24)}
                  </div>
                  <div className="footer__contact-text">
                    <p>info@evall.co.in</p>
                    <p>sales@evall.co.in</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Newsletter Section */}
            <div className="footer__section">
              <h4 className="footer__section-title">Stay updated</h4>
              <p className="footer__newsletter-text">
                Get the latest news and launches
              </p>
              <form className="footer__newsletter-form" onSubmit={handleNewsletterSubmit}>
              <div className="footer__newsletter-input-wrapper">
                <input 
                  type="email" 
                  placeholder="Your email address"
                  className="footer__newsletter-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div className="footer__newsletter-input-icon">
                  {getIcon('email', 24)}
                </div>
              </div>
            <button type="submit" className="footer__newsletter-btn">
              Subscribe
                </button>
              </form>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="footer__divider"></div>
          <div className="footer__bottom">
            <p className="footer__copyright">
              Copyright © 2025 EVall Mobility. All rights reserved
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                {getIcon('linkedin', 24)}
              </a>
              <a href="#" className="footer__social-link" aria-label="Facebook">
                {getIcon('facebook', 20)}
              </a>
              <a href="#" className="footer__social-link" aria-label="Instagram">
                {getIcon('instagram', 20)}
              </a>
              <a href="#" className="footer__social-link" aria-label="YouTube">
                {getIcon('youtube', 20)}
              </a>
              <a href="#" className="footer__social-link" aria-label="Twitter">
                {getIcon('twitter', 20)}
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;