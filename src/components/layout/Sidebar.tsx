import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code2, Shield, BookOpen, Settings, Headphones, LogOut, LayoutGrid } from 'lucide-react';
import styles from './Sidebar.module.css';
import logo from '../../assets/logo.svg'

const sidebarItems = [
  {
    title: "Repositories",
    icon: LayoutGrid,
    href: "/repositories",
  },
  {
    title: "AI Code Review",
    icon: Code2,
    href: "/code-review",
  },
  {
    title: "Cloud Security",
    icon: Shield,
    href: "/security",
  },
  {
    title: "How to Use",
    icon: BookOpen,
    href: "/guide",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

const bottomItems = [
  {
    title: "Support",
    icon: Headphones,
    href: "/support",
  },
  {
    title: "Logout",
    icon: LogOut,
    href: "/logout",
  },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoLink}>
          <img src={logo} alt="CodeAnt AI" className={styles.logoImage} />
          <span className={styles.logoText}>CodeAnt AI</span>
        </Link>
      </div>
      <nav className={styles.nav}>
        {sidebarItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`${styles.navItem} ${location.pathname === item.href ? styles.navItemActive : ''}`}
          >
            <item.icon className={styles.navItemIcon} />
            {item.title}
          </Link>
        ))}
      </nav>
      <div className={styles.bottomNav}>
        {bottomItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={styles.navItem}
          >
            <item.icon className={styles.navItemIcon} />
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

