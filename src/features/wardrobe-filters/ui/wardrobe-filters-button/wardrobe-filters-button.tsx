import React from 'react';
import { SlidersHorizontal } from 'lucide-react';
import styles from './wardrobe-filters-button.module.scss';

interface WardrobeFiltersButtonProps {
  onClick: () => void;
  isActive?: boolean;
  selectedCount?: number;
}

export const WardrobeFiltersButton: React.FC<WardrobeFiltersButtonProps> = ({ 
  onClick, 
  isActive = false,
  selectedCount = 0,
}) => {
  return (
    <button 
      className={`${styles.button} ${isActive ? styles.active : ''}`}
      onClick={onClick}
    >
      <SlidersHorizontal className={styles.icon} aria-hidden="true" />
      <span className={styles.text}>Фильтры</span>
      {selectedCount > 0 && (
        <span className={styles.badge}>{selectedCount}</span>
      )}
    </button>
  );
};