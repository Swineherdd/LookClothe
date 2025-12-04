import React from 'react';
import styles from './filter-button.module.scss';

interface FilterButtonProps {
  label: string;
  count: number;
  isOpen: boolean;
  isActive: boolean;
  onClick: () => void;
}

export const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  count,
  isOpen,
  isActive,
  onClick,
}) => {
  const buttonClass = isActive 
    ? `${styles.button} ${styles.active}`
    : styles.button;

  return (
    <div className={styles.container}>
      <button className={buttonClass} onClick={onClick}>
        <span className={styles.label}>
          {label}
          {count > 0 && (
            <span className={styles.count}>({count})</span>
          )}
        </span>
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
          className={`${styles.icon} ${isOpen ? styles.open : ''}`}
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </button>
    </div>
  );
};