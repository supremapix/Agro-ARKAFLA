import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <img 
      src="https://castro.agroarkafla.com.br/assets/images/agro-arkafla-castro-fazenda-de-agrtonegocios-2000x1079.png" 
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

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Quem Somos', href: '/quem-somos' },
    { name: 'Atividades', href: '/atividades' },
    { name: 'Logística', href: '/logistica' },
    { name: 'Galeria', href: '/galeria' },
    { name: 'Contato', href: '/contato' },
  ];

  const textColorClass = (scrolled || !isHome) ? 'text-agri-black' : 'text-white drop-shadow-md';
  const navBgClass = (scrolled || !isHome) ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-5';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${navBgClass}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="relative z-[60]">
          <Logo className={(scrolled || !isHome || isOpen) ? 'scale-90 origin-left transition-transform duration-500' : 'transition-transform duration-500'} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`font-bold text-sm uppercase tracking-widest transition-all hover:text-agri-green relative group ${textColorClass}`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-agri-green transition-all group-hover:w-full"></span>
            </Link>
          ))}
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/grupo_arkafla/" target="_blank" rel="noreferrer" className={`transition-all hover:scale-110 hover:text-agri-gold ${textColorClass}`}>
              <Instagram size={22} />
            </a>
            <a 
              href="https://api.whatsapp.com/send?phone=5542999586858&text=Olá encontrei seu site no Google gostaria de saber sobre:" 
              target="_blank" 
              rel="noreferrer"
              className="bg-agri-green hover:bg-agri-dark text-white px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest flex items-center gap-2 transition-all shadow-[0_10px_20px_rgba(46,125,50,0.3)] hover:shadow-[0_15px_30px_rgba(46,125,50,0.4)] hover:-translate-y-1"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-[60] text-agri-green p-2 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="relative w-8 h-6">
            <span className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'top-3 rotate-45' : 'top-0'}`}></span>
            <span className={`absolute left-0 top-3 w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'top-3 -rotate-45' : 'top-6'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu - Premium Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-agri-black md:hidden flex flex-col justify-center items-center p-8"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-agri-green rounded-full blur-[120px] -mr-48 -mt-48"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-agri-gold rounded-full blur-[120px] -ml-48 -mb-48"></div>
            </div>

            <div className="flex flex-col items-center gap-8 relative z-10 w-full">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="w-full text-center"
                >
                  <Link 
                    to={link.href} 
                    className="text-white font-black text-4xl uppercase tracking-tighter hover:text-agri-gold transition-colors block py-2"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col items-center gap-6 mt-12 w-full max-w-xs"
              >
                <a 
                  href="https://api.whatsapp.com/send?phone=5542999586858&text=Olá encontrei seu site no Google gostaria de saber sobre:" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full bg-agri-green text-white py-5 rounded-full font-black text-lg flex items-center justify-center gap-3 shadow-2xl"
                >
                  <MessageCircle size={24} /> WhatsApp
                </a>
                <a 
                  href="https://www.instagram.com/grupo_arkafla/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3 text-white font-bold text-xl hover:text-agri-gold transition-colors"
                >
                  <Instagram size={24} /> @grupo_arkafla
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
