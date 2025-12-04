import React from 'react';
import styles from './footer.module.scss';

export const Footer: React.FC = () => {
  const platformLinks = [
    { label: 'Главная', href: '#' },
    { label: 'Мой шкаф', href: '#' },
    { label: 'Шопинг-гиды', href: '#' },
    { label: 'Примерочная', href: '#' },
    { label: 'Профиль', href: '#' },
    { label: 'Тарифы', href: '#' },
  ];

  const legalLinks = [
    { label: 'Пользовательское соглашение', href: '#' },
    { label: 'Политика конфиденциальности', href: '#' },
    { label: 'Оферта', href: '#' },
  ];

  const helpLinks = [
    { label: 'Обучающие материалы', href: '#' },
    { label: 'Часто задаваемые вопросы', href: '#' },
    { label: 'Поддержка', href: '#' },
    { label: 'Карта сайта', href: '#' },
  ];

  const aboutLinks = [
    { label: 'О платформе', href: '#' },
    { label: 'Блог', href: '#' },
    { label: 'Контакты', href: '#' },
  ];

  const socialLinks = [
    { 
      label: 'YouTube', 
      href: '#', 
      icon: (
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
          className={styles.socialIcon}
          aria-hidden="true"
        >
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
          <path d="m10 15 5-3-5-3z"></path>
        </svg>
      )
    },
    { 
      label: 'Telegram', 
      href: '#', 
      icon: (
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
          className={styles.socialIcon}
          aria-hidden="true"
        >
          <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
          <path d="m21.854 2.147-10.94 10.939"></path>
        </svg>
      )
    },
    { 
      label: 'VK', 
      href: '#', 
      icon: (
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
          className={styles.socialIcon}
          aria-hidden="true"
        >
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        </svg>
      )
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Платформа */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Платформа</h3>
            <ul className={styles.list}>
              {platformLinks.map((link) => (
                <li key={link.label} className={styles.listItem}>
                  <button className={styles.link}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Юридическая информация */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Юридическая информация</h3>
            <ul className={styles.list}>
              {legalLinks.map((link) => (
                <li key={link.label} className={styles.listItem}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Помощь */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Помощь</h3>
            <ul className={styles.list}>
              {helpLinks.map((link) => (
                <li key={link.label} className={styles.listItem}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* О нас */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>О нас</h3>
            <ul className={styles.list}>
              {aboutLinks.map((link) => (
                <li key={link.label} className={styles.listItem}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.bottom}>
          <div className={styles.bottomLeft}>
            <div className={styles.contact}>
              <p className={styles.contactLabel}>Обратная связь:</p>
              <a 
                href="mailto:info@lookformer.com" 
                className={styles.email}
              >
                info@lookformer.com
              </a>
            </div>
            <p className={styles.copyright}>
              © 2025 Lookformer. Все права защищены.
            </p>
          </div>

          <div className={styles.social}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className={styles.socialLink}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};