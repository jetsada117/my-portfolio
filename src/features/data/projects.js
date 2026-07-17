export const projects = [
  {
    id: 1,
    title: 'แอปพลิเคชัน AI ทำนายและค้นหาใบหน้า (โปรเจกต์จบ)',
    path: '/project/ai-face-prediction',
    category: 'mobile-ai',
    tech: ['Flutter', 'Python', 'FastAPI', 'MySQL', 'AI Model'],
    description: 'แอปพลิเคชันมือถือที่พัฒนาด้วย Flutter โดยใช้โมเดล AI ในการทำนายลักษณะใบหน้า และมีฟังก์ชันให้ผู้ใช้พิมพ์ข้อความอธิบายความต้องการ (Semantic Search) เพื่อค้นหาใบหน้าที่ตรงกับลักษณะนั้นๆ ส่วนระบบหลังบ้าน (Backend) พัฒนาด้วย Python ผ่านเฟรมเวิร์ก FastAPI เชื่อมต่อฐานข้อมูล MySQL ได้อย่างรวดเร็วและยืดหยุ่น',
    icon: '🤖',
    featured: true
  },
  {
    id: 2,
    title: 'แอปพลิเคชันเดลิเวอรีแบบเรียลไทม์ (Delivery Application)',
    path: '/project/delivery-app',
    category: 'mobile',
    tech: ['Flutter', 'Firebase', 'Real-time Tracking'],
    description: 'แอปพลิเคชันมือถือสำหรับติดตามและจัดการส่งพัสดุแบบเรียลไทม์ พัฒนาด้วย Flutter ร่วมกับบริการ Firebase (Firestore & Cloud Messaging) ผู้ใช้สามารถใช้ส่งและรับพัสดุ พร้อมทั้งติดตามสถานะการขนส่งรวมถึงดูตำแหน่งพิกัดของพนักงานขับรถได้สดๆ บนหน้าจอตลอดเวลา',
    icon: '📦',
    featured: true
  },
  {
    id: 3,
    title: 'เว็บไซต์ร้านจำลองขายและเติมเกม (Game Shop Website)',
    path: '/project/game-shop',
    category: 'web',
    tech: ['Angular', 'Bootstrap', 'Python', 'FastAPI'],
    description: 'แพลตฟอร์มจำลองร้านค้าสำหรับการซื้อ/ขายเกมและเติมเงินเกมออนไลน์ ออกแบบส่วนหน้าบ้าน (Frontend) ด้วย Angular และ Bootstrap ให้มีโครงสร้างเรียบร้อยและน่าใช้ และพัฒนา API ในส่วนหลังบ้านด้วย Python + FastAPI เพื่อความสะดวกรวดเร็วในการประมวลผลคำสั่งซื้อ',
    icon: '🎮',
    featured: false
  },
  {
    id: 4,
    title: 'ระบบลงทะเบียนเช็คอินเข้าร่วมงาน (Event Check-In System)',
    path: '/project/event-check-in',
    category: 'web',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'Bootstrap'],
    description: 'ระบบลงทะเบียนออนไลน์และเช็คอินเข้าร่วมงานสัมมนา/นิทรรศการ เพื่ออำนวยความสะดวกให้ผู้จัดงานและผู้ลงทะเบียน โดยผู้ใช้สามารถสแกน QR Code เพื่อยืนยันตัวตนและเข้างานได้อย่างถูกต้องรวดเร็ว พัฒนาโดยใช้ภาษา PHP ร่วมกับฐานข้อมูล MySQL และ Bootstrap สำหรับการจัดหน้าเว็บให้รองรับ Responsive',
    icon: '🎫',
    featured: false
  }
];
