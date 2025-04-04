
import { useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import HeroBanner from "@/components/home/HeroBanner";
import AboutSection from "@/components/home/AboutSection";
import RegistrationSection from "@/components/home/RegistrationSection";
import DonationSection from "@/components/home/DonationSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import FaqSection from "@/components/home/FaqSection";

const Index = () => {
  useEffect(() => {
    document.title = "ONDA 2025 - Viva a melhor experiência da sua vida! 🌊✨";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        <HeroBanner />
        <AboutSection />
        <RegistrationSection />
        
        {/* Wave Divider */}
        <div className="relative h-24 bg-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0 w-full">
            <path fill="#0099ff" fillOpacity="1" d="M0,224L48,218.7C96,213,192,203,288,208C384,213,480,235,576,234.7C672,235,768,213,864,197.3C960,181,1056,171,1152,181.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        
        <DonationSection />
        <TestimonialSection />
        <FaqSection />
      </main>
      
      <Footer />
      
      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 hover:bg-green-600 transition-colors text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        >
          <span className="text-2xl">💬</span>
        </a>
      </motion.div>
    </div>
  );
};

export default Index;
