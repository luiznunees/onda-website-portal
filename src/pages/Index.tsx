
import { useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import VpnHero from "@/components/vpn/VpnHero";
import VpnFeatures from "@/components/vpn/VpnFeatures";
import VpnPricing from "@/components/vpn/VpnPricing";
import VpnTestimonials from "@/components/vpn/VpnTestimonials";

const Index = () => {
  useEffect(() => {
    document.title = "VPN Pro - Sua privacidade em primeiro lugar";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      
      <main className="flex-grow">
        <VpnHero />
        <VpnFeatures />
        <VpnPricing />
        <VpnTestimonials />
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
