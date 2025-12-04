import React, { useState } from 'react';
import { ClothingCard as IClothingCard } from '../../model/types/clothing.interface';
import { ClothingActions } from '../../../../features/wardobe';
import styles from './clothing-card.module.scss';

interface ClothingCardProps {
  clothing: IClothingCard;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onToggleFittingRoom: (id: string) => void;
}

export const ClothingCard: React.FC<ClothingCardProps> = ({
  clothing,
  onEdit,
  onDelete,
  onToggleFittingRoom,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);

  const handleEditClick = () => {
    onEdit(clothing.id);
    setIsMenuOpen(false);
  };

  const handleDeleteClick = () => {
    onDelete(clothing.id);
    setIsMenuOpen(false);
  };

  const handleFittingRoomClick = () => {
    onToggleFittingRoom(clothing.id);
  };

  // Fallback изображение
  const imageSrc = hasImageError 
    ? 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDMwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSI0MDAiIGZpbGw9IiNGN0VDRjIiLz48cGF0aCBkPSJNMTUwIDEyMEwxOTAgMTgwTDE1MCAyNDBMMTEwIDE4MEwxNTAgMTIwWiIgZmlsbD0iI0M4N0ZBQSIvPjwvc3ZnPg=='
    : clothing.images[0];

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {/* Placeholder пока загружается */}
        {!isImageLoaded && !hasImageError && (
          <div className={styles.imagePlaceholder} />
        )}
        
        <img 
          src={imageSrc}
          alt={clothing.title} 
          className={`${styles.image} ${isImageLoaded ? styles.loaded : ''}`}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsImageLoaded(true)}
          onError={() => {
            setIsImageLoaded(true);
            setHasImageError(true);
          }}
        />
        
        <div className={styles.imageOverlay}>
          <div className={styles.topActions}>
            <ClothingActions.Menu
              isOpen={isMenuOpen}
              onToggle={() => setIsMenuOpen(!isMenuOpen)}
              onEdit={handleEditClick}
              onDelete={handleDeleteClick}
            />
          </div>
          <button 
            className={`${styles.fittingButton} ${
              clothing.inFittingRoom ? styles.inFittingRoom : ''
            }`}
            onClick={handleFittingRoomClick}
          >
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
              className={styles.cartIcon}
              aria-hidden="true"
            >
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>
            {clothing.inFittingRoom ? 'В примерочной' : 'Примерить'}
          </button>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.brand}>{clothing.brand}</div>
        <h4 className={styles.title}>{clothing.title}</h4>
        <button 
          className={styles.editButton}
          onClick={handleEditClick}
        >
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
            className={styles.editIcon}
            aria-hidden="true"
          >
            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"></path>
          </svg>
          Изменить
        </button>
      </div>
    </div>
  );
};