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
      skills: [
        { name: 'Python', level: '90%' },
        { name: 'Dart', level: '85%' },
        { name: 'JavaScript', level: '80%' },
        { name: 'TypeScript', level: '75%' },
        { name: 'Java', level: '70%' },
        { name: 'PHP', level: '65%' },
        { name: 'C', level: '60%' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: '📦',
      skills: [
        { name: 'Flutter', level: '85%' },
        { name: 'FastAPI', level: '80%' },
        { name: 'Spring Boot', level: '75%' },
        { name: 'Next.js', level: '70%' },
        { name: 'Angular', level: '65%' },
        { name: 'Node.js', level: '60%' },
        { name: 'TensorFlow / PyTorch', level: '55%' },
        { name: 'NumPy / Pandas', level: '65%' }
      ]
    },
    {
      title: 'Databases & Infrastructure',
      icon: '🗄️',
      skills: [
        { name: 'MySQL', level: '80%' },
        { name: 'Firebase', level: '75%' },
        { name: 'Docker', level: '70%' },
        { name: 'VMware', level: '60%' }
      ]
    },
    {
      title: 'Developer Tools',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', level: '85%' },
        { name: 'Postman', level: '80%' },
        { name: 'Tailwind CSS', level: '80%' },
        { name: 'Bootstrap', level: '75%' },
        { name: 'Hugging Face', level: '60%' },
        { name: 'Draw.io', level: '70%' }
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
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}</span>
                  </div>
                  {/* แถบระดับทักษะเพิ่มความพรีเมียมและความทันสมัยในการดีไซน์ */}
                  <div className="skill-bar-bg">
                    <div 
                      className="skill-bar-fill" 
                      style={{ width: skill.level }}
                      role="progressbar"
                      aria-valuenow={parseInt(skill.level)}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
