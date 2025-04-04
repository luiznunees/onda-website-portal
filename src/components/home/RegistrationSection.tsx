
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, QrCode, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const RegistrationSection = () => {
  const { toast } = useToast();
  const [selectedPayment, setSelectedPayment] = useState<'pix' | 'later' | null>(null);
  
  const handlePaymentSelect = (method: 'pix' | 'later') => {
    setSelectedPayment(method);
    
    if (method === 'pix') {
      toast({
        title: "QR Code Pix será gerado",
        description: "Na versão completa, aqui geramos o QR Code para pagamento imediato.",
        variant: "default",
      });
    } else {
      toast({
        title: "Inscrição com pagamento posterior",
        description: "Você poderá pagar diretamente com um responsável posteriormente.",
        variant: "default",
      });
    }
  };
  
  const handleContinue = () => {
    if (!selectedPayment) {
      toast({
        title: "Escolha um método de pagamento",
        description: "Selecione como deseja realizar o pagamento para continuar.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Redirecionando para formulário",
      description: "Na versão completa, você seria direcionado para o formulário de inscrição.",
      variant: "default",
    });
  };
  
  return (
    <section className="py-20 bg-gray-50" id="registration">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-onda-blue">Inscrição Rápida e Fácil</h2>
          <div className="h-1 w-20 bg-onda-teal mx-auto mb-8"></div>
          <p className="text-lg max-w-2xl mx-auto">
            Garanta já sua vaga para o ONDA 2025 em poucos passos! Escolha como você prefere pagar.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6">Escolha a forma de pagamento:</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pix Option */}
                <div 
                  className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                    selectedPayment === 'pix' 
                      ? 'border-onda-teal bg-onda-teal/10' 
                      : 'border-gray-200 hover:border-onda-teal/50'
                  }`}
                  onClick={() => handlePaymentSelect('pix')}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <QrCode className="text-onda-teal mr-3" size={24} />
                      <h4 className="text-xl font-medium">Pix Imediato</h4>
                    </div>
                    {selectedPayment === 'pix' && <Check className="text-onda-teal" size={24} />}
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <Check size={16} className="mr-2 mt-1 text-onda-teal flex-shrink-0" />
                      <span>Gere o QR Code na hora</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="mr-2 mt-1 text-onda-teal flex-shrink-0" />
                      <span>Confirmação instantânea</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="mr-2 mt-1 text-onda-teal flex-shrink-0" />
                      <span>Garanta sua vaga imediatamente</span>
                    </li>
                  </ul>
                </div>
                
                {/* Pay Later Option */}
                <div 
                  className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                    selectedPayment === 'later' 
                      ? 'border-onda-teal bg-onda-teal/10' 
                      : 'border-gray-200 hover:border-onda-teal/50'
                  }`}
                  onClick={() => handlePaymentSelect('later')}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <ArrowRight className="text-onda-teal mr-3" size={24} />
                      <h4 className="text-xl font-medium">Pagar Depois</h4>
                    </div>
                    {selectedPayment === 'later' && <Check className="text-onda-teal" size={24} />}
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <Check size={16} className="mr-2 mt-1 text-onda-teal flex-shrink-0" />
                      <span>Pague diretamente ao responsável</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="mr-2 mt-1 text-onda-teal flex-shrink-0" />
                      <span>Opção de Pix ou dinheiro</span>
                    </li>
                    <li className="flex items-start">
                      <Check size={16} className="mr-2 mt-1 text-onda-teal flex-shrink-0" />
                      <span>Cadastre-se agora e pague depois</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button 
                  className="bg-onda-blue hover:bg-onda-blue-dark text-white text-lg px-8 py-6 h-auto rounded-full"
                  onClick={handleContinue}
                >
                  Continuar para o formulário
                </Button>
                <p className="mt-4 text-sm text-gray-500">
                  Ao continuar, você concorda com os termos de participação do ONDA 2025.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
