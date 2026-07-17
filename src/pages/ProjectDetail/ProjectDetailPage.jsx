import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../../shared/components/Navbar';
import Footer from '../../shared/components/Footer';
import { projects } from '../../features/data/projects';

/**
 * ProjectDetailPage Component
 * แสดงรายละเอียดเชิงลึกของโปรเจกต์เดี่ยวตาม ID จาก URL
 */
export default function ProjectDetailPage() {
  const { id } = useParams();
  
  // แปลง id เป็นตัวเลขเพื่อใช้ค้นหาในข้อมูล
  const project = projects.find(p => p.id === parseInt(id));

  // เลื่อนขึ้นไปด้านบนสุดเมื่อเปิดหน้านี้
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="app-wrapper" style={{ backgroundColor: '#0b0f19', minHeight: '100-vh', color: '#f3f4f6' }}>
        <Navbar />
        <main className="main-content" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
          <h2>ขออภัย! ไม่พบโปรเจกต์ที่คุณต้องการ</h2>
          <p style={{ marginTop: '1rem', color: '#9ca3af' }}>โปรเจกต์นี้อาจไม่มีอยู่ในระบบ หรือถูกลบออกแล้ว</p>
          <Link to="/" style={{ display: 'inline-block', marginTop: '2rem', color: '#60a5fa', textDecoration: 'none', fontWeight: 'bold' }}>
            ← กลับหน้าแรก
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="project-detail-page-wrapper" style={{ backgroundColor: '#0b0f19', color: '#f3f4f6', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main className="main-content" style={{ flex: 1, padding: '7rem 2rem 4rem', position: 'relative', overflow: 'hidden' }}>
        {/* แสงนีออนพื้นหลัง (Blur Blob Effect) */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '15%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(0,0,0,0) 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}></div>

        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          
          {/* ปุ่มย้อนกลับ */}
          <div style={{ marginBottom: '2rem' }}>
            <Link to="/" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#9ca3af',
              textDecoration: 'none',
              fontSize: '0.95rem',
              transition: 'color 0.2s',
            }}
            onMouseOver={(e) => e.target.style.color = '#60a5fa'}
            onMouseOut={(e) => e.target.style.color = '#9ca3af'}
            >
              ← กลับหน้าแรก
            </Link>
          </div>

          {/* หัวเรื่องของโปรเจกต์ */}
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '2.5rem' }}>{project.icon}</span>
              <span style={{
                fontSize: '0.85rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                background: 'rgba(96, 165, 250, 0.1)',
                color: '#60a5fa',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                border: '1px solid rgba(96, 165, 250, 0.2)'
              }}>{project.category}</span>
            </div>
            <h1 style={{
              fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
              fontWeight: '800',
              lineHeight: '1.2',
              background: 'linear-gradient(to right, #ffffff, #9ca3af)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1.5rem'
            }}>{project.title}</h1>

            {/* แถบ Tags เทคโนโลยี */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tech.map((t, idx) => (
                <span key={idx} style={{
                  fontSize: '0.8rem',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#d1d5db',
                  padding: '0.35rem 0.8rem',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>{t}</span>
              ))}
            </div>
          </div>

          {/* สองคอลัมน์แสดงรายละเอียด */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'window.innerWidth > 768 ? "1fr 1fr" : "1fr"',
            gap: '3rem',
            alignItems: 'start'
          }} className="project-detail-grid">
            
            {/* คอลัมน์ซ้าย: ข้อมูลเชิงเทคนิค */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* การ์ดแก้วบรรยายภาพรวม */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '16px',
                padding: '2rem'
              }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#60a5fa' }}>รายละเอียดภาพรวม</h3>
                <p style={{ lineHeight: '1.7', color: '#9ca3af', fontSize: '0.95rem' }}>{project.description}</p>
              </div>

              {/* การ์ดแก้วสถาปัตยกรรมระบบ (System Architecture) */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.02)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '16px',
                padding: '2rem'
              }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#a78bfa' }}>สถาปัตยกรรมและการพัฒนา (Architecture)</h3>
                <ul style={{ paddingLeft: '1.2rem', color: '#9ca3af', lineHeight: '1.7', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <li><strong>โครงสร้างหน้าบ้าน (Frontend):</strong> พัฒนาสถาปัตยกรรมที่มีการตอบสนองดีเยี่ยมและปรับแต่งเลย์เอาต์ตามขนาดหน้าจอแบบ Responsive</li>
                  <li><strong>โครงสร้างหลังบ้าน (Backend):</strong> ออกแบบ API ให้เป็นระเบียบตามมาตรฐาน RESTful เพื่อส่งและรับข้อมูลอย่างรวดเร็ว</li>
                  <li><strong>ฐานข้อมูล & ความปลอดภัย:</strong> จัดระเบียบการเก็บข้อมูลและเชื่อมโยงตารางอย่างมีประสิทธิภาพ</li>
                </ul>
              </div>

            </div>

            {/* คอลัมน์ขวา: การสาธิตรูปภาพและลิงก์ */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* รูปจำลองหน้าจอแอปแบบพรีเมียม */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.15), rgba(139, 92, 246, 0.15))',
                borderRadius: '16px',
                padding: '2.5rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                minHeight: '280px'
              }}>
                <span style={{ fontSize: '4.5rem', filter: 'drop-shadow(0 0 15px rgba(96, 165, 250, 0.5))', marginBottom: '1rem' }}>{project.icon}</span>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{project.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#9ca3af', maxWidth: '300px' }}>การสาธิตหน้าจอใช้งานและคุณสมบัติทางเทคนิคที่เกี่ยวข้อง</p>
              </div>

              {/* ปุ่ม Action ต่างๆ */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://github.com/jetsada117" target="_blank" rel="noopener noreferrer" style={{
                  flex: 1,
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.08)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  padding: '0.85rem 1rem',
                  borderRadius: '10px',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'background 0.2s'
                }}
                onMouseOver={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.15)'}
                onMouseOut={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.08)'}
                >
                  GitHub Code
                </a>
                <a href="#demo" style={{
                  flex: 1,
                  textAlign: 'center',
                  background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  padding: '0.85rem 1rem',
                  borderRadius: '10px',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 15px rgba(96, 165, 250, 0.3)',
                  transition: 'opacity 0.2s'
                }}
                onMouseOver={(e) => e.target.style.opacity = '0.9'}
                onMouseOut={(e) => e.target.style.opacity = '1'}
                >
                  Live Demo
                </a>
              </div>

            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
