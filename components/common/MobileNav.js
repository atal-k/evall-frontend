// filepath: src/components/common/MobileNav.js
import { useState } from 'react';
import Link from 'next/link';
import styles from './MobileNav.module.css';

const MobileNav = ({ isOpen, onClose, navMenuData, isActiveLink }) => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleItemClick = (navItem) => {
    if (navItem.hasDropdown) {
      setExpandedItem(expandedItem === navItem.id ? null : navItem.id);
    } else {
      onClose();
    }
  };

  const handleLinkClick = () => {
    onClose();
    setExpandedItem(null);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`${styles['mobile-nav__backdrop']} ${isOpen ? styles['mobile-nav__backdrop--open'] : ''}`}
        onClick={onClose}
      />

      {/* Mobile Drawer */}
      <div className={`${styles['mobile-nav']} ${isOpen ? styles['mobile-nav--open'] : ''}`}>
        <div className={styles['mobile-nav__header']}>
          <h2 className={styles['mobile-nav__title']}>Menu</h2>
          <button 
            className={styles['mobile-nav__close']}
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className={styles['mobile-nav__content']}>
          {navMenuData.map((navItem) => (
            <div key={navItem.id} className={styles['mobile-nav__item']}>
              {navItem.hasDropdown ? (
                <>
                  <button
                    className={`${styles['mobile-nav__link']} ${styles['mobile-nav__link--expandable']} ${
                      isActiveLink(navItem.path) ? styles['mobile-nav__link--active'] : ''
                    }`}
                    onClick={() => handleItemClick(navItem)}
                  >
                    <span>{navItem.label}</span>
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      className={`${styles['mobile-nav__arrow']} ${
                        expandedItem === navItem.id ? styles['mobile-nav__arrow--expanded'] : ''
                      }`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>

                  {/* Dropdown Content */}
                  <div 
                    className={`${styles['mobile-nav__dropdown']} ${
                      expandedItem === navItem.id ? styles['mobile-nav__dropdown--open'] : ''
                    }`}
                  >
                    {navItem.menu.groups.map((group, groupIndex) => (
                      <div key={groupIndex} className={styles['mobile-nav__group']}>
                        {group.title && (
                          <h3 className={styles['mobile-nav__group-title']}>{group.title}</h3>
                        )}
                        <ul className={styles['mobile-nav__sublinks']}>
                          {group.links.map((link) => (
                            <li key={link.id}>
                              <Link
                                href={link.path}
                                className={styles['mobile-nav__sublink']}
                                onClick={handleLinkClick}
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={navItem.path}
                  className={`${styles['mobile-nav__link']} ${
                    isActiveLink(navItem.path) ? styles['mobile-nav__link--active'] : ''
                  }`}
                  onClick={handleLinkClick}
                >
                  {navItem.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileNav;