import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceAndProjects from './components/ExperienceAndProjects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

/**
 * App Component หลัก
 * ควบคุมสถานะธีม (Dark / Light) และรวมเลย์เอาต์ทุกส่วนเข้าด้วยกัน
 */
function App() {
  // เริ่มต้นด้วยโหมดมืด (Dark Mode) หรือดึงจากความชอบเดิมของผู้ใช้
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPrefersDark ? 'dark' : 'dark'; // เราแนะนำให้ค่าเริ่มต้นเป็นโหมดมืดเพื่อความพรีเมียม
  });

  // อัปเดต HTML class และ localStorage เมื่อสถานะธีมเปลี่ยนไป
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // ฟังก์ชันสลับโหมด
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-wrapper">
      {/* ส่วนหัวและเมนูนำทาง */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      {/* เนื้อหาหลักของพอร์ตโฟลิโอแบบแบ่งส่วน */}
      <main className="main-content">
        <Hero />
        <About />
        <ExperienceAndProjects />
        <Skills />
        <Contact />
      </main>

      {/* ส่วนท้ายหน้าเว็บ */}
      <Footer />
    </div>
  );
}

export default App;
