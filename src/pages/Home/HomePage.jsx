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
 * หน้าหลักที่ปรับปรุงมิติแสงและเงาด้วย ambient glow background
 */
export default function HomePage() {
  return (
    <div className="app-wrapper min-h-screen bg-slate-50/50 relative overflow-hidden">
      {/* Premium Ambient Lights (มิติแสงและเงาพื้นหลังยอดนิยม) */}
      <div className="absolute top-[5%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-blue-300/15 blur-[130px] pointer-events-none"></div>
      <div className="absolute top-[35%] right-[-15%] w-[40vw] h-[40vw] rounded-full bg-indigo-300/15 blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-purple-300/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-[5%] w-[30vw] h-[30vw] rounded-full bg-blue-300/10 blur-[100px] pointer-events-none"></div>

      <Navbar />
      
      <main className="main-content relative z-10">
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
