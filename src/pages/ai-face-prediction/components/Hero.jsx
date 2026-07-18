import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ScanFace, 
  Sparkles, 
  Cpu, 
  Database, 
  Search, 
  ArrowLeft, 
  Layers, 
  CheckCircle2,
  Zap
} from 'lucide-react';

/**
 * Hero Component - หน้าโปรเจกต์ AI Face Prediction
 * ออกแบบด้วยดีไซน์ทันสมัย สไตล์ AI Tech & Glassmorphism
 */
export default function Hero() {
  const techStack = [
    { name: 'Flutter', color: 'bg-blue-50 border-blue-200 text-blue-700' },
    { name: 'Python', color: 'bg-amber-50 border-amber-200 text-amber-800' },
    { name: 'FastAPI', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
    { name: 'AI Model (Semantic Search)', color: 'bg-purple-50 border-purple-200 text-purple-700' },
    { name: 'MySQL', color: 'bg-sky-50 border-sky-200 text-sky-700' },
  ];

  return (
    <section id="hero" className="relative overflow-hidden py-12 lg:py-20 px-6 max-w-[1200px] mx-auto w-full">
      {/* เอฟเฟกต์แสงพื้นหลัง (Glow Lights) */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* ปุ่มย้อนกลับสู่หน้าหลัก (Clean Style) */}
      <div className="mb-8">
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

        {/* คอลัมน์ขวา: การ์ดจำลองหน้าตา UI และการสแกนของ AI */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="w-full max-w-[420px] bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-3xl p-6 shadow-2xl border border-slate-800 relative overflow-hidden group">
            
            {/* เส้นสแกนจำลองแบบ AI (Scanning Animation Effect) */}
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent top-0 animate-[ping_3s_infinite] opacity-75"></div>
            
            {/* Header การ์ด */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              </div>
              <span className="text-xs font-mono text-cyan-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                AI Model Online
              </span>
            </div>

            {/* กรอบสแกนใบหน้าจำลอง */}
            <div className="relative aspect-4/3 bg-slate-900/90 rounded-2xl border border-slate-700/60 flex flex-col items-center justify-center p-6 mb-6 overflow-hidden">
              
              {/* ไอคอนกรอบใบหน้า */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="p-4 rounded-full bg-blue-500/10 border border-blue-400/30 text-cyan-400 mb-3 animate-pulse">
                  <ScanFace className="w-16 h-16" />
                </div>
                <span className="text-xs font-mono text-slate-300">Scanning & Feature Extraction...</span>
              </div>

              {/* แท็กสถานะในกรอบสแกน */}
              <div className="absolute top-3 left-3 bg-slate-800/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-mono text-emerald-400 border border-emerald-500/30">
                Match Rate: 98.4%
              </div>
              <div className="absolute bottom-3 right-3 bg-slate-800/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-mono text-blue-400 border border-blue-500/30">
                FastAPI: 24ms
              </div>
            </div>

            {/* ตัวอย่างกล่องค้นหาแบบ Semantic Search */}
            <div className="space-y-3">
              <div className="text-xs font-semibold text-slate-400 flex items-center justify-between">
                <span>จำลองการค้นหา (Semantic Search)</span>
                <Search className="w-3.5 h-3.5 text-slate-500" />
              </div>
              <div className="bg-slate-800/70 border border-slate-700 rounded-xl p-3 text-xs text-slate-300 flex items-center justify-between">
                <span className="truncate italic text-slate-400">"ค้นหาใบหน้าผู้ชายผมสั้น ใส่แว่นตา..."</span>
                <span className="ml-2 bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded font-mono">Run</span>
              </div>
            </div>

            {/* ฟุตเตอร์การ์ด */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Database className="w-3.5 h-3.5 text-blue-400" /> MySQL DB
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> High Accuracy
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}