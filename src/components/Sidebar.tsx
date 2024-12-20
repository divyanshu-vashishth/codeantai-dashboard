import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu } from 'react-feather';
import './Sidebar.css';
import { Home, Code, Cloud, HelpCircle, Settings, PhoneCall , LogOut } from 'react-feather';

import Logo from '../assets/logo.svg';

interface SidebarProps {
  setIsAuthenticated: (value: boolean) => void;
}

export const Sidebar = ({ setIsAuthenticated }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  //  rendom function for handling auth state
  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/sign-in');
  };

  const navigation = [
    { path: '/repositories', icon: Home, label: 'Repositories', isActive: true },
    { path: '/code-review', icon: Code, label: 'AI Code Review' },
    { path: '/security', icon: Cloud, label: 'Cloud Security' },
    { path: '/how-to-use', icon: HelpCircle, label: 'How to Use' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  const bottomNav = [
    { path: '/support', icon: PhoneCall, label: 'Support' },
    { label: 'Logout', icon: LogOut, onClick: handleLogout },
  ];

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <img src={Logo} alt="CodeAnt AI" />
            <span>CodeAnt AI</span>
          </div>
          <div className="dropdown-container">
            <button 
              className="user-dropdown"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>UtkarshDhairyaPanwar</span>
              <ChevronDown size={16} />
            </button>
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <a href="/profile">Profile</a>
                <a href="/settings">Settings</a>
                <a href="/logout">Logout</a>
              </div>
            )}
          </div>
        </div>

        <nav className="sidebar-nav">
          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              <item.icon className="nav-icon" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <nav className="sidebar-nav bottom">
          {bottomNav.map((item) => (
            item.onClick ? (
              <button
                key={item.label}
                onClick={item.onClick}
                className="nav-item"
              >
                <item.icon className="nav-icon" />
                <span>{item.label}</span>
              </button>
            ) : (
              <Link
                key={item.path}
                to={item.path!}
                className="nav-item"
              >
                <item.icon className="nav-icon" />
                <span>{item.label}</span>
              </Link>
            )
          ))}
        </nav>
      </div>
      
      <button 
        className="mobile-menu-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      {isOpen && (
        <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
};

