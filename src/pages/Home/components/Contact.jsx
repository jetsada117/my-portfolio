import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Github = ({ size = 20, className = '', strokeWidth = 2 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

/**
 * Contact Component (ช่องทางการติดต่อ)
 * เพิ่มมิติตัวเงาและการขยายขนาดเชิงโต้ตอบแบบมีระดับ
 */
export default function Contact() {
  const contactInfo = [
    {
      title: 'เบอร์โทรศัพท์',
      value: '096-685-7361',
      icon: Phone,
      link: 'tel:096-685-7361',
      actionText: 'โทรหาฉัน',
      isLink: true
    },
    {
      title: 'อีเมล',
      value: '66011212160@msu.ac.th',
      icon: Mail,
      link: 'mailto:66011212160@msu.ac.th',
      actionText: 'ส่งอีเมล',
      isLink: true
    },
    {
      title: 'GitHub',
      value: 'github.com/jetsada117',
      icon: Github,
      link: 'https://github.com/jetsada117',
      actionText: 'ดูโปรไฟล์ GitHub',
      isLink: true
    },
    {
      title: 'ที่อยู่ปัจจุบัน',
      value: 'อ. กันทรารมย์ จ. ศรีสะเกษ',
      icon: MapPin,
      link: '#',
      actionText: 'ที่อยู่ผู้สมัคร',
      isLink: false
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 max-w-[1200px] mx-auto w-full relative z-10">
      <div className="text-center mb-12">
        <span className="block text-sm font-bold uppercase tracking-widest text-blue-600 mb-2">Get in touch</span>
        <h2 className="text-3xl md:text-4xl font-extrabold relative inline-block mb-3 text-slate-900">ช่องทางการติดต่อ</h2>
        <div className="h-1.2 w-16 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full shadow-sm"></div>
      </div>

      <div className="max-w-[1200px] mx-auto text-center">
        <p className="text-base text-slate-500 mb-10 max-w-[650px] mx-auto leading-relaxed">
          หากท่านมีความสนใจร่วมงาน หรือต้องการสอบถามรายละเอียดเพิ่มเติมเกี่ยวกับการฝึกงาน สามารถติดต่อผมได้ผ่านช่องทางต่างๆ ด้านล่างนี้ครับ ยินดีตอบกลับเสมอครับ
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => {
            const CardComponent = info.isLink ? 'a' : 'div';
            const extraProps = info.isLink 
              ? { href: info.link, target: '_blank', rel: 'noopener noreferrer' } 
              : {};
            const IconComponent = info.icon;

            return (
              <CardComponent 
                key={index} 
                {...extraProps}
                className={`flex items-center gap-5 text-slate-600 border border-slate-200/60 bg-white/70 backdrop-blur-sm p-5 rounded-2xl shadow-[0_10px_25px_rgba(15,23,42,0.02)] transition-all duration-300 ${
                  info.isLink 
                    ? 'hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-10px_rgba(37,99,235,0.08)] hover:border-blue-500/20' 
                    : ''
                }`}
              >
                <span className="w-12 h-12 bg-blue-50/80 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 border border-blue-100/50 shadow-sm">
                  <IconComponent size={20} className="stroke-[2]" />
                </span>
                
                <div className="text-left">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                    {info.title}
                  </h4>
                  <p className="text-sm font-bold text-slate-800 break-all leading-snug">
                    {info.value}
                  </p>
                  {info.isLink && (
                    <span className="text-[11px] text-blue-600 font-bold mt-1 block">
                      {info.actionText} →
                    </span>
                  )}
                </div>
              </CardComponent>
            );
          })}
        </div>
      </div>
    </section>
  );
}
