
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const AboutSectionContent = () => {
  const [openItem, setOpenItem] = React.useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  const faqs = [
    {
      id: "faq-1",
      question: "1. Quando é o embarque (saída) e o retorno (chegada)?",
      answer: "O embarque será na sexta-feira à noite, 18 de julho de 2025. Os Surfistas, juntamente com seus pais ou responsáveis, devem apresentar-se na Paróquia São Pedro às 18h, pontualmente. De lá, seguirão para o retiro com o transporte fornecido. O retorno será no domingo à noite, 20 de julho de 2025. Os pais/responsáveis deverão estar presentes na Santa Missa das 19h, na Igreja São Pedro em Xangri-lá, onde farão a recepção para seus filhos."
    },
    {
      id: "faq-2",
      question: "2. O que devo levar na bagagem?",
      answer: "Os jovens devem levar apenas o essencial. A bagagem deve conter: Roupa de cama (lençol, travesseiro e cobertor, todos identificados), roupas pessoais confortáveis e simples para três dias, calçados leves e confortáveis, roupa de dormir (pijama fechado ou abrigo), material de higiene pessoal e remédios de uso pessoal e contínuo."
    },
    {
      id: "faq-4",
      question: "4. Qual a importância da pontualidade no embarque?",
      answer: "A pontualidade no embarque é crucial para garantir que todos os participantes cheguem ao retiro juntos e em segurança. Por favor, chegue na Paróquia São Pedro às 18h, pontualmente."
    },
    {
      id: "faq-5",
      question: "5. O que é proibido levar?",
      answer: "É proibido levar: Cadernos, agendas, livros, tablets, jogos, relógios e celulares. Lanches (salgadinhos, bolachas recheadas, chocolates, refrigerantes). Chapinha de cabelo, maquiagem e secador de cabelo."
    },
    {
      id: "faq-6",
      question: "6. Posso levar meu celular?",
      answer: "Não, é proibido levar celulares, tablets e outros dispositivos eletrônicos para garantir uma experiência de imersão completa e desconexão."
    },
    {
      id: "faq-7",
      question: "7. E se eu uso remédios de uso contínuo?",
      answer: "Se você usa remédios de uso contínuo, é importante que seu responsável indique isso na ficha de inscrição. Os tios responsáveis pelo retiro cuidarão dos horários e da administração dos remédios conforme necessário."
    },
    {
      id: "faq-8",
      question: "8. Posso participar do retiro mesmo se não faço catequese ou crisma?",
      answer: "Sim, você pode participar do retiro ONDA 2025 mesmo se não estiver fazendo catequese ou crisma. Todos os jovens são bem-vindos!"
    },
    {
      id: "faq-9",
      question: "9. Há alguma orientação específica sobre as roupas?",
      answer: "Sim, as roupas devem ser confortáveis e simples, evitando transparências e estampas chamativas. A roupa de dormir deve ser um pijama fechado ou abrigo."
    }
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-onda-blue">Sobre o ONDA</h2>
        <div className="h-1 w-20 bg-onda-teal mx-auto mb-8"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <p className="text-lg mb-4">
              O Retiro do ONDA é uma experiência única de encontro com Deus, feita especialmente para adolescentes. 
              Durante três dias intensos, vivemos momentos de oração, palestras, dinâmicas e muitas surpresas, 
              tudo pensado com muito carinho para tocar os corações dos jovens.
            </p>
            <p className="text-lg mb-4">
              A sigla ONDA significa "Objetivo Novo De Apostolado". O nome mostra o nosso desejo de viver 
              a fé de um jeito diferente, jovem, alegre e profundo — como uma verdadeira onda de amor 
              que vem de Jesus e alcança muitos!
            </p>
          </div>

          <Card className="border-onda-teal/20 shadow-md">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4 text-onda-blue">O 4º ONDA de Xangri-lá em 2025</h3>
              <p className="mb-3">
                <strong>Quando:</strong> 18, 19 e 20 de julho de 2025
              </p>
              <p className="mb-3">
                <strong>Para quem:</strong> Jovens de 12 a 14 anos
              </p>
              <p>
                O propósito desse encontro é evangelizar jovens, proporcionando momentos enriquecedores 
                de espiritualidade, aprendizado e convivência fraterna.
              </p>
            </CardContent>
          </Card>

          <Card className="border-onda-teal/20 shadow-md">
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4 text-onda-blue">Organização</h3>
              <p>
                O retiro é organizado e coordenado por uma equipe de "Tios", que na maioria, 
                são pais de Marujos (jovens que já participaram do retiro) e os próprios Marujos, 
                juntamente do coordenador espiritual, Padre Marlon, pároco de Xangri-Lá.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-semibold mb-6 text-onda-blue">Perguntas Frequentes</h3>
          
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Collapsible
                key={faq.id}
                open={openItem === faq.id}
                onOpenChange={() => toggleItem(faq.id)}
                className="border border-gray-200 rounded-md overflow-hidden"
              >
                <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors">
                  <span className="font-medium text-onda-blue">{faq.question}</span>
                  {openItem === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-onda-teal" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-onda-teal" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 bg-white">
                  <p className="text-gray-700">{faq.answer}</p>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>

          <div className="mt-6 bg-onda-blue/5 p-6 rounded-lg border border-onda-blue/20">
            <h3 className="text-xl font-semibold mb-3 text-onda-blue">Entre em contato</h3>
            <p className="mb-2"><strong>Email:</strong> ondaxangrila@gmail.com</p>
            <p><strong>WhatsApp:</strong> +55 (51) 9677-0994</p>
          </div>
        </motion.div>
      </div>

      <div className="mt-16 flex justify-center">
        <img 
          src="/lovable-uploads/13415c44-3b40-4cb7-830f-5731a55832fc.png" 
          alt="ONDA Xangri-lá" 
          className="rounded-lg shadow-xl max-w-full md:max-w-3xl h-auto"
        />
      </div>
    </div>
  );
};

export default AboutSectionContent;
