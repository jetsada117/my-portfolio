import React, { useState } from 'react';

/**
 * ExperienceAndProjects Component (ส่วนแสดงโปรเจกต์วิชาการและผลงาน)
 * แสดงรายการโปรเจกต์ทั้งหมด มีปุ่มตัวกรอง (Filter) เพื่อแยกประเภทเทคโนโลยี (เช่น All, Flutter, Python/FastAPI, Web)
 */
export default function ExperienceAndProjects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'แอปพลิเคชัน AI ทำนายและค้นหาใบหน้า (โปรเจกต์จบ)',
      category: 'mobile-ai',
      tech: ['Flutter', 'Python', 'FastAPI', 'MySQL', 'AI Model'],
      description: 'แอปพลิเคชันมือถือที่พัฒนาด้วย Flutter โดยใช้โมเดล AI ในการทำนายลักษณะใบหน้า และมีฟังก์ชันให้ผู้ใช้พิมพ์ข้อความอธิบายความต้องการ (Semantic Search) เพื่อค้นหาใบหน้าที่ตรงกับลักษณะนั้นๆ ส่วนระบบหลังบ้าน (Backend) พัฒนาด้วย Python ผ่านเฟรมเวิร์ก FastAPI เชื่อมต่อฐานข้อมูล MySQL ได้อย่างรวดเร็วและยืดหยุ่น',
      icon: '🤖',
      featured: true
    },
    {
      id: 2,
      title: 'แอปพลิเคชันเดลิเวอรีแบบเรียลไทม์ (Delivery Application)',
      category: 'mobile',
      tech: ['Flutter', 'Firebase', 'Real-time Tracking'],
      description: 'แอปพลิเคชันมือถือสำหรับติดตามและจัดการส่งพัสดุแบบเรียลไทม์ พัฒนาด้วย Flutter ร่วมกับบริการ Firebase (Firestore & Cloud Messaging) ผู้ใช้สามารถใช้ส่งและรับพัสดุ พร้อมทั้งติดตามสถานะการขนส่งรวมถึงดูตำแหน่งพิกัดของพนักงานขับรถได้สดๆ บนหน้าจอตลอดเวลา',
      icon: '📦',
      featured: true
    },
    {
      id: 3,
      title: 'เว็บไซต์ร้านจำลองขายและเติมเกม (Game Shop Website)',
      category: 'web',
      tech: ['Angular', 'Bootstrap', 'Python', 'FastAPI'],
      description: 'แพลตฟอร์มจำลองร้านค้าสำหรับการซื้อ/ขายเกมและเติมเงินเกมออนไลน์ ออกแบบส่วนหน้าบ้าน (Frontend) ด้วย Angular และ Bootstrap ให้มีโครงสร้างเรียบร้อยและน่าใช้ และพัฒนา API ในส่วนหลังบ้านด้วย Python + FastAPI เพื่อความสะดวกรวดเร็วในการประมวลผลคำสั่งซื้อ',
      icon: '🎮',
      featured: false
    },
    {
      id: 4,
      title: 'ระบบลงทะเบียนเช็คอินเข้าร่วมงาน (Event Check-In System)',
      category: 'web',
      tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
      description: 'ระบบลงทะเบียนออนไลน์และเช็คอินเข้าร่วมงานสัมมนา/นิทรรศการ เพื่ออำนวยความสะดวกให้ผู้จัดงานและผู้ลงทะเบียน โดยผู้ใช้สามารถสแกน QR Code เพื่อยืนยันตัวตนและเข้างานได้อย่างถูกต้องรวดเร็ว พัฒนาโดยใช้ภาษา PHP ร่วมกับฐานข้อมูล MySQL และ Bootstrap สำหรับการจัดหน้าเว็บให้รองรับ Responsive',
      icon: '🎫',
      featured: false
    }
  ];

  // กรองโปรเจกต์ตามหมวดหมู่ที่เลือก
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => {
        if (filter === 'mobile') return p.category.includes('mobile');
        if (filter === 'web') return p.category === 'web';
        if (filter === 'backend') return p.tech.includes('Python') || p.tech.includes('FastAPI');
        return true;
      });

  return (
    <section id="experience-projects" className="projects-section">
      <div className="section-header">
        <span className="section-subtitle">My Creative Work</span>
        <h2 className="section-title">โปรเจกต์และผลงาน</h2>
        <div className="underline"></div>
      </div>

      {/* ปุ่มควบคุมการกรองผลงาน */}
      <div className="filter-buttons">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          ทั้งหมด
        </button>
        <button 
          className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`}
          onClick={() => setFilter('mobile')}
        >
          Mobile App (Flutter)
        </button>
        <button 
          className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
          onClick={() => setFilter('web')}
        >
          Web Application
        </button>
        <button 
          className={`filter-btn ${filter === 'backend' ? 'active' : ''}`}
          onClick={() => setFilter('backend')}
        >
          Python & Backend APIs
        </button>
      </div>

      {/* โครงข่ายแสดงการ์ดผลงาน */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className={`project-card card ${project.featured ? 'featured' : ''}`}>
            {project.featured && <div className="featured-ribbon">โปรเจกต์เด่น</div>}
            
            <div className="project-header">
              <span className="project-icon-large">{project.icon}</span>
              <h3 className="project-title">{project.title}</h3>
            </div>
            
            <p className="project-description">{project.description}</p>
            
            <div className="project-tech-tags">
              {project.tech.map((t, idx) => (
                <span key={idx} className="tech-tag-badge">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
