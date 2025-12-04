import React from 'react';
import styles from './shopping-home-page.module.scss';

export const ShoppingHomePage: React.FC = () => {
  return (
    <div className={styles.page}>
      <h1>Добро пожаловать в магазин!</h1>
      <p>Здесь будет контент для шоппинга</p>
    </div>
  );
};