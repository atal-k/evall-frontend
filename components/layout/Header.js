/* eslint-disable react-hooks/refs */
// filepath: src/components/layout/Header.jsx
import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Button from '../common/Button';
import styles from './Header.module.css';
import Logo from "../common/Logo";
import NavDropdown from '../common/NavDropdown';
import MobileNav from '../common/MobileNav';
import { navMenuData } from '../../data/navMenuData';

const Header = ({ variant = "white" }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();
  const navRefs = useRef({});
  const closeTimeoutRef = useRef(null);
  
  // Scroll handling only for glass variant
  useEffect(() => {
    if (variant !== 'glass') return;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, variant]);
  
  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [router.pathname]);
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  
  // Check if nav link is active
  const isActiveLink = (path) => {
    if (!path || path === '#') return false;
    if (path === '/') return router.pathname === '/';
    return router.pathname.startsWith(path);
  };
  
  // Handle nav click
  const handleNavClick = (e, navItem) => {
    if (navItem.hasDropdown) {
      e.preventDefault();
      if (activeDropdown === navItem.id) {
        handleCloseDropdown();
      } else {
        if (activeDropdown && !activeDropdown.startsWith('closing-')) {
          setActiveDropdown(null);
        }
        setActiveDropdown(navItem.id);
      }
    } else {
      setActiveDropdown(null);
    }
  };
  
  const handleCloseDropdown = () => {
    if (!activeDropdown || activeDropdown.startsWith('closing-')) return;
    
    const currentDropdown = activeDropdown;
    setActiveDropdown(`closing-${currentDropdown}`);
    
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown((prev) => {
        if (prev === `closing-${currentDropdown}`) {
          return null;
        }
        return prev;
      });
      closeTimeoutRef.current = null;
    }, 350);
  };
  
  const dealerLocatorPath = navMenuData.find(item => item.id === 'contact-us')?.menu.groups[0].links.find(link => link.id === 'dealer-locator')?.path;
  
  return (
    <>
      <header className={`${styles['header']} ${styles[`header--${variant}`]} ${isHidden ? styles['header--hidden'] : ''}`}>
        <div className={styles['header__container']}>
          <Link href="/" className={styles['header__logo-link']}>
            <Logo size="medium"/>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className={styles['header__nav']}>
            {navMenuData.map((navItem) => (
              <div 
                key={navItem.id}
                className={styles['header__nav-item']}
                ref={(el) => { navRefs.current[navItem.id] = el; }} 
              >
                <Link
                  href={navItem.path || '#'}
                  className={`${styles['header__nav-link']} ${
                    isActiveLink(navItem.path) ? styles['header__nav-link--active'] : ''
                  }`}
                  onClick={(e) => handleNavClick(e, navItem)}
                >
                  {navItem.label}
                </Link>
                
                {navItem.hasDropdown && 
                (activeDropdown === navItem.id || activeDropdown === `closing-${navItem.id}`) && (
                  <NavDropdown
                    menuData={navItem.menu}
                    isOpen={activeDropdown === navItem.id}
                    onClose={handleCloseDropdown}
                    triggerRef={navRefs.current[navItem.id]} 
                  />
                )}
              </div>
            ))}
          </nav>
          
          <div className={styles['header__actions']}>
            <Button
              variant={router.pathname === '/' ? "white" : "outline"}
              size="small"
              onClick={() => router.push(dealerLocatorPath)}
              className={styles['header__btn-dealer']}
            >
              Find a Dealer
            </Button>
            <Button 
              variant="primary" 
              size="small"
              onClick={() => window.location.href = '/products/e-SCV'}
              className={styles['header__btn-explore']}
            >
              Explore Models
            </Button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className={styles['header__mobile-toggle']}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav 
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navMenuData={navMenuData}
        isActiveLink={isActiveLink}
      />
    </>
  );
};

export default Header;