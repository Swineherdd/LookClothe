export interface FilterOption {
  id: string;
  label: string;
  value: string; // Добавляем value
  count?: number;
}

export interface FilterCategory {
  id: string;
  label: string;
  options: FilterOption[];
}

export interface SelectedFilters {
  category: string[];
  color: string[];
  season: string[];
  tags: string[];
  storage: string[];
}

export type FilterType = keyof SelectedFilters;