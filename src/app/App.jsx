import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './App.css';

/**
 * Root App Component
 * กำหนด Router และดึงเอาเส้นทางทั้งหมดมาใช้งาน
 */
function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
