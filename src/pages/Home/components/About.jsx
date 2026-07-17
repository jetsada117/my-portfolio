import React from 'react';
import './About.css';

/**
 * About Component (เกี่ยวกับฉัน และประวัติการศึกษา/ประสบการณ์ผู้ช่วยสอน)
 * เน้นการจัดกลุ่มข้อมูล ประวัติการศึกษา และบทบาทผู้ช่วยสอนในระดับอุดมศึกษา
 */
export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <span className="section-subtitle">Get to know me</span>
        <h2 className="section-title">เกี่ยวกับฉัน</h2>
        <div className="underline"></div>
      </div>

      <div className="about-grid">
        {/* คอลัมน์ซ้าย: แนะนำตัวสั้นๆ และการศึกษา */}
        <div className="about-info-column">
          <h3 className="about-subtitle">ประวัติโดยย่อ & การศึกษา</h3>
          <p className="about-text">
            ผมเป็นนักศึกษาชั้นปีสุดท้าย สาขาวิชาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยมหาสารคาม 
            มีความหลงใหลในความสมบูรณ์แบบและการเขียนโค้ดที่สะอาดสะอ้าน (Clean Code) 
            ชอบความท้าทายในการแก้ไขข้อผิดพลาดทางเทคนิคที่ซับซ้อน และการออกแบบซอฟต์แวร์ที่ตอบโจทย์ความต้องการของผู้ใช้งานจริง
          </p>
          
          {/* ข้อมูลการศึกษา */}
          <div className="education-card card">
            <div className="education-icon">🎓</div>
            <div className="education-details">
              <span className="education-years">2023 - ปัจจุบัน</span>
              <h4>วิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์</h4>
              <p className="education-uni">คณะวิทยาการสารสนเทศ มหาวิทยาลัยมหาสารคาม</p>
              <p className="education-gpa">เกรดเฉลี่ยสะสม: <strong>3.85</strong> (เกียรตินิยม)</p>
            </div>
          </div>

          {/* เป้าหมายในการทำงาน */}
          <div className="goal-box card">
            <span className="goal-icon">🎯</span>
            <p>
              มุ่งมั่นที่จะนำทักษะด้าน Full-Stack Development และประสบการณ์จริงไปประยุกต์ใช้ในฐานะ <strong>Full-stack Developer Intern</strong> เพื่อร่วมขับเคลื่อนโปรเจกต์ขององค์กรให้ประสบความสำเร็จ พร้อมรับฟังและเรียนรู้สิ่งใหม่ๆ จากทีมงานเสมอ
            </p>
          </div>
        </div>

        {/* คอลัมน์ขวา: ประสบการณ์ผู้ช่วยสอน (Teaching Assistant) */}
        <div className="about-ta-column">
          <h3 className="about-subtitle">บทบาทการเป็นผู้ช่วยสอน (2024 - 2026)</h3>
          <p className="about-text">
            นอกจากศึกษาทางวิชาการแล้ว ผมยังได้รับความไว้วางใจในการทำหน้าที่เป็นผู้ช่วยสอนในรายวิชาสำคัญของภาควิชาคอมพิวเตอร์:
          </p>

          <div className="ta-experience card">
            <div className="ta-badge">Teaching Assistant</div>
            <ul className="ta-list">
              <li>
                <div className="ta-item-icon">💻</div>
                <div className="ta-item-content">
                  <h5>ผู้ช่วยสอนรายวิชาหลักด้านวิทยาการคอมพิวเตอร์</h5>
                  <p>ช่วยแนะนำวิชาการเขียนโปรแกรมพื้นฐาน (Programming), โครงสร้างข้อมูล (Data Structures) และการวิเคราะห์อัลกอริทึม (Algorithms)</p>
                </div>
              </li>
              <li>
                <div className="ta-item-icon">💬</div>
                <div className="ta-item-content">
                  <h5>ให้คำปรึกษาและคลายข้อสงสัยรายบุคคล</h5>
                  <p>ตอบคำถามทางเทคนิคอย่างเจาะลึก เพื่อให้นักศึกษาสามารถมองเห็นภาพ เข้าใจที่มาที่ไป และเข้าใจแนวคิดโครงสร้างของโปรแกรมได้อย่างถ่องแท้</p>
                </div>
              </li>
              <li>
                <div className="ta-item-icon">🔍</div>
                <div className="ta-item-content">
                  <h5>แนะแนวทางการคิดแบบ Logic & การดีบั๊ก (Debug)</h5>
                  <p>ชี้แนะกระบวนการแก้ปัญหาอย่างมีลำดับขั้นตอน เพื่อส่งเสริมให้นักศึกษาสามารถทดลองวิเคราะห์หาข้อผิดพลาดในโค้ดและแก้ไขได้ด้วยตัวเอง</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
