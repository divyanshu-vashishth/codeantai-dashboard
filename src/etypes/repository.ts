export interface Repository {
    name: string;
    language: string;
    size: number;
    visibility: 'Public' | 'Private';
    updatedAt: string;
  }
  
  export interface SidebarItem {
    icon: string;
    label: string;
    path: string;
  }
  
  export interface AuthOption {
    provider: string;
    icon: string;
    label: string;
  }
  
  