import React from 'react';
import Navbar from '../../shared/components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ExperienceAndProjects from '../../features/components/ExperienceAndProjects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from '../../shared/components/Footer';

/**
 * HomePage Component
 * หน้าหลักที่รวบรวมส่วนต่างๆ ของพอร์ตโฟลิโอเข้าด้วยกัน
 */
export default function HomePage() {
  return (
    <div className="app-wrapper">
      <Navbar />
      
      <main className="main-content">
        <Hero />
        <About />
        <ExperienceAndProjects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
