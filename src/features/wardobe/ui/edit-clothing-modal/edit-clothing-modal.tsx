import React, { useState, useEffect } from 'react';
import { IClothing } from '../../../../entities/clothing/model/types/clothing.interface';
import { 
  CLOTHING_COLORS, 
  CLOTHING_SEASONS, 
  CLOTHING_CATEGORIES,
  UPPER_CLOTHING_SUBCATEGORIES 
} from '../../../../entities/clothing/model/constants/clothing.constants';
import styles from './edit-clothing-modal.module.scss';

interface EditClothingModalProps {
  clothing: IClothing | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (clothing: IClothing) => void;
  onDelete: (id: string) => void;
}

export const EditClothingModal: React.FC<EditClothingModalProps> = ({
  clothing,
  isOpen,
  onClose,
  onSave,
  onDelete,
}) => {
  const [formData, setFormData] = useState<IClothing | null>(clothing);

  useEffect(() => {
    setFormData(clothing);
  }, [clothing]);

  if (!isOpen || !formData) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData) {
      onSave(formData);
    }
  };

  const handleDelete = () => {
    if (formData) {
      onDelete(formData.id);
    }
  };

  const handleColorToggle = (color: string) => {
    if (!formData) return;
    const newColors = formData.colors.includes(color)
      ? formData.colors.filter(c => c !== color)
      : [...formData.colors, color];
    setFormData({ ...formData, colors: newColors });
  };

  const handleSeasonToggle = (season: string) => {
    if (!formData) return;
    const newSeasons = formData.seasons.includes(season)
      ? formData.seasons.filter(s => s !== season)
      : [...formData.seasons, season];
    setFormData({ ...formData, seasons: newSeasons });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>Редактировать вещь</h2>
          <button 
            className={styles.closeButton} 
            onClick={onClose}
            aria-label="Закрыть модальное окно"
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
              className={styles.closeIcon}
              aria-hidden="true"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.section}>
            <div className={styles.imageSection}>
              <img src={formData.images[0]} alt={formData.title} className={styles.image} />
              <button type="button" className={styles.regenerateButton}>
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
                  className={styles.regenerateIcon}
                  aria-hidden="true"
                >
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
                  <path d="M20 2v4"></path>
                  <path d="M22 4h-4"></path>
                  <circle cx="4" cy="20" r="2"></circle>
                </svg>
                Перегенерировать
              </button>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Категория вещи *</h3>
            <div className={styles.selectContainer}>
              <select 
                className={styles.select} 
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                <option value="">Выберите категорию 1-го уровня...</option>
                {CLOTHING_CATEGORIES.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
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
                className={styles.selectIcon}
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </div>
            <div className={styles.selectContainer}>
              <select 
                className={styles.select} 
                value={formData.subCategory || ''}
                onChange={(e) => setFormData({ ...formData, subCategory: e.target.value })}
              >
                <option value="">Выберите категорию 2-го уровня...</option>
                {UPPER_CLOTHING_SUBCATEGORIES.map(subCategory => (
                  <option key={subCategory} value={subCategory}>{subCategory}</option>
                ))}
              </select>
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
                className={styles.selectIcon}
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.fields}>
            <div className={styles.field}>
              <label className={styles.label}>Основные цвета *</label>
              <div className={styles.colors}>
                {CLOTHING_COLORS.map(color => (
                  <button 
                    type="button" 
                    key={color} 
                    className={`${styles.colorButton} ${
                      formData.colors.includes(color) ? styles.selected : ''
                    }`}
                    onClick={() => handleColorToggle(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Сезон *</label>
              <div className={styles.seasons}>
                {CLOTHING_SEASONS.map(season => (
                  <button 
                    type="button" 
                    key={season} 
                    className={`${styles.seasonButton} ${
                      formData.seasons.includes(season) ? styles.selected : ''
                    }`}
                    onClick={() => handleSeasonToggle(season)}
                  >
                    {season}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Заметки</label>
              <textarea 
                className={styles.textarea} 
                rows={3}
                value={formData.notes || ''}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Добавьте любые заметки о вещи"
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Место хранения *</label>
              <div className={styles.selectContainer}>
                <button type="button" className={styles.storageButton}>
                  <span className={styles.storageText}>{formData.storageLocation}</span>
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
                    className={styles.selectIcon}
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Ссылка на магазин</label>
              <input 
                type="url" 
                className={styles.input} 
                value={formData.shopLink || ''}
                onChange={(e) => setFormData({ ...formData, shopLink: e.target.value })}
                placeholder="https://example.com/item"
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Бренд</label>
              <input 
                type="text" 
                className={styles.input} 
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                placeholder="Например: Zara, H&M"
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Цена</label>
              <input 
                type="text" 
                className={styles.input} 
                value={formData.price || ''}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="Например: 2500 ₽"
              />
            </div>
          </div>

          <div className={styles.actions}>
            <button type="button" className={styles.deleteButton} onClick={handleDelete}>
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
                className={styles.deleteIcon}
                aria-hidden="true"
              >
                <path d="M10 11v6"></path>
                <path d="M14 11v6"></path>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                <path d="M3 6h18"></path>
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
              Удалить вещь
            </button>
            <div className={styles.formActions}>
              <button type="button" className={styles.cancelButton} onClick={onClose}>
                Отмена
              </button>
              <button type="submit" className={styles.submitButton}>
                Сохранить
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};