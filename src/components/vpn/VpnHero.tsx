
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const VpnHero = () => {
  return (
    <section className="relative pt-20 lg:pt-28 pb-16 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          >
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 text-gray-900">
              Proteja sua privacidade online com VPN Pro
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-8">
              Navegue com segurança, acesse conteúdo sem restrições e proteja seus dados pessoais com nossa VPN de alta velocidade.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button size="lg" className="bg-onda-blue hover:bg-onda-blue-dark">
                Comece Agora
              </Button>
              <Button size="lg" variant="outline">
                Saiba Mais
              </Button>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <img 
              src="/placeholder.svg" 
              alt="VPN Pro Interface"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VpnHero;
