import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Sidebar } from './ecomponents/Sidebar';
import { Repositories } from './epages/Repositories';
import SignInPage from './pages/SignInPage';

import './App.css';

export const App = () => {
  // This would normally come from your auth state management
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <Router>
      <Routes>
        <Route 
          path="/sign-in" 
          element={
            !isAuthenticated ? (
              <SignInPage />
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
                <Sidebar />
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

