import { Search, RotateCw, Plus, Database } from "lucide-react";
import "./Repositories.css";

interface Repository {
  name: string;
  language: string;
  size: number;
  visibility: "Public" | "Private";
  updatedAt: string;
}

export default function Repositories() {
  const repositories: Repository[] = [
    {
      name: "design-system",
      language: "React",
      size: 7320,
      visibility: "Public",
      updatedAt: "1 day ago",
    },
    {
      name: "codeant-ci-app",
      language: "Javascript",
      size: 5871,
      visibility: "Private",
      updatedAt: "2 days ago",
    },
    {
      name: "analytics-dashboard",
      language: "Python",
      size: 4521,
      visibility: "Private",
      updatedAt: "5 days ago",
    },
    {
      name: "mobile-app",
      language: "Swift",
      size: 3096,
      visibility: "Public",
      updatedAt: "3 days ago",
    },
    {
      name: "e-commerce-platform",
      language: "Java",
      size: 6210,
      visibility: "Private",
      updatedAt: "6 days ago",
    },
    {
      name: "blog-website",
      language: "HTML/CSS",
      size: 1876,
      visibility: "Private",
      updatedAt: "4 days ago",
    },
    {
      name: "social-network",
      language: "PHP",
      size: 5432,
      visibility: "Private",
      updatedAt: "7 days ago",
    },
  ];

  return (
    <div className="repositories-page">
      <div className="repositories-container">
        <div className="repositories-header">
          <div className="header-top">
            <div className="title-section">
              <h1>Repositories</h1>
              <span className="repo-count">33 total repositories</span>
            </div>
            
            <div className="button-group">
              <button className="refresh-button">
                <RotateCw size={18} />
                <span>Refresh All</span>
              </button>
              
              <button className="add-button">
                <Plus size={18} />
                <span>Add Repository</span>
              </button>
            </div>
          </div>
          
          <div className="header-actions">
            <div className="search-container">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search Repositories"
              />
            </div>
          </div>
        </div>

        <div className="repositories-list">
          {repositories.map((repo) => (
            <div key={repo.name} className="repository-item">
              <div className="repo-main">
                <h3>{repo.name}</h3>
                <span className="visibility-badge">{repo.visibility}</span>
              </div>

              <div className="repo-details">
                <span className="language">
                  {repo.language}
                  <span className="language-dot" />
                </span>
                <span className="size">
                  <Database size={14} />
                  {repo.size} KB
                </span>
                <span className="updated">Updated {repo.updatedAt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
