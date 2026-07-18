import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Cpu, 
  ArrowLeft, 
  Layers, 
  Zap,
  Smartphone,
  Layers3,
  Repeat
} from 'lucide-react';

import img54487 from '../../../assets/ai-face-prediction-image/54487.jpg';
import img54488 from '../../../assets/ai-face-prediction-image/54488.jpg';

/**
 * Hero Component - หน้าโปรเจกต์ AI Face Prediction
 * แสดงรูปภาพแบบ Stacked Layered Cards (ซ้อนมิติ)
 */
export default function Hero() {
  // สถานะการสลับเลเยอร์รูปภาพหน้า-หลัง
  const [isSwapped, setIsSwapped] = useState(false);

  const techStack = [
    { name: 'Flutter', color: 'bg-blue-50 border-blue-200 text-blue-700' },
    { name: 'Python', color: 'bg-amber-50 border-amber-200 text-amber-800' },
    { name: 'FastAPI', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
    { name: 'TensorFlow (Training Model)', color: 'bg-yellow-50 border-orange-200 text-yellow-700' },
    { name: 'AI Model (Prediction Image)', color: 'bg-purple-50 border-purple-200 text-purple-700' },
    { name: 'MySQL', color: 'bg-sky-50 border-sky-200 text-sky-700' },
  ];

  return (
    <section id="hero" className="relative overflow-hidden pt-3 pb-12 lg:pt-5 lg:pb-16 px-6 max-w-[1200px] mx-auto w-full">
      {/* เอฟเฟกต์แสงพื้นหลัง (Glow Lights) */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* ปุ่มย้อนกลับสู่หน้าหลัก (Clean Style) */}
      <div className="mb-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-slate-700 bg-white/90 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 hover:bg-blue-50/60 hover:text-blue-600 backdrop-blur-md transition-all duration-200 group"
        >
          <div className="p-1 rounded-full bg-slate-100 group-hover:bg-blue-100 text-slate-500 group-hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-0.5 transition-transform" />
          </div>
          <span>กลับสู่หน้าหลัก</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* คอลัมน์ซ้าย: ข้อความและรายละเอียดโปรเจกต์ */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Badge แท็กบอกประเภทโปรเจกต์ */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border border-blue-200/80 text-blue-700 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-6 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
            </span>
            <span>โปรเจกต์จบการศึกษา (Senior Project)</span>
          </div>

          {/* หัวข้อหลัก */}
          <h1 className="text-3xl md:text-5xl lg:text-[44px] font-extrabold text-slate-900 leading-tight mb-4 tracking-tight">
            แอปพลิเคชัน AI ทำนายและ <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ค้นหาใบหน้าอัจฉริยะ
            </span>
          </h1>

          {/* คำอธิบายรายละเอียดโปรเจกต์ */}
          <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
            แอปพลิเคชันมือถือที่ผสานขีดความสามารถของ <strong className="text-blue-600 font-semibold">AI Model</strong> ในการทำนายลักษณะใบหน้า 
            พร้อมระบบ <strong className="text-purple-600 font-semibold">Semantic Search</strong> ที่ช่วยให้ผู้ใช้ค้นหาใบหน้าที่ต้องการได้เพียงพิมพ์ข้อความอธิบาย 
            ประมวลผลด้วยสถาปัตยกรรม Backend ประสิทธิภาพสูง
          </p>

          {/* แท็กเทคโนโลยีที่ใช้ (Tech Stack Badges) */}
          <div className="mb-8 w-full">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> เทคโนโลยีหลักที่ใช้ในการพัฒนา
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, idx) => (
                <span 
                  key={idx}
                  className={`px-3 py-1 text-xs md:text-sm font-medium rounded-lg border shadow-xs ${tech.color}`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* ปุ่ม Action */}
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <a 
              href="#project-details" 
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Zap className="w-4 h-4 mr-2" />
              สำรวจฟีเจอร์เด่น
            </a>
            <a 
              href="#architecture" 
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-bold text-slate-700 bg-white border border-slate-200 shadow-sm hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Cpu className="w-4 h-4 mr-2 text-indigo-600" />
              ดูสถาปัตยกรรมระบบ
            </a>
          </div>

        </div>

        {/* คอลัมน์ขวา: แสดงรูปภาพจริงแบบ Layered / Stacked Cards (เลเยอร์ซ้อนกัน) */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center pt-4 pb-8">
          
          {/* คอนเทนเนอร์กลุ่มรูปภาพซ้อนมิติ */}
          <div 
            onClick={() => setIsSwapped(!isSwapped)}
            className="relative w-full max-w-[270px] sm:max-w-[290px] h-[450px] sm:h-[490px] cursor-pointer group select-none"
            title="คลิกเพื่อสลับตำแหน่งเลเยอร์รูปภาพ"
          >
            {/* เลเยอร์แผ่นหลัง (Back Card Layer) */}
            <div className={`absolute inset-0 bg-white rounded-3xl p-2 shadow-xl border-2 border-slate-200/80 transition-all duration-500 transform ${
              isSwapped 
                ? 'z-20 translate-x-0 translate-y-0 rotate-0 scale-100 shadow-2xl border-blue-400' 
                : 'z-10 translate-x-6 -translate-y-2.5 rotate-6 scale-95 opacity-90 group-hover:translate-x-9 group-hover:rotate-8'
            }`}>
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white flex items-center justify-center p-1">
                <img 
                  src={img54488} 
                  alt="AI Face Prediction App Screen 54488" 
                  className="w-full h-full object-contain rounded-xl"
                />
                <div className="absolute bottom-3 left-3 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-700 text-[11px] font-semibold text-white shadow-md">
                  Semantic Search Screen
                </div>
              </div>
            </div>

            {/* เลเยอร์แผ่นหน้า (Front Card Layer) */}
            <div className={`absolute inset-0 bg-white rounded-3xl p-2 shadow-2xl border-3 border-slate-100 shadow-blue-500/10 transition-all duration-500 transform ${
              isSwapped 
                ? 'z-10 translate-x-6 -translate-y-2.5 rotate-6 scale-95 opacity-90 group-hover:translate-x-9 group-hover:rotate-8' 
                : 'z-20 translate-x-0 translate-y-0 rotate-0 scale-100 shadow-blue-500/15 group-hover:-translate-x-1 group-hover:-rotate-1'
            }`}>
              {/* Badge แสดงรูปภาพจริง */}
              <div className="absolute top-3 left-3 z-30 bg-slate-900/90 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[11px] font-semibold flex items-center gap-1.5 shadow-md border border-slate-700/80">
                <Smartphone className="w-3 h-3 text-cyan-400" />
                <span>หน้าหลักสำหรับค้นหา</span>
              </div>

              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white flex items-center justify-center p-1">
                <img 
                  src={img54487} 
                  alt="AI Face Prediction App Screen 54487" 
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
            </div>

          </div>

          {/* คำแนะนำให้คลิกสลับเลเยอร์ */}
          <button 
            onClick={() => setIsSwapped(!isSwapped)}
            className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 bg-white/80 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs hover:shadow-sm backdrop-blur-md transition-all"
          >
            <Repeat className="w-3.5 h-3.5 text-blue-500 animate-spin-slow" />
            <span>คลิกเพื่อสลับดูภาพเลเยอร์ซ้อน (Swap Layer)</span>
          </button>

        </div>
      </div>
    </section>
  );
}