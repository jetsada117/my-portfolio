import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Navbar Component (แถบเมนูนำทาง)
 * ใช้ Tailwind CSS ในการจัดสไตล์
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // ตรวจจับการเลื่อนหน้าจอเพื่อเพิ่มเงาและเปลี่ยนสีพื้นหลัง Navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[1000] flex items-center transition-all duration-300 ${
      isScrolled 
        ? 'h-20 bg-slate-50/85 border-b border-slate-200/80 backdrop-blur-md shadow-sm' 
        : 'h-[70px] bg-transparent border-b border-transparent'
    }`}>
      <div className="flex justify-between items-center w-full max-w-[1200px] mx-auto px-6 md:px-4">
        {/* โลโก้ */}
        <a 
          href={isHomePage ? "#hero" : "/"} 
          className="font-mono font-bold text-[22px] text-slate-900 flex items-center tracking-tighter" 
          onClick={closeMenu}
        >
          <span className="text-blue-600 font-extrabold">&lt;</span>
          Johannes-dev
          <span className="text-blue-600 font-extrabold"> /&gt;</span>
        </a>

        {/* เมนูหลักสำหรับ Desktop */}
        <div className="hidden md:flex items-center gap-[30px]">
          <a href={isHomePage ? "#about" : "/#about"} className="text-slate-600 hover:text-slate-900 text-[15px] font-medium relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full">เกี่ยวกับฉัน</a>
          <a href={isHomePage ? "#experience-projects" : "/#experience-projects"} className="text-slate-600 hover:text-slate-900 text-[15px] font-medium relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full">ผลงาน & ประสบการณ์</a>
          <a href={isHomePage ? "#skills" : "/#skills"} className="text-slate-600 hover:text-slate-900 text-[15px] font-medium relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full">ทักษะ</a>
          <a href={isHomePage ? "#contact" : "/#contact"} className="text-slate-600 hover:text-slate-900 text-[15px] font-medium relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-200 hover:after:w-full">ติดต่อ</a>
        </div>

        {/* เมนูขวาสำหรับ Mobile */}
        <div className="flex md:hidden items-center gap-3">
          {/* ปุ่ม Hamburger */}
          <button 
            className="bg-transparent border-none cursor-pointer w-[30px] h-6 relative flex flex-col justify-between" 
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className={`block h-[3px] w-full bg-slate-900 rounded-full transition-all duration-300 ${isOpen ? 'transform translateY-[10.5px] rotate-45' : ''}`}></span>
            <span className={`block h-[3px] w-full bg-slate-900 rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-[3px] w-full bg-slate-900 rounded-full transition-all duration-300 ${isOpen ? 'transform translateY-[-10.5px] -rotate-45' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* เมนูแบบ Dropdown สำหรับ Mobile */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-[20px_24px] flex flex-col gap-4 shadow-md transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-[10px] pointer-events-none'
      }`}>
        <a href={isHomePage ? "#about" : "/#about"} className="text-slate-600 hover:text-blue-600 text-base font-medium py-2 border-b border-slate-100 last:border-b-0 hover:pl-1.5 transition-all duration-200" onClick={closeMenu}>เกี่ยวกับฉัน</a>
        <a href={isHomePage ? "#experience-projects" : "/#experience-projects"} className="text-slate-600 hover:text-blue-600 text-base font-medium py-2 border-b border-slate-100 last:border-b-0 hover:pl-1.5 transition-all duration-200" onClick={closeMenu}>ผลงาน & ประสบการณ์</a>
        <a href={isHomePage ? "#skills" : "/#skills"} className="text-slate-600 hover:text-blue-600 text-base font-medium py-2 border-b border-slate-100 last:border-b-0 hover:pl-1.5 transition-all duration-200" onClick={closeMenu}>ทักษะ</a>
        <a href={isHomePage ? "#contact" : "/#contact"} className="text-slate-600 hover:text-blue-600 text-base font-medium py-2 border-b border-slate-100 last:border-b-0 hover:pl-1.5 transition-all duration-200" onClick={closeMenu}>ติดต่อ</a>
      </div>
    </nav>
  );
}
