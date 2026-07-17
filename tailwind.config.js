/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // คุณสามารถจำลองโทนสีเดิมของคุณที่นี่เพื่อนำไปเรียกใช้ใน Tailwind ได้ง่ายขึ้น
        accent: {
          light: 'rgba(37, 99, 235, 0.08)',
          DEFAULT: '#2563eb',
          hover: '#1d4ed8',
          border: 'rgba(37, 99, 235, 0.15)',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Kanit', 'sans-serif'],
        mono: ['Outfit', 'monospace'],
      }
    },
  },
  plugins: [],
}
