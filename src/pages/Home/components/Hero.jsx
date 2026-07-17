import React from 'react';
import heroImg from '../../../assets/developer_hero.jpg';
import './Hero.css';

/**
 * Hero Component (ส่วนต้อนรับ / แนะนำตัวหลัก)
 * แสดงชื่อ ตำแหน่ง คำอธิบาย และรูปภาพ 3D ที่สร้างขึ้น พร้อมปุ่ม Action
 */
export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid">
        {/* ข้อความฝั่งซ้าย */}
        <div className="hero-content">
          <div className="status-badge animate-fade-in">
            <span className="pulse-dot"></span>
            พร้อมร่วมงานในตำแหน่ง Full-stack Developer Intern
          </div>
          <h1 className="hero-title animate-slide-up">
            สวัสดีครับ, ผม <span className="highlight-text">เจษฎา พรหมบุตร</span>
          </h1>
          <h2 className="hero-subtitle animate-slide-up delay-100">
            Full-Stack Developer
          </h2>
          <p className="hero-description animate-slide-up delay-200">
            นักศึกษาชั้นปีสุดท้าย คณะวิทยาการสารสนเทศ มหาวิทยาลัยมหาสารคาม 
            ผู้มีความมุ่งมั่นและเชี่ยวชาญในการพัฒนาแอปพลิเคชันมือถือด้วย <strong className="text-highlight-dart">Flutter</strong> 
            และการเขียนระบบหลังบ้านประสิทธิภาพสูงด้วย <strong className="text-highlight-python">Python (FastAPI)</strong> และ <strong className="text-highlight-java">Java (Spring Boot)</strong>
          </p>
          <div className="hero-buttons animate-slide-up delay-300">
            <a href="#experience-projects" className="btn btn-primary">
              ดูผลงานของฉัน
              <span className="arrow">→</span>
            </a>
            <a href="#contact" className="btn btn-secondary">
              ติดต่อฉัน
            </a>
          </div>
        </div>

        {/* รูปภาพ 3D ฝั่งขวา */}
        <div className="hero-image-wrapper animate-fade-in-right">
          <div className="hero-image-card">
            <img src={heroImg} alt="Jetsada Prombut Hero Art" className="hero-image" />
            <div className="hero-image-overlay"></div>
            {/* กล่องข้อความสถิติ/ตกแต่งเพิ่มเติมเพื่อความสวยงาม */}
            <div className="floating-badge badge-gpa">
              <span className="badge-icon">🎓</span>
              <div>
                <h4>GPAX</h4>
                <p>3.85 / 4.00</p>
              </div>
            </div>
            <div className="floating-badge badge-exp">
              <span className="badge-icon">💻</span>
              <div>
                <h4>ความเชี่ยวชาญ</h4>
                <p>Flutter & FastAPI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
