import React from 'react';
import { RepositoryList } from "../components/RepositoryList";
import { MobileNav } from "../components/layout/MobileNav";
import { Sidebar } from "../components/layout/Sidebar";
import styles from './RepositoriesPage.module.css';
import { RefreshCcwDotIcon } from 'lucide-react';

export default function RepositoriesPage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.sidebarContainer}>
        <Sidebar />
      </div>
      <div className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <MobileNav />
            <div className={styles.headerTitle}>
              <h1>Repositories</h1>
              <div className={styles.headerBadge}>
                33 total repositories
              </div>
            </div>
          </div>
          <div className={styles.headerActions}>
            <button className={styles.refreshButton}>
              <RefreshCcwDotIcon size={24} />
              <span className={styles.srOnly}>Refresh All</span>
            </button>
            <button className={styles.addButton}>
              <span className={styles.addIcon}>+</span>
              Add Repository
            </button>
          </div>
        </header>
        <main className={styles.main}>
          <div className={styles.searchContainer}>
            <input
              type="search"
              placeholder="Search Repositories"
              className={styles.searchInput}
            />
          </div>
          <RepositoryList />
        </main>
      </div>
    </div>
  );
}

