
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Calendar, Compass, Heart, MessageSquare, Users } from "lucide-react";

type RoleType = "marujo" | "equipe" | null;
 
const TeamPage = () => {
  const { toast } = useToast();
  const [selectedRole, setSelectedRole] = useState<RoleType>(null);
  
  useEffect(() => {
    document.title = "Marujos & Equipe - ONDA 2025";
  }, []);
  
  const handleRoleSelect = (role: RoleType) => {
    setSelectedRole(role);
  };
  
  const handleRegister = () => {
    if (!selectedRole) {
      toast({
        title: "Escolha uma função",
        description: "Selecione se você deseja participar como Marujo ou Equipe de Apoio.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Inscrição iniciada",
      description: `Na versão final, aqui você seria direcionado para o formulário de ${selectedRole === 'marujo' ? 'Marujo' : 'Equipe de Apoio'}.`,
      variant: "default",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-onda-blue to-onda-teal text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Faça parte da tripulação ONDA 2025! 🚀🌊
              </h1>
              
              <p className="text-xl max-w-3xl mx-auto mb-10">
                Contribua para transformar a vida de jovens participando como Marujo ou Equipe de Apoio.
                Uma experiência que mudará não apenas a vida deles, mas a sua também!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div 
                  className={`bg-white/20 backdrop-blur-sm rounded-xl p-8 cursor-pointer transition-all ${
                    selectedRole === 'marujo' ? 'ring-4 ring-white' : 'hover:bg-white/30'
                  }`}
                  onClick={() => handleRoleSelect('marujo')}
                >
                  <div className="text-2xl font-bold mb-3">Sou Marujo</div>
                  <p className="text-white/90">
                    Lidere, inspire e esteja diretamente envolvido com os surfistas.
                    Marujos são o coração da experiência ONDA!
                  </p>
                </div>
                
                <div 
                  className={`bg-white/20 backdrop-blur-sm rounded-xl p-8 cursor-pointer transition-all ${
                    selectedRole === 'equipe' ? 'ring-4 ring-white' : 'hover:bg-white/30'
                  }`}
                  onClick={() => handleRoleSelect('equipe')}
                >
                  <div className="text-2xl font-bold mb-3">Sou Equipe de Apoio</div>
                  <p className="text-white/90">
                    Trabalhe nos bastidores para garantir que tudo funcione perfeitamente.
                    Essencial para o sucesso do ONDA!
                  </p>
                </div>
              </div>
              
              <div className="mt-10">
                <Button 
                  className="bg-onda-yellow hover:bg-onda-yellow-dark text-foreground text-lg px-8 py-6 h-auto rounded-full"
                  onClick={handleRegister}
                >
                  Quero me inscrever agora!
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Roles Explanation */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-onda-blue">Funções Explicadas</h2>
              <div className="h-1 w-20 bg-onda-teal mx-auto mb-8"></div>
              <p className="text-lg max-w-2xl mx-auto">
                Conheça mais detalhes sobre como você pode contribuir para o ONDA 2025!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Marujo */}
              <div className="col-span-1 md:col-span-3 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-onda-teal flex items-center">
                  <Users className="mr-2" /> Marujos
                </h3>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="mb-4 text-lg">
                    Os Marujos são os líderes que acompanham diretamente os surfistas durante toda a experiência do ONDA. 
                    Eles são responsáveis por:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white rounded-lg p-5 shadow-sm">
                      <Heart className="text-onda-blue mb-3" size={24} />
                      <h4 className="font-bold mb-2">Cuidado e Atenção</h4>
                      <p className="text-gray-600">
                        Cuidar dos surfistas, garantir seu bem-estar e segurança durante todas as atividades.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-5 shadow-sm">
                      <Compass className="text-onda-blue mb-3" size={24} />
                      <h4 className="font-bold mb-2">Orientação e Inspiração</h4>
                      <p className="text-gray-600">
                        Guiar os jovens nas atividades, incentivá-los a participar e ajudá-los a extrair o máximo da experiência.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-5 shadow-sm">
                      <MessageSquare className="text-onda-blue mb-3" size={24} />
                      <h4 className="font-bold mb-2">Comunicação e Conexão</h4>
                      <p className="text-gray-600">
                        Construir pontes de diálogo e criar um ambiente acolhedor onde todos se sintam incluídos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Equipe de Apoio */}
              <div className="col-span-1 md:col-span-3">
                <h3 className="text-2xl font-bold mb-6 text-onda-teal flex items-center">
                  <Calendar className="mr-2" /> Equipe de Apoio
                </h3>
                
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="mb-4 text-lg">
                    A Equipe de Apoio trabalha nos bastidores, garantindo que toda a logística funcione perfeitamente. 
                    São essenciais para:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white rounded-lg p-5 shadow-sm">
                      <Calendar className="text-onda-blue mb-3" size={24} />
                      <h4 className="font-bold mb-2">Organização e Logística</h4>
                      <p className="text-gray-600">
                        Preparar os espaços, materiais e equipamentos necessários para cada atividade.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-5 shadow-sm">
                      <Users className="text-onda-blue mb-3" size={24} />
                      <h4 className="font-bold mb-2">Apoio aos Participantes</h4>
                      <p className="text-gray-600">
                        Auxiliar com alimentação, acomodação e necessidades especiais dos participantes.
                      </p>
                    </div>
                    
                    <div className="bg-white rounded-lg p-5 shadow-sm">
                      <Heart className="text-onda-blue mb-3" size={24} />
                      <h4 className="font-bold mb-2">Energia e Disposição</h4>
                      <p className="text-gray-600">
                        Manter o ambiente energizado e solucionar rapidamente quaisquer imprevistos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <Link 
                to="/register" 
                className="btn-onda inline-flex items-center"
              >
                <span>Inscreva-se como parte da tripulação</span>
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Team FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-onda-blue">Perguntas Frequentes</h2>
              <div className="h-1 w-20 bg-onda-teal mx-auto mb-8"></div>
              <p className="text-lg max-w-2xl mx-auto">
                Esclareça suas dúvidas sobre participar como Marujo ou Equipe de Apoio.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-onda-teal">Preciso ter experiência anterior?</h3>
                <p>Não é necessário experiência prévia, mas entusiasmo e disposição são essenciais. Forneceremos treinamento adequado para cada função.</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-onda-teal">Qual é o tempo de dedicação necessário?</h3>
                <p>Além dos dias do evento, haverá encontros preparatórios. Para Marujos, são necessários pelo menos 3 encontros prévios. Para Equipe de Apoio, 1-2 encontros, dependendo da área de atuação.</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-3 text-onda-teal">Existe algum custo para participar como voluntário?</h3>
                <p>Não há custo. Todos os voluntários recebem alimentação e, dependendo da necessidade, hospedagem durante o evento.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-onda-teal">Quais são os requisitos mínimos?</h3>
                <p>Para Marujos: ter mais de 18 anos, comprometimento com os valores do ONDA e disponibilidade total durante o evento. Para Equipe de Apoio: ter mais de 16 anos (com autorização dos responsáveis) e disponibilidade conforme a escala de sua função.</p>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank"
                rel="noreferrer"
                className="btn-onda bg-onda-teal inline-flex items-center"
              >
                <span className="mr-2">💬</span> Outras dúvidas? Fale conosco!
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TeamPage;
