import React, { useEffect } from 'react';
import Navbar from '../../shared/components/Navbar';
import Footer from '../../shared/components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import Architecture from './components/Architecture';

/**
 * AIFacePredictionPage - หน้าหลักแสดงรายละเอียดโปรเจกต์ AI Face Prediction
 * แบ่งโครงสร้างออกเป็น Components ย่อย: Hero, Features, และ Architecture
 */
export default function AIFacePredictionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app-wrapper min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      <Navbar />

      <main className="main-content flex-grow">
        <Hero />
        <Features />
        <Architecture />
      </main>

      <Footer />
    </div>   
  );
}