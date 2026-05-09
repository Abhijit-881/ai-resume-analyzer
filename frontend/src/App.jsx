import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import './index.css'; 

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="logo">JobFit Analyzer</div>
          <div className="nav-links">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </nav>
        
        <main className="main-content">
          <Routes>
            <Route path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={
              <div className="home-hero">
                <h1>Welcome to JobFit Analyzer</h1>
                <p>Find your perfect career fit using AI.</p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
