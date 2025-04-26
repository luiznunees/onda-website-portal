
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const plans = [
  {
    name: "Básico",
    price: "19,90",
    period: "/mês",
    description: "Perfeito para iniciantes",
    features: [
      "1 dispositivo",
      "Velocidade padrão",
      "Servidores em 10 países",
      "Suporte por email",
    ],
  },
  {
    name: "Pro",
    price: "39,90",
    period: "/mês",
    description: "Para usuários exigentes",
    features: [
      "5 dispositivos",
      "Velocidade premium",
      "Servidores em 60 países",
      "Suporte 24/7",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "79,90",
    period: "/mês",
    description: "Solução empresarial completa",
    features: [
      "Dispositivos ilimitados",
      "Velocidade máxima",
      "Servidores em 100 países",
      "Suporte prioritário",
    ],
  },
];

const VpnPricing = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Escolha seu plano
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Planos flexíveis para atender às suas necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.popular ? 'border-onda-blue shadow-lg' : ''}`}>
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-onda-blue text-white px-4 py-1 rounded-full text-sm font-medium">
                  Mais Popular
                </span>
              )}
              
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">R$ {plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full ${plan.popular ? 'bg-onda-blue hover:bg-onda-blue-dark' : ''}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Escolher Plano
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VpnPricing;
