import React from 'react';
import { FiltersRow } from '../filters-row/filters-row';
import { useFilters } from '../../model/hooks/use-filters';
import { SelectedFilters } from '../../model/types/filters.interface';
import styles from './wardrobe-filters.module.scss';
interface WardrobeFiltersProps {
  isOpen: boolean;
  onFiltersChange?: (filters: SelectedFilters) => void;
}

export const WardrobeFilters: React.FC<WardrobeFiltersProps> = ({ 
  isOpen,
  onFiltersChange,
}) => {
  const {
    selectedFilters,
    openFilter,
    toggleFilter,
    toggleOption,
    clearAllFilters,
  } = useFilters();

  const totalSelected = Object.values(selectedFilters).reduce(
    (sum, options) => sum + options.length,
    0
  );

  const handleToggleOption = (filterType: keyof SelectedFilters, optionId: string) => {
    toggleOption(filterType, optionId);
    
    if (onFiltersChange) {
      onFiltersChange(selectedFilters);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h3 className={styles.title}>Фильтры</h3>
          {totalSelected > 0 && (
            <span className={styles.selectedCount}>
              Выбрано: {totalSelected}
            </span>
          )}
        </div>
        {totalSelected > 0 && (
          <button className={styles.clearButton} onClick={clearAllFilters}>
            Сбросить все
          </button>
        )}
      </div>

      <div className={styles.filtersWrapper}>
        <FiltersRow
          selectedFilters={selectedFilters}
          openFilter={openFilter}
          onToggleFilter={toggleFilter}
          onToggleOption={handleToggleOption}
        />
      </div>
    </div>
  );
};