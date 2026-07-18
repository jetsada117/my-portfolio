import React from 'react';

/**
 * Architecture Component - ส่วนแสดงสถาปัตยกรรมและการทำงานของระบบ
 */
export default function Architecture() {
  const architectureSteps = [
    { step: '01', name: 'Mobile Client (Flutter)', desc: 'ส่งคำขอค้นหาภาพ หรือข้อความ Semantic Search จากผู้ใช้' },
    { step: '02', name: 'FastAPI Gateway', desc: 'รับคำขอ ทำ Authentication และจัดคิวคำสั่งส่งต่อให้โมเดลประมวลผล' },
    { step: '03', name: 'AI Prediction Engine', desc: 'ถอดรหัสคุณลักษณะใบหน้า (Vector Embedding) และค้นหาความเหมือน' },
    { step: '04', name: 'Database (MySQL)', desc: 'เก็บบันทึกข้อมูลโปรไฟล์และผลลัพธ์เพื่อส่งคืนให้ผู้ใช้อย่างรวดเร็ว' }
  ];

  return (
    <section id="architecture" className="py-16 px-6 max-w-[1200px] mx-auto w-full bg-slate-900 text-white rounded-3xl my-10 relative overflow-hidden">
      <div className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 border border-cyan-800 px-3 py-1 rounded-full">
            System Workflow
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-4 text-white">
            สถาปัตยกรรมและการทำงานของระบบ
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            ขั้นตอนการไหลของข้อมูลจากหน้าจอแอปพลิเคชันมือถือผ่าน API สู่ AI Engine และฐานข้อมูล
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {architectureSteps.map((item, idx) => (
            <div key={idx} className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 relative">
              <span className="text-3xl font-black text-cyan-500/40 font-mono mb-3 block">
                {item.step}
              </span>
              <h3 className="text-base font-bold text-white mb-2">{item.name}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
