import React from 'react';
import heroImg from '../../../assets/developer_hero.jpg';

/**
 * Hero Component (ส่วนต้อนรับ / แนะนำตัวหลัก)
 * เพิ่มมิติ สีสันแบบ gradient และเงาลึกที่ดูมีระดับ
 */
export default function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-80px)] flex items-center py-20 px-6 max-w-[1200px] mx-auto w-full relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-[50px] items-center w-full">
        {/* ข้อความฝั่งซ้าย */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="inline-flex items-center bg-blue-50/70 border border-blue-100/80 text-blue-600 px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-6 shadow-sm backdrop-blur-sm">
            <span className="inline-block w-2.5 h-2.5 bg-blue-600 rounded-full mr-2.5 animate-ping"></span>
            พร้อมร่วมงานในตำแหน่ง Full-stack Developer Intern
          </div>
          
          <h1 className="text-[38px] md:text-[54px] font-extrabold text-slate-900 leading-tight mb-2 tracking-tighter">
            สวัสดีครับ, ผม <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">เจษฎา พรหมบุตร</span>
          </h1>
          
          <h2 className="text-[22px] md:text-[28px] text-slate-800 font-semibold mb-6 tracking-tight">
            Full-Stack Developer
          </h2>
          
          <p className="text-base md:text-[17px] text-slate-500 leading-relaxed mb-10 max-w-[600px]">
            นักศึกษาชั้นปีสุดท้าย คณะวิทยาการสารสนเทศ มหาวิทยาลัยมหาสารคาม 
            ผู้มีความมุ่งมั่นและเชี่ยวชาญในการพัฒนาแอปพลิเคชันมือถือด้วย <strong className="text-blue-600 font-semibold">Flutter</strong> 
            และการเขียนระบบหลังบ้านประสิทธิภาพสูงด้วย <strong className="text-[#0ea5e9] font-semibold">Python (FastAPI)</strong> และ <strong className="text-[#6366f1] font-semibold">Java (Spring Boot)</strong>
          </p>
          
          <div className="flex flex-row gap-4 flex-wrap justify-center lg:justify-start">
            <a 
              href="#experience-projects" 
              className="group inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_10px_20px_-5px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(37,99,235,0.4)] hover:scale-[1.01] hover:-translate-y-0.5 transition-all duration-300"
            >
              ดูผลงานของฉัน
              <span className="ml-2 transform group-hover:translate-x-1.5 transition-transform duration-200">→</span>
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-slate-800 border-2 border-slate-200 bg-white/80 backdrop-blur-sm shadow-[0_4px_12px_rgba(15,23,42,0.03)] hover:border-blue-600 hover:bg-blue-50/50 hover:text-blue-600 hover:scale-[1.01] hover:-translate-y-0.5 transition-all duration-300"
            >
              ติดต่อฉัน
            </a>
          </div>
        </div>

        {/* รูปภาพฝั่งขวา */}
        <div className="relative flex justify-center items-center order-first lg:order-last">
          <div className="relative rounded-3xl w-full max-w-[380px] aspect-square shadow-[0_20px_50px_-12px_rgba(37,99,235,0.25)] border-[5px] border-white bg-white/40 backdrop-blur-sm">
            <img 
              src={heroImg} 
              alt="Jetsada Prombut Hero Art" 
              className="w-full h-full object-cover rounded-[20px]" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none rounded-[20px]"></div>
            
            {/* GPA Badge */}
            <div className="absolute bg-white/90 border border-slate-200/40 p-3 px-4.5 rounded-2xl shadow-[0_12px_30px_rgba(15,23,42,0.08)] flex items-center gap-3 backdrop-blur-md z-10 top-[15%] -left-[10px] md:-left-5 animate-pulse">
              <span className="text-xl w-9.5 h-9.5 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shadow-sm">🎓</span>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 m-0">GPAX</h4>
                <p className="text-sm font-extrabold text-slate-800 m-0">3.85 / 4.00</p>
              </div>
            </div>
            
            {/* Skill Badge */}
            <div className="absolute bg-white/90 border border-slate-200/40 p-3 px-4.5 rounded-2xl shadow-[0_12px_30px_rgba(15,23,42,0.08)] flex items-center gap-3 backdrop-blur-md z-10 bottom-[15%] -right-[10px] md:-right-5 animate-pulse delay-1000">
              <span className="text-xl w-9.5 h-9.5 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shadow-sm">💻</span>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 m-0">ความเชี่ยวชาญ</h4>
                <p className="text-sm font-extrabold text-slate-800 m-0">Flutter & Backend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
