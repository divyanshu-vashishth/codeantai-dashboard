import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import styles from './MobileNav.module.css';

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("UtkarshDhairyaPatwar");

  return (
    <div className={styles.container}>
      <button 
        className={styles.menuButton}
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button>

      {isOpen && (
        <>
          <div className={styles.drawer}>
            <div className={styles.header}>
              <img src={logo} alt="CodeAnt AI" />
              <button 
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </div>
            <div className={styles.userSelect}>
              <select
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              >
                <option value={username}>{username}</option>
              </select>
            </div>
            <nav className={styles.nav}>
              {/* Navigation items */}
            </nav>
          </div>
          <div 
            className={styles.overlay}
            onClick={() => setIsOpen(false)}
          />
        </>
      )}
    </div>
  );
}

