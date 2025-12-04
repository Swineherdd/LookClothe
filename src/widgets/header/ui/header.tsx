import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HelpButton } from '../../../features/pop-up';
import { StyleNavigation } from '../../style-navigation/ui/style-navigation';
import styles from './header.module.scss';

export const Header: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const isStyleMode = location.pathname.startsWith('/style');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation buttons data
  const navItems = [
    { path: '/', label: 'ГЛАВНАЯ', active: location.pathname === '/' },
    { path: '/my-items', label: 'МОИ ВЕЩИ', active: location.pathname.startsWith('/my-items') },
    { path: '/fitting', label: 'ПРИМЕРКА', active: location.pathname.startsWith('/fitting') },
    { path: '/looks', label: 'ОБРАЗЫ', active: location.pathname.startsWith('/looks') },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.switcher}>
            <Link
              to="/"
              className={`${styles.switcherButton} ${
                !isStyleMode ? styles.active : ''
              }`}
            >
              <span className={styles.switcherText}>Шоппинг</span>
            </Link>
            <Link
              to="/style"
              className={`${styles.switcherButton} ${
                isStyleMode ? styles.active : ''
              }`}
            >
              <span className={styles.switcherText}>Мой стиль</span>
            </Link>
          </div>
          
          {isStyleMode ? (
            <StyleNavigation isScrolled={isScrolled} />
          ) : (
            <div className={styles.navigation}>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={styles.navButton}
                >
                  <p className={`${styles.navText} ${item.active ? styles.active : ''}`}>
                    {item.label}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
        
        <div className={styles.rightSection}>
          <button className={styles.iconButton}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={styles.helpIcon}
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <path d="M12 17h.01"></path>
            </svg>
          </button>
          
          <button className={styles.iconButton}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className={styles.userIcon}
              aria-hidden="true"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};