import React from 'react';
import { FilterButton } from '../filter-button/filter-button';
import { FilterDropdown } from '../filter-dropdown/filter-dropdown';
import { 
  FILTER_CATEGORIES, 
  FILTER_OPTIONS 
} from '../../model/constants/filters.constants';
import { SelectedFilters } from '../../model/types/filters.interface';
import styles from './filters-row.module.scss';

interface FiltersRowProps {
  selectedFilters: SelectedFilters;
  openFilter: string | null;
  onToggleFilter: (filterId: string) => void;
  onToggleOption: (filterType: keyof SelectedFilters, optionId: string) => void;
}

export const FiltersRow: React.FC<FiltersRowProps> = ({
  selectedFilters,
  openFilter,
  onToggleFilter,
  onToggleOption,
}) => {
  const handleCloseDropdown = () => {
    if (openFilter) {
      onToggleFilter(openFilter);
    }
  };

  return (
    <div className={styles.row}>
      {FILTER_CATEGORIES.map((filter) => {
        const isOpen = openFilter === filter.id;
        const selectedCount = selectedFilters[filter.id as keyof SelectedFilters]?.length || 0;
        const isActive = selectedCount > 0;

        return (
          <div key={filter.id} className={styles.filterColumn}>
            <FilterButton
              label={filter.label}
              count={selectedCount}
              isOpen={isOpen}
              isActive={isActive}
              onClick={() => onToggleFilter(filter.id)}
            />
            
            {isOpen && (
              <FilterDropdown
                options={FILTER_OPTIONS[filter.id] || []}
                selectedOptions={selectedFilters[filter.id as keyof SelectedFilters] || []}
                onToggleOption={(optionId) => onToggleOption(filter.id as keyof SelectedFilters, optionId)}
                onClose={handleCloseDropdown}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};