import React from 'react';
 import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../../pages/Home/HomePage';
import AIFacePredictionPage from '../../pages/ai-face-prediction/AIFacePredictionPage';

/**
 * AppRoutes Component
 * จัดการเส้นทางหน้าเว็บทั้งหมดของพอร์ตโฟลิโอ
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/ai-face-prediction" element={<AIFacePredictionPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
} 
    

