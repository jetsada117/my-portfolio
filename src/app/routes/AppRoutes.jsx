import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/Home/HomePage';

/**
 * AppRoutes Component
 * จัดการเส้นทางหน้าเว็บทั้งหมดของพอร์ตโฟลิโอ
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
