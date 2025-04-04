
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    id: 1,
    question: "O que é o ONDA?",
    answer: "O ONDA é um retiro para jovens cheio de diversão, aventuras e momentos de reflexão. É uma oportunidade única de fazer novas amizades, vivenciar experiências transformadoras e crescer como pessoa."
  },
  {
    id: 2,
    question: "Quem pode participar?",
    answer: "Jovens entre 14 e 18 anos podem participar como surfistas. Pessoas acima de 18 anos podem participar como marujos ou equipe de apoio."
  },
  {
    id: 3,
    question: "Quanto custa a inscrição?",
    answer: "O valor da inscrição para surfistas é de R$X, que inclui hospedagem, alimentação e todas as atividades. Para marujos e equipe de apoio, consulte a página específica."
  },
  {
    id: 4,
    question: "Quais as formas de pagamento?",
    answer: "Aceitamos pagamento via Pix (imediato) ou você pode optar por pagar diretamente a um responsável posteriormente, com as opções de Pix ou dinheiro."
  },
  {
    id: 5,
    question: "Onde acontece o ONDA 2025?",
    answer: "O ONDA 2025 acontecerá em [Local], um espaço especialmente preparado para oferecer conforto, segurança e a melhor experiência possível."
  },
  {
    id: 6,
    question: "O que levar para o retiro?",
    answer: "Após a inscrição, você receberá um e-mail com a lista completa de itens recomendados. Basicamente, roupas confortáveis, itens de higiene pessoal, toalhas, e muita disposição!"
  }
];

const FaqSection = () => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);
  
  const toggleItem = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };
  
  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-onda-blue">Dúvidas Frequentes</h2>
          <div className="h-1 w-20 bg-onda-teal mx-auto mb-8"></div>
          <p className="text-lg max-w-2xl mx-auto">
            Encontre respostas para as perguntas mais comuns sobre o ONDA 2025.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item) => (
            <div 
              key={item.id} 
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className={`w-full text-left p-5 flex justify-between items-center focus:outline-none transition-colors ${
                  openItemId === item.id ? 'bg-onda-blue text-white' : 'hover:bg-gray-50'
                }`}
                onClick={() => toggleItem(item.id)}
              >
                <h3 className="text-lg font-medium">{item.question}</h3>
                {openItemId === item.id ? 
                  <ChevronUp size={20} /> : 
                  <ChevronDown size={20} />
                }
              </button>
              
              {openItemId === item.id && (
                <div className="p-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Não encontrou o que procura? Entre em contato conosco pelo WhatsApp ou e-mail.
          </p>
          <div className="mt-6">
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank"
              rel="noreferrer"
              className="btn-onda bg-onda-teal inline-flex items-center"
            >
              <span className="mr-2">💬</span> Fale conosco no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
