import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Login/RegisterPage';
import AdminPage from './pages/Admin/AdminPage';
import VendorPage from './pages/Vendor/VendorPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/vendor" element={<PrivateRoute element={<VendorPage />} />} />
      </Routes>
    </Router>
  );
}

export default App;
