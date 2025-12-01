/* eslint-disable react-hooks/refs */
// filepath: src/components/layout/Header.jsx
import { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';
import Button from '../common/Button';
import styles from './Header.module.css';
import Logo from "../common/Logo";
import NavDropdown from '../common/NavDropdown';
import { navMenuData } from '../../data/navMenuData';

const Header = ({ variant = "white" }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();
  const navRefs = useRef({});
  
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
  
  // Close dropdown on route change - FIXED: use router.pathname
  useEffect(() => {
    setActiveDropdown(null);
  }, [router.pathname]);
  
  // Check if nav link is active - FIXED: use router.pathname
  const isActiveLink = (path) => {
    if (path === '#') return false;
    if (path === '/') return router.pathname === '/';
    return router.pathname.startsWith(path);
  };
  
  // Handle nav click
  const handleNavClick = (e, navItem) => {
    if (navItem.hasDropdown) {
      e.preventDefault();
      if (activeDropdown === navItem.id) {
        // Already open, trigger close animation
        handleCloseDropdown();
      } else {
        // Close any open dropdown first, then open new one
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
    
    // Remove after animation completes
    setTimeout(() => {
      setActiveDropdown((prev) => {
        // Only clear if still in closing state
        if (prev === `closing-${currentDropdown}`) {
          return null;
        }
        return prev;
      });
    }, 350);
  };
  
  const dealerLocatorPath = navMenuData.find(item => item.id === 'contact-us')?.menu.groups[0].links.find(link => link.id === 'dealer-locator')?.path;
  
  return (
    <header className={`${styles['header']} ${styles[`header--${variant}`]} ${isHidden ? styles['header--hidden'] : ''}`}>
      <div className={styles['header__container']}>
        <Link href="/" className={styles['header__logo-link']}>
          <Logo size="medium"/>
        </Link>
        
        <nav className={styles['header__nav']}>
          {navMenuData.map((navItem) => (
            <div 
              key={navItem.id}
              className={styles['header__nav-item']}
              ref={(el) => { navRefs.current[navItem.id] = el; }} 
            >
              <Link
                href={navItem.path || '#'}
                className={`${styles['header__nav-link']} ${router.pathname === navItem.path ? styles['header__nav-link--active'] : ''}`}
                onClick={(e) => handleNavClick(e, navItem)}
              >
                {navItem.label}
              </Link>
              
              {navItem.hasDropdown && activeDropdown === navItem.id && (
                <NavDropdown
                  menuData={navItem.menu}
                  isOpen={true}
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
          >
            Find a Dealer
          </Button>
          <Button variant="primary" size="small">Explore Models</Button>
          <button 
            className={styles['header__mobile-toggle']}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;