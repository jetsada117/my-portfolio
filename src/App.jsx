import React from 'react';
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
 * รวมเลย์เอาต์ทุกส่วนของพอร์ตโฟลิโอเข้าด้วยกัน (มีเฉพาะโหมดสว่าง)
 */
function App() {
  return (
    <div className="app-wrapper">
      {/* ส่วนหัวและเมนูนำทาง */}
      <Navbar />
      
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
