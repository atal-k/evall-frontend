// ============================================
// filepath: @components/common/NavDropdown.jsx
// ============================================

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './NavDropdown.module.css';

const NavDropdown = ({ menuData, isOpen, onClose, triggerRef }) => {
  const dropdownRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  // Trigger animation after mount
  useEffect(() => {
    if (isOpen) {
      // Delay to allow CSS transition to work
      const timer = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsMounted(true);
        });
      });
      return () => cancelAnimationFrame(timer);
    } else {
      setTimeout(() => {
        setIsMounted(false);
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!menuData) return null;

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div 
      ref={dropdownRef}
      className={`${styles['nav-dropdown']} ${isMounted ? styles['nav-dropdown--open'] : ''}`}
    >
      <div className={styles['nav-dropdown__triangle']} />
      <div className={styles['nav-dropdown__content']}>
        {menuData.groups.map((group, groupIndex) => (
          <div key={groupIndex} className={styles['nav-dropdown__group']}>
            {group.title && (
              <h3 className={styles['nav-dropdown__group-title']}>{group.title}</h3>
            )}
            <ul className={styles['nav-dropdown__links']}>
              {group.links.map((link) => (
                <li key={link.id} className={styles['nav-dropdown__link-item']}>
                  <Link
                    href={link.path}
                    className={styles['nav-dropdown__link']}
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
    </div>
  );
};

export default NavDropdown;