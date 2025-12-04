import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './style-navigation.module.scss';

const desktopNavItems = [
  { path: '/', label: 'Главная', exact: true },
  { path: '/style/wardrobe', label: 'Мои вещи' },
  { path: '/style/fitting', label: 'Примерка' },
  { path: '/style/looks', label: 'Образы' },
];

const mobileNavItems = [
  { 
    path: '/', 
    label: 'Главная', 
    exact: true,
    icon: (isActive: boolean) => (
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
        className={`${styles.mobileNavIcon} ${isActive ? styles.active : ''}`}
        aria-hidden="true"
      >
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      </svg>
    )
  },
  { 
    path: '/style/wardrobe', 
    label: 'Мои вещи',
    icon: (isActive: boolean) => (
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
        className={`${styles.mobileNavIcon} ${isActive ? styles.active : ''}`}
        aria-hidden="true"
      >
        <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path>
      </svg>
    )
  },
  { 
    path: '/style/fitting', 
    label: 'Примерка',
    icon: (isActive: boolean) => (
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
        className={`${styles.mobileNavIcon} ${isActive ? styles.active : ''}`}
        aria-hidden="true"
      >
        <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
        <path d="M20 2v4"></path>
        <path d="M22 4h-4"></path>
        <circle cx="4" cy="20" r="2"></circle>
      </svg>
    )
  },
  { 
    path: '/style/looks', 
    label: 'Образы',
    icon: (isActive: boolean) => (
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
        className={`${styles.mobileNavIcon} ${isActive ? styles.active : ''}`}
        aria-hidden="true"
      >
        <rect width="20" height="5" x="2" y="3" rx="1"></rect>
        <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"></path>
        <path d="M10 12h4"></path>
      </svg>
    )
  },
  { 
    path: '/profile', 
    label: 'Кабинет',
    icon: (isActive: boolean) => (
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
        className={`${styles.mobileNavIcon} ${isActive ? styles.active : ''}`}
        aria-hidden="true"
      >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    )
  },
];

interface StyleNavigationProps {
  isScrolled?: boolean;
}

export const StyleNavigation: React.FC<StyleNavigationProps> = ({ isScrolled }) => {
  const location = useLocation();
  
  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`${styles.desktopNavigation} ${isScrolled ? styles.scrolled : ''}`}>
        {desktopNavItems.map((item) => {
          const isActive = item.exact 
            ? location.pathname === item.path
            : location.pathname.startsWith(item.path);

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={styles.navButton}
              end={item.exact}
            >
              <span className={`${styles.navText} ${isActive ? styles.active : ''}`}>
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </nav>
      
      {/* Mobile Bottom Navigation */}
      <div className={styles.mobileNavigation}>
        <div className={styles.mobileNavGrid}>
          {mobileNavItems.map((item) => {
            const isActive = item.exact 
              ? location.pathname === item.path
              : location.pathname.startsWith(item.path);

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={styles.mobileNavButton}
                end={item.exact}
              >
                {item.icon(isActive)}
                <span className={`${styles.mobileNavLabel} ${isActive ? styles.active : ''}`}>
                  {item.label}
                </span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};