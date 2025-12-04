import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HelpButton } from '../../../features/pop-up';
import { StyleNavigation } from '../../style-navigation/ui/style-navigation';
import styles from './header.module.scss';

export const Header: React.FC = () => {
  const location = useLocation();
  const isStyleMode = location.pathname.startsWith('/style');

  return (
    <header className={styles.header}>
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
          {isStyleMode && <StyleNavigation />}
        </div>
        <div className={styles.rightSection}>
          <HelpButton />
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