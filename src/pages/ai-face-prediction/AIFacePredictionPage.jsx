import React, { useEffect } from 'react';
import Navbar from '../../shared/components/Navbar';
import Footer from '../../shared/components/Footer';
import Hero from './components/Hero';
import { 
  Scan, 
  Search, 
  Server, 
  Database, 
  ShieldCheck, 
  Smartphone,
  Cpu,
  Zap,
  CheckCircle2
} from 'lucide-react';

export default function AIFacePredictionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ข้อมูลฟีเจอร์หลัก
  const features = [
    {
      icon: <Scan className="w-7 h-7 text-blue-600" />,
      title: 'AI Face Prediction & Detection',
      description: 'วิเคราะห์และทำนายลักษณะใบหน้าได้อย่างเที่ยงตรงด้วย AI Model ที่ประมวลผลข้อมูลคุณลักษณะของใบหน้า'
    },
    {
      icon: <Search className="w-7 h-7 text-purple-600" />,
      title: 'Semantic Text Search',
      description: 'ระบบค้นหาใบหน้าอัจฉริยะด้วยภาษาธรรมชาติ ผู้ใช้สามารถระบุลักษณะที่ต้องการด้วยข้อความเพื่อค้นหาใบหน้าที่ตรงกัน'
    },
    {
      icon: <Server className="w-7 h-7 text-emerald-600" />,
      title: 'FastAPI High-Performance Backend',
      description: 'สถาปัตยกรรมระบบหลังบ้านด้วย Python FastAPI ประมวลผลและส่งข้อมูลแบบ asynchronous รวดเร็วและเสถียร'
    },
    {
      icon: <Smartphone className="w-7 h-7 text-sky-600" />,
      title: 'Cross-Platform Mobile App (Flutter)',
      description: 'หน้าแอปพลิเคชันมือถือพัฒนาด้วย Flutter ให้ประสบการณ์การใช้งานที่ลื่นไหล รองรับทั้งระบบ iOS และ Android'
    }
  ];

  // สถาปัตยกรรมระบบ
  const architectureSteps = [
    { step: '01', name: 'Mobile Client (Flutter)', desc: 'ส่งคำขอค้นหาภาพ หรือข้อความ Semantic Search จากผู้ใช้' },
    { step: '02', name: 'FastAPI Gateway', desc: 'รับคำขอ ทำ Authentication และจัดคิวคำสั่งส่งต่อให้โมเดลประมวลผล' },
    { step: '03', name: 'AI Prediction Engine', desc: 'ถอดรหัสคุณลักษณะใบหน้า (Vector Embedding) และค้นหาความเหมือน' },
    { step: '04', name: 'Database (MySQL)', desc: 'เก็บบันทึกข้อมูลโปรไฟล์และผลลัพธ์เพื่อส่งคืนให้ผู้ใช้อย่างรวดเร็ว' }
  ];

  return (
    <div className="app-wrapper min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      <Navbar />

      <main className="main-content flex-grow">
        {/* ส่วน Hero Component */}
        <Hero />

        {/* ส่วนฟีเจอร์หลัก (Key Features) */}
        <section id="project-details" className="py-16 px-6 max-w-[1200px] mx-auto w-full border-t border-slate-200/60">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Key Capabilities
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-3 mb-4">
              คุณสมบัติเด่นของระบบ
            </h2>
            <p className="text-slate-600">
              การทำงานร่วมกันระหว่างโมเดลปัญญาประดิษฐ์และสถาปัตยกรรมซอฟต์แวร์ที่ออกแบบมาเพื่อประสิทธิภาพสูงสุด
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex items-start space-x-5"
              >
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ส่วนสถาปัตยกรรมระบบ (System Architecture) */}
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
      </main>

      <Footer />
    </div>   
  );
}