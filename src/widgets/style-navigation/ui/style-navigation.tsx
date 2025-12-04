import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './style-navigation.module.scss';

const navItems = [
  { path: '/style', label: 'ГЛАВНАЯ', exact: true },
  { path: '/style/wardrobe', label: 'МОИ ВЕЩИ' },
  { path: '/style/fitting', label: 'ПРИМЕРКА' },
  { path: '/style/looks', label: 'ОБРАЗЫ' },
];

export const StyleNavigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className={styles.navigation}>
      {navItems.map((item) => {
        const isActive = item.exact 
          ? location.pathname === item.path
          : location.pathname.startsWith(item.path);

        return (
          <NavLink
            key={item.path}
            to={item.path}
            className={styles.navButton}
            end={item.exact}
          >
            <span className={`${styles.navText} ${isActive ? styles.active : ''}`}>
              {item.label}
            </span>
          </NavLink>
        );
      })}
    </nav>
  );
};