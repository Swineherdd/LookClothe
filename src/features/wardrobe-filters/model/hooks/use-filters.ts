import { useState } from 'react';
import { SelectedFilters, FilterType } from '../types/filters.interface';

export const useFilters = () => {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    category: [],
    color: [],
    season: [],
    tags: [],
    storage: [],
  });

  const [openFilter, setOpenFilter] = useState<string | null>(null);

  const toggleFilter = (filterId: string) => {
    setOpenFilter(openFilter === filterId ? null : filterId);
  };

  const toggleOption = (filterType: FilterType, optionId: string) => {
    setSelectedFilters(prev => {
      const currentOptions = prev[filterType];
      const isSelected = currentOptions.includes(optionId);
      
      return {
        ...prev,
        [filterType]: isSelected
          ? currentOptions.filter(id => id !== optionId)
          : [...currentOptions, optionId],
      };
    });
  };

  const clearFilter = (filterType: FilterType) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: [],
    }));
  };

  const clearAllFilters = () => {
    setSelectedFilters({
      category: [],
      color: [],
      season: [],
      tags: [],
      storage: [],
    });
  };

  const getSelectedCount = (filterType: FilterType) => {
    return selectedFilters[filterType].length;
  };

  return {
    selectedFilters,
    openFilter,
    toggleFilter,
    toggleOption,
    clearFilter,
    clearAllFilters,
    getSelectedCount,
  };
};