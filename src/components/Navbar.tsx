import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <img 
      src="https://agroarkafla.com.br/assets/images/agro-arkafla-castro-fazenda-de-agrtonegocios-2000x1079.png" 
      alt="Agro Arkafla Logo" 
      className="h-16 w-auto object-contain"
      referrerPolicy="no-referrer"
    />
  </div>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Quem Somos', href: '/quem-somos' },
    { name: 'Atividades', href: '/atividades' },
    { name: 'Logística', href: '/logistica' },
    { name: 'Contato', href: '/contato' },
  ];

  const textColorClass = (scrolled || !isHome) ? 'text-agri-black' : 'text-white drop-shadow-md';
  const navBgClass = (scrolled || !isHome) ? 'bg-white shadow-md py-2' : 'bg-transparent py-4';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/">
          <Logo className={(scrolled || !isHome) ? 'scale-90 origin-left transition-transform' : ''} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`font-semibold transition-colors hover:text-agri-green ${textColorClass}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/grupo_arkafla/" target="_blank" rel="noreferrer" className={`transition-transform hover:scale-110 ${textColorClass}`}>
              <Instagram size={20} />
            </a>
            <a 
              href="https://api.whatsapp.com/send?phone=5542999586858&text=Olá encontrei seu site no Google gostaria de saber sobre:" 
              target="_blank" 
              rel="noreferrer"
              className="bg-agri-green hover:bg-agri-dark text-white px-5 py-2 rounded-full font-bold flex items-center gap-2 transition-all shadow-lg"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-agri-green p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-agri-black font-bold text-lg border-b border-gray-50 pb-2"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-2">
                <a href="https://www.instagram.com/grupo_arkafla/" target="_blank" rel="noreferrer" className="text-agri-black flex items-center gap-2 font-bold">
                  <Instagram size={20} /> Instagram
                </a>
                <a href="https://api.whatsapp.com/send?phone=5542999586858&text=Olá encontrei seu site no Google gostaria de saber sobre:" target="_blank" rel="noreferrer" className="bg-agri-green text-white px-4 py-2 rounded-full font-bold flex items-center gap-2">
                  <MessageCircle size={18} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
