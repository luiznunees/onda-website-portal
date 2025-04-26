
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Segurança Máxima",
    description: "Criptografia de nível militar para proteger seus dados",
    icon: "🔒",
  },
  {
    title: "Alta Velocidade",
    description: "Servidores otimizados para streaming e downloads",
    icon: "⚡",
  },
  {
    title: "Sem Logs",
    description: "Sua privacidade é garantida, não mantemos registros",
    icon: "🛡️",
  },
];

const VpnFeatures = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Por que escolher VPN Pro?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra os benefícios que fazem da VPN Pro a escolha ideal para sua segurança online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-4xl mb-4 block">{feature.icon}</span>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <div className="mt-4 flex items-center text-onda-blue">
                <Check className="w-5 h-5 mr-2" />
                <span>Incluído em todos os planos</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VpnFeatures;
