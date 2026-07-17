import React from 'react';

/**
 * Skills Component (แสดงทักษะความสามารถ)
 * แบ่งทักษะออกเป็น 4 หมวดหมู่ตามเรซูเม่ พร้อมจัดวางในรูปแบบการ์ดที่สวยงามและอ่านง่าย
 */
export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: '🔤',
      skills: ['Python', 'Dart', 'JavaScript', 'TypeScript', 'Java', 'PHP', 'C']
    },
    {
      title: 'Frameworks & Libraries',
      icon: '📦',
      skills: [
        'Flutter',
        'FastAPI',
        'Spring Boot',
        'Next.js',
        'Angular',
        'Node.js',
        'TensorFlow / PyTorch',
        'NumPy / Pandas'
      ]
    },
    {
      title: 'Databases & Infrastructure',
      icon: '🗄️',
      skills: ['MySQL', 'Firebase', 'Docker', 'VMware']
    },
    {
      title: 'Developer Tools',
      icon: '🛠️',
      skills: [
        'Git & GitHub',
        'Postman',
        'Basic Linux CLI',
        'Tailwind CSS',
        'Bootstrap',
        'Hugging Face',
        'Draw.io'
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <span className="section-subtitle">What I am good at</span>
        <h2 className="section-title">ทักษะและความสามารถ</h2>
        <div className="underline"></div>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skills-category-card card">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skillName, sIdx) => (
                <div key={sIdx} className="skill-item">
                  <span className="skill-bullet">✦</span>
                  <span className="skill-name">{skillName}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
