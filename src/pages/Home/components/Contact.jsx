import React from 'react';
import './Contact.css';

/**
 * Contact Component (ช่องทางการติดต่อ)
 * แสดงข้อมูลติดต่อทางโทรศัพท์ อีเมล กิตฮับ และที่อยู่
 */
export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <span className="section-subtitle">Get in touch</span>
        <h2 className="section-title">ช่องทางการติดต่อ</h2>
        <div className="underline"></div>
      </div>

      <div className="contact-container">
        <p className="contact-intro-text">
          คุณสามารถติดต่อผมหรือติดตามผลงานของผมได้ตามช่องทางต่างๆ ด้านล่างนี้เลยครับ ยินดีที่จะได้พูดคุยและร่วมงานกันครับ!
        </p>

        <div className="info-cards-grid">
          <a href="tel:0966857361" className="contact-info-card card">
            <div className="card-icon">📞</div>
            <div className="card-details">
              <h4>เบอร์โทรศัพท์</h4>
              <p>096-685-7361</p>
              <span className="card-action">คลิกเพื่อโทรออก</span>
            </div>
          </a>

          <a href="mailto:66011212160@msu.ac.th" className="contact-info-card card">
            <div className="card-icon">✉️</div>
            <div className="card-details">
              <h4>อีเมล</h4>
              <p>66011212160@msu.ac.th</p>
              <span className="card-action">คลิกเพื่อส่งอีเมล</span>
            </div>
          </a>

          <a href="https://github.com/jetsada117" target="_blank" rel="noopener noreferrer" className="contact-info-card card">
            <div className="card-icon">💻</div>
            <div className="card-details">
              <h4>GitHub</h4>
              <p>github.com/jetsada117</p>
              <span className="card-action">คลิกเพื่อเปิดโปรไฟล์</span>
            </div>
          </a>

          <div className="contact-info-card card no-link">
            <div className="card-icon">📍</div>
            <div className="card-details">
              <h4>ที่อยู่</h4>
              <p>อ. กันทรารมย์ จ. ศรีสะเกษ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
