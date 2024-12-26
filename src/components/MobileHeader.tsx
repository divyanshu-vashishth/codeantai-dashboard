import { useState } from 'react';
import { Menu, X, ChevronDown, Home, Code, Cloud, HelpCircle, Settings, PhoneCall, LogOut } from 'react-feather';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import './MobileHeader.css';

interface MobileHeaderProps {
  setIsAuthenticated: (value: boolean) => void;
}

export const MobileHeader = ({ setIsAuthenticated }: MobileHeaderProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSheet = () => {
    setIsSheetOpen(!isSheetOpen);
    setIsDropdownOpen(false);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/sign-in');
  };

  const navigation = [
    { path: '/repositories', label: 'Repositories', icon: Home },
    { path: '/code-review', label: 'AI Code Review', icon: Code },
    { path: '/security', label: 'Cloud Security', icon: Cloud },
    { path: '/how-to-use', label: 'How to Use', icon: HelpCircle },
    { path: '/settings', label: 'Settings', icon: Settings },
    { path: '/support', label: 'Support', icon: PhoneCall },
    { label: 'Logout', icon: LogOut, onClick: handleLogout },
  ];

  return (
    <>
      <header className="mobile-header">
        <Link to="/repositories" className="mobile-logo">
          <img src={Logo} alt="CodeAnt AI" />
          <span>CodeAnt AI</span>
        </Link>
        <button onClick={toggleSheet} className="mobile-menu-trigger">
          {isSheetOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {isSheetOpen && (
        <div className="mobile-sheet">
          <div className="sheet-content">
            <div className="user-section">
              <button 
                className="user-dropdown"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>UtkarshDhairyaPanwar</span>
                <ChevronDown size={16} />
              </button>
              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/profile">Profile</Link>
                  <Link to="/settings">Settings</Link>
                  <Link to="/support">Support</Link>
                </div>
              )}
            </div>
            
            <nav className="sheet-nav">
              {navigation.map((item) => (
                item.onClick ? (
                  <button key={item.label} onClick={item.onClick} className="nav-item">
                    <item.icon size={20} className="nav-icon" />
                    <span>{item.label}</span>
                  </button>
                ) : (
                  <Link key={item.path} to={item.path} className="nav-item">
                    <item.icon size={20} className="nav-icon" />
                    <span>{item.label}</span>
                  </Link>
                )
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};