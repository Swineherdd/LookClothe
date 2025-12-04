import React from 'react';
import { HelpPopup } from '../help-popup/help-popup';
import { useHelpPopup } from '../pop-upModel/use-help-popup';
import styles from './help-button.module.scss';

export const HelpButton: React.FC = () => {
  const { isOpen, togglePopup, popupRef, buttonRef } = useHelpPopup();

  return (
    <div className={styles.helpButtonContainer}>
      <button
        ref={buttonRef}
        className={styles.helpButton}
        onClick={togglePopup}
        aria-expanded={isOpen}
        aria-label="Помощь и поддержка"
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
          className={styles.helpIcon}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
          <path d="M12 17h.01"></path>
        </svg>
      </button>

      <div ref={popupRef}>
        <HelpPopup isOpen={isOpen} />
      </div>
    </div>
  );
};