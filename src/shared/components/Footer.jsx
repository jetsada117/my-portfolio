import React from 'react';
import './Footer.css';

/**
 * Footer Component (ส่วนท้ายเว็บไซต์)
 * แสดงลิขสิทธิ์ ช่องทางด่วน และปุ่มย้อนขึ้นบนสุด
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="logo-accent">&lt;</span>
          Johannes-dev
          <span className="logo-accent"> /&gt;</span>
        </div>
        <p className="footer-copyright">
          © {currentYear} Jetsada Prombut. All rights reserved.
        </p>
        <p className="footer-credit">
          พัฒนาด้วยความรักโดยใช้ React & Vanilla CSS ⚡
        </p>
        <div className="footer-links">
          <a href="#hero" className="back-to-top-btn" title="เลื่อนกลับไปด้านบน">
            ย้อนกลับขึ้นไปข้างบนสุด ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
