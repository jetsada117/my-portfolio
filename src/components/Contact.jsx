import React, { useState } from 'react';

/**
 * Contact Component (ช่องทางการติดต่อ)
 * แสดงข้อมูลติดต่อทางโทรศัพท์ อีเมล กิตฮับ และที่อยู่ พร้อมฟอร์มส่งข้อความจำลอง
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // จำลองการส่งข้อมูล
    console.log('ข้อมูลติดต่อถูกส่ง:', formData);
    setIsSubmitted(true);
    // รีเซ็ตฟอร์มหลังจากส่ง
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <span className="section-subtitle">Get in touch</span>
        <h2 className="section-title">ช่องทางการติดต่อ</h2>
        <div className="underline"></div>
      </div>

      <div className="contact-grid">
        {/* ฝั่งซ้าย: ข้อมูลติดต่อแบบการ์ดด่วน */}
        <div className="contact-info-cards">
          <h3>ข้อมูลสำหรับการติดต่อ</h3>
          <p className="contact-intro-text">
            คุณสามารถติดต่อผมหรือติดตามผลงานของผมได้ตามช่องทางต่างๆ ด้านล่างนี้เลยครับ ยินดีที่จะได้พูดคุยและร่วมงานกันครับ!
          </p>

          <div className="info-cards-list">
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

        {/* ฝั่งขวา: ฟอร์มติดต่อแบบ Interactive */}
        <div className="contact-form-container card">
          <h3>ส่งข้อความหาผม</h3>
          {isSubmitted ? (
            <div className="success-message">
              <span className="success-icon">✨</span>
              <h4>ส่งข้อความสำเร็จ!</h4>
              <p>ขอบคุณที่ติดต่อเข้ามาครับ ผมจะรีบติดต่อกลับโดยเร็วที่สุด</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name">ชื่อของคุณ</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="เช่น สมชาย ใจดี"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">อีเมล</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">หัวเรื่อง</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="เช่น เรื่องเสนอรับฝึกงาน/ร่วมงาน"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">ข้อความของคุณ</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="พิมพ์รายละเอียดข้อความตรงนี้..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                ส่งข้อความ
                <span className="btn-icon">⚡</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
