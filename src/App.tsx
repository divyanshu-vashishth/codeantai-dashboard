import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import RepositoriesPage from './pages/RepositoriesPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/repositories" element={<RepositoriesPage />} />
      </Routes>
    </Router>
  );
}

export default App;

