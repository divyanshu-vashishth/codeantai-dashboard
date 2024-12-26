import './PageLayout.css';

interface PageLayoutProps {
  title: string;
  children?: React.ReactNode;
}

export const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">{title}</h1>
      </div>
      <div className="page-content">
        {children}
      </div>
    </div>
  );
}; 