import React, { useState, useEffect } from 'react';
import { useFittingRoom } from '../../model/context/FittingRoomContext';
import styles from './fitting-room-cart.module.scss';
import { motion, AnimatePresence } from 'framer-motion'; // используем framer-motion для анимаций

interface FittingRoomCartProps {
  onClick?: () => void;
}

export const FittingRoomCart: React.FC<FittingRoomCartProps> = ({ onClick }) => {
  const { state } = useFittingRoom();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (state.totalCount > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [state.totalCount]);

  if (state.totalCount === 0) {
    return null;
  }

  return (
    <motion.button
      className={styles.cartButton}
      onClick={onClick}
      title="Перейти в примерочную"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={styles.iconContainer}>
        <svg 
          className={styles.icon} 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M3 3 L3 21"></path>
          <path d="M8 3 Q 6 6, 8 9 Q 10 12, 8 15 Q 6 18, 8 21"></path>
          <path d="M13 3 Q 15 6, 13 9 Q 11 12, 13 15 Q 15 18, 13 21"></path>
          <path d="M21 3 L21 21"></path>
        </svg>
        
        <AnimatePresence>
          <motion.div
            key={state.totalCount}
            className={styles.countBadge}
            initial={{ scale: 0, rotate: -180 }}
            animate={{ 
              scale: isAnimating ? [1, 1.3, 1] : 1, 
              rotate: 0 
            }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            {state.totalCount}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.button>
  );
};