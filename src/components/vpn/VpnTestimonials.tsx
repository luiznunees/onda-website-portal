
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Designer",
    content: "A melhor VPN que já usei. Velocidade incrível e suporte excepcional!",
    avatar: "👩",
  },
  {
    name: "João Santos",
    role: "Desenvolvedor",
    content: "Segurança de primeira linha e interface intuitiva. Recomendo!",
    avatar: "👨",
  },
  {
    name: "Ana Costa",
    role: "Empresária",
    content: "Essencial para minha empresa. Proteção confiável e velocidade consistente.",
    avatar: "👩",
  },
];

const VpnTestimonials = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Milhares de usuários confiam na VPN Pro para sua segurança online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <span className="text-4xl mb-4">{testimonial.avatar}</span>
                    <p className="text-gray-600 mb-4">{testimonial.content}</p>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VpnTestimonials;
