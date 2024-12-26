import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import HomeIcon from '../assets/home.svg';
import CodeReviewIcon from '../assets/ai-code-review.svg';
import CloudIcon from '../assets/cloud.svg';
import BookIcon from '../assets/book.svg';
import GearIcon from '../assets/gear.svg';
import PhoneIcon from '../assets/phone.svg';
import SignOutIcon from '../assets/sign-out.svg';
import './MobileHeader.css';

interface MobileHeaderProps {
  setIsAuthenticated: (value: boolean) => void;
}

export const MobileHeader = ({ setIsAuthenticated }: MobileHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
      <header className="mobile-header">
        <Link to="/" className="mobile-logo">
          <img src={Logo} alt="CodeAnt AI" />
          <span>CodeAnt AI</span>
        </Link>
        <button className="mobile-menu-trigger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {isOpen && (
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
                  <a href="/profile">Profile</a>
                  <a href="/settings">Settings</a>
                  <a href="/support">Support</a>
                </div>
              )}
            </div>

            <nav className="sheet-nav">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  <img src={item.icon} alt={item.label} className="nav-icon" />
                  <span>{item.label}</span>
                </Link>
              ))}

              {bottomNav.map((item) => (
                item.onClick ? (
                  <button
                    key={item.label}
                    onClick={() => {
                      item.onClick();
                      setIsOpen(false);
                    }}
                    className="nav-item"
                  >
                    <img src={item.icon} alt={item.label} className="nav-icon" />
                    <span>{item.label}</span>
                  </button>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path!}
                    className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <img src={item.icon} alt={item.label} className="nav-icon" />
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