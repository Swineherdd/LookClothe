import { useState } from 'react';

export const useWardrobeFilters = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilters = () => setIsOpen(prev => !prev);
  const closeFilters = () => setIsOpen(false);

  return {
    isOpen,
    toggleFilters,
    closeFilters,
  };
};