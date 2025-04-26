
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const AboutSection = () => {
  // Countdown state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  // Set event date (assuming ONDA 2025 is on January 1, 2025)
  const eventDate = new Date('2025-01-01T00:00:00');
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +eventDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };
    
    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();
    
    return () => clearInterval(timer);
  }, []);
  
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUpVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-onda-blue">O que é o ONDA?</h2>
          <div className="h-1 w-20 bg-onda-teal mx-auto mb-8"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <h3 className="text-2xl font-bold text-onda-teal mb-4">Uma experiência transformadora</h3>
            <p className="text-lg mb-6">
              O ONDA é um retiro vibrante que transforma jovens através de atividades divertidas, criando amizades 
              que duram para sempre e proporcionando momentos inesquecíveis.
            </p>
            <p className="text-lg mb-6">
              Em um ambiente seguro e acolhedor, os participantes vivem dias de aventura, reflexão e muita diversão 
              - uma verdadeira onda de emoções positivas que marcará suas vidas!
            </p>
            <div className="flex items-center space-x-2 text-onda-orange font-medium">
              <span className="text-xl">🌊</span>
              <p className="text-lg">Uma experiência que você nunca vai esquecer!</p>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariants}
          >
            <div className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-onda-blue to-onda-blue-light p-8 text-white">
              <h3 className="text-xl font-bold mb-6 text-center">Contagem regressiva para o ONDA 2025!</h3>
              
              <div className="grid grid-cols-4 gap-3 text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">{timeLeft.days}</div>
                  <div className="text-sm">Dias</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">{timeLeft.hours}</div>
                  <div className="text-sm">Horas</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                  <div className="text-sm">Minutos</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                  <div className="text-sm">Segundos</div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="animate-pulse font-medium">Não perca tempo! As vagas são limitadas!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
