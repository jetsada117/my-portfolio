import React, { useState, useEffect } from 'react';

/**
 * Navbar Component (แถบเมนูนำทาง)
 * รองรับการย่อหน้าจอ (Responsive) และ Smooth Scroll
 */
export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
        <a href="#hero" className="logo" onClick={closeMenu}>
          <span className="logo-accent">&lt;</span>
          Johannes-dev
          <span className="logo-accent"> /&gt;</span>
        </a>

        {/* เมนูหลักสำหรับ Desktop */}
        <div className="nav-menu-desktop">
          <a href="#about" className="nav-link">เกี่ยวกับฉัน</a>
          <a href="#experience-projects" className="nav-link">ผลงาน & ประสบการณ์</a>
          <a href="#skills" className="nav-link">ทักษะ</a>
          <a href="#contact" className="nav-link">ติดต่อ</a>
          
          {/* ปุ่มสลับโหมด Dark/Light */}
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn" 
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'เปลี่ยนเป็นโหมดสว่าง' : 'เปลี่ยนเป็นโหมดมืด'}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>

        {/* เมนูขวาสำหรับ Mobile (ปุ่ม Toggle + Theme Toggle) */}
        <div className="nav-menu-mobile-actions">
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn-mobile" 
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          
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
        <a href="#about" className="nav-link-mobile" onClick={closeMenu}>เกี่ยวกับฉัน</a>
        <a href="#experience-projects" className="nav-link-mobile" onClick={closeMenu}>ผลงาน & ประสบการณ์</a>
        <a href="#skills" className="nav-link-mobile" onClick={closeMenu}>ทักษะ</a>
        <a href="#contact" className="nav-link-mobile" onClick={closeMenu}>ติดต่อ</a>
      </div>
    </nav>
  );
}
