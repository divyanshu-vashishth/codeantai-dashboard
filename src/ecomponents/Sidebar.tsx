import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu } from 'react-feather';
import './Sidebar.css';
import { Home, Code, Cloud, HelpCircle, Settings, PhoneCall , LogOut } from 'react-feather';

import Logo from '../assets/logo.svg';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navigation = [
    { path: '/repositories', icon: Home, label: 'Repositories', isActive: true },
    { path: '/code-review', icon: Code, label: 'AI Code Review' },
    { path: '/security', icon: Cloud, label: 'Cloud Security' },
    { path: '/how-to-use', icon: HelpCircle, label: 'How to Use' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  const bottomNav = [
    { path: '/support', icon: PhoneCall, label: 'Support' },
    { path: '/logout', icon: LogOut, label: 'Logout' },
  ];

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <img src={Logo} alt="CodeAnt AI" />
            <span>CodeAnt AI</span>
          </div>
          <button className="user-dropdown">
            <span>UtkarshDhairyaPanwar</span>
            <ChevronDown size={16} />
          </button>
        </div>

        <nav className="sidebar-nav">
          {navigation.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              {/* <img src={item.icon} alt="" className="nav-icon" /> */}
              <item.icon className="nav-icon" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <nav className="sidebar-nav bottom">
          {bottomNav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="nav-item"
            >
              {/* <img src={item.icon} alt="" className="nav-icon" /> */}
              <item.icon className="nav-icon" />
              <span>{item.label}</span>
            </Link>
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

