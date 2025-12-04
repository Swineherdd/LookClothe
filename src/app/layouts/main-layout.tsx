import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../../widgets/header/ui/header';
import { useMode, AppMode } from '../providers/mode-provider';
import styles from './main-layout.module.scss';
import { Footer } from '../../widgets/footer/index';

export const MainLayout: React.FC = () => {
  const { mode } = useMode();
  const location = useLocation();
  const showShoppingContent = mode === AppMode.SHOPPING || 
    (mode === AppMode.STYLE && location.pathname === '/');
  
  const showStyleContent = mode === AppMode.STYLE && location.pathname !== '/';

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        {showShoppingContent && (
          <div className={styles.content}>
            <Outlet /> 
          </div>
        )}
        
        {showStyleContent && (
          <div className={styles.styleContent}>
            <Outlet />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};