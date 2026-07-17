import React from 'react';

/**
 * Skills Component (แสดงทักษะความสามารถ)
 * ใช้ Tailwind CSS และเพิ่มลูกเล่นการจัดเงาระดับความลึก
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
      icon: '📚',
      skills: ['Flutter', 'Next.js', 'Spring Boot', 'FastAPI', 'React', 'Node.js', 'Angular']
    },
    {
      title: 'Databases & Infra',
      icon: '💾',
      skills: ['MySQL', 'Firebase', 'Docker', 'VMware']
    },
    {
      title: 'Tools & Styling',
      icon: '🛠️',
      skills: ['Git / GitHub', 'Postman', 'Tailwind CSS', 'Bootstrap', 'Draw.io', 'Hugging Face']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-[1200px] mx-auto w-full relative z-10">
      <div className="text-center mb-12">
        <span className="block text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">My Abilities</span>
        <h2 className="text-3xl md:text-4xl font-extrabold relative inline-block mb-3 text-slate-900">ทักษะความสามารถ</h2>
        <div className="h-1.2 w-16 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full shadow-sm"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="h-full bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-2xl p-6 shadow-[0_10px_25px_rgba(15,23,42,0.02)] hover:shadow-[0_25px_50px_-10px_rgba(37,99,235,0.08)] hover:-translate-y-1.5 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-5 border-b border-slate-100 pb-3">
              <span className="text-2xl drop-shadow-sm">{category.icon}</span>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">{category.title}</h3>
            </div>
            
            <ul className="flex flex-col gap-3">
              {category.skills.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                  <span className="font-bold text-slate-700 text-[14px]">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
