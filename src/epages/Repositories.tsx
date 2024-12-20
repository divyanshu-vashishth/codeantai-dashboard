import { useState } from 'react';
import { Search, RefreshCw, Plus } from 'react-feather';
import './Repositories.css';

interface Repository {
  name: string;
  language: string;
  size: number;
  visibility: 'Public' | 'Private';
  updatedAt: string;
}

export const Repositories = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const repositories: Repository[] = [
    {
      name: 'design-system',
      language: 'React',
      size: 7320,
      visibility: 'Public',
      updatedAt: '1 day ago'
    },
    {
      name: 'codeant-ci-app',
      language: 'Javascript',
      size: 5871,
      visibility: 'Private',
      updatedAt: '2 days ago'
    },
    // ... add other repositories
  ];

  const filteredRepos = repositories.filter(repo => 
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="repositories-page">
      <div className="repositories-header">
        <div className="header-top">
          <h1>Repositories</h1>
          <span className="repo-count">{repositories.length} total repositories</span>
        </div>
        
        <div className="header-actions">
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search Repositories"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <button className="refresh-button">
            <RefreshCw size={16} />
            <span>Refresh All</span>
          </button>
          
          <button className="add-button">
            <Plus size={16} />
            <span>Add Repository</span>
          </button>
        </div>
      </div>

      <div className="repositories-list">
        {filteredRepos.map((repo, index) => (
          <div key={repo.name} className="repository-item">
            <div className="repo-main">
              <h3>{repo.name}</h3>
              <span className={`visibility-badge ${repo.visibility.toLowerCase()}`}>
                {repo.visibility}
              </span>
            </div>
            
            <div className="repo-details">
              <span className="language">
                <span className={`language-dot ${repo.language.toLowerCase()}`} />
                {repo.language}
              </span>
              <span className="size">{repo.size} KB</span>
              <span className="updated">Updated {repo.updatedAt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

