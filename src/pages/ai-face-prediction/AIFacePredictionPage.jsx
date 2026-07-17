import react from 'react';
import Navbar from '../../shared/components/Navbar';
import Footer from '../../shared/components/Footer';
import Hero from './components/Hero';

export default function AIFacePredictionPage() {
    return (
        <div className="app-wrapper">
            <Navbar/>
            <main className="main-content">
                <Hero/>
            </main>

            <Footer/>
        </div>   
    )
}