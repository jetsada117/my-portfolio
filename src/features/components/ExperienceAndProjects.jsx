import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

/**
 * ExperienceAndProjects Component (ส่วนแสดงโปรเจกต์วิชาการและผลงาน)
 * เพิ่มมิติตัวเงาการ์ดและการขยายขนาดเชิงโต้ตอบ (Hover Transitions) ที่พรีเมียม
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
    <section id="experience-projects" className="py-20 px-6 max-w-[1200px] mx-auto w-full relative z-10">
      <div className="text-center mb-12">
        <span className="block text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">My Creative Work</span>
        <h2 className="text-3xl md:text-4xl font-extrabold relative inline-block mb-3 text-slate-900">โปรเจกต์และผลงาน</h2>
        <div className="h-1.2 w-16 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full shadow-sm"></div>
      </div>

      {/* ปุ่มควบคุมการกรองผลงาน */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        <button 
          className={`px-[18px] py-2 rounded-full text-sm font-bold cursor-pointer transition-all duration-300 border shadow-sm hover:scale-[1.03] ${
            filter === 'all' 
              ? 'bg-blue-600 border-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.25)]' 
              : 'bg-white/80 backdrop-blur-sm border-slate-200 text-slate-500 hover:border-blue-600 hover:text-blue-600'
          }`}
          onClick={() => setFilter('all')}
        >
          ทั้งหมด
        </button>
        <button 
          className={`px-[18px] py-2 rounded-full text-sm font-bold cursor-pointer transition-all duration-300 border shadow-sm hover:scale-[1.03] ${
            filter === 'mobile' 
              ? 'bg-blue-600 border-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.25)]' 
              : 'bg-white/80 backdrop-blur-sm border-slate-200 text-slate-500 hover:border-blue-600 hover:text-blue-600'
          }`}
          onClick={() => setFilter('mobile')}
        >
          Mobile App (Flutter)
        </button>
        <button 
          className={`px-[18px] py-2 rounded-full text-sm font-bold cursor-pointer transition-all duration-300 border shadow-sm hover:scale-[1.03] ${
            filter === 'web' 
              ? 'bg-blue-600 border-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.25)]' 
              : 'bg-white/80 backdrop-blur-sm border-slate-200 text-slate-500 hover:border-blue-600 hover:text-blue-600'
          }`}
          onClick={() => setFilter('web')}
        >
          Web Application
        </button>
        <button 
          className={`px-[18px] py-2 rounded-full text-sm font-bold cursor-pointer transition-all duration-300 border shadow-sm hover:scale-[1.03] ${
            filter === 'backend' 
              ? 'bg-blue-600 border-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.25)]' 
              : 'bg-white/80 backdrop-blur-sm border-slate-200 text-slate-500 hover:border-blue-600 hover:text-blue-600'
          }`}
          onClick={() => setFilter('backend')}
        >
          Python & Backend APIs
        </button>
      </div>

      {/* โครงข่ายแสดงการ์ดผลงาน */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className={`relative flex flex-col justify-between h-full bg-white/70 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2.5 ${
              project.featured 
                ? 'border-2 border-blue-600 bg-gradient-to-br from-white via-white to-blue-50/5 shadow-[0_15px_30px_rgba(37,99,235,0.06)] hover:shadow-[0_30px_60px_-10px_rgba(37,99,235,0.18)]' 
                : 'border-slate-200/60 shadow-[0_10px_25px_rgba(15,23,42,0.02)] hover:shadow-[0_30px_60px_-10px_rgba(37,99,235,0.12)] hover:border-blue-500/20'
            }`}
          >
            {project.featured && (
              <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                โปรเจกต์เด่น
              </div>
            )}
            
            <div className="mb-4">
              <span className="text-4xl block mb-3 drop-shadow-sm">{project.icon}</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">{project.title}</h3>
            </div>
            
            <p className="text-[13.5px] text-slate-500 leading-relaxed mb-6 flex-grow">{project.description}</p>
            
            <div>
              <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4 mb-4">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="bg-blue-50/60 border border-blue-100/50 text-blue-800 text-[11px] font-semibold px-2.5 py-0.5 rounded-lg shadow-sm">
                    {t}
                  </span>
                ))}
              </div>

              {/* ปุ่มเพื่อกดดูรายละเอียดแยกหน้ารายโปรเจกต์ */}
              <div className="text-right">
                <Link 
                  to={project.path} 
                  className="text-blue-600 text-sm font-bold hover:text-blue-800 hover:underline transition-colors duration-200 inline-flex items-center gap-1"
                >
                  ดูรายละเอียดเชิงลึก →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
