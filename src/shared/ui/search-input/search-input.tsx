import React, { useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import styles from './search-input.module.scss';

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  className?: string;
  autoFocus?: boolean;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Поиск...',
  value,
  onChange,
  onClear,
  className = '',
  autoFocus = false
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleClear = () => {
    onChange('');
    if (onClear) onClear();
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [autoFocus]);

  return (
    <div className={`${styles.container} ${className}`}>
      <Search className={styles.icon} aria-hidden="true" />
      <input
        ref={inputRef}
        type="search"
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label={placeholder}
        enterKeyHint="search"
        inputMode="search"
      />
      {value && (
        <button
          type="button"
          className={styles.clearButton}
          onClick={handleClear}
          aria-label="Очистить поиск"
        >
          <X className={styles.clearIcon} aria-hidden="true" />
        </button>
      )}
    </div>
  );
};