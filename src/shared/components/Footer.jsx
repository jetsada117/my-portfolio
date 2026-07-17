import React from 'react';

/**
 * Footer Component (ส่วนท้ายเว็บไซต์)
 * ใช้ Tailwind CSS ในการจัดสไตล์
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 border-t border-slate-200 py-10 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-4 text-center">
        <div className="font-mono font-bold text-xl text-slate-800">
          <span className="text-blue-600 font-extrabold">&lt;</span>
          Johannes-dev
          <span className="text-blue-600 font-extrabold"> /&gt;</span>
        </div>
        
        <p className="text-sm text-slate-500">
          &copy; {currentYear} Jetsada Prombut. All rights reserved.
        </p>
        
        <p className="text-xs text-slate-400">
          Designed & Built with React & Tailwind CSS
        </p>

        <a 
          href="#hero" 
          className="text-[13.5px] font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-all duration-200"
        >
          เลื่อนกลับขึ้นบนสุด ↑
        </a>
      </div>
    </footer>
  );
}
