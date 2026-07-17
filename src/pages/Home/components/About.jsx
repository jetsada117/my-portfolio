import React from 'react';

/**
 * About Component (เกี่ยวกับฉัน และประวัติการศึกษา/ประสบการณ์ผู้ช่วยสอน)
 * ปรับปรุงดีไซน์แบบ Glassmorphism และเพิ่มความลึกด้วยเงาไล่ระดับ
 */
export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-[1200px] mx-auto w-full relative z-10">
      <div className="text-center mb-12">
        <span className="block text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">Get to know me</span>
        <h2 className="text-3xl md:text-4xl font-extrabold relative inline-block mb-3 text-slate-900">เกี่ยวกับฉัน</h2>
        <div className="h-1.2 w-16 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full shadow-sm"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
        {/* ฝั่งซ้าย: ประวัติการศึกษา และข้อคิด */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-1 text-slate-900 inline-block">
              ประวัติการศึกษา
            </h3>
            <div className="h-[3px] w-10 bg-blue-600 mb-4 rounded-full"></div>
            
            <div className="bg-gradient-to-br from-white/95 via-white/80 to-blue-50/30 border border-slate-200/60 p-6 rounded-2xl shadow-[0_15px_30px_rgba(15,23,42,0.02)] hover:shadow-[0_20px_40px_-5px_rgba(37,99,235,0.12)] hover:border-blue-300/50 transition-all duration-500 backdrop-blur-sm mt-4">
              <div className="flex gap-5 items-start">
                <span className="text-2.5xl w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-[0_8px_16px_rgba(37,99,235,0.25)] flex-shrink-0">
                  🎓
                </span>
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-blue-600 bg-blue-50/70 border border-blue-100/50 px-3 py-1 rounded-full shadow-sm">
                    2566 - ปัจจุบัน
                  </span>
                  <h4 className="text-base font-extrabold text-slate-900 mt-2">
                    วิทยาศาสตรบัณฑิต สาขาวิชาวิทยาการคอมพิวเตอร์
                  </h4>
                  <p className="text-sm text-slate-500 font-medium">มหาวิทยาลัยมหาสารคาม (คณะวิทยาการสารสนเทศ)</p>
                  <p className="text-sm font-bold text-blue-700 bg-gradient-to-r from-blue-500/8 to-indigo-500/8 border border-blue-200/50 px-4 py-2 rounded-xl inline-flex items-center gap-2 shadow-[0_4px_12px_rgba(37,99,235,0.02)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    เกรดเฉลี่ยสะสม (GPAX): 3.85
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-5 items-center bg-gradient-to-br from-blue-50/70 via-indigo-50/30 to-white/70 border border-slate-200/40 border-l-4 border-l-blue-600 p-5.5 rounded-2xl shadow-[0_10px_25px_-5px_rgba(37,99,235,0.04)] backdrop-blur-sm">
            <span className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
              🎯
            </span>
            <p className="text-[13.5px] leading-relaxed text-slate-600 m-0">
              มีความมุ่งมั่นในการเรียนรู้อย่างไม่หยุดยั้ง เพื่อนำทักษะด้าน <strong className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-extrabold">Full-stack Development</strong> และ<strong className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent font-extrabold">การจัดการฐานข้อมูล</strong> มาประยุกต์สร้างประโยชน์ให้กับองค์กรและผู้ใช้งานจริง
            </p>
          </div>
        </div>

        {/* ฝั่งขวา: ประสบการณ์การเป็นผู้ช่วยสอน */}
        <div className="relative bg-white/70 border border-slate-200/60 p-7 rounded-2xl shadow-[0_15px_30px_rgba(15,23,42,0.02)] hover:shadow-[0_20px_40px_-5px_rgba(37,99,235,0.06)] hover:border-blue-100 transition-all duration-300 backdrop-blur-sm">
          <span className="absolute top-5 right-5 bg-indigo-50/80 border border-indigo-100/50 text-indigo-600 text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
            2024 - 2026
          </span>
          
          <h3 className="text-xl font-bold mb-1 text-slate-900 inline-block">
            ประสบการณ์ผู้ช่วยสอน (TA)
          </h3>
          <div className="h-[3px] w-10 bg-indigo-600 mb-6 rounded-full"></div>
          
          <ul className="flex flex-col gap-6 mt-4">
            <li className="flex gap-4 items-start">
              <span className="text-xl p-2.5 rounded-xl bg-slate-50 border border-slate-100 w-11 h-11 flex items-center justify-center flex-shrink-0 shadow-sm">💻</span>
              <div className="space-y-1">
                <h5 className="text-[15px] font-bold text-slate-900">ผู้ช่วยสอนรายวิชาการเขียนโปรแกรม (Programming)</h5>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  เป็นผู้ช่วยสอนในรายวิชาหลักของสายวิทยาการคอมพิวเตอร์ ช่วยอธิบายคอนเซปต์และแก้ปัญหาในการเขียนโปรแกรมเบื้องต้นให้กับนิสิตในคลาสเรียน
                </p>
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <span className="text-xl p-2.5 rounded-xl bg-slate-50 border border-slate-100 w-11 h-11 flex items-center justify-center flex-shrink-0 shadow-sm">📂</span>
              <div className="space-y-1">
                <h5 className="text-[15px] font-bold text-slate-900">โครงสร้างข้อมูลและอัลกอริทึม (Data Structures & Algorithms)</h5>
                <p className="text-[13px] text-slate-500 leading-relaxed">
                  ชี้แนะแนวทางกระบวนการคิดวิเคราะห์เชิงตรรกะ การออกแบบอัลกอริทึม และช่วยนิสิตดีบั๊ก (Debug) โค้ดที่ซับซ้อนในคาบปฏิบัติการ
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
