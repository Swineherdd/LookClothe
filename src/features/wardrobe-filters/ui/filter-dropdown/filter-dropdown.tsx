import React, { useRef, useEffect } from 'react';
import { FilterOption } from '../../model/types/filters.interface';
import styles from './filter-dropdown.module.scss';

interface FilterDropdownProps {
  options: FilterOption[];
  selectedOptions: string[];
  onToggleOption: (optionId: string) => void;
  onClose: () => void;
}

export const FilterDropdown: React.FC<FilterDropdownProps> = ({
  options,
  selectedOptions,
  onToggleOption,
  onClose,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      {options.map((option) => {
        const isSelected = selectedOptions.includes(option.id);
        const optionClass = isSelected 
          ? `${styles.option} ${styles.selected}`
          : styles.option;

        return (
          <button
            key={option.id}
            className={optionClass}
            onClick={() => onToggleOption(option.id)}
          >
            <div className={styles.checkbox}>
              {isSelected && (
                <svg 
                  className={styles.checkIcon} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="3" 
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <span className={styles.optionLabel}>{option.label}</span>
            {option.count !== undefined && (
              <span className={styles.optionCount}>{option.count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
};