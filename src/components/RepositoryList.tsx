import React from 'react';
import styles from './RepositoryList.module.css';

const repositories = [
  {
    name: "design-system",
    isPublic: true,
    language: "React",
    size: "7320 KB",
    updatedAt: "1 day ago",
  },
  {
    name: "codeant-ci-app",
    isPublic: false,
    language: "Javascript",
    size: "5871 KB",
    updatedAt: "2 days ago",
  },
  // Add more repositories as needed
];

export function RepositoryList() {
  return (
    <div className={styles.repositoryList}>
      {repositories.map((repo) => (
        <div key={repo.name} className={styles.repositoryCard}>
          <div className={styles.repositoryInfo}>
            <div className={styles.repositoryName}>
              <span className={styles.repositoryNameText}>{repo.name}</span>
              <span className={`badge ${repo.isPublic ? 'badge-secondary' : 'badge-outline'}`}>
                {repo.isPublic ? "Public" : "Private"}
              </span>
            </div>
            <div className={styles.repositoryMeta}>
              <span>{repo.language}</span>
              <span>•</span>
              <span>{repo.size}</span>
              <span>•</span>
              <span>Updated {repo.updatedAt}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

