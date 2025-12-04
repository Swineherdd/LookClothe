import React from 'react';
import { X, Upload, ChevronDown, Sparkles } from 'lucide-react';
import styles from './add-clothing-modal.module.scss';

interface AddClothingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddClothingModal: React.FC<AddClothingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена');
    onClose();
  };

  const colors = ['Белый', 'Чёрный', 'Серый', 'Красный', 'Синий', 'Зелёный', 'Жёлтый', 'Оранжевый', 'Розовый', 'Фиолетовый', 'Коричневый', 'Бежевый'];
  const seasons = ['Весна', 'Лето', 'Осень', 'Зима'];

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2 className={styles.title}>Добавить вещь</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <X className={styles.closeIcon} aria-hidden="true" />
          </button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.section}>
            <div className={styles.uploadSection}>
              <button type="button" className={styles.uploadButton}>
                <Upload className={styles.uploadIcon} aria-hidden="true" />
                <div className={styles.uploadText}>
                  <p className={styles.uploadTitle}>Добавить фотографии</p>
                  <p className={styles.uploadSubtitle}>Нажмите, чтобы загрузить до 4-х фото</p>
                </div>
              </button>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Категория вещи *</h3>
            <div className={styles.selectContainer}>
              <select className={styles.select} defaultValue="">
                <option value="">Выберите категорию 1-го уровня...</option>
                <option value="Плечевая одежда">Плечевая одежда</option>
                <option value="Поясная одежда">Поясная одежда</option>
                <option value="Верхняя одежда">Верхняя одежда</option>
                <option value="Белье и купальники">Белье и купальники</option>
                <option value="Головные уборы">Головные уборы</option>
                <option value="Обувь">Обувь</option>
                <option value="Аксессуары">Аксессуары</option>
                <option value="Чулочно-носочные изделия">Чулочно-носочные изделия</option>
              </select>
              <ChevronDown className={styles.selectIcon} aria-hidden="true" />
            </div>
          </div>

          <div className={styles.section}>
            <button type="button" className={styles.digitizeButton} disabled>
              Оцифровать
              <Sparkles className={styles.digitizeIcon} aria-hidden="true" />
            </button>
            <p className={styles.digitizeHint}>
              Вам доступно <span className={styles.digitizeCount}>10</span> генераций
            </p>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.fields}>
            <div className={styles.field}>
              <label className={styles.label}>Основные цвета *</label>
              <div className={styles.colors}>
                {colors.map(color => (
                  <button type="button" key={color} className={styles.colorButton}>
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Сезон *</label>
              <div className={styles.seasons}>
                {seasons.map(season => (
                  <button type="button" key={season} className={styles.seasonButton}>
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
                placeholder="Добавьте любые заметки о вещи"
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Место хранения *</label>
              <div className={styles.selectContainer}>
                <button type="button" className={styles.storageButton}>
                  <span className={styles.storagePlaceholder}>Выберите или добавьте место хранения</span>
                  <ChevronDown className={styles.selectIcon} aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Ссылка на магазин</label>
              <input 
                type="url" 
                className={styles.input} 
                placeholder="https://example.com/item"
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Бренд</label>
              <input 
                type="text" 
                className={styles.input} 
                placeholder="Например: Zara, H&M"
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Цена</label>
              <input 
                type="text" 
                className={styles.input} 
                placeholder="Например: 2500 ₽"
              />
            </div>
          </div>

          <div className={styles.actions}>
            <button type="button" className={styles.cancelButton} onClick={onClose}>
              Отмена
            </button>
            <button type="submit" className={styles.submitButton}>
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};