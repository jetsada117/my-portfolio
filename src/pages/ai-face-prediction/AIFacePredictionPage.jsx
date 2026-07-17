import react from 'react';
import { useEffect } from 'react';
import Navbar from '../../shared/components/Navbar';
import Footer from '../../shared/components/Footer';
import Hero from './components/Hero';

export default function AIFacePredictionPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="app-wrapper">
            <Navbar/>
            <main className="main-content">
                <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
                    <div className="content-wrapper text-lg font-bold text-slate-600">
                        ขออภัยครับ หน้า AIFacePredictionPage ยังอยู่ระหว่างการพัฒนาและปรับปรุงดีไซน์ครับ
                    </div>
                </div>
            </main>

            <Footer/>
        </div>   
    )
}