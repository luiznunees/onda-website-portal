
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, QrCode, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

const RegistrationSection = () => {
  const { toast } = useToast();
  const [selectedPayment, setSelectedPayment] = useState<'pix' | 'later' | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    city: '',
    neighborhood: '',
    parentName: '',
    parentPhone: '',
    acceptTerms: false
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
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
    
    setShowForm(true);
  };
  
  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.age || !formData.city || !formData.neighborhood || !formData.parentName || !formData.parentPhone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }
    
    if (!formData.acceptTerms) {
      toast({
        title: "Termos e Condições",
        description: "Você precisa aceitar os termos para prosseguir.",
        variant: "destructive",
      });
      return;
    }
    
    // Age validation
    const age = parseInt(formData.age);
    if (isNaN(age) || age < 12 || age > 14) {
      toast({
        title: "Idade inválida",
        description: "O evento é para jovens entre 12 e 14 anos.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Inscrição recebida!",
      description: selectedPayment === 'pix' 
        ? "Seu QR Code Pix será enviado para o e-mail cadastrado." 
        : "Entre em contato com um dos organizadores para efetuar o pagamento.",
      variant: "default",
    });
    
    // Reset form
    setFormData({
      fullName: '',
      age: '',
      city: '',
      neighborhood: '',
      parentName: '',
      parentPhone: '',
      acceptTerms: false
    });
    
    setShowForm(false);
    setSelectedPayment(null);
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
          {/* Registration info card */}
          <Card className="mb-10 border-onda-blue/20 shadow-md">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex flex-col items-center p-4 bg-onda-blue/5 rounded-lg text-center">
                  <span className="text-onda-blue text-2xl font-bold mb-2">R$ 100,00</span>
                  <span className="text-gray-600">Custo da inscrição</span>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-onda-blue/5 rounded-lg text-center">
                  <span className="text-onda-blue text-2xl font-bold mb-2">12-14 anos</span>
                  <span className="text-gray-600">Faixa etária</span>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-onda-blue/5 rounded-lg text-center">
                  <span className="text-onda-blue text-2xl font-bold mb-2">Xangri-lá</span>
                  <span className="text-gray-600">e região</span>
                </div>
                
                <div className="flex flex-col items-center p-4 bg-onda-blue/5 rounded-lg text-center">
                  <span className="text-onda-blue text-2xl font-bold mb-2">50 vagas</span>
                  <span className="text-gray-600">Apenas disponíveis</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {!showForm ? (
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
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">Formulário de Inscrição</h3>
                
                <form onSubmit={handleSubmitForm}>
                  <div className="space-y-8">
                    {/* Participant Information */}
                    <div>
                      <h4 className="text-lg font-semibold text-onda-blue mb-4">Informações do Participante</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Full Name */}
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Nome Completo *</Label>
                          <Input 
                            id="fullName" 
                            name="fullName" 
                            value={formData.fullName}
                            onChange={handleInputChange}
                            placeholder="Nome completo do participante"
                            required
                          />
                        </div>
                        
                        {/* Age */}
                        <div className="space-y-2">
                          <Label htmlFor="age">Idade *</Label>
                          <Input 
                            id="age" 
                            name="age" 
                            value={formData.age}
                            onChange={handleInputChange}
                            type="number" 
                            min="12" 
                            max="14"
                            placeholder="Entre 12 e 14 anos"
                            required
                          />
                        </div>
                        
                        {/* City */}
                        <div className="space-y-2">
                          <Label htmlFor="city">Cidade *</Label>
                          <Input 
                            id="city" 
                            name="city" 
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Sua cidade"
                            required
                          />
                        </div>
                        
                        {/* Neighborhood */}
                        <div className="space-y-2">
                          <Label htmlFor="neighborhood">Bairro *</Label>
                          <Input 
                            id="neighborhood" 
                            name="neighborhood" 
                            value={formData.neighborhood}
                            onChange={handleInputChange}
                            placeholder="Seu bairro"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Parent/Guardian Information */}
                    <div>
                      <h4 className="text-lg font-semibold text-onda-blue mb-4">Informações do Responsável</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Parent Name */}
                        <div className="space-y-2">
                          <Label htmlFor="parentName">Nome do Responsável *</Label>
                          <Input 
                            id="parentName" 
                            name="parentName" 
                            value={formData.parentName}
                            onChange={handleInputChange}
                            placeholder="Nome completo do responsável"
                            required
                          />
                        </div>
                        
                        {/* Parent Phone */}
                        <div className="space-y-2">
                          <Label htmlFor="parentPhone">Telefone do Responsável *</Label>
                          <Input 
                            id="parentPhone" 
                            name="parentPhone" 
                            value={formData.parentPhone}
                            onChange={handleInputChange}
                            placeholder="(XX) XXXXX-XXXX"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Terms and Conditions */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox 
                          id="acceptTerms" 
                          checked={formData.acceptTerms}
                          onCheckedChange={(checked) => handleCheckboxChange('acceptTerms', checked === true)}
                        />
                        <div className="grid gap-1.5 leading-none">
                          <Label htmlFor="acceptTerms" className="text-sm font-normal">
                            Eu aceito os termos e condições do ONDA 2025, incluindo a autorização de uso de imagem e dados para fins 
                            relacionados ao evento. *
                          </Label>
                        </div>
                      </div>
                    </div>
                    
                    {/* Submit and Cancel Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                      <Button 
                        type="submit"
                        className="bg-onda-blue hover:bg-onda-blue-dark text-white text-lg px-8 py-6 h-auto sm:flex-1"
                      >
                        Finalizar Inscrição
                      </Button>
                      <Button 
                        type="button"
                        variant="outline"
                        className="border-onda-blue text-onda-blue hover:bg-onda-blue/5 text-lg px-8 py-6 h-auto sm:flex-1"
                        onClick={() => setShowForm(false)}
                      >
                        Voltar
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
