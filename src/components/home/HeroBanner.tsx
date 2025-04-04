
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroBanner = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-onda-blue-light to-onda-blue flex items-center justify-center overflow-hidden">
      {/* Animated Waves Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 right-0 h-[50vh]">
          <div className="absolute bottom-0 left-0 w-[200%] h-[60px] bg-[url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%20viewBox%3D%220%200%201200%20120%22%20preserveAspectRatio%3D%22none%22%3E%3Cpath%20d%3D%22M0%2C0%20C150%2C100%20271%2C0%20501%2C0%20C727%2C0%20913%2C100%201200%2C0%20L1200%2C120%20L0%2C120%20Z%22%20fill%3D%22%23ffffff%22%20%2F%3E%3C%2Fsvg%3E')] repeat-x animate-wave"></div>
          <div className="absolute bottom-0 left-0 w-[200%] h-[70px] opacity-50 bg-[url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22none%22%20viewBox%3D%220%200%201200%20120%22%20preserveAspectRatio%3D%22none%22%3E%3Cpath%20d%3D%22M0%2C0%20C150%2C100%20271%2C0%20501%2C0%20C727%2C0%20913%2C100%201200%2C0%20L1200%2C120%20L0%2C120%20Z%22%20fill%3D%22%23ffffff%22%20%2F%3E%3C%2Fsvg%3E')] repeat-x animate-wave"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Viva a melhor experiência da sua vida! 🌊✨
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-10">
            Junte-se a nós para dias incríveis de aventura, amizade e descobertas no ONDA 2025!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/register" 
              className="btn-onda btn-onda-accent text-lg px-8 py-4"
            >
              Quero garantir minha vaga!
            </Link>
            <Link 
              to="/about" 
              className="btn-onda bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white text-lg"
            >
              Saiba mais
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;
