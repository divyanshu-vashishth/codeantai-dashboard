import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import  Repositories  from './pages/Repositories';
import SignInPage from './pages/SignInPage';

import './App.css';
import { useMobile } from './hooks/useMobile';
import { MobileHeader } from './components/MobileHeader';

export const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isMobile = useMobile();

  return (
    <Router>
      <Routes>
        <Route 
          path="/sign-in" 
          element={
            !isAuthenticated ? (
              <SignInPage setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <Navigate to="/repositories" replace />
            )
          } 
        />
        
        <Route
          path="/*"
          element={
            isAuthenticated ? (
              <div className="app">
                {isMobile && <MobileHeader setIsAuthenticated={setIsAuthenticated} />}
                {!isMobile && <Sidebar setIsAuthenticated={setIsAuthenticated} />}
                <main className="main-content">
                  <Routes>
                    <Route path="/repositories" element={<Repositories />} />
                  </Routes>
                </main>
              </div>
            ) : (
              <Navigate to="/sign-in" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

