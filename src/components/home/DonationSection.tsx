
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronsRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const DonationSection = () => {
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  
  const donationAmounts = [20, 40, 80, 100];
  
  const handleDonationSelect = (amount: number) => {
    setSelectedAmount(amount);
  };
  
  const handleDonation = () => {
    if (!selectedAmount) {
      toast({
        title: "Selecione um valor",
        description: "Por favor, escolha um valor para doação ou seja um patrocinador.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Obrigado pela sua doação!",
      description: `Na versão final, aqui seria gerado o QR Code Pix para doação de R$${selectedAmount}.`,
      variant: "default",
    });
  };
  
  return (
    <section className="py-20 bg-gradient-to-br from-onda-teal to-onda-blue text-white" id="donation">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Apoie o ONDA! ❤️</h2>
          <div className="h-1 w-20 bg-white mx-auto mb-8"></div>
          <p className="text-lg max-w-2xl mx-auto">
            Seja parte dessa onda de solidariedade! Toda ajuda faz uma grande diferença na vida dos jovens.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-8 text-center">Escolha um valor para doação</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    className={`py-4 px-6 rounded-lg transition-all flex flex-col items-center justify-center ${
                      selectedAmount === amount 
                        ? 'bg-white text-onda-blue ring-4 ring-white/50' 
                        : 'bg-white/10 hover:bg-white/30'
                    }`}
                    onClick={() => handleDonationSelect(amount)}
                  >
                    <span className="text-xl font-bold mb-1">R${amount}</span>
                    <Heart size={16} className={selectedAmount === amount ? 'text-onda-teal' : ''} />
                  </button>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  className="bg-white hover:bg-white/90 text-onda-blue font-medium text-lg px-8 py-6 h-auto rounded-full w-full sm:w-auto"
                  onClick={handleDonation}
                >
                  <Heart size={18} className="mr-2" />
                  Doar agora
                </Button>
                
                <Button variant="outline" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium text-lg px-8 py-6 h-auto rounded-full w-full sm:w-auto">
                  <ChevronsRight size={18} className="mr-2" />
                  <a href="/sponsors">Seja um Patrocinador Oficial</a>
                </Button>
              </div>
              
              <p className="mt-8 text-sm text-center text-white/80">
                Suas doações ajudam a tornar o ONDA acessível para jovens de todas as realidades econômicas e 
                contribuem para a qualidade das atividades oferecidas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
