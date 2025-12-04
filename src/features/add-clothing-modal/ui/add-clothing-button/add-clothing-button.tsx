import React from 'react';
import { Plus } from 'lucide-react';
import styles from './add-clothing-button.module.scss';

interface AddClothingButtonProps {
  onClick: () => void;
  label?: string;
  className?: string;
}

export const AddClothingButton: React.FC<AddClothingButtonProps> = ({ 
  onClick, 
  label = 'Добавить вещь',
  className = ''
}) => {
  return (
    <button 
      className={`${styles.button} ${className}`} 
      onClick={onClick}
      aria-label={label}
    >
      <Plus className={styles.icon} aria-hidden="true" />
      <span className={styles.text}>{label}</span>
      <span className={styles.mobileText} aria-hidden="true">+</span>
    </button>
  );
};