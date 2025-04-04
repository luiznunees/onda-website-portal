
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Check, Heart, Gift, Star, Users } from "lucide-react";

const SponsorsPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    supportType: "",
    message: "",
  });
  
  useEffect(() => {
    document.title = "Seja um Patrocinador - ONDA 2025";
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Formulário enviado com sucesso!",
      description: "Obrigado pelo seu interesse! Entraremos em contato em breve.",
      variant: "default",
    });
    
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      supportType: "",
      message: "",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-onda-orange to-onda-yellow text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Seja um herói da juventude! Patrocine o ONDA 2025 ❤️
              </h1>
              
              <p className="text-xl max-w-3xl mx-auto mb-10">
                Junte-se a nós nessa missão de transformar vidas de jovens através do ONDA 2025!
                Seu patrocínio faz a diferença e traz visibilidade para sua marca.
              </p>
              
              <Button 
                className="bg-white text-onda-orange hover:bg-white/90 text-lg px-8 py-6 h-auto rounded-full font-medium"
                onClick={() => {
                  const formElement = document.getElementById("sponsor-form");
                  if (formElement) {
                    formElement.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <Heart size={18} className="mr-2" />
                Quero ser um patrocinador
              </Button>
            </motion.div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-onda-blue">Como Ser um Patrocinador</h2>
              <div className="h-1 w-20 bg-onda-teal mx-auto mb-8"></div>
              <p className="text-lg max-w-2xl mx-auto">
                Conheça os benefícios e o impacto positivo que sua marca terá ao apoiar o ONDA 2025.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Benefits */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-onda-orange">Benefícios para Patrocinadores</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-onda-orange/10 rounded-full p-1 mr-3 mt-1">
                      <Check className="text-onda-orange" size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold">Visibilidade da Marca</h4>
                      <p className="text-gray-600">Sua marca em camisetas, materiais promocionais e redes sociais do evento.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-onda-orange/10 rounded-full p-1 mr-3 mt-1">
                      <Check className="text-onda-orange" size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold">Responsabilidade Social</h4>
                      <p className="text-gray-600">Associe sua marca a um projeto de impacto social positivo.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-onda-orange/10 rounded-full p-1 mr-3 mt-1">
                      <Check className="text-onda-orange" size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold">Marketing Direto</h4>
                      <p className="text-gray-600">Acesso a um público jovem engajado e suas redes de contatos.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-onda-orange/10 rounded-full p-1 mr-3 mt-1">
                      <Check className="text-onda-orange" size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold">Reconhecimento na Comunidade</h4>
                      <p className="text-gray-600">Seja reconhecido como apoiador de iniciativas educacionais e comunitárias.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Impact */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-onda-teal">Onde Seu Apoio Será Aplicado</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                    <div className="bg-onda-teal/10 rounded-full p-2 mr-4">
                      <Users className="text-onda-teal" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Bolsas para Jovens</h4>
                      <p className="text-gray-600">Ajude a proporcionar a experiência ONDA para jovens sem condições financeiras.</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                    <div className="bg-onda-teal/10 rounded-full p-2 mr-4">
                      <Star className="text-onda-teal" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Qualidade das Atividades</h4>
                      <p className="text-gray-600">Materiais de alta qualidade para as atividades lúdicas e formativas.</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg flex items-start">
                    <div className="bg-onda-teal/10 rounded-full p-2 mr-4">
                      <Gift className="text-onda-teal" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Infraestrutura</h4>
                      <p className="text-gray-600">Contribua para um ambiente seguro e adequado para todas as experiências.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form */}
        <section className="py-20 bg-gray-50" id="sponsor-form">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-onda-blue">Torne-se um Patrocinador</h2>
              <div className="h-1 w-20 bg-onda-teal mx-auto mb-8"></div>
              <p className="text-lg max-w-2xl mx-auto">
                Preencha o formulário abaixo para iniciarmos uma parceria de sucesso.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nome Completo *</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-gray-700 font-medium mb-2">Empresa (opcional)</label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Nome da empresa"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-mail *</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="seu.email@exemplo.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">WhatsApp *</label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="(00) 00000-0000"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="supportType" className="block text-gray-700 font-medium mb-2">Tipo de Apoio</label>
                  <select
                    id="supportType"
                    name="supportType"
                    value={formData.supportType}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-onda-blue"
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="financial">Apoio Financeiro</option>
                    <option value="products">Doação de Produtos/Serviços</option>
                    <option value="media">Divulgação em Mídia</option>
                    <option value="other">Outro Tipo de Apoio</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensagem (opcional)</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Compartilhe mais detalhes sobre como você gostaria de apoiar o ONDA 2025"
                    rows={5}
                  />
                </div>
                
                <div className="text-center">
                  <Button 
                    type="submit"
                    className="bg-onda-orange hover:bg-onda-orange-dark text-white text-lg px-8 py-6 h-auto rounded-full"
                  >
                    Enviar Informações
                  </Button>
                  <p className="mt-4 text-sm text-gray-500">
                    Entraremos em contato em até 48 horas úteis.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
        
        {/* Testimonials/Thanks */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-onda-blue">
              Um agradecimento especial aos nossos patrocinadores
            </h2>
            
            <div className="flex flex-wrap justify-center items-center gap-10 max-w-3xl mx-auto opacity-70">
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">Logo 1</div>
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">Logo 2</div>
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">Logo 3</div>
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">Logo 4</div>
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">Logo 5</div>
              <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">Logo 6</div>
            </div>
            
            <p className="mt-16 text-lg max-w-2xl mx-auto text-gray-600">
              Graças a esses parceiros incríveis, mais jovens poderão vivenciar a experiência ONDA e transformar suas vidas.
              Junte-se a nós nessa missão!
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SponsorsPage;
