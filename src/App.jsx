import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import SubscribePage from './pages/SubscribePage';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
