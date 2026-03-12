import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <img 
      src="https://www.agroarkafla.com.br/assets/images/agro-arkafla-castro-fazenda-de-agrtonegocios-2000x1079.png" 
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

  const textColorClass = (scrolled || !isHome) ? 'text-agri-black' : 'text-white';
  const navBgClass = (scrolled || !isHome) ? 'bg-white/80 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.05)] py-3' : 'bg-transparent py-6';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${navBgClass}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="relative z-[60] group">
          <Logo className={(scrolled || !isHome || isOpen) ? 'scale-90 origin-left transition-transform duration-500' : 'transition-transform duration-500'} />
          <div className="absolute -inset-2 bg-agri-green/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 -z-10"></div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`font-bold text-xs uppercase tracking-[0.2em] transition-all hover:text-agri-green relative group py-2 ${textColorClass}`}
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-agri-green transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <div className="flex items-center gap-6 ml-4">
            <a href="https://www.instagram.com/agroarkafla/" target="_blank" rel="noreferrer" className={`transition-all hover:scale-110 hover:text-agri-gold ${textColorClass}`}>
              <Instagram size={20} />
            </a>
            <a 
              href="https://api.whatsapp.com/send?phone=5542999586858&text=Olá! Vi seu site e gostaria de mais informações sobre a Agro Arkafla. (Vindo do Menu)" 
              target="_blank" 
              rel="noreferrer"
              className="bg-agri-green hover:bg-agri-dark text-white px-7 py-3 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2 transition-all shadow-lg hover:shadow-agri-green/20 hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden relative z-[60] p-2 focus:outline-none transition-colors ${isOpen ? 'text-white' : 'text-agri-green'}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="relative w-6 h-5">
            <span className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'top-2 rotate-45' : 'top-0'}`}></span>
            <span className={`absolute left-0 top-2 w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'top-2 -rotate-45' : 'top-4'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu - Premium Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-agri-black md:hidden flex flex-col justify-center items-center p-8 overflow-hidden"
          >
            {/* Background Elements */}
            <motion.div 
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.15 }}
              transition={{ duration: 1 }}
              className="absolute top-0 right-0 w-[150%] aspect-square bg-agri-green rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"
            />
            
            <div className="flex flex-col items-center gap-6 relative z-10 w-full">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.05 }}
                  className="w-full text-center"
                >
                  <Link 
                    to={link.href} 
                    className="text-white font-black text-5xl uppercase tracking-tighter hover:text-agri-gold transition-colors block py-2"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col items-center gap-6 mt-12 w-full max-w-xs"
              >
                <a 
                  href="https://api.whatsapp.com/send?phone=5542999586858&text=Olá! Vi seu site e gostaria de mais informações sobre a Agro Arkafla. (Vindo do Menu Mobile)" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full bg-agri-green text-white py-5 rounded-full font-black text-lg flex items-center justify-center gap-3 shadow-2xl active:scale-95 transition-transform"
                >
                  <MessageCircle size={24} /> WhatsApp
                </a>
                <a 
                  href="https://www.instagram.com/agroarkafla/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-3 text-white/70 font-bold text-lg hover:text-agri-gold transition-colors"
                >
                  <Instagram size={20} /> @agroarkafla
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
