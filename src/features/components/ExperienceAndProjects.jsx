import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import './ExperienceAndProjects.css';

/**
 * ExperienceAndProjects Component (ส่วนแสดงโปรเจกต์วิชาการและผลงาน)
 * แสดงรายการโปรเจกต์ทั้งหมด มีปุ่มตัวกรอง (Filter) เพื่อแยกประเภทเทคโนโลยี
 */
export default function ExperienceAndProjects() {
  const [filter, setFilter] = useState('all');

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

            {/* ปุ่มเพื่อกดดูรายละเอียดแยกหน้ารายโปรเจกต์ */}
            <div className="project-card-footer" style={{ marginTop: '1.5rem', textAlign: 'right' }}>
              <Link 
                to={project.path} 
                className="project-detail-link"
                style={{
                  color: '#60a5fa',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  transition: 'color 0.2s'
                }}
              >
                ดูรายละเอียดเชิงลึก →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
