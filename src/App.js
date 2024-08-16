import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import AdminPage from './pages/Admin/AdminPage';
import VendorPage from './pages/Vendor/VendorPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/vendor" element={<VendorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
