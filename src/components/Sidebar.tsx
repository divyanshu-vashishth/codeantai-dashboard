import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'react-feather';
import './Sidebar.css';
import HomeIcon from '../assets/home.svg';
import CodeReviewIcon from '../assets/ai-code-review.svg';
import CloudIcon from '../assets/cloud.svg';
import BookIcon from '../assets/book.svg';
import GearIcon from '../assets/gear.svg';
import PhoneIcon from '../assets/phone.svg';
import SignOutIcon from '../assets/sign-out.svg';
import Logo from '../assets/logo.svg';
import { Menu } from 'lucide-react';

interface SidebarProps {
  setIsAuthenticated: (value: boolean) => void;
}

export const Sidebar = ({ setIsAuthenticated }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  //  random function for handling auth state
  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/sign-in');
  };

  const navigation = [
    { path: '/repositories', icon: HomeIcon, label: 'Repositories' },
    { path: '/code-review', icon: CodeReviewIcon, label: 'AI Code Review' },
    { path: '/security', icon: CloudIcon, label: 'Cloud Security' },
    { path: '/how-to-use', icon: BookIcon, label: 'How to Use' },
    { path: '/settings', icon: GearIcon, label: 'Settings' },
  ];

  const bottomNav = [
    { path: '/support', icon: PhoneIcon, label: 'Support' },
    { label: 'Logout', icon: SignOutIcon, onClick: handleLogout },
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
                <a href="/support">Support</a>
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
              <img src={item.icon} alt={item.label} className="nav-icon" />
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
                <img src={item.icon} alt={item.label} className="nav-icon" />
                <span>{item.label}</span>
              </button>
            ) : (
              <Link
                key={item.path}
                to={item.path!}
                className="nav-item"
              >
                <img src={item.icon} alt={item.label} className="nav-icon" />
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

