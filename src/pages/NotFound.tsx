
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from 'framer-motion';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    document.title = "Página não encontrada - ONDA 2025";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-onda-blue to-onda-teal text-white p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-md"
      >
        <div className="text-9xl font-bold mb-4">404</div>
        <h1 className="text-4xl font-bold mb-6">Página não encontrada</h1>
        <p className="text-xl text-white/80 mb-8">
          Parece que você está tentando surfar em uma onda que não existe... Vamos voltar para águas conhecidas?
        </p>
        <div className="relative">
          <Link to="/" className="btn-onda bg-white text-onda-blue text-lg inline-block">
            Voltar para o Início
          </Link>
        </div>
        
        {/* Wave Animation */}
        <div className="mt-12">
          <div className="relative">
            <div className="text-6xl animate-float">🌊</div>
            <div className="text-4xl absolute -right-10 bottom-4 animate-float" style={{ animationDelay: '1s' }}>🏄</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
