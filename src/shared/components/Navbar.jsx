import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Navbar Component (แถบเมนูนำทาง)
 * รองรับการย่อหน้าจอ (Responsive) และ Smooth Scroll
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
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* โลโก้ */}
        <a href={isHomePage ? "#hero" : "/"} className="logo" onClick={closeMenu}>
          <span className="logo-accent">&lt;</span>
          Johannes-dev
          <span className="logo-accent"> /&gt;</span>
        </a>

        {/* เมนูหลักสำหรับ Desktop */}
        <div className="nav-menu-desktop">
          <a href={isHomePage ? "#about" : "/#about"} className="nav-link">เกี่ยวกับฉัน</a>
          <a href={isHomePage ? "#experience-projects" : "/#experience-projects"} className="nav-link">ผลงาน & ประสบการณ์</a>
          <a href={isHomePage ? "#skills" : "/#skills"} className="nav-link">ทักษะ</a>
          <a href={isHomePage ? "#contact" : "/#contact"} className="nav-link">ติดต่อ</a>
        </div>

        {/* เมนูขวาสำหรับ Mobile */}
        <div className="nav-menu-mobile-actions">
          {/* ปุ่ม Hamburger */}
          <button 
            className={`hamburger-btn ${isOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* เมนูแบบ Dropdown สำหรับ Mobile */}
      <div className={`nav-menu-mobile ${isOpen ? 'show' : ''}`}>
        <a href={isHomePage ? "#about" : "/#about"} className="nav-link-mobile" onClick={closeMenu}>เกี่ยวกับฉัน</a>
        <a href={isHomePage ? "#experience-projects" : "/#experience-projects"} className="nav-link-mobile" onClick={closeMenu}>ผลงาน & ประสบการณ์</a>
        <a href={isHomePage ? "#skills" : "/#skills"} className="nav-link-mobile" onClick={closeMenu}>ทักษะ</a>
        <a href={isHomePage ? "#contact" : "/#contact"} className="nav-link-mobile" onClick={closeMenu}>ติดต่อ</a>
      </div>
    </nav>
  );
}

