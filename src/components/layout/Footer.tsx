
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-onda-blue-dark via-onda-blue to-onda-teal text-white">
      <div className="relative overflow-hidden">
        {/* Wave Top */}
        <div className="absolute top-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="fill-white">
            <path d="M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,75C1120,75,1280,53,1360,42.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
        </div>

        <div className="container mx-auto px-6 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Logo & About */}
            <div className="flex flex-col">
              <Link to="/" className="flex items-center space-x-2">
                <h2 className="text-2xl font-bold">ONDA 2025</h2>
                <span className="text-2xl">🌊</span>
              </Link>
              <p className="mt-4 text-white/90">
                Transformando jovens, criando novas amizades e proporcionando a melhor experiência da sua vida!
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-3">
                <li><Link to="/" className="hover:text-onda-yellow transition-colors">Início</Link></li>
                <li><Link to="/about" className="hover:text-onda-yellow transition-colors">O que é ONDA?</Link></li>
                <li><Link to="/team" className="hover:text-onda-yellow transition-colors">Marujos & Equipe</Link></li>
                <li><Link to="/sponsors" className="hover:text-onda-yellow transition-colors">Patrocinadores</Link></li>
                <li><Link to="/faq" className="hover:text-onda-yellow transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <div className="flex items-center mb-3">
                <Mail size={18} className="mr-2" />
                <a href="mailto:contato@onda2025.com" className="hover:text-onda-yellow transition-colors">contato@onda2025.com</a>
              </div>
              <div className="flex items-center mb-6">
                <Phone size={18} className="mr-2" />
                <a href="tel:+5511999999999" className="hover:text-onda-yellow transition-colors">(11) 99999-9999</a>
              </div>
              
              <h3 className="text-xl font-bold mb-3">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-onda-yellow transform hover:scale-110 transition-all">
                  <Instagram />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-onda-yellow transform hover:scale-110 transition-all">
                  <Facebook />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-onda-yellow transform hover:scale-110 transition-all">
                  <Youtube />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-10 pt-6 text-center text-white/70">
            <p>© {new Date().getFullYear()} ONDA 2025. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
