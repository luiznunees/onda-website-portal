
import { motion } from 'framer-motion';

type Testimonial = {
  id: number;
  name: string;
  age: number;
  year: string;
  quote: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Lucas Silva",
    age: 17,
    year: "2024",
    quote: "ONDA mudou minha vida completamente! Fiz amigos que vou levar para a vida toda e aprendi muito sobre mim mesmo.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Ana Oliveira",
    age: 16,
    year: "2024",
    quote: "Nunca pensei que três dias podiam transformar tanto a minha maneira de ver o mundo. Experiência incrível!",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Gabriel Costa",
    age: 18,
    year: "2023",
    quote: "Participar do ONDA foi a melhor decisão que já tomei. Cada momento foi especial e cheio de significado.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-onda-blue">Depoimentos dos Surfistas</h2>
          <div className="h-1 w-20 bg-onda-teal mx-auto mb-8"></div>
          <p className="text-lg max-w-2xl mx-auto">
            Veja o que dizem os jovens que já viveram essa experiência incrível!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-onda"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.age} anos | ONDA {testimonial.year}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="italic text-gray-600">"{testimonial.quote}"</p>
                </div>
                
                <div className="flex justify-end">
                  <div className="text-2xl text-onda-teal">🌊</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-onda-blue hover:text-onda-blue-dark font-medium transition-colors"
          >
            <span>Ver mais depoimentos</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
