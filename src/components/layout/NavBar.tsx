
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-onda-blue via-onda-teal to-onda-blue bg-clip-text text-transparent">
            ONDA 2025
          </h1>
          <span className="text-2xl">🌊</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-onda-blue transition-colors">Início</Link>
          <Link to="/about" className="font-medium hover:text-onda-blue transition-colors">O que é ONDA?</Link>
          <Link to="/team" className="font-medium hover:text-onda-blue transition-colors">Marujos & Equipe</Link>
          <Link to="/sponsors" className="font-medium hover:text-onda-blue transition-colors">Patrocinadores</Link>
          <Link to="/faq" className="font-medium hover:text-onda-blue transition-colors">FAQ</Link>
          <Link to="/register" className="btn-onda">Garantir Minha Vaga</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg animate-fade-in">
          <div className="container mx-auto py-4 px-6 flex flex-col space-y-4">
            <Link to="/" className="py-2 font-medium" onClick={toggleMobileMenu}>Início</Link>
            <Link to="/about" className="py-2 font-medium" onClick={toggleMobileMenu}>O que é ONDA?</Link>
            <Link to="/team" className="py-2 font-medium" onClick={toggleMobileMenu}>Marujos & Equipe</Link>
            <Link to="/sponsors" className="py-2 font-medium" onClick={toggleMobileMenu}>Patrocinadores</Link>
            <Link to="/faq" className="py-2 font-medium" onClick={toggleMobileMenu}>FAQ</Link>
            <Link to="/register" className="btn-onda text-center" onClick={toggleMobileMenu}>Garantir Minha Vaga</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
