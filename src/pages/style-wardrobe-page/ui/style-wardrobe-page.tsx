import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ClothingCard, mockClothingItems, IClothing } from '../../../entities/clothing';
import { EditClothingModal } from '../../../features/wardobe';
import { AddClothingButton, AddClothingModal, useAddClothing } from '../../../features/add-clothing-modal';
import { WardrobeFiltersButton, WardrobeFilters } from '../../../features/wardrobe-filters';
import { SearchInput } from '../../../shared/ui';
import { SelectedFilters } from '../../../features/wardrobe-filters';
import {
  CATEGORY_OPTIONS,
  COLOR_OPTIONS,
  SEASON_OPTIONS,
  STORAGE_OPTIONS,
  TAG_OPTIONS
} from '../../../features/wardrobe-filters/model/constants/filters.constants';
import styles from './style-wardrobe-page.module.scss';
import { FittingRoomCart } from '../../../features/fitting-room';

export const StyleWardrobePage: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [clothingItems, setClothingItems] = useState<IClothing[]>(mockClothingItems);
  const [selectedClothing, setSelectedClothing] = useState<IClothing | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    category: [],
    color: [],
    season: [],
    tags: [],
    storage: [],
  });
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const { isOpen: isAddModalOpen, openModal: openAddModal, closeModal: closeAddModal } = useAddClothing();

  
  const getFilterValues = useCallback((filterIds: string[], options: typeof CATEGORY_OPTIONS) => {
    return options
      .filter(option => filterIds.includes(option.id))
      .map(option => option.value);
  }, []);


  const matchesSearch = useCallback((item: IClothing, search: string) => {
    if (!search.trim()) return true;
    
    const searchLower = search.toLowerCase();
    return (
      item.title.toLowerCase().includes(searchLower) ||
      item.brand.toLowerCase().includes(searchLower) ||
      item.category.toLowerCase().includes(searchLower) ||
      (item.subCategory && item.subCategory.toLowerCase().includes(searchLower)) ||
      item.colors.some(color => color.toLowerCase().includes(searchLower)) ||
      item.seasons.some(season => season.toLowerCase().includes(searchLower)) ||
      (item.notes && item.notes.toLowerCase().includes(searchLower))
    );
  }, []);

  
  const matchesFilters = useCallback((item: IClothing, filters: SelectedFilters) => {
  
    if (filters.category.length > 0) {
      const selectedCategories = getFilterValues(filters.category, CATEGORY_OPTIONS);
      const itemCategory = item.subCategory || item.category;
      if (!selectedCategories.some(cat => 
        itemCategory.toLowerCase().includes(cat.toLowerCase()) ||
        item.title.toLowerCase().includes(cat.toLowerCase())
      )) {
        return false;
      }
    }


    if (filters.color.length > 0) {
      const selectedColors = getFilterValues(filters.color, COLOR_OPTIONS);
      if (!selectedColors.some(color => 
        item.colors.some(itemColor => 
          itemColor.toLowerCase().includes(color.toLowerCase())
        )
      )) {
        return false;
      }
    }

    if (filters.season.length > 0) {
      const selectedSeasons = getFilterValues(filters.season, SEASON_OPTIONS);
      if (!selectedSeasons.some(season => 
        item.seasons.some(itemSeason => 
          itemSeason.toLowerCase().includes(season.toLowerCase())
        )
      )) {
        return false;
      }
    }

    if (filters.tags.length > 0) {
      const selectedTags = getFilterValues(filters.tags, TAG_OPTIONS);
    
      if (item.notes) {
        const notesLower = item.notes.toLowerCase();
        if (!selectedTags.some(tag => notesLower.includes(tag.toLowerCase()))) {
          return false;
        }
      }
    }

    
    if (filters.storage.length > 0) {
      const selectedStorage = getFilterValues(filters.storage, STORAGE_OPTIONS);
      if (!selectedStorage.some(storage => 
        item.storageLocation.toLowerCase().includes(storage.toLowerCase())
      )) {
        return false;
      }
    }

    return true;
  }, [getFilterValues]);


  const filteredItems = useMemo(() => {
    return clothingItems.filter(item => {
     
      if (!matchesSearch(item, searchValue)) {
        return false;
      }
      
      
      if (!matchesFilters(item, selectedFilters)) {
        return false;
      }
      
      return true;
    });
  }, [clothingItems, searchValue, selectedFilters, matchesSearch, matchesFilters]);

  const handleEdit = (id: string) => {
    const clothing = clothingItems.find(item => item.id === id);
    if (clothing) {
      setSelectedClothing(clothing);
      setIsEditModalOpen(true);
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Вы уверены, что хотите удалить эту вещь?')) {
      setClothingItems(prev => prev.filter(item => item.id !== id));
    }
  };

  const handleToggleFittingRoom = (id: string) => {
    setClothingItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, inFittingRoom: !item.inFittingRoom } : item
      )
    );
  };

  const handleSaveEdit = (clothing: IClothing) => {
    setClothingItems(prev =>
      prev.map(item => (item.id === clothing.id ? clothing : item))
    );
    setIsEditModalOpen(false);
    setSelectedClothing(null);
  };

  const handleDeleteEdit = (id: string) => {
    handleDelete(id);
    setIsEditModalOpen(false);
    setSelectedClothing(null);
  };

  const handleFiltersChange = (filters: SelectedFilters) => {
    setSelectedFilters(filters);
  };

  const totalSelectedFilters = Object.values(selectedFilters).reduce(
    (sum, filter) => sum + filter.length,
    0
  );

 
  const hasActiveFilters = totalSelectedFilters > 0 || searchValue.trim() !== '';

  return (
    <div className={styles.page}>
      <FittingRoomCart/>
      <div className={styles.header}>
        <h1 className={styles.title}>МОИ ВЕЩИ</h1>
        <AddClothingButton onClick={openAddModal} />
      </div>

      <div className={styles.controls}>
        <SearchInput
          placeholder="Поиск по категории, цвету, тегам, бренду..."
          value={searchValue}
          onChange={setSearchValue}
        />
        <WardrobeFiltersButton 
          onClick={() => setIsFiltersOpen(!isFiltersOpen)} 
          isActive={isFiltersOpen}
          selectedCount={totalSelectedFilters}
        />
      </div>

      <WardrobeFilters 
        isOpen={isFiltersOpen} 
        onFiltersChange={handleFiltersChange}
      />

      <div className={styles.filtersInfo}>
        <div className={styles.count}>
          Показано вещей: <span className={styles.countNumber}>{filteredItems.length}</span>
          {hasActiveFilters && (
            <span className={styles.totalCount}> из {clothingItems.length}</span>
          )}
        </div>
        
        {hasActiveFilters && (
          <button 
            className={styles.clearAllButton}
            onClick={() => {
              setSearchValue('');
              setSelectedFilters({
                category: [],
                color: [],
                season: [],
                tags: [],
                storage: [],
              });
            }}
          >
            Сбросить все фильтры
          </button>
        )}
      </div>

      <div className={styles.grid}>
        {filteredItems.map(item => (
          <ClothingCard
            key={item.id}
            clothing={item}
            onEdit={handleEdit}
            onDelete={handleDelete}
           
          />
        ))}
        
        {filteredItems.length === 0 && (
          <div className={styles.noResults}>
            <div className={styles.noResultsIcon}>👕</div>
            <h3 className={styles.noResultsTitle}>Ничего не найдено</h3>
            <p className={styles.noResultsText}>
              Попробуйте изменить параметры поиска или сбросить фильтры
            </p>
            <button 
              className={styles.noResultsButton}
              onClick={() => {
                setSearchValue('');
                setSelectedFilters({
                  category: [],
                  color: [],
                  season: [],
                  tags: [],
                  storage: [],
                });
              }}
            >
              Сбросить фильтры
            </button>
          </div>
        )}
      </div>

      <AddClothingModal isOpen={isAddModalOpen} onClose={closeAddModal} />
      <EditClothingModal
        clothing={selectedClothing}
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSaveEdit}
        onDelete={handleDeleteEdit}
      />
    </div>
  );
};